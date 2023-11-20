# 可形变元件

`10_AdjustableRoad`

Properties:

- Fixed object
- ~~Nothing else~~

标识说明：

- 一类单段形变元件 <badge text="A1"/>：该类元件 `length` `height` `fullUVLength` 参数有效。`length` 为到水平面的投影长度，`height` 为切变高度，`fullUVLength` 勾选则先切变再根据元件实际长度计算纹理，否则根据投影长度计算纹理再切变
- 二类单段形变元件 <badge text="A2" type="warning"/>：该类元件 `length` `width` 参数有效。`length` 为长度，`width` 为宽度，木板需注意纹理走向
- 分段形变元件 <badge text="S" type="danger"/>：该类元件除 `fullUVLength` 以外所有参数均有效。各参数对元件形状和纹理的影响均需自行测试。~~别问我我根本搞不懂蘑菇数学~~

## 路面

`[A]StoneFullSides` <badge text="A2" type="warning"/>
`[A]StoneInner` <badge text="A2" type="warning"/>
`[A]StoneLargeConcave` <badge text="A1"/>
`[A]StoneLargeConcaveHalf` <badge text="A1"/>
`[A]StoneOneSide` <badge text="A1"/>
`[A]StoneOneSideConcave` <badge text="A1"/>
`[A]StoneTwoSides` <badge text="A1"/>
`[A]StoneTwoSidesConcave` <badge text="A1"/>
`[S]StoneLargeConcave` <badge text="S" type="danger"/>
`[S]StoneTwoSides` <badge text="S" type="danger"/>
`[S]StoneTwoSidesConcave` <badge text="S" type="danger"/>

除了 `[A]StoneOneSideConcave` 以外，其它元件均在[路面](/en/glossary/stone-road.md)章节有所讲解。

## 钢轨

`[A]DoubleRail` <badge text="A1"/>
`[A]DoubleRailNoAlign` <badge text="A1"/>
`[A]SingleRail` <badge text="A1"/>
`[A]SingleRailNoAlign` <badge text="A1"/>
`[S]DoubleRail` <badge text="S" type="danger"/>
`[S]DoubleRailNoAlign` <badge text="S" type="danger"/>
`[S]SingleRail` <badge text="S" type="danger"/>
`[S]SingleRailNoAlign` <badge text="S" type="danger"/>

钢轨两端的定位条可用于与路面衔接，在游戏中不可见。

另外，双轨与路面衔接时，建议[添加辅助轨](/en/start/connecting-road-and-rail.md#double-rail)。

## 护栏

`[A]GuardRail` <badge text="A1"/>
`[A]GuardRailL` <badge text="A2" type="warning"/>
`[A]GuardRailLNoBase` <badge text="A2" type="warning"/>
`[A]GuardRailNoBase` <badge text="A1"/>

由于这种护栏最先由玩家 Sterd 使用，常称为 ST 护栏。

另有单独的底座元件 `04_StoneRoad → 9_Others → SO_SmallBlock`。

## 材质块

`[A]GlowBlock` <badge text="A2" type="warning"/>
`[A]IronBlock` <badge text="A2" type="warning"/>
`[A]PaperBlock` <badge text="A2" type="warning"/>
`[A]RubberBlock` <badge text="A2" type="warning"/>
`[A]StoneBlock` <badge text="A2" type="warning"/>
`[A]WoodBlock` <badge text="A2" type="warning"/>

由于这种材质块有肉眼可见的纹理劣化，变球器底座仍然建议使用 `04_StoneRoad → 9_Others` 中的材质块。

## 木板

`[A]WoodenBoard` <badge text="A2" type="warning"/>
`[A]WoodenBoardTypeB` <badge text="A2" type="warning"/>
`[S]WoodenBoard` <badge text="S" type="danger"/>
`[S]WoodenBoardTypeB` <badge text="S" type="danger"/>
`[S]WoodenBoardWidth2` <badge text="S" type="danger"/>
`[S]WoodenBoardWidth2TypeB` <badge text="S" type="danger"/>
`[S]WoodenBoardWidth4` <badge text="S" type="danger"/>
`[S]WoodenBoardWidth4TypeB` <badge text="S" type="danger"/>

A 类木板纹理横向排布，B 类木板纹理纵向排布。

## 管道

`[A]TransTube` <badge text="A1"/>
`[A]WoodTube` <badge text="A1"/>

各类转接管道均位于[管道](/en/glossary/tube.md)章节。
