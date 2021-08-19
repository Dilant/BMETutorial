# 钢轨

`03_IronRail`

性质：

- 固定元件。
- 部分钢轨两端缺面，若缺面暴露，请务必使用没有缺面的短钢轨封闭缺面。

::: tip

由于[可形变元件](/glossary/adjustable-road.md)相比部分元件更加易用，这些元件会给出完全等效的替代品。

:::

## 直钢轨

`1_Straight`

::: tip

建议使用 `[A]DoubleRail` `[A]SingleRail` 代替。

:::

分为双轨 `R_DoubleRail` 和单轨 `R_Rail`。这两个元件能够沿 `Z` 轴自由缩放，而不影响纹理。当 `scaleZ = 1` 时，实际长度为 8.5。

## 圆弧钢轨

`2_Circle`

命名格式为 `RC_a_Rr`。`a` 为圆心角，`r` 为半径相对于轨距的百分比。

## 螺旋钢轨

`3_Helix`

命名格式为 `RH_a_Hh_Rr`。`a` 为圆心角，`h` 为切变高度，`r` 为半径相对于轨距的百分比。

## 扭转钢轨

`4_Connect`

包含五种将水平双轨旋转为竖直双轨的衔接轨。

## 护栏钢轨

`5_GuardRail`

::: tip

建议使用 [ST 护栏](/glossary/adjustable-road.md)代替。

:::

直护栏命名格式为 `RG_a`。`a` 为长度。

转角护栏命名格式为 `RGL_a_b`。`a` `b` 为长宽，`aOb` 逆时针旋转。

另有用于拼接护栏的组件 `RGS_1` `RGS_2` `RGS_2`。
