# Workflow
The workflow for Locus is similar to many other ECS-based engines such as Unity.
There are still a lot of systems that needs to be implemented for a complete workflow. 
I will continute to update this page whenever new systems are integrated.

## Entities
Entities are the objects within a scene. They can represent anything from characters to lighting. Under the hood, entities are just containers for components and only holds an ID. By adding components, entities are able to carry out all kinds of functionalities.<br>

All entities contain a unique ID, a tag, and a transform. 

## Components
Components are attached to entities and gives it functionality. Components contain data that defines the behavior of the entity. Component data can be manipulated through the editor or through scripting.

## Scenes
Scenes make up a collection of entities. This is where the level / environment is built. Scene files contain information about the scene and all entities contained in it. 

## Scripting
Locus uses C# for its scripting system. Scripts are just like any other component and can be attached to any entity. Scripts will operate on the attached entity and a single script can be attached to as many entities. <br>
Public properties are displayed in the editor and can be manipulated directly from the editor. <br>

A newly created script for a Player class will look something like this
```
using System;
using Locus;

namespace Sandbox
{
    public class Player : Entity
    {
        void OnCreate()
        {

        }

        void OnUpdate(float deltaTime)
        {

        }
    }
}
```
All entity scripts derive from the Entity class and has built-in functions that gets called by the engine. <br>
Scripts do not need to be in a namespace and is primarily used for organization purposes.


## Locus Editor