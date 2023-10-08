# Vec3
Released in v0.1.1-alpha <br>

## Description
3D floating point vector class used for 3D and 2D position and vector operations.
Contains static methods for common vector math operations. <br>

## Properties
| Name | Type    | Description             |
|------|---------|-------------------------|
| `x`  | `float` | The x coordinate value. |
| `y`  | `float` | The y coordinate value. |
| `z`  | `float` | The z coordinate value. |

## Static Properties
|  Name   | Type    | Description                |
|---------|---------|----------------------------|
| `Zero`  | `Vec3`  | A zero vector.             |

## Constructors
| Name                             | Description                              |
|----------------------------------|------------------------------------------|
| `Vec3 (float value)`               | Sets all coordinates to the given value. |
| `Vec3 (float X, float Y, float Z)` | Sets each respective coordinate.         |

## Public Methods
| Name                             | Return type   | Description                                                      |
|----------------------------------|---------------|------------------------------------------------------------------|
| `Length ()`                      | `float`       | Length of the vector.                                            |


## Static Methods
| Name                             | Return type   | Description                                                      |
|----------------------------------|---------------|------------------------------------------------------------------|
| `Cross (Vec3 v1, Vec3 v2)`       | `Vec3`        | Cross product between two vectors.                               |
| `Distance (Vec3 v1, Vec3 v2)`    | `float`       | Distance between two 3D vectors.                                 |
| `Lerp (Vec3 a, Vec3 b, float t)` | `Vec3`        | Linearly interpolates between two 3D vectors at a given point t. |