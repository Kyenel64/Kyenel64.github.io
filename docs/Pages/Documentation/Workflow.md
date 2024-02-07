# Workflow
The workflow for Locus is similar to many other ECS-based engines such as Unity. <br>
Note: Locus does not have a file watching systems so any changes to scripts must be reloaded through the Project > Reload Scripts dropdown, and newly added resources must be rescanned through the Project > Rescan Resources dropdown.

## Entities
Entities are the objects within a scene. They can represent anything from characters to lighting. Under the hood, entities are just containers for components and only holds an ID. By adding components, entities are able to carry out all kinds of functionalities.<br>

All entities contain a unique ID (UUID), a tag, and a transform. 

## Components
Components are what attaches to the entity and gives it functionality. Components contain data that defines the behavior of the entity. Component data can be manipulated through the editor or through scripting.

## Scenes
Scenes make up a collection of entities. This is where the level / environment is built. Scene files contain information about the scene and all entities contained in it. 

## Scripting
Locus uses C# for its scripting system. Scripts are just like any other component and can be attached to any entity. Scripts will operate on the attached entity and a class can be attached to as many entities. <br>
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

        // Optional collision callbacks
        public override void OnCollisionBegin(Entity entity)
        {

        }

        public override void OnCollisionEnd(Entity entity)
        {

        }
    }
}
```
All entity scripts derive from the Entity class and has built-in functions that gets called by the engine. <br>
Scripts do not need to be in a namespace and is primarily used for organization purposes.

## Locus Editor
Each panel in the editor can be reorganized or detached.

### Toolbar
The toolbar contains the main dropdown settings for the application and the runtime buttons for the current scene.

### Viewport
The viewport is where the scene is rendered. There is a toolbar on the top left corner for gizmo operations and editor view settings. 
If an entity with a camera component is selected, it will display a preview in the bottom right corner.

### Scene Hierarchy
The scene hierarchy contains the scene graph of the entities within the active scene. Here you can create, destroy, duplicate entities and search for entity names.

### Properties
The properties panel contains all the components attached to the selected entity. All entities contain the tag component and transform component.
You can add, remove, and copy components here.

### Project Browser
The project browser displays the directory of the active project. The left hand side displays the entire project tree and the right hand side displays the items in the current folder.
You can create new materials by clicking on the plus sign in the top left corner.

### Resource Inspector
The resource inspector panel displays properties of the currently selected resource. 
Here you can modify values or attach textures to materials.

### Console
The console panel displays error messages and a trace for each error. Error messages can be copied, cleared, and filtered.

### Debug
The debug panel is primarily used for backend engine work but can provide useful information about the scene and entities. 
