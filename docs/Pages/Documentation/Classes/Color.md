# Color
<div class = "classInfo">
    Released in v0.1.1-alpha / Last updated in v0.1.1-alpha
</div>

## Description
Represents a color in RGBA format with range 0 - 1.

## Properties
| Name | Type    | Description                   |
|------|---------|-------------------------------|
| `r`  | `float` | Red channel.                  |
| `g`  | `float` | Green channel.                |
| `b`  | `float` | Blue channel.                 |
| `a`  | `float` | Alpha channel.                |

## Static Properties
|  Name     | Type     | Description                 |
|-----------|----------|-----------------------------|
| `Black`   | `Color`  | Returns a black color.      |
| `White`   | `Color`  | Returns a white color.      |
| `Red`     | `Color`  | Returns a red color.        |
| `Green`   | `Color`  | Returns a green color.      |
| `Blue`    | `Color`  | Returns a blue color.       |
| `Yellow`  | `Color`  | Returns a yellow color.     |

## Constructors
| Name                                         | Description                                           |
|----------------------------------------------|-------------------------------------------------------|
| `Color (float value)`                        | Sets the RGB channels to the value with alpha = 1.0f. |
| `Color (float R, float G, float B)`          | Sets each RGB channels with alpha = 1.0f.             |
| `Color (float R, float G, float B, float A)` | Sets each RGBA channels.                              |

## Overrides
| Name                       | Return type    | Description                                               |
|----------------------------|----------------|-----------------------------------------------------------|
| `+ (Color c1, Color c2)`   | `Color`        | Adds two colors.                                          |
| `+ (Color col, float s)`   | `Color`        | Adds a color with a scalar.                               |
| `+ (float s, Color col)`   | `Color`        | Adds a scalar value to each channel in a color.           |
| `- (Color c1, Color c2)`   | `Color`        | Subtracts c2 from c1.                                     |
| `- (Color col, float s)`   | `Color`        | Subtracts a scalar value from a color.                    |
| `- (float s, Color col)`   | `Color`        | Subtracts each channel in a color by a scalar value.      |
| `* (Color c1, Color c2)`   | `Color`        | Multiplies two colors.                                    |
| `* (Color col, float s)`   | `Color`        | Multiplies a color with a scalar value.                   |
| `* (float s, Color col)`   | `Color`        | Multiplies each channel in a color with a scalar value.   |
| `/ (Color c1, Color c2)`   | `Color`        | Divides c1 by c2.                                         |
| `/ (Color col, float s)`   | `Color`        | Divides a color by a scalar value.                        |
| `/ (float s, Color col)`   | `Color`        | Divides a scalar value by each channel in a color.        |
| `ToString ()`              | `String`       | Prints each channel in a color.                           |