# Tube

`09_Tube`

Contains wooden, plastic and ice tube components.

Properties:

- Fixed object.
- Wooden tubes are not transparent, plastic ones are transparent, and ice ones are slightly transparent (with poor visibility).
- Ice tubes don't block laser.
- Paperball can be stuck in the tube, so be cautious to use such design.

::: tip

Assets marked with \* are in [Adjustable Assets](/en/glossary/adjustable-object.md) chapter.

Ice straight tube `T_IceScaleableTube` can be scaled along `Y` axis to use. Ice tube components don't come along with rings `T_IceTubeRing`, and you can add them manually.

There's no 3-way skew adapter now. The entry is retained for future edition.

:::

Categorized based on usage:

|                  | Icy                  | Plastic              | Wooden              |
| ---------------- | -------------------- | -------------------- | ------------------- |
| Straight         | `T_IceScaleableTube` | `[A]TransTube` \*    | `[A]WoodTube` \*    |
| 1-way (terminal) | `T_IceTube0x`        | `T_TransTube0x`      | `T_WoodTube0x`      |
| 2-way (arc)      | `T_IceTubeCorner`    | `T_TransTubeCorner`  | `T_WoodTubeCorner`  |
| 2-way (L)        | `T_IceTube2x`        | `T_TransTube2x`      | `T_WoodTube2x`      |
| 3-way (T)        | `T_IceTube3x`        | `T_TransTube3x`      | `T_WoodTube3x`      |
| 3-way (skew)     |                      |                      |                     |
| 4-way (cross)    | `T_IceTube4xTypeA`   | `T_TransTube4xTypeA` | `T_WoodTube4xTypeA` |
| 4-way (saddle)   | `T_IceTube4xTypeB`   | `T_TransTube4xTypeB` | `T_WoodTube4xTypeB` |
| 5-way            | `T_IceTube5x`        | `T_TransTube5x`      | `T_WoodTube5x`      |
| 6-way            | `T_IceTube6x`        | `T_TransTube6x`      | `T_WoodTube6x`      |
| Ring             | `T_IceTubeRing`      | built-in             | built-in            |
