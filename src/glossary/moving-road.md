# 移动元件

`08_MovingRoad`

::: tip

移动元件需要配合[路点](/glossary/extras.md#路点)使用。

:::

移动元件带有路点列表 `wayPointsIndexTag` 和移动速度 `movingSpeed` 两个参数。

路点列表包含路点个数 `Size` 和各个路点的编号 `Element *`，移动元件将按该列表无限循环变换，具体顺序如下：

- 初始位姿取决于 `Element 0`，**直接开始变换**
- 变换至 `Element 1`
- 停留，时长取决于 `Element 1` 的 `stayTime`
- 变换至 `Element 2`
- 停留，时长取决于 `Element 2` 的 `stayTime`
- ……
- 变换至 `Element n`
- 停留，时长取决于 `Element n` 的 `stayTime`
- 变换至 `Element 0`
- 停留，时长取决于 `Element 0` 的 `stayTime`
- _从第二行开始新一轮循环_

变换遵循以下规则：

- 元件匀速直线移动，速度由 `movingSpeed` 决定，单位为格。
- 上述移动决定变换时长。_你的一些想法可能会因此破灭。_
- 元件绕两个姿态向量构成的大圆**劣弧**匀角速度旋转。
- 缩放参数三轴分量分别匀速改变。

## 移动钢轨

`1_IronRail`

参见[钢轨](/glossary/iron-rail.md)。

## 移动路块

`2_StoneRoad`

参见[路面](/glossary/stone-road.md)。

## 移动木板

`3_WoodBoard`

参见[木板](/glossary/wood-board.md)。
