# Class: Rectangle

## Hierarchy

* Shape

  ↳ **Rectangle**

## Constructors

###  constructor

\+ **new Rectangle**(): *[Rectangle](_rectangle_.rectangle.md)*

*Defined in [rectangle.ts:10](https://github.com/datatorch/geometry.js/blob/1f79f7e/src/rectangle.ts#L10)*

**Returns:** *[Rectangle](_rectangle_.rectangle.md)*

\+ **new Rectangle**(`points`: object): *[Rectangle](_rectangle_.rectangle.md)*

*Defined in [rectangle.ts:12](https://github.com/datatorch/geometry.js/blob/1f79f7e/src/rectangle.ts#L12)*

**Parameters:**

▪ **points**: *object*

Name | Type |
------ | ------ |
`from` | [AnyPoint2D](../modules/_point_.md#anypoint2d) |
`to` | [AnyPoint2D](../modules/_point_.md#anypoint2d) |

**Returns:** *[Rectangle](_rectangle_.rectangle.md)*

\+ **new Rectangle**(`x`: number, `y`: number, `width`: number, `height`: number): *[Rectangle](_rectangle_.rectangle.md)*

*Defined in [rectangle.ts:13](https://github.com/datatorch/geometry.js/blob/1f79f7e/src/rectangle.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |
`width` | number |
`height` | number |

**Returns:** *[Rectangle](_rectangle_.rectangle.md)*

## Properties

###  height

• **height**: *number* = 0

*Defined in [rectangle.ts:10](https://github.com/datatorch/geometry.js/blob/1f79f7e/src/rectangle.ts#L10)*

___

###  width

• **width**: *number* = 0

*Defined in [rectangle.ts:9](https://github.com/datatorch/geometry.js/blob/1f79f7e/src/rectangle.ts#L9)*

___

###  x

• **x**: *number* = 0

*Defined in [rectangle.ts:7](https://github.com/datatorch/geometry.js/blob/1f79f7e/src/rectangle.ts#L7)*

___

###  y

• **y**: *number* = 0

*Defined in [rectangle.ts:8](https://github.com/datatorch/geometry.js/blob/1f79f7e/src/rectangle.ts#L8)*

## Accessors

###  area

• **get area**(): *number*

*Overrides void*

*Defined in [rectangle.ts:50](https://github.com/datatorch/geometry.js/blob/1f79f7e/src/rectangle.ts#L50)*

**Returns:** *number*

___

###  bottomLeft

• **get bottomLeft**(): *[Point2D](_point_.point2d.md)*

*Defined in [rectangle.ts:70](https://github.com/datatorch/geometry.js/blob/1f79f7e/src/rectangle.ts#L70)*

The bottom-left point of the rectangle.

**Returns:** *[Point2D](_point_.point2d.md)*

bottom-lef point

___

###  bottomRight

• **get bottomRight**(): *[Point2D](_point_.point2d.md)*

*Defined in [rectangle.ts:86](https://github.com/datatorch/geometry.js/blob/1f79f7e/src/rectangle.ts#L86)*

The bottom-right point of the rectangle.

**Returns:** *[Point2D](_point_.point2d.md)*

bottom-right point

___

###  bounds

• **get bounds**(): *[Rectangle](_rectangle_.rectangle.md)*

*Overrides void*

*Defined in [rectangle.ts:54](https://github.com/datatorch/geometry.js/blob/1f79f7e/src/rectangle.ts#L54)*

**Returns:** *[Rectangle](_rectangle_.rectangle.md)*

___

###  topLeft

• **get topLeft**(): *[Point2D](_point_.point2d.md)*

*Defined in [rectangle.ts:62](https://github.com/datatorch/geometry.js/blob/1f79f7e/src/rectangle.ts#L62)*

The top-left point of the rectangle.

**Returns:** *[Point2D](_point_.point2d.md)*

top-left point

___

###  topRight

• **get topRight**(): *[Point2D](_point_.point2d.md)*

*Defined in [rectangle.ts:78](https://github.com/datatorch/geometry.js/blob/1f79f7e/src/rectangle.ts#L78)*

The top-right point of the rectangle.

**Returns:** *[Point2D](_point_.point2d.md)*

top-right point

___

###  xywh

• **get xywh**(): *[number, number, number, number]*

*Defined in [rectangle.ts:90](https://github.com/datatorch/geometry.js/blob/1f79f7e/src/rectangle.ts#L90)*

**Returns:** *[number, number, number, number]*

___

###  xyxy

• **get xyxy**(): *[number, number, number, number]*

*Defined in [rectangle.ts:94](https://github.com/datatorch/geometry.js/blob/1f79f7e/src/rectangle.ts#L94)*

**Returns:** *[number, number, number, number]*

## Methods

###  contains

▸ **contains**(`a`: [Point2D](_point_.point2d.md)): *boolean*

*Defined in [rectangle.ts:117](https://github.com/datatorch/geometry.js/blob/1f79f7e/src/rectangle.ts#L117)*

Tests if the specified point is inside the boundary of the rectangle.

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Point2D](_point_.point2d.md) |

**Returns:** *boolean*

@true if the point is inside the rectangle's boundary

▸ **contains**(`a`: [Rectangle](_rectangle_.rectangle.md)): *boolean*

*Defined in [rectangle.ts:126](https://github.com/datatorch/geometry.js/blob/1f79f7e/src/rectangle.ts#L126)*

Tests if the interior of the rectangle entirely contains the specified
rectangle.

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Rectangle](_rectangle_.rectangle.md) |

**Returns:** *boolean*

@true if the rectangle entirely contains the specified rectangle

___

###  include

▸ **include**(`point`: [Point2D](_point_.point2d.md)): *[Rectangle](_rectangle_.rectangle.md)*

*Defined in [rectangle.ts:165](https://github.com/datatorch/geometry.js/blob/1f79f7e/src/rectangle.ts#L165)*

Adds a point to this rectangle. The resulting rectangle is the smallest
rectangle that contains both the original rectangle and the specified
point.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`point` | [Point2D](_point_.point2d.md) | point to be included |

**Returns:** *[Rectangle](_rectangle_.rectangle.md)*

the smallest rectangle that contains both the original rectangle
and the specified point

___

###  polygon

▸ **polygon**(): *[Polygon](_polygon_.polygon.md)*

*Defined in [rectangle.ts:98](https://github.com/datatorch/geometry.js/blob/1f79f7e/src/rectangle.ts#L98)*

**Returns:** *[Polygon](_polygon_.polygon.md)*

___

###  segmentation

▸ **segmentation**(): *number[]*

*Defined in [rectangle.ts:107](https://github.com/datatorch/geometry.js/blob/1f79f7e/src/rectangle.ts#L107)*

**Returns:** *number[]*

___

###  unite

▸ **unite**(`rect`: [Rectangle](_rectangle_.rectangle.md)): *[Rectangle](_rectangle_.rectangle.md)*

*Defined in [rectangle.ts:147](https://github.com/datatorch/geometry.js/blob/1f79f7e/src/rectangle.ts#L147)*

Returns a new rectangle representing the union of this rectangle with the
specified rectangle.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`rect` | [Rectangle](_rectangle_.rectangle.md) | the rectangle to be combined with this rectangle |

**Returns:** *[Rectangle](_rectangle_.rectangle.md)*

the smallest rectangle containing both the specified rectangle and
this rectangle
