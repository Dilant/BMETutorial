# Rail Concatenating

The recommendation for beginners are:

- Compose straight iron rails out of [adjustable objects](/en/glossary/adjustable-object.md)
- Arcs and helixes are made out of curves with a delta of 1 in radius
- No vertical rails
- Avoid misalignment, disconnection and clips at where the rails meet

::: tip

In order to prevent potential misuse, the start section won't include any content regarding single rails.

Due to the 20rad/s angular velocity cap on all of the objects in Ballex, vertical rails are not recommended. Vertical helixes are **highly** discouraged.

:::

## Horizontal Double Rail

- `10_AdjustableRoad → [A]DoubleRail` will serve you well
- `length` parameter determines the length of rail. Click `generate` to generate the rail
- You can switch to `10_AdjustableRoad → [A]DoubleRailNoAlign` if both sides of this piece are connected to other rails, the same below

::: tip

Assets in `03_IronRail → 1_Straight` are deprecated.

:::

## Double Rail Slope

- Only 15°, 30° or 45° slopes are recommended
- According to the angle of the slope, select `RC_15_R100`, `RC_30_R100` or `RC_45_R100` from `03_IronRail → 2_Circle`. Use that as the beginning of your slopes. (Henceforth referred to as cohesive rail)
- Rotate `10_AdjustableRoad → [A]DoubleRail` accordingly to the slope
- To concatenate other objects, add appropriate cohesive rail at the end of the slope

## Double Rail Arc and Helix

- Pick two rails out of `03_IronRail → 2_Circle` `03_IronRail → 3_Helix`, which has the same degree and shear height `H`, and 100 in figure apart from each other in `R`, as inner and outer rail respectively
- Setting `scaleZ = -1` will flip a helix to its opposite direction

## Guard Rail

`10_AdjustableRoad → [A]GuardRail` `10_AdjustableRoad → [A]GuardRailL` will serve you well.

::: tip

Assets in `03_IronRail → 5_GuardRail` are deprecated.

:::

## Dealing with Missing Face

Get a `10_AdjustableRoad → [A]DoubleRail`, set it to really short in length (e.g. 0.001), then attach to the end of rail as the missing face.

## Clipping and Flickering

As a beginner, forking a rail is not recommended. If you made an attempt to attach multiple rails at the end of one specific rail, you may notice the overlapping part will flicker.

In order to compensate for that, put a small amount of translation (e.g. ±0.001) on either `Y` direction on either overlapping rail will fix that.
