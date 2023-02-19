# Moving Object

`08_MovingRoad`

::: tip

Moving objects are used together with [waypoints](/en/glossary/extras.md#路点).

:::

A moving object has 2 parameters: list of waypoints `wayPointsIndexTag` and `movingSpeed`.

The list contains its `Size` and index of each waypoint `Element *`. The object will transform in following infinite loop sequence:

- The initial position and posture is defined by `Element 0` and **start moving immediately**
- Transform to `Element 1`
- Stay, whose time is defined by `stayTime` of `Element 1`
- Transform to `Element 2`
- Stay, whose time is defined by `stayTime` of `Element 2`
- ...
- Transform to `Element n`
- Stay, whose time is defined by `stayTime` of `Element n`
- Transform to `Element 0`
- Stay, whose time is defined by `stayTime` of `Element 0`
- _Start a new loop from line 2_

A transformation follows these rules:

- The object moves straight with uniform `movingSpeed`, whose unit is grid length
- Such movement decides transformation time. _Some of your ideas may fall through._
- The object rotates with uniform speed along the **minor arc** of great circle defined by the two posture vectors before and after transformation
- Scale parameters change at uniform speeds respectively

## Moving Rail

`1_IronRail`

Refer to: [Rail](/en/glossary/iron-rail.md)

## Moving Road

`2_StoneRoad`

Refer to: [Road](/en/glossary/stone-road.md)

## Moving Board

`3_WoodBoard`

Refer to: [Wood Board](/en/glossary/wooden-board.md)
