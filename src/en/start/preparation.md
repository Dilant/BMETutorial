# Preparation

## Start the Map Editor

Double click `Ballex MapEditor.exe` or `Ballex MapEditor.app`. Ensure that:

- Steam is launched and logged in
- The file `steam_appid.txt` with content `1114430` is in the executable directory

::: tip

Ballex can run in parallel with map editor. In fact, you can use the same method to launch `Ballex.exe` or `Ballex.app`.

:::

::: warning

You should manually restart Steam if tools (for example Steam++) have automatically started it.

:::

## Adjust the Interface

### Change Frame Rate

`Settings → Frame Rate`

### Change DPI Scale Rate

`Settings → Scale Rate`

### Change Layout

Drag to resize or move them. You can maximize, resume or close them, and closed windows can be called out in `Window` menu.

## Set Ballex Path

`Settings → Set Ballex Path`

It should end in `Ballex.exe`, either stable or beta version. When you enter maptest mode, it will launch automatically.

## Windows

### `Scene`

Show the map graphically. Most operations are done here.

### `Inspector`

View and change parameters of selected objects.

### `Hierarchy`

List all objects with their hierarchical relationships.

::: tip

Display order doesn't indicate internal order.

:::

### `Project`

Display all assets and maps in the project.

## Manage Projects

`File → Manage Projects`

It arms you when, for example, you want to make a series of maps. But under most circumstances, it's enough to only use the default project `NewProject` .

**Retain at least one project** so as to avoid any problems.

::: tip

In this tutorial, everything is based on the default project `NewProject`.

:::

## Import Assets

`File → Import Assets`

Unimported assets are shown here. For most cases, just `Import` them all and see in `Project` window.

::: warning

Obsolete assets won't be removed automatically. You can right click and remove them manually.

See: [More → Versioning → Migration Guide](/en/migration/guide.md).

:::
