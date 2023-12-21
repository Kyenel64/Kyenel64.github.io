# Vec4
<div class = "classInfo">
    Released in v0.1.1-alpha / Last updated in v0.1.1-alpha
</div>

## Description
4D vector of floats.

## Properties
| Name | Type    | Description             |
|------|---------|-------------------------|
| `x`  | `float` | x value.                |
| `y`  | `float` | y value.                |
| `z`  | `float` | z value.                |
| `w`  | `float` | w value.                |

## Static Properties
|  Name   | Type    | Description                |
|---------|---------|----------------------------|
| `Zero`  | `Vec4`  | Returns a 4D zero vector.  |

## Constructors
| Name                                        | Description                              |
|---------------------------------------------|------------------------------------------|
| `Vec4 (float value)`                        | Sets all values to the given value.      |
| `Vec4 (float X, float Y, float Z, float W)` | Sets each value.                         |

## Static Methods
| Name                             | Return type   | Description                                                      |
|----------------------------------|---------------|------------------------------------------------------------------|
| `Distance (Vec4 v1, Vec4 v2)`    | `float`       | Distance between two 4D vectors.                                 |
| `Length ()`                      | `float`       | Length of a 4D vector.                                           |

## Overrides
| Name                     | Return type   | Description                                               |
|--------------------------|---------------|-----------------------------------------------------------|
| `+ (Vec4 v1, Vec4 v2)`   | `Vec4`        | Adds two 4D vectors.                                      |
| `+ (Vec4 vec, float s)`  | `Vec4`        | Adds a 4D vector with a scalar.                           |
| `+ (float s, Vec4 vec)`  | `Vec4`        | Adds a scalar value to each value in a 4D vector.         |
| `- (Vec4 v1, Vec4 v2)`   | `Vec4`        | Subtracts v2 from v1.                                     |
| `- (Vec4 vec, float s)`  | `Vec4`        | Subtracts a scalar value from a 4D vector.                |
| `- (float s, Vec4 vec)`  | `Vec4`        | Subtracts each value in a 4D vector by a scalar value.    |
| `* (Vec4 v1, Vec4 v2)`   | `Vec4`        | Multiplies two 4D vectors.                                |
| `* (Vec4 vec, float s)`  | `Vec4`        | Multiplies a 4D vector with a scalar value.               |
| `* (float s, Vec4 vec)`  | `Vec4`        | Multiplies each value in a 4D vector with a scalar value. |
| `/ (Vec4 v1, Vec4 v2)`   | `Vec4`        | Divides v1 by v2.                                         |
| `/ (Vec4 vec, float s)`  | `Vec4`        | Divides a 4D vector by a scalar value.                    |
| `/ (float s, Vec4 vec)`  | `Vec4`        | Divides a scalar value by each value in a 4D vector.      |
| `* (Vec4 vec, Mat4 mat)` | `Vec4`        | Multiplies a 4D vector by a 4x4 matrix.                   |
| `ToString ()`            | `String`      | Prints each value in a 4D vector.                         |