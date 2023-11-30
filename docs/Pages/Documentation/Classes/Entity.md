# Entity
<div class = "classInfo">
    Released in v0.1.1-alpha / Last updated in v0.1.1-alpha
</div>

## Description
Base class for all entities.

## Properties
| Name        | Type                 | Description                                     |
|-------------|----------------------|-------------------------------------------------|
| `ID`        | `ulong`              | UUID of the entity.                             |
| `Tag`       | `string`             | Name of the entity.                             |
| `Enabled`   | `bool`               | The enabled status of the entity.               |
| `Transform` | `TransformComponent` | The transform component attached to the entity. |
| `Scene`     | `Scene`              | The scene that contains the entity.             |

## Public Methods
| Name                 | Return type | Description                                                               |
|----------------------|-------------|---------------------------------------------------------------------------|
| `GetComponent<T> ()` | `T`         | Gets the component `T` attached to the entity. Returns null if not found. |
| `HasComponent<T> ()` | `bool`      | Checks if entity has component `T`                                        |
| `AddComponent<T> ()` | `T`         | Adds component `T` to the entity.                                         |

## Static Methods
| Name                                         | Return type | Description                                                                   |
|----------------------------------------------|-------------|-------------------------------------------------------------------------------|
| `CreateEntity (string tag = “Empty Entity”)` | `Entity`    | Creates an empty entity. Optionally sets the tag of the newly created entity. |
| `Find (string tag)`                          | `Entity`    | Searches for an entity with the given tag.                                    |