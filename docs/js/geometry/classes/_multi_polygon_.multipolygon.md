# Class: MultiPolygon

## Hierarchy

* **MultiPolygon**

## Constructors

###  constructor

\+ **new MultiPolygon**(`polygons`: [AnyPoint2D](../modules/_point_.md#anypoint2d)[][]): *[MultiPolygon](_multi_polygon_.multipolygon.md)*

*Defined in [multi-polygon.ts:9](https://github.com/datatorch/geometry.js/blob/1f79f7e/src/multi-polygon.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`polygons` | [AnyPoint2D](../modules/_point_.md#anypoint2d)[][] |

**Returns:** *[MultiPolygon](_multi_polygon_.multipolygon.md)*

## Accessors

###  area

• **get area**(): *number*

*Defined in [multi-polygon.ts:17](https://github.com/datatorch/geometry.js/blob/1f79f7e/src/multi-polygon.ts#L17)*

**Returns:** *number*

___

###  bounds

• **get bounds**(): *[Rectangle](_rectangle_.rectangle.md)‹›*

*Defined in [multi-polygon.ts:22](https://github.com/datatorch/geometry.js/blob/1f79f7e/src/multi-polygon.ts#L22)*

**Returns:** *[Rectangle](_rectangle_.rectangle.md)‹›*

## Methods

###  segmentation

▸ **segmentation**(): *number[][]*

*Defined in [multi-polygon.ts:28](https://github.com/datatorch/geometry.js/blob/1f79f7e/src/multi-polygon.ts#L28)*

**Returns:** *number[][]*

___

### `Static` getArea

▸ **getArea**(`polygons`: [Point2D](_point_.point2d.md)‹› | object | [number, number][] | [Polygon](_polygon_.polygon.md)‹›[]): *number*

*Defined in [multi-polygon.ts:32](https://github.com/datatorch/geometry.js/blob/1f79f7e/src/multi-polygon.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`polygons` | [Point2D](_point_.point2d.md)‹› &#124; object &#124; [number, number][] &#124; [Polygon](_polygon_.polygon.md)‹›[] |

**Returns:** *number*

___

### `Static` getBounds

▸ **getBounds**(`polygons`: [Point2D](_point_.point2d.md)‹› | object | [number, number][] | [Polygon](_polygon_.polygon.md)‹›[]): *[Rectangle](_rectangle_.rectangle.md)*

*Defined in [multi-polygon.ts:40](https://github.com/datatorch/geometry.js/blob/1f79f7e/src/multi-polygon.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`polygons` | [Point2D](_point_.point2d.md)‹› &#124; object &#124; [number, number][] &#124; [Polygon](_polygon_.polygon.md)‹›[] |

**Returns:** *[Rectangle](_rectangle_.rectangle.md)*
