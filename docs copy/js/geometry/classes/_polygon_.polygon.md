# Class: Polygon

## Hierarchy

* Shape

  ↳ **Polygon**

## Constructors

###  constructor

\+ **new Polygon**(`array`: [AnyPoint2D](../modules/_point_.md#anypoint2d)[]): *[Polygon](_polygon_.polygon.md)*

*Defined in [polygon.ts:9](https://github.com/datatorch/geometry.js/blob/89ff6a7/src/polygon.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`array` | [AnyPoint2D](../modules/_point_.md#anypoint2d)[] |

**Returns:** *[Polygon](_polygon_.polygon.md)*

\+ **new Polygon**(`array`: number[]): *[Polygon](_polygon_.polygon.md)*

*Defined in [polygon.ts:11](https://github.com/datatorch/geometry.js/blob/89ff6a7/src/polygon.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`array` | number[] |

**Returns:** *[Polygon](_polygon_.polygon.md)*

## Accessors

###  area

• **get area**(): *number*

*Overrides void*

*Defined in [polygon.ts:59](https://github.com/datatorch/geometry.js/blob/89ff6a7/src/polygon.ts#L59)*

**Returns:** *number*

___

###  bounds

• **get bounds**(): *[Rectangle](_rectangle_.rectangle.md)*

*Overrides void*

*Defined in [polygon.ts:54](https://github.com/datatorch/geometry.js/blob/89ff6a7/src/polygon.ts#L54)*

**Returns:** *[Rectangle](_rectangle_.rectangle.md)*

___

###  firstPoint

• **get firstPoint**(): *[Point2D](_point_.point2d.md) | null*

*Defined in [polygon.ts:46](https://github.com/datatorch/geometry.js/blob/89ff6a7/src/polygon.ts#L46)*

**Returns:** *[Point2D](_point_.point2d.md) | null*

___

###  lastPoint

• **get lastPoint**(): *[Point2D](_point_.point2d.md) | null*

*Defined in [polygon.ts:50](https://github.com/datatorch/geometry.js/blob/89ff6a7/src/polygon.ts#L50)*

**Returns:** *[Point2D](_point_.point2d.md) | null*

___

###  points

• **get points**(): *[Point2D](_point_.point2d.md)[]*

*Defined in [polygon.ts:42](https://github.com/datatorch/geometry.js/blob/89ff6a7/src/polygon.ts#L42)*

**Returns:** *[Point2D](_point_.point2d.md)[]*

## Methods

###  _updateRequired

▸ **_updateRequired**(): *void*

*Defined in [polygon.ts:32](https://github.com/datatorch/geometry.js/blob/89ff6a7/src/polygon.ts#L32)*

**Returns:** *void*

___

###  add

▸ **add**(`point`: [AnyPoint2D](../modules/_point_.md#anypoint2d)): *void*

*Defined in [polygon.ts:37](https://github.com/datatorch/geometry.js/blob/89ff6a7/src/polygon.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`point` | [AnyPoint2D](../modules/_point_.md#anypoint2d) |

**Returns:** *void*

___

###  isEmpty

▸ **isEmpty**(): *boolean*

*Defined in [polygon.ts:73](https://github.com/datatorch/geometry.js/blob/89ff6a7/src/polygon.ts#L73)*

**Returns:** *boolean*

___

###  segmentation

▸ **segmentation**(): *number[]*

*Defined in [polygon.ts:64](https://github.com/datatorch/geometry.js/blob/89ff6a7/src/polygon.ts#L64)*

**Returns:** *number[]*

___

### `Static` getArea

▸ **getArea**(`polygon`: [AnyPoint2D](../modules/_point_.md#anypoint2d)[] | [Polygon](_polygon_.polygon.md), `signed`: boolean): *number*

*Defined in [polygon.ts:77](https://github.com/datatorch/geometry.js/blob/89ff6a7/src/polygon.ts#L77)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`polygon` | [AnyPoint2D](../modules/_point_.md#anypoint2d)[] &#124; [Polygon](_polygon_.polygon.md) | - |
`signed` | boolean | false |

**Returns:** *number*

___

### `Static` getBounds

▸ **getBounds**(`polygon`: [AnyPoint2D](../modules/_point_.md#anypoint2d)[] | [Polygon](_polygon_.polygon.md)): *[Rectangle](_rectangle_.rectangle.md)*

*Defined in [polygon.ts:95](https://github.com/datatorch/geometry.js/blob/89ff6a7/src/polygon.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`polygon` | [AnyPoint2D](../modules/_point_.md#anypoint2d)[] &#124; [Polygon](_polygon_.polygon.md) |

**Returns:** *[Rectangle](_rectangle_.rectangle.md)*

___

### `Static` getCentroid

▸ **getCentroid**(`polygon`: [AnyPoint2D](../modules/_point_.md#anypoint2d)[] | [Polygon](_polygon_.polygon.md)): *[Point2D](_point_.point2d.md)*

*Defined in [polygon.ts:111](https://github.com/datatorch/geometry.js/blob/89ff6a7/src/polygon.ts#L111)*

**Parameters:**

Name | Type |
------ | ------ |
`polygon` | [AnyPoint2D](../modules/_point_.md#anypoint2d)[] &#124; [Polygon](_polygon_.polygon.md) |

**Returns:** *[Point2D](_point_.point2d.md)*
