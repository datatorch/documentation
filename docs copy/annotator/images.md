---
id: annotator-images
title: Images
---

# Annotating Images

## Tagging

Assigning an image to multiple or a single label from a fixed list.

## Segmentation

An annotated pixel in an image which can belong to a single or multiples labels.
It is often used to label images for applications that require high accuracy.
The output is a mask that outlines the shape of the object in the image.

## Bounding Box

Create boxes around important objects in an image

### Rotated Bounding Box

## Points

### Circles

### Landmarks

### Keypoints

Keypoints specify a list of points of interest, connections between those
points, where those points are within the segmentation, and whether the points
are visible.

To using the keypoints tool you put first specify the names and skeleton of your
keypoints in the metadata of the label.

#### Adding Keypoints

1. Go to the label which will contain the metadata for keypoints.
2. Select the label and click the edit icon.
3. Expand the `more` options section
4. Add the COCO json keypoints metadata. The keypoints skeleton on the person
   label in the COCO dataset is shown below.
5. The keypoints tool in the annotator will use the `keypoints` and `skeleton`
   to guide you though the process of annotating. The name of the keypoints is
   shown in text. Once the skeleton is complete the annotation will be created.

::: details COCO Person Keypoints Metadata Example

```json
{
  "keypoints": [
    "nose",
    "left_eye",
    "right_eye",
    "left_ear",
    "right_ear",
    "left_shoulder",
    "right_shoulder",
    "left_elbow",
    "right_elbow",
    "left_wrist",
    "right_wrist",
    "left_hip",
    "right_hip",
    "left_knee",
    "right_knee",
    "left_ankle",
    "right_ankle"
  ],
  "skeleton": [
    [16, 14],
    [14, 12],
    [17, 15],
    [15, 13],
    [12, 13],
    [6, 12],
    [7, 13],
    [6, 7],
    [6, 8],
    [7, 9],
    [8, 10],
    [9, 11],
    [2, 3],
    [1, 2],
    [1, 3],
    [2, 4],
    [3, 5],
    [4, 6],
    [5, 7]
  ]
}
```

:::

## Paths

## 3D Cuboid

## OCR
