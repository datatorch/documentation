---
id: helm-charts
title: Helm Charts
---

<CenteredImage src="/helm.png" width="25%" />

# Helm Charts

DataTorch uses Helm 3 when deploying to a kubernetes cluster. This provided a
simple package manager to handle all of the required services and pods along
with easier configuration and updates. For instructions on installing Helm,
checkout the [official documentation](https://helm.sh/docs/intro/install/).

If you would like more information about the DataTorch Helm Charts checkout the
[official charts repository](https://github.com/datatorch/helm-charts).

## Installing Chart

1. Add DataTorch repository to Helm
   ```bash
   helm repo add datatorch https://charts.datatorch.io
   ```
2. Use `scripts/kub-redcred.sh` to create the secret required to pull the docker
   images. You must have the `gcrpull.json` located in the same directory.
3. Create a copy of the `datatorch/values.yaml` and update the FQDN, database
   connection and licencing information.
4. Deploy the instance using `helm install`
   ```bash
   helm install my-release datatorch/datatorch -f values.yaml
   ```
   This will create a release with the name `my-release`.

::: warning
It not recommend to run a PostgreSQL database in your kubernetes
cluster as the additional levels of abstract may be difficult for debugging
performance metrics.
:::

## Uninstall

To uninstall/delete the `my-release` deployment:

```bash
helm delete my-release
```

The command will remove all kubernetes components associated with the chart and
deletes the release.

::: warning
Helm does not remove PVC or PV from you cluster when running the uninstall
command. This is to protect your data from accidental deletion. These will
need to removed manually.
:::

## SSL with NGINX and Cert-Manager

By default the DataTorch helm chart ships with the NGINX ingress. If you have
disabled this chart, you many need to modify these steps to point towards your
ingress.

1. Clone the [official charts
   repository](https://github.com/datatorch/helm-charts) to access the scripts
   required.
2. Install cert-manager
   ```bash
   sh ssl/install-certmanager.sh
   ```
3. Create the issuers in kubernetes
   ```bash
   kubectl apply -f ssl/issuer-prod.yaml
   kubectl apply -f ssl/issuer-staging.yaml
   ```
4. Add the annotations and TLS to the ingress found in the `values.yaml`.
   Replace `HOST_DOMAIN` with the domain where the instance will be accessible
   (e.g annotator.example.com).
   ```yaml
   ingress:
     host: HOST_DOMAIN
     annotations:
       # ... other annotations
       cert-manager.io/issuer: 'letsencrypt-prod'
       cert-manager.io/acme-challenge-type: http01
     tls:
       - secretName: datatorch-tls
         hosts:
           - HOST_DOMAIN
   ```
5. Install or upgrade your instance using Helm

## Azure AKS

If you have not done so already login into Azure CI:

```bash
az login
```

Create an Azure AKS using Azure CI:

```bash
az extension add --name aks-preview
az aks create \
   --name datatorch-cluster \
   --resource-group datatorch-resource-group \
   --node-resource-group datatorch-aks \
   --generate-ssh-keys
```

Checkout the AKS [create
command](https://docs.microsoft.com/en-us/cli/azure/aks?view=azure-cli-latest#az-aks-create)
for more options.

Once your instance is created you can connection thought your `kubectl` client
and deploy using the Helm instructions above.

Connect your `kubectl` client using the following command:

```bash
az aks get-credentials \
  --resource-group datatorch-resource-group \
  --name datatorch-cluster
```

### Connection Pooling

If you are using a managed postgres instance provided by azure it is recommend
to setup the [microsoft
pgbouncer](https://hub.docker.com/_/microsoft-azure-oss-db-tools-pgbouncer-sidecar)
to significantly reduce connection delay.

You can add the volumes and containers suggested to the `backend` section of the
`values.yaml`.

::: details Show values.yaml example

```yaml
backend:
  # ... other config options
  extraContainers:
    - name: azure-pgbouncer-sidecar
      image: mcr.microsoft.com/azure-oss-db-tools/pgbouncer-sidecar:latest
      # Uncomment below if you always want the latest version
      # imagePullPolicy: Always
      ports:
        - containerPort: 5432
      volumeMounts:
        - name: configfiles
          mountPath: '/etc/pgbouncer'
          # writes update the secret, we do not want to do this
          readOnly: true
      livenessProbe:
        tcpSocket:
          # This must match the port your applications use to talk to postgres
          port: 5432
        periodSeconds: 60
      lifecycle:
        preStop:
          exec:
            command: ['/bin/sh', '-c', 'killall -INT pgbouncer && sleep 120']
      securityContext:
        allowPrivilegeEscalation: false
        capabilities:
          drop: ['all']
  extraVolumes:
    - name: configfiles
      secret:
        # This must match the name of your secret above
        secretName: azure-pgbouncer-config
```

:::
