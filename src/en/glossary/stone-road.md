# 路面

`04_StoneRoad`

性质：

- 固定元件。
- 部分路面有缺面，请务必使用封盖或其它合适的元件封闭缺面。

::: tip

由于[可形变元件](/glossary/adjustable-road.md)和[单格路块拼接件](#单格路块拼接件)相比大多数零散的元件更加易用，这些元件会给出完全等效的替代品。

:::

## 路块拼接件

`1_Construct`

### 封盖

`1_Cap`

### 宽凹路面边缘

`2_LargeConcaveSide`

### 特殊转角

`3_Corner`

::: tip

建议使用[单格路块拼接件](#单格路块拼接件)代替。

:::

### 平路面边缘

`4_OneSide`

### 路面中心

`5_Center`

命名格式为 `SCT_A_B`。`A` 和 `B` 为长宽，两者不区分。

这类路面四周没有花纹。

## 全边框路块

`2_FullSides`

命名格式为 `SFS_AxB`。`A` 和 `B` 为长宽，两者不区分。

这类路面四周均有花纹。

## 平路面

`3_TwoSides`

命名格式为 `STS_A_B`。`A` 为倾角，`B` 为到平面的投影长度。

这类路面宽度为 1 格，两边有花纹，两端缺面。

另有三面花纹的端子 `STS_Ends`。

## 凹路面

`4_Concave`

命名格式为 `SC_A_B`。`A` 为倾角，`B` 为到平面的投影长度。

这类路面宽度为 1 格，中线下凹，两边有花纹，两端缺面。

另有端子 `SC_Ends1` 和平凹路面转接件 `SC_Ends2`。

## 宽凹路面

`5_LargeConcave`

命名格式为 `SCTS_A_B`。`A` 为倾角，`B` 为到平面的投影长度。

这类路面宽度为 3 格，中间 1.4 格下凹，两边有花纹，两端缺面。

另有面向平路面的转接件 `SCTS_toTwoSides` 和面向凹路面的转接件 `SCTS_toConcave`。

::: tip

宽凹路面没有端子，如有需要，可以使用 `1_Construct → 2_LargeConcaveSide → SCS_0_1` 和 `6_CrossRoad → SCR_ConcaveSideRoadOuter` 拼接。

:::

## 转角路面

`6_CrossRoad`

## 螺旋路面

`7_Helix`

## 圆弧路面

`8_Circle`

## 其它

`9_Others`

## 单格路块拼接件

`10_CornerCreator`

常称为角块。

任意 1×1×1 大小的路块，均可取四个该类元件拼接而成。
