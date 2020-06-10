# Class: Curve

## Hierarchy

* **Curve**

## Methods

### `Static` getArea

▸ **getArea**(`v`: [CurveValues](../modules/_cruve_.md#curvevalues)): *number*

*Defined in [cruve.ts:39](https://github.com/datatorch/geometry.js/blob/1f79f7e/src/cruve.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | [CurveValues](../modules/_cruve_.md#curvevalues) |

**Returns:** *number*

___

### `Static` toArray

▸ **toArray**(`s1`: [Segment](_segment_.segment.md), `s2`: [Segment](_segment_.segment.md), `ignoreHandles`: boolean): *[CurveValues](../modules/_cruve_.md#curvevalues)*

*Defined in [cruve.ts:21](https://github.com/datatorch/geometry.js/blob/1f79f7e/src/cruve.ts#L21)*

Returns array in simple format for easier mathematical manipulation

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`s1` | [Segment](_segment_.segment.md) | - | first segment |
`s2` | [Segment](_segment_.segment.md) | - | second segment |
`ignoreHandles` | boolean | false | remove handles between the points  |

**Returns:** *[CurveValues](../modules/_cruve_.md#curvevalues)*
