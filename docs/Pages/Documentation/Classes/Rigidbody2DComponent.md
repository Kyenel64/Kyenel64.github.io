# Rigidbody2DComponent
<div class = "classInfo">
    Released in v0.1.1-alpha / Last updated in v0.1.1-alpha <br>
    Derives from <a href="../Component">Component</a>
</div>

## Description
The 2D physics body. 

## Properties
| Name             | Type            | Description                                                             |
|------------------|-----------------|-------------------------------------------------------------------------|
| `BodyType`       | `RigidbodyType` | The physical behaviour of the rigidbody. Static, Dynamic, or Kinematic. |
| `Mass`           | `float`         | Mass of the body.                                                       |
| `GravityScale`   | `float`         | The speed of the entity's movement affected by gravity.                 |
| `LinearDamping`  | `float`         | The rate at which the world velocity is reduced on the entity.          |
| `AngularDamping` | `float`         | The rate at which the angular velocity is reduced on the entity.        |
| `FixedRotation`  | `bool`          | Whether the entity can rotate. Constraint along the z-axis.             |
| `IsBullet`       | `bool`          | Whether to enable continuous collision detection. This prevents fast moving dynamic bodies clipping through other dynamic bodies. |
| `Position`       | `Vec2`          | Position of the rigidbody. <br> Note: Position cannot be set through the transform component if a rigidbody is attached. |
| `Velocity`       | `Vec2`          | Velocity of the rigidbody.                                              |

## Public Methods
| Name                              | Return type | Description                                                        |
|-----------------------------------|-------------|--------------------------------------------------------------------|
| `AddForce (Vec2 force)`           | `void`      | Adds a force to the rigidbody.                                     |
| `AddLinearImpulse (Vec2 impulse)` | `void`      | Adds an impluse to the rigidbody. Equal to the change in momentum. |