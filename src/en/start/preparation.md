# Preparation

## Start the Map Editor

Launch it via Steam and choose the 4th option `Play MapEditor Alpha (Not Stable)`.

::: tip

Ballex and BME can be launched from local directory. Ensure that:

- Steam is launched and logged in
- The file `steam_appid.txt` with content `1114430` is in the executable directory
- Manually restart Steam if it's started automatically by other tools (for example Steam++ or SteamCommunity302).

:::

## Adjust the Interface

### Change Frame Rate

`Settings → Frame Rate`

### Change Scale Rate

`Settings → Scale Rate`

## Set Ballex Path

`Settings → Set Ballex Path`

It should end in `Ballex.exe`, either stable or beta version. When you enter maptest mode, it will launch automatically.

### Change Layout

Drag to resize or move them. You can maximize, resume or close them, and closed windows can be called out in `Window` menu.

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

Obsolete assets won't be removed automatically. You can right-click and remove them manually.

See: [More → Versioning → Migration Guide](/en/migration/guide.md).

:::
