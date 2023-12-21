# Vec2
<div class = "classInfo">
    Released in v0.1.1-alpha / Last updated in v0.1.1-alpha
</div>

## Description
2D vector of floats.

## Properties
| Name | Type    | Description             |
|------|---------|-------------------------|
| `x`  | `float` | x value.                |
| `y`  | `float` | y value.                |

## Static Properties
|  Name   | Type    | Description                |
|---------|---------|----------------------------|
| `Zero`  | `Vec2`  | Returns a 2D zero vector.  |

## Constructors
| Name                               | Description                              |
|------------------------------------|------------------------------------------|
| `Vec2 (float value)`               | Sets all values to the given value.      |
| `Vec2 (float X, float Y)`          | Sets each value.                         |

## Static Methods
| Name                             | Return type   | Description                                                      |
|----------------------------------|---------------|------------------------------------------------------------------|
| `Distance (Vec2 v1, Vec2 v2)`    | `float`       | Distance between two 2D vectors.                                 |
| `Length ()`                      | `float`       | Length of a 2D vector.                                           |

## Overrides
| Name                     | Return type   | Description                                               |
|--------------------------|---------------|-----------------------------------------------------------|
| `+ (Vec2 v1, Vec2 v2)`   | `Vec2`        | Adds two 2D vectors.                                      |
| `+ (Vec2 vec, float s)`  | `Vec2`        | Adds a 2D vector with a scalar.                           |
| `+ (float s, Vec2 vec)`  | `Vec2`        | Adds a scalar value to each value in a 2D vector.         |
| `- (Vec2 v1, Vec2 v2)`   | `Vec2`        | Subtracts v2 from v1.                                     |
| `- (Vec2 vec, float s)`  | `Vec2`        | Subtracts a scalar value from a 2D vector.                |
| `- (float s, Vec2 vec)`  | `Vec2`        | Subtracts each value in a 2D vector by a scalar value.    |
| `* (Vec2 v1, Vec2 v2)`   | `Vec2`        | Multiplies two 2D vectors.                                |
| `* (Vec2 vec, float s)`  | `Vec2`        | Multiplies a 2D vector with a scalar value.               |
| `* (float s, Vec2 vec)`  | `Vec2`        | Multiplies each value in a 2D vector with a scalar value. |
| `/ (Vec2 v1, Vec2 v2)`   | `Vec2`        | Divides v1 by v2.                                         |
| `/ (Vec2 vec, float s)`  | `Vec2`        | Divides a 2D vector by a scalar value.                    |
| `/ (float s, Vec2 vec)`  | `Vec2`        | Divides a scalar value by each value in a 2D vector.      |
| `ToString ()`            | `String`      | Prints each value in a 2D vector.                         |