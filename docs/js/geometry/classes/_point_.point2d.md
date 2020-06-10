[@datatorch/geometry](../README.md) › [Globals](../globals.md) › ["point"](../modules/_point_.md) › [Point2D](_point_.point2d.md)

# Class: Point2D

**`name`** Point2D

## Hierarchy

* [Point](_point_.point.md)

  ↳ **Point2D**

## Index

### Constructors

* [constructor](_point_.point2d.md#constructor)

### Properties

* [x](_point_.point2d.md#x)
* [y](_point_.point2d.md#y)

### Accessors

* [angle](_point_.point2d.md#angle)
* [angleRadians](_point_.point2d.md#angleradians)
* [length](_point_.point2d.md#length)
* [quadrant](_point_.point2d.md#quadrant)

### Methods

* [add](_point_.point2d.md#add)
* [clone](_point_.point2d.md#clone)
* [cross](_point_.point2d.md#cross)
* [divide](_point_.point2d.md#divide)
* [dot](_point_.point2d.md#dot)
* [equals](_point_.point2d.md#equals)
* [getDistance](_point_.point2d.md#getdistance)
* [isClose](_point_.point2d.md#isclose)
* [modulo](_point_.point2d.md#modulo)
* [multiply](_point_.point2d.md#multiply)
* [rotate](_point_.point2d.md#rotate)
* [subtract](_point_.point2d.md#subtract)
* [toString](_point_.point2d.md#tostring)
* [max](_point_.point2d.md#static-max)
* [min](_point_.point2d.md#static-min)
* [zero](_point_.point2d.md#static-zero)

## Constructors

###  constructor

\+ **new Point2D**(): *[Point2D](_point_.point2d.md)*

*Defined in [point.ts:26](https://github.com/datatorch/geometry.js/blob/a13f60d/src/point.ts#L26)*

Creates an empty Point object.

**`example`** 
```js
// Create a point at x: 10, y: 5
const point = new Point();
console.log(point.x); // { x: 0, y: 0 }
```

**Returns:** *[Point2D](_point_.point2d.md)*

\+ **new Point2D**(`scalar`: number): *[Point2D](_point_.point2d.md)*

*Defined in [point.ts:38](https://github.com/datatorch/geometry.js/blob/a13f60d/src/point.ts#L38)*

Creates a Point object with a x and y value of scalar

**`example`** 
```js
const point = new Point(5)
console.log(point) // { x: 5, y: 5 }
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`scalar` | number | the scalar value  |

**Returns:** *[Point2D](_point_.point2d.md)*

\+ **new Point2D**(`x`: number, `y`: number): *[Point2D](_point_.point2d.md)*

*Defined in [point.ts:51](https://github.com/datatorch/geometry.js/blob/a13f60d/src/point.ts#L51)*

Creates a Point object with the given x and y coordinates.

**`example`** 
```js
// Create a point at x: 10, y: 5
const point = new Point(10, 5);
console.log(point.x); // 10
console.log(point.y); // 5
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`x` | number | the x coordinate |
`y` | number | the y coordinate  |

**Returns:** *[Point2D](_point_.point2d.md)*

\+ **new Point2D**(`point`: [AnyPoint2D](../modules/_point_.md#anypoint2d)): *[Point2D](_point_.point2d.md)*

*Defined in [point.ts:67](https://github.com/datatorch/geometry.js/blob/a13f60d/src/point.ts#L67)*

Creates a Point object using the properties in the given object.

**`example`** 
```js
// Creating a point using an array literal:

var point = new Point([10, 20]);
console.log(point.x); // 10
console.log(point.y); // 20
```

**`example`** 
```js
// Creating a point at x: 10, y: 20 using an object literal:

var point = new Point({
    x: 10,
    y: 20
});
console.log(point.x); // 10
console.log(point.y); // 20
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`point` | [AnyPoint2D](../modules/_point_.md#anypoint2d) | the object describing the point's properties  |

**Returns:** *[Point2D](_point_.point2d.md)*

## Properties

###  x

• **x**: *number* = 0

*Defined in [point.ts:21](https://github.com/datatorch/geometry.js/blob/a13f60d/src/point.ts#L21)*

The x coordinate of the point

___

###  y

• **y**: *number* = 0

*Defined in [point.ts:26](https://github.com/datatorch/geometry.js/blob/a13f60d/src/point.ts#L26)*

The y coordinate of the point

## Accessors

###  angle

• **get angle**(): *number*

*Defined in [point.ts:148](https://github.com/datatorch/geometry.js/blob/a13f60d/src/point.ts#L148)*

The vector's angle in degrees, measured from the x-axis to the vector.

**`readonly`** 

**Returns:** *number*

___

###  angleRadians

• **get angleRadians**(): *number*

*Defined in [point.ts:139](https://github.com/datatorch/geometry.js/blob/a13f60d/src/point.ts#L139)*

The vector's angle in radians, measured from the x-axis to the vector.

**`readonly`** 

**Returns:** *number*

___

###  length

• **get length**(): *number*

*Defined in [point.ts:158](https://github.com/datatorch/geometry.js/blob/a13f60d/src/point.ts#L158)*

The length of the vector that is represented by this point's coordinates.
Each point can be interpreted as a vector that points from the origin (`x =
0`, `y = 0`) to the point's location. Setting the length changes the
location but keeps the vector's angle.

**Returns:** *number*

• **set length**(`length`: number): *void*

*Defined in [point.ts:162](https://github.com/datatorch/geometry.js/blob/a13f60d/src/point.ts#L162)*

The length of the vector that is represented by this point's coordinates.
Each point can be interpreted as a vector that points from the origin (`x =
0`, `y = 0`) to the point's location. Setting the length changes the
location but keeps the vector's angle.

**Parameters:**

Name | Type |
------ | ------ |
`length` | number |

**Returns:** *void*

___

###  quadrant

• **get quadrant**(): *1 | 2 | 3 | 4*

*Defined in [point.ts:206](https://github.com/datatorch/geometry.js/blob/a13f60d/src/point.ts#L206)*

The quadrant of the {@link #angle} of the point.

Angles between 0 and 90 degrees are in quadrant `1`. Angles between 90 and
180 degrees are in quadrant `2`, angles between 180 and 270 degrees are in
quadrant `3` and angles between 270 and 360 degrees are in quadrant `4`.

**`example`** 
```js
const point = new Point(1, 1);
console.log(point.quadrant); // 1
```

**`readonly`** 

**Returns:** *1 | 2 | 3 | 4*

## Methods

###  add

▸ **add**(`point`: [AnyPoint2D](../modules/_point_.md#anypoint2d) | number): *[Point2D](_point_.point2d.md)‹›*

*Defined in [point.ts:246](https://github.com/datatorch/geometry.js/blob/a13f60d/src/point.ts#L246)*

Returns the addition of the supplied point to the point as a new point. The
object itself is not modified!

**`example`** 
```js
const point1 = new Point(5, 10);
const point2 = new Point(10, 20);
const result = point1.add(point2);
console.log(result); // {x: 15, y: 30}
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`point` | [AnyPoint2D](../modules/_point_.md#anypoint2d) &#124; number | the point to add |

**Returns:** *[Point2D](_point_.point2d.md)‹›*

the addition of the two points as a new point

___

###  clone

▸ **clone**(): *[Point2D](_point_.point2d.md)‹›*

*Defined in [point.ts:187](https://github.com/datatorch/geometry.js/blob/a13f60d/src/point.ts#L187)*

Returns a copy of the point.

**`example`** 
```js
var point1 = new Point();
var point2 = point1;
point2.x = 1; // also changes point1.x

var point2 = point1.clone();
point2.x = 1; // doesn't change point1.x
```

**Returns:** *[Point2D](_point_.point2d.md)‹›*

the cloned point

___

###  cross

▸ **cross**(`point`: [AnyPoint2D](../modules/_point_.md#anypoint2d) | number): *number*

*Defined in [point.ts:316](https://github.com/datatorch/geometry.js/blob/a13f60d/src/point.ts#L316)*

Returns the cross product of the point and another point.

**Parameters:**

Name | Type |
------ | ------ |
`point` | [AnyPoint2D](../modules/_point_.md#anypoint2d) &#124; number |

**Returns:** *number*

the cross product of the two points

___

###  divide

▸ **divide**(`point`: [AnyPoint2D](../modules/_point_.md#anypoint2d) | number): *[Point2D](_point_.point2d.md)‹›*

*Defined in [point.ts:294](https://github.com/datatorch/geometry.js/blob/a13f60d/src/point.ts#L294)*

Returns the division of the supplied point to the point as a new point. The
object itself is not modified!

**`example`** 
```js
const firstPoint = new Point(8, 10);
const secondPoint = new Point(2, 5);
const result = firstPoint.divide(secondPoint);
console.log(result); // {x: 4, y: 2}
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`point` | [AnyPoint2D](../modules/_point_.md#anypoint2d) &#124; number | the point to divide by |

**Returns:** *[Point2D](_point_.point2d.md)‹›*

the division of the two points as a new point

___

###  dot

▸ **dot**(`point`: [AnyPoint2D](../modules/_point_.md#anypoint2d) | number): *number*

*Defined in [point.ts:305](https://github.com/datatorch/geometry.js/blob/a13f60d/src/point.ts#L305)*

Returns the dot product of the point and another point.

**Parameters:**

Name | Type |
------ | ------ |
`point` | [AnyPoint2D](../modules/_point_.md#anypoint2d) &#124; number |

**Returns:** *number*

the dot product of the two points

___

###  equals

▸ **equals**(`point`: [AnyPoint2D](../modules/_point_.md#anypoint2d)): *boolean*

*Defined in [point.ts:351](https://github.com/datatorch/geometry.js/blob/a13f60d/src/point.ts#L351)*

Checks whether the coordinates of the point are equal to that of the
supplied point.

**`example`** 
```js
var point = new Point(5, 10);
console.log(point == new Point(5, 10)); // true
console.log(point == new Point(1, 1)); // false
console.log(point != new Point(1, 1)); // true
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`point` | [AnyPoint2D](../modules/_point_.md#anypoint2d) | point to compare |

**Returns:** *boolean*

@true if the points are equal

___

###  getDistance

▸ **getDistance**(`point`: [AnyPoint2D](../modules/_point_.md#anypoint2d)): *[Point2D](_point_.point2d.md)*

*Defined in [point.ts:224](https://github.com/datatorch/geometry.js/blob/a13f60d/src/point.ts#L224)*

Returns the distance between the point and another point.

**`example`** 
```js
const point = new Point(1, 0)
const distance = point1.getDistance({ x: 2, y: 0})
console.log(distance.length) // 1
console.log(distance) // { x: 1, y: 0 }
```

**Parameters:**

Name | Type |
------ | ------ |
`point` | [AnyPoint2D](../modules/_point_.md#anypoint2d) |

**Returns:** *[Point2D](_point_.point2d.md)*

point representing the distance

___

###  isClose

▸ **isClose**(`point`: [Point2D](_point_.point2d.md), `tolerance`: number): *Boolean*

*Defined in [point.ts:363](https://github.com/datatorch/geometry.js/blob/a13f60d/src/point.ts#L363)*

Checks if the point is within a given distance of another point.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`point` | [Point2D](_point_.point2d.md) | the point to check against |
`tolerance` | number | the maximum distance allowed |

**Returns:** *Boolean*

@true if it is within the given distance

___

###  modulo

▸ **modulo**(`point`: [AnyPoint2D](../modules/_point_.md#anypoint2d) | number): *[Point2D](_point_.point2d.md)‹›*

*Defined in [point.ts:274](https://github.com/datatorch/geometry.js/blob/a13f60d/src/point.ts#L274)*

**Parameters:**

Name | Type |
------ | ------ |
`point` | [AnyPoint2D](../modules/_point_.md#anypoint2d) &#124; number |

**Returns:** *[Point2D](_point_.point2d.md)‹›*

___

###  multiply

▸ **multiply**(`point`: [AnyPoint2D](../modules/_point_.md#anypoint2d) | number): *[Point2D](_point_.point2d.md)‹›*

*Defined in [point.ts:269](https://github.com/datatorch/geometry.js/blob/a13f60d/src/point.ts#L269)*

**Parameters:**

Name | Type |
------ | ------ |
`point` | [AnyPoint2D](../modules/_point_.md#anypoint2d) &#124; number |

**Returns:** *[Point2D](_point_.point2d.md)‹›*

___

###  rotate

▸ **rotate**(`angle`: number, `center?`: [Point2D](_point_.point2d.md)): *[Point2D](_point_.point2d.md)*

*Defined in [point.ts:321](https://github.com/datatorch/geometry.js/blob/a13f60d/src/point.ts#L321)*

**Parameters:**

Name | Type |
------ | ------ |
`angle` | number |
`center?` | [Point2D](_point_.point2d.md) |

**Returns:** *[Point2D](_point_.point2d.md)*

___

###  subtract

▸ **subtract**(`point`: [AnyPoint2D](../modules/_point_.md#anypoint2d) | number): *[Point2D](_point_.point2d.md)‹›*

*Defined in [point.ts:264](https://github.com/datatorch/geometry.js/blob/a13f60d/src/point.ts#L264)*

Returns the subtraction of the supplied point to the point as a new point.

**`example`** 
```js
const point = new Point(10, 20);
const result = point.subtract({ x: 5, y: 10 });
console.log(result); // {x: 5, y: 10}
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`point` | [AnyPoint2D](../modules/_point_.md#anypoint2d) &#124; number | the number to subtract |

**Returns:** *[Point2D](_point_.point2d.md)‹›*

the subtraction of the point and the value as a new point

___

###  toString

▸ **toString**(): *string*

*Defined in [point.ts:168](https://github.com/datatorch/geometry.js/blob/a13f60d/src/point.ts#L168)*

**Returns:** *string*

___

### `Static` max

▸ **max**(`a`: [Point2D](_point_.point2d.md), `b`: [Point2D](_point_.point2d.md)): *[Point2D](_point_.point2d.md)‹›*

*Defined in [point.ts:428](https://github.com/datatorch/geometry.js/blob/a13f60d/src/point.ts#L428)*

Returns a new point object with the largest {@link #x} and {@link #y} of
the supplied points.

**`static`** 

**`example`** 
```js
const point1 = new Point(10, 100);
var point2 = new Point(200, 5);
var maxPoint = Point.max(point1, point2);
console.log(maxPoint); // {x: 200, y: 100}
```

**`example`** 
```js
// Find the maximum of multiple points:
var point1 = new Point(60, 100);
var point2 = new Point(200, 5);
var point3 = new Point(250, 35);
[point1, point2, point3].reduce(Point.max) // {x: 250, y: 100}
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Point2D](_point_.point2d.md) |
`b` | [Point2D](_point_.point2d.md) |

**Returns:** *[Point2D](_point_.point2d.md)‹›*

the newly created point object

___

### `Static` min

▸ **min**(`a`: [Point2D](_point_.point2d.md), `b`: [Point2D](_point_.point2d.md)): *[Point2D](_point_.point2d.md)‹›*

*Defined in [point.ts:398](https://github.com/datatorch/geometry.js/blob/a13f60d/src/point.ts#L398)*

Returns a new point object with the smallest {@link #x} and {@link #y} of
the supplied points.

**`static`** 

**`example`** 
```js
const point1 = new Point(10, 100);
const point2 = new Point(200, 5);
const minPoint = Point.min(point1, point2);
console.log(minPoint); // {x: 10, y: 5}
```

**`example`** 
```js
// Find the minimum of multiple points:
var point1 = new Point(60, 100);
var point2 = new Point(200, 5);
var point3 = new Point(250, 35);
[point1, point2, point3].reduce(Point.min) // {x: 60, y: 5}
```

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Point2D](_point_.point2d.md) |
`b` | [Point2D](_point_.point2d.md) |

**Returns:** *[Point2D](_point_.point2d.md)‹›*

the newly created point object

___

### `Static` zero

▸ **zero**(): *[Point2D](_point_.point2d.md)*

*Defined in [point.ts:368](https://github.com/datatorch/geometry.js/blob/a13f60d/src/point.ts#L368)*

**Returns:** *[Point2D](_point_.point2d.md)*
