# Basic Operation

## Create Level Info

`Create → Create Level Info`

First things first. Remember to always do this **instantly** after creating a new map, to avoid any weird thing happen. [Scene of accident](/en/faq/#weather-or-initial-ball-type-doesn-t-match-the-settings-during-maptest)

See how to fill it in [here](/en/glossary/assets-in-menu.md#level-info).

## Save

`File → Save Scene` / `Ctrl + S`

Saved maps will appear in `Project` window and can be double-clicked to open.

::: tip

The saving path on disk is:

- Win: `%USERPROFILE%\AppData\LocalLow\MushREB\Ballex MapEditor\NewProject\Assets\`
- Mac: `~/Library/Application Support/com.MushREB.BallexMapEditor/NewProject/Assets/`

`.rtscene` `.rtscene.rtmeta` `.rtscene.rtview` three files for one map. **In general cases, don't manipulate them directly.** [Scene of accident](/en/faq/#assets-are-imported-but-not-showing-up)

:::

## Add Object

Find the needed item in `Project` window and drag it into `Scene` window. You'll see it in `Hierarchy` window at the end of the list, and you can change its position, posture or other parameters in `Inspector` window.

Now you can place any object you want -- and know that much more convenient ways of adjusting an object will be introduced later.

## Undo and Redo

`Ctrl + Z` `Ctrl + Y`, also #1 #2 buttons of toolbar.

But don't rely on them, and always make a backup before making breaking changes.

~~I just can't bear the level editor of _ADOFAI_ or _Rhythm Doctor_~~

## Adjusting View

### Translation

`MouseWheel` / `MouseRight` and drag

### Rotation

`Alt + MouseLeft` and drag

### Zoom

`MouseScroll`

::: tip

`MouseWheel` means clicking / holding the middle button, while `MouseScroll` means scrolling it.

:::

### Focus

`F`

The view will automatically change to focus on the selected object, and current position is set as the base point of view.

::: tip

All view adjustments are relative to the aforementioned point. Try to focus and change it if it's hard to change the view.

:::

### Three Views

Click the arrows of the coordinate axis.

### Toggle Perspective / Orthogonal View

Current view (`Persp` / `Ortho`) is shown under the coordinate axis, and can be clicked to toggle. Orthogonal view excels at fine-tuning layouts.

## Adjusting Object

### Spectator Mode

`Q`, also #3 button of toolbar.

You can't select or make any change to objects ~~to avoid misoperations~~. It's not used often.

### Moving Mode

`W`, also #4 button of toolbar.

Drag the arrows to move an object in corresponding directions, or drag the plane symbols to move it in corresponding planes.

### Rotation Mode

`E`, also #5 button of toolbar.

Drag the colored arcs to rotate an object in corresponding planes, or drag the white arc to rotate it in the projection plane, or drag the surface to ~~let it go~~ rotate it freely.

### Scaling Mode

`R`, also #6 button of toolbar.

Drag the handles to scale an object in corresponding directions. The opposite direction means mirroring.

::: warning

For fixed objects, there's no need to scale them in most cases. For machinery, most of them behave improperly when scaled. So, don't scale an object unless there's no other way.

:::

### Quantization

`Ctrl`, hold to enable and release to disable.

When enabled, the units of move, rotate and scale operations are 1 absolutely, 15° absolutely and 10% relatively, correspondingly.

## Multi-select

In `Scene` window: Hold `Shift` and select each object, or hold `MouseLeft` and box-select.
In `Hierarchy` window: Use `Ctrl` `Shift` in common sense.

::: tip

In `Scene` window, the selection field is judged in orthogonal view, and an object is selected if **any part of it** is in the field.

[Orthogonal](#toggle-perspective-orthogonal-view) and [overlook](#three-views) view will come in handy if you don't want to select any unneeded object.

:::

## Duplicate Object

`Ctrl + D`

A copy will be created at the same position, named `(Clone)` in `Hierarchy` window at the end of the list.

Sorry but there's no `Ctrl + X` `Ctrl + C` `Ctrl + V`.

## Delete Object

`Delete`

## Create Save Point and Destination

`Create → SavePoints`

Note that **save points must be activated in order, then destination**.

See: [Glossary → Assets in Menu → Save Point and Destination](/en/glossary/assets-in-menu.md#save-point-and-destination)

## Map Testing

`File → Test Map`

Ballex will launch automatically and enter maptest mode if you've [set Ballex path](/en/start/preparation.md#set-ballex-path) correctly.

::: tip

Destination can't be activated in maptest mode.

[Here](/en/start/map-testing.md) is a checklist for reference if you've finished your map and are doing final tests.

:::

### Current Position

`Coord. (x, y, z)` shows the coordinate of player ball center.

Be aware of the [coordinate axis](/en/start/preparation.md#coordinate-system). (e.g. the gravity applies opposite to `Y` axis)

### Jump to Next Section

`Ctrl + P`

### Flying

`Ctrl + G`, press to toggle.

When enabled, the player ball is not affected by gravity. ~~But can be trolled by constant acceleration fields~~

Use `W` to go up and `S` down. (Can't change now)

### Screenshot

`Ctrl + C`

You can change `CameraDistance`, `CameraAltitude`, `CameraFOV`, `CameraYaw`, `CameraPitch` and `CameraRoll`. The screenshot is 1920×1080 in `.jpg` format and saved at:

- Win: `%USERPROFILE%\AppData\LocalLow\MushREB\Ballex\ScreenShots`
- Mac: `~/Library/Application Support/com.MushREB.Ballex/ScreenShots`

### Auto Backup

A `.bpk` backup file is generated before every maptest and can be used for rescue:

- Win: `%USERPROFILE%\AppData\LocalLow\MushREB\Ballex MapEditor\Maps\`
- Mac: `~/Library/Application Support/com.MushREB.BallexMapEditor/Maps/`
