# TransformComponent
<div class = "classInfo">
    Released in v0.1.1-alpha / Last updated in v0.1.1-alpha <br>
    Derives from <a href="../Component">Component</a>
</div>

## Description
Position, rotation, and scale of the entity.

## Properties
| Name             | Type   | Description                                                  |
|------------------|--------|--------------------------------------------------------------|
| `LocalTransform` | `Mat4` | Local transform matrix of the entity relative to its parent. |
| `WorldTransform` | `Mat4` | World transform matrix of the entity relative to the scene.  |
| `WorldToLocal`   | `Mat4` | Matrix to convert world space coordinates to local space.    |
| `Position`       | `Vec3` | Local position of the entity.                                |
| `EulerRotation`  | `Vec3` | Local euler rotation of the entity in degrees.               |
| `Scale`          | `Vec3` | Local scale of the entity.                                   |