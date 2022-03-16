# Monitoring

In this section we will look at the tools built into DataTorch for monitoring
the instance.

## PostgreSQL

Postgre stores majority of the persistance data such as Annotations, user
accounts, file locations and projects.

## Redis

DataTorch using redis mostly for caching, although it so is also used as a
message queue for the distributed task system.

### Metrics

#### Memory Usage

Total number of bytes allocated by Redis using its allocator (either standard
libc, jemalloc, or an alternative allocator such as tcmalloc).

#### Peak Memory Usage

Peak memory consumed by Redis (in bytes).

#### RSS Memory Usage

Number of bytes that Redis allocated as seen by the operating system (a.k.a
resident set size).

#### Total System Memory

The total amount of memory that the Redis host has.

#### Fragment Ratio

Ratio between used rss memory and used memory.

Tracking fragmentation ratio is important for understanding your Redis
instance's performance. A fragmentation ratio greater than 1 indicates
fragmentation is occurring. A ratio in excess of 1.5 indicates excessive
fragmentation, with your Redis instance consuming 150% of the physical memory it
requested.
