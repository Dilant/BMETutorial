# Assets in Menu

`Create ...`

## Level Info

`LevelInfo`

### `MapName`

You can use unicode characters, though non-ASCII characters will display as blank squares. They'll behave well in game.

### `AuthorName`

Same as above.

### `Time`

`Daytime`, `Night`, `OverEarth`, `Universe`, `MorningGlow`, `SunsetGlow`, `Abyss`.

### `Weather`

`Sunny`, `Cloudy`, `Rainy`, `Snowy`, `ThunderStorm`, `Haze`.

| Combination         | Used in Level # | Special Properties                                                                                |
| ------------------- | --------------- | ------------------------------------------------------------------------------------------------- |
| Day, sunny          | 3, 6            | _Luminance warning_                                                                               |
| Day, cloudy         |                 |                                                                                                   |
| Day, rainy          | 4               | Paper ball loses durability slowly                                                                |
| Day, snowy          | 1, 9            |                                                                                                   |
| Day, thunderstorm   | 13              | Have lightnings；paper ball loses durability rapidly                                              |
| Day, haze           | 18              | Short visual range                                                                                |
| Night, sunny        | 2, 10           |                                                                                                   |
| Night, cloudy       | 11              | No ambient light                                                                                  |
| Night, rainy        | 7, 12, 14       | Paper ball loses durability slowly                                                                |
| Night, snowy        | 5, 8            |                                                                                                   |
| Night, thunderstorm | 17              | No ambient light **except** lightnings; paper ball loses durability rapidly                       |
| Night, haze         |                 | Ultra dim ambient light, ultra short visual range                                                 |
| Morning glow        | 15              |                                                                                                   |
| Sunset glow         |                 |                                                                                                   |
| Over earth          | 16              | Low gravity (5/18 time)                                                                           |
| Universe            |                 | No gravity                                                                                        |
| Abyss               |                 | Player ball is heated up rapidly, causing paper ball and wooden ball to burn and ice ball to melt |

::: details Valid but unrecommended combinations

| Combination                | Method to Set                |
| -------------------------- | ---------------------------- |
| Morning glow, rainy        | `MorningGlow` `Rainy`        |
| Morning glow, thunderstorm | `MorningGlow` `ThunderStorm` |
| Sunset glow, rainy         | `SunsetGlow` `Rainy`         |
| Sunset glow, thunderstorm  | `SunsetGlow` `ThunderStorm`  |
| Abyss, rainy               | `Abyss` `Rainy`              |
| Abyss, thunderstorm        | `Abyss` `ThunderStorm`       |

:::

### `InitialBallType`

`WoodenBall`, `StoneBall`, `PaperBall`, `IceBall`, `IronBall`, `RubberBall`, `GlowBall`.

## Text

`CustomText`

Used to add hints or marks to the map.

A text has 3 parameters: `textContent`, `textSize` and `textColor`. Click `generate` to generate. Besides, texts can be regarded as `MovingRoad` and used as moving objects.

Properties:

- Kinematics object following the setting of waypoints
- No collision
- Supports unicode characters
- Max text size is 50
- Color supports transparency setting
- Texts are rendered after the scene, so it may penetrate the haze
- ~~Though it seems gleaming,~~ it **can't** light up anything
- Will be regarded as a fixed object if no waypoint is bound
- Its coordinate can't be explicitly set. If you want to set one, please perform a [cheat alignment](/en/start/alignment.md#cheat-alignment) or bind a waypoint
- Refer to: [Moving Object](/en/glossary/moving-object.md)

## Folder

`Folder`

::: danger

No hierarchy information is saved when packing maps; position and posture of folders are only effective in preview, but not in exported maps. Don't use it unless you know what you're doing.

:::

Properties:

- Can change its name by slowly clicking twice
- Can be cascaded
- The coordinate of objects in the folder is relative to natural axis of the folder
- When exporting maps, all objects will be exported **with its own position and posture**. **Please ensure that every folder uses its initial position and posture parameters** to avoid malposition

## Save Point and Destination

`SavePoint*` `Destination`

Save point is also called checkpoint.

::: warning

Save points and destination don't support scaling. Plus, rotating them along `X` or `Z` axis will cause malposition, so please check them in game.

:::

Properties:

- Fixed object
- You'll reborn at the last save point with all machinery reset if you die
- Save point #X is the beginning of section #(X+1). _Don't forget save point #1!_
- Save points must be activated sequentially from #1, and destination can be activated only after all save points have been activated
- If save point numbers is not a continuous sequence starting from 1, you can export but never pass the map
- If there're multiple save points with same number, the first added one is valid and others will disappear
- In order to ensure the that the map is loaded correctly, intersecting start point and destination will cause game over. Please place the destination beside (e.g. behind) the start point if needed
  See: [Walkthrough of _<ruby>Kou Yu Challenge #10: Rise up from Death<rt>口语挑战 10：置之死地而后生</rt></ruby>_](https://www.bilibili.com/video/BV1Xz4y1m7GC)
