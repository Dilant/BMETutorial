# 路面

`04_StoneRoad`

性质：

- 固定元件
- 部分路面有缺面，若缺面暴露，请务必使用封盖或其它合适的元件封闭缺面

::: tip

由于[可形变元件](/en/glossary/adjustable-object.md)和[单格路块拼接件](#单格路块拼接件)相比大多数零散的元件更加易用，这些元件会给出完全等效的替代品。

:::

## 路块拼接件

`1_Construct`

包含一些拼接大块路面的部件。

### 封盖

`1_Cap`

::: tip

[可形变路面](/en/glossary/adjustable-object.md)均不缺面，请优先使用可形变路面。

:::

包含四种形状的封盖。`SO_7` 对应凹路面，`SO_8` 对应平路面，`SO_9` 对应宽凹路面边缘，`SO_10` 对应宽凹路面。

封盖仅单向可见，只有单向碰撞箱，从另一侧会直接穿过。

### 大块凹路面边缘

`2_LargeConcaveSide`

::: tip

建议使用 `[A]StoneLargeConcaveHalf` 代替。

:::

命名格式为 `SCS_a_b`。`a` 为倾角，`b` 为到水平面的投影长度。

这类路面宽度为 1 格，仅单边有花纹，另一边和两端缺面。

### 特殊转角

`3_Corner`

::: tip

建议使用[单格路块拼接件](#单格路块拼接件)代替。

:::

包含四种仅角上有花纹的单格路块。

### 大块平路面边缘

`4_OneSide`

::: tip

建议使用 `[A]StoneOneSide` 代替。

:::

命名格式为 `SOS_a_b`。`a` 为倾角，`b` 为到水平面的投影长度。

这类路面宽度为 1 格，仅单边有花纹，另一边和两端缺面。

另有两边花纹的转角 `SOS_Ends`。

### 路面中心

`5_Center`

::: tip

建议使用 `[A]StoneInner` 代替。

:::

命名格式为 `SCT_a_b`。`a` `b` 为长宽，两者不区分。

这类路面四周没有花纹。

## 全边框路块

`2_FullSides`

::: tip

建议使用 `[A]StoneFullSides` 代替。

:::

命名格式为 `SFS_axb`。`a` `b` 为长宽，两者不区分。

这类路面四周均有花纹。

## 平路面

`3_TwoSides`

::: tip

建议使用 `[A]StoneTwoSides` 代替。

:::

命名格式为 `STS_a_b`。`a` 为倾角，`b` 为到水平面的投影长度。

这类路面宽度为 1 格，两边有花纹，两端缺面。

另有三边花纹的端子 `STS_Ends`。

## 凹路面

`4_Concave`

::: tip

建议使用 `[A]StoneTwoSidesConcave` 代替。

:::

命名格式为 `SC_a_b`。`a` 为倾角，`b` 为到水平面的投影长度。

这类路面宽度为 1 格，中线下凹，两边有花纹，两端缺面。

另有端子 `SC_Ends1` ，平凹路面转接件 `SC_Ends2` 和不带边纹的转接件 `SC_Ends3`。

## 宽凹路面

`5_LargeConcave`

::: tip

建议使用 `[A]StoneLargeConcave` 代替。

宽凹路面没有端子，如有需要，可以使用 `1_Construct → 2_LargeConcaveSide → SCS_0_1` `6_CrossRoad → SCR_ConcaveSideRoadOuter` 拼接。

:::

命名格式为 `SCTS_a_b`。`a` 为倾角，`b` 为到水平面的投影长度。

这类路面宽度为 3 格，中间 1.4 格下凹，两边有花纹，两端缺面。

另有面向平路面的转接件 `SCTS_toTwoSides` 和面向凹路面的转接件 `SCTS_toConcave`。

## 转角路面

`6_CrossRoad`

::: tip

标注 \* 的元件建议使用[单格路块拼接件](#单格路块拼接件)代替。

:::

按用途分类：

|      | 平路面               | 凹路面                     | 宽凹路面                        |
| ---- | -------------------- | -------------------------- | ------------------------------- |
| L 形 | `SCR_TwoRoads` \*    | `SCR_TwoRoadsConcave` \*   | `SCR_TwoRoadsConcaveTwoSides`   |
| 135° | `SCR_45StoneFloor`   | `SCR_45StoneConcave`       |                                 |
| T 形 | `SCR_ThreeRoads` \*  | `SCR_ThreeRoadsConcave` \* | `SCR_ThreeRoadsConcaveTwoSides` |
| Y 形 | `SCR_3x45StoneFloor` | `SCR_3x45StoneConcave`     |                                 |
| 十字 | `SCR_FourRoads` \*   | `SCR_FourRoadsConcave` \*  | `SCR_FourRoadsConcaveTwoSides`  |

以及用于拼接大块凹路面转角的 `SCR_ConcaveSideRoadInner` `SCR_ConcaveSideRoadOuter`。

## 螺旋路面

`7_Helix`

命名格式为 `SHR_a_Rr`。`a` 为圆心角，`r` 为中轴线半径的 100 倍。切变高度为每圈上升 3 格。

这类路面宽度为 1 格，两边有花纹，两端缺面。

## 圆弧路面

`8_Circle`

命名格式为 `SCR_a_Rr`。`a` 为圆心角，`r` 为中轴线半径的 100 倍。

这类路面宽度为 1 格，两边有花纹，两端缺面。

## 其它

`9_Others`

按用途分类：

- 材质块：`S_IronBlock` `S_PaperBlock` `S_RubberBlock` `S_StoneBlock` `S_WoodenBlock`
- 全边框凹路块：`SCS_Full_2x2` `SCS_Full_3x3` `SCS_Full_4x4`
- 带尖角平路块：`SO_11` `SO_12` `SO_13`
- 成型件：`SO_1` `SO_4` `SO_5` `SO_6`
- 杂项：隐形路面 `S_InvisibleRoad`，平路面半长端子 `SO_3`，ST 护栏底座 `SO_SmallBlock`

## 单格路块拼接件

`10_CornerCreator`

常称为角块。

任意 1×1×1 大小的路块，均可取四个这类元件拼接而成。
