# Road Concatenating

The recommendation for beginners are:

- Compose straight roads out of [adjustable objects](/en/glossary/adjustable-object.md)
- Compose perpendicular corners and flat-to-concave adapters out of [corner creators](/en/glossary/stone-road.md#单格路块拼接件)
- Avoid misalignment, disconnection and clips at where the road blocks meet
- Keep borders of road blocks intact and tidy

::: tip

It's worth mentioning that, considering the connections between objects, there's no need to insist on snapping everything on grid. We _have_ ways to do this, which may be far beyond your comprehension.

:::

## Straight Road

- Use `10_AdjustableRoad → [A]StoneTwoSides` for flat roads
- Use `10_AdjustableRoad → [A]StoneTwoSidesConcave` for concave roads
- Use `10_AdjustableRoad → [A]StoneLargeConcave` for wide concave roads
- Set its `length` and click `generate` to generate it
- Set appropriate `height` and check `fullUVLength` to generate slopes

::: tip

Most assets in `04_StoneRoad → 3_TwoSides` `04_StoneRoad → 4_Concave` `04_StoneRoad → 5_LargeConcave` are deprecated.

:::

## Adapter

- Use `04_StoneRoad → 4_Concave → SC_Ends2` as flat-to-concave adapters
- Use `04_StoneRoad → 5_LargeConcave → SCTS_toTwoSides` as flat-to-wide-concave adapters
- Use `04_StoneRoad → 5_LargeConcave → SCTS_toConcave` as concave-to-wide-concave adapters

::: tip

Sometimes you can pick `CornerCreator2_3` `CornerCreator2_5` `CornerCreator3_2` `CornerCreator3_5` out of `04_StoneRoad → 10_CornerCreator` as a flat-to-concave adapter to keep a consistent style.
See: [Walkthrough of _<ruby>Respect from the All<rt>四方来朝</rt></ruby>_](https://www.bilibili.com/video/BV1554y1Y7YB)

:::

## Terminal

- Use `04_StoneRoad → 3_TwoSides → STS_Ends` to close flat roads
- Use `04_StoneRoad → 4_Concave → SC_Ends1` to close concave roads
- There's no terminal for wide concave roads, see [corner](#Corner) for solutions
- Another scheme using [corner creators](/en/glossary/stone-road.md#单格路块拼接件) is provided at [corner](#Corner) part
- You may use a terminal or not when connecting to other objects (e.g. rails, machinery, wooden boards, texture blocks)

## Corner

- Pick 4 items as a group out of `04_StoneRoad → 10_CornerCreator` to create corners for flat or concave road
- Use assets in `04_StoneRoad → 6_CrossRoad` to create corners for wide concave road
- The following table lists needed items under simple circumstances (_italic_ `SCS_0_1` is in `04_StoneRoad → 1_Construct → 2_LargeConcaveSide`)

|                  | Flat                                                                                    | Concave                                                                                 | Wide concave                                                              |
| ---------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| 1-way (terminal) | `CornerCreator2_1`<br/>`CornerCreator3_1`<br/>`CornerCreator4_1`<br/>`CornerCreator4_1` | `CornerCreator2_3`<br/>`CornerCreator3_2`<br/>`CornerCreator4_5`<br/>`CornerCreator4_5` | `SCR_ConcaveSideRoadOuter`<br/>`SCR_ConcaveSideRoadOuter`<br/>_`SCS_0_1`_ |
| 2-way (L)        | `CornerCreator2_1`<br/>`CornerCreator3_1`<br/>`CornerCreator4_1`<br/>`CornerCreator5_1` | `CornerCreator2_3`<br/>`CornerCreator3_2`<br/>`CornerCreator4_5`<br/>`CornerCreator5_4` | `SCR_TwoRoadsConcaveTwoSides`                                             |
| 3-way (T)        | `CornerCreator2_1`<br/>`CornerCreator3_1`<br/>`CornerCreator5_1`<br/>`CornerCreator5_1` | `CornerCreator2_3`<br/>`CornerCreator3_2`<br/>`CornerCreator5_4`<br/>`CornerCreator5_4` | `SCR_ThreeRoadsConcaveTwoSides`                                           |
| 4-way (cross)    | `CornerCreator5_1`<br/>`CornerCreator5_1`<br/>`CornerCreator5_1`<br/>`CornerCreator5_1` | `CornerCreator5_4`<br/>`CornerCreator5_4`<br/>`CornerCreator5_4`<br/>`CornerCreator5_4` | `SCR_FourRoadsConcaveTwoSides`                                            |

::: tip

Most assets in `04_StoneRoad → 6_CrossRoad` are deprecated.

:::

## Road Arc and Helix

- Pick and use items in `04_StoneRoad → 7_Helix` `04_StoneRoad → 8_Circle`
- Setting `scaleZ = -1` will flip a helix to its opposite direction

In order to create more complex road curves, [subdividing-adjustable objects](/en/glossary/adjustable-object.md) are required, which will be introduced in [advanced](/en/advanced/) section.

## Dealing with Missing Face

- You won't encounter this (except for arcs and helixes) if aforementioned guidelines are strictly followed
- Use `04_StoneRoad → 1_Construct → 1_Cap → SO_8` to close flat roads
- Use `04_StoneRoad → 1_Construct → 1_Cap → SO_7` to close concave roads
- Use `04_StoneRoad → 1_Construct → 1_Cap → SO_10` to close wide concave roads

## Concatenating Large Road Blocks

As a beginner, using large road blocks is not recommended.

For large flat blocks:

- Use `04_StoneRoad → 1_Construct → 4_OneSide → SOS_Ends` as corners
- Use `10_AdjustableRoad → [A]StoneOneSide` as borders
- Use `10_AdjustableRoad → [A]StoneInner` to fill in the center
- Pick 4 items as a group out of `04_StoneRoad → 10_CornerCreator` to concatenate adjacent roads

For lagre concave blocks:

- Use `04_StoneRoad → 6_CrossRoad → SCR_ConcaveSideRoadOuter` as corners
- Use `10_AdjustableRoad → [A]StoneLargeConcaveHalf` as borders
- Use `10_AdjustableRoad → [A]StoneInner` to fill in the center
- You can dismiss extra texture patterns when concatenating adjacent roads since there's no easy solution

For Ballance flavored large concave blocks:

- Pick 4 items as a group out of `04_StoneRoad → 10_CornerCreator` as corners, setting the inner block's `scaleY = 0.9`
- Use `10_AdjustableRoad → [A]StoneOneSideConcave` as borders
- Use `10_AdjustableRoad → [A]StoneInner` to fill in the center, setting its `scaleY = 0.9`
- Pick 4 items as a group out of `04_StoneRoad → 10_CornerCreator` to concatenate adjacent roads

::: tip

Most assets in `04_StoneRoad → 1_Construct` are deprecated.

:::
