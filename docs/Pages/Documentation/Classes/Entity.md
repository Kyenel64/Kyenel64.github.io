# Entity
<div class = "classInfo">
    Released in v0.1.1-alpha / Last updated in v0.1.1-alpha
</div>

## Description
Base class for all entities.

## Properties
| Name        | Type                 | Description                                       |
|-------------|----------------------|---------------------------------------------------|
| `ID`        | `ulong`              | The unique identifier for the entity. (read only) |
| `Tag`       | `string`             | Name of the entity.                               |
| `Group`     | `string`             | The group/layer of the entity.                    |
| `Enabled`   | `bool`               | The enabled state of the entity.                  |
| `Transform` | `TransformComponent` | The transform component attached to the entity.   |

## Static Properties
|  Name   | Type      | Description                         |
|---------|-----------|-------------------------------------|
| `Null`  | `Entity`  | Returns a null entity with ID = 0.  |

## Constructors
| Name                               | Description                              |
|------------------------------------|------------------------------------------|
| `Entity ()`                        | Creates an entity with ID = 0.           |

## Public Methods
| Name                 | Return type | Description                                                                                         |
|----------------------|-------------|-----------------------------------------------------------------------------------------------------|
| `HasComponent<T> ()` | `bool`      | Returns true if entity has component T.                                                             |
| `GetComponent<T> ()` | `T`         | Gets the component T attached to the entity. Returns null if entity does not contain the component. |
| `AddComponent<T> ()` | `T`         | Adds component T to the entity                                                                      |

## Static Methods
| Name                                         | Return type | Description                                                                   |
|----------------------------------------------|-------------|-------------------------------------------------------------------------------|
| `CreateEntity (string tag = “Empty Entity”)` | `Entity`    | Creates a new entity. Optionally defines the tag of the entity.               |
| `Destroy (Entity entity)`                    | `void`      | Destroys an entity.                                                           |
| `Find (string tag)`                          | `Entity`    | Searches and returns an entity by tag. Returns null if entity is not found.   |

## Collision Callbacks
| Name                                         | Return type | Description                                                                   |
|----------------------------------------------|-------------|-------------------------------------------------------------------------------|
| `OnCollisionBegin (Entity entity)`           | `void`      | Called whenever the entity begins a collision with another entity.            |
| `OnCollisionEnd (Entity entity)`             | `void`      | Called whenever the entity ends a collision with another entity.              |