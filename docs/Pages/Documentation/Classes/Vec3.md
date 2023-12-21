# Vec3
<div class = "classInfo">
    Released in v0.1.1-alpha / Last updated in v0.1.1-alpha
</div>

## Description
3D vector of floats.

## Properties
| Name | Type    | Description             |
|------|---------|-------------------------|
| `x`  | `float` | x value.                |
| `y`  | `float` | y value.                |
| `z`  | `float` | z value.                |

## Static Properties
|  Name   | Type    | Description                |
|---------|---------|----------------------------|
| `Zero`  | `Vec3`  | Returns a 3D zero vector.  |

## Constructors
| Name                               | Description                              |
|------------------------------------|------------------------------------------|
| `Vec3 (float value)`               | Sets all values to the given value.      |
| `Vec3 (float X, float Y, float Z)` | Sets each value.                         |

## Static Methods
| Name                             | Return type   | Description                                                      |
|----------------------------------|---------------|------------------------------------------------------------------|
| `Cross (Vec3 v1, Vec3 v2)`       | `Vec3`        | Cross product of two 3D vectors.                                 |
| `Distance (Vec3 v1, Vec3 v2)`    | `float`       | Distance between two 3D vectors.                                 |
| `Length ()`                      | `float`       | Length of a 3D vector.                                           |

## Overrides
| Name                     | Return type   | Description                                               |
|--------------------------|---------------|-----------------------------------------------------------|
| `+ (Vec3 v1, Vec3 v2)`   | `Vec3`        | Adds two 3D vectors.                                      |
| `+ (Vec3 vec, float s)`  | `Vec3`        | Adds a 3D vector with a scalar.                           |
| `+ (float s, Vec3 vec)`  | `Vec3`        | Adds a scalar value to each value in a 3D vector.         |
| `- (Vec3 v1, Vec3 v2)`   | `Vec3`        | Subtracts v2 from v1.                                     |
| `- (Vec3 vec, float s)`  | `Vec3`        | Subtracts a scalar value from a 3D vector.                |
| `- (float s, Vec3 vec)`  | `Vec3`        | Subtracts each value in a 3D vector by a scalar value.    |
| `* (Vec3 v1, Vec3 v2)`   | `Vec3`        | Multiplies two 3D vectors.                                |
| `* (Vec3 vec, float s)`  | `Vec3`        | Multiplies a 3D vector with a scalar value.               |
| `* (float s, Vec3 vec)`  | `Vec3`        | Multiplies each value in a 3D vector with a scalar value. |
| `/ (Vec3 v1, Vec3 v2)`   | `Vec3`        | Divides v1 by v2.                                         |
| `/ (Vec3 vec, float s)`  | `Vec3`        | Divides a 3D vector by a scalar value.                    |
| `/ (float s, Vec3 vec)`  | `Vec3`        | Divides a scalar value by each value in a 3D vector.      |
| `* (Vec3 vec, Mat4 mat)` | `Vec3`        | Multiplies a 3D vector by a 4x4 matrix.                   |
| `ToString ()`            | `String`      | Prints each value in a 3D vector.                         |