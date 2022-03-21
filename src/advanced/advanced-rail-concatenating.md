# 钢轨拼接进阶

::: tip

本章节是对[钢轨拼接](/start/rail-concatenating.md)章节的进阶补充，请在阅读前先掌握前述章节内容。

:::

## 单双轨衔接

以在双轨后衔接单轨为例。

- 对齐单轨与双轨的轴线，并使两者末端相接
  - 单轨使用 `10_AdjustableRoad → [A]SingleRailNoAlign`，顶点对齐双轨其中一轨，再坐标对齐轴线
  - 如果双轨使用的是 `10_AdjustableRoad → [A]DoubleRail`，单轨也可使用 `10_AdjustableRoad → [A]SingleRail`，对齐两者辅助杆即可
- 调整单轨坐标，使其低于双轨 0.24 格

## 两端直轨方向固定时确定直角弯轨位置

- 在 `03_IronRail → 2_Circle` 中挑选合适的内外轨
- 添加内弯轨，与直轨内轨顶点对齐，记录弯轨坐标
- 内弯轨再与另一直轨内轨顶点对齐，再次记录弯轨坐标
- 根据上述两个坐标的差值延长或缩短两根直轨
- 对齐内弯轨，添加外弯轨

## 直角弯轨格点化

如果两端直轨均位于格点处，且长度为整数，以下表格可供快速调整直轨长度。

| 弯轨组                    | 直轨延长量 |
| ------------------------- | ---------- |
| `RC_90_R100` `RC_90_R200` | 0.225      |
| `RC_90_R200` `RC_90_R300` | 0.375      |
| `RC_90_R300` `RC_90_R400` | 0.525      |
| `RC_90_R400` `RC_90_R500` | 0.675      |

::: tip

考虑到地图规模，实际上只建议使用 `RC_90_R100` `RC_90_R200` 弯轨组。

:::

## 自定义螺旋钢轨半径与切变高度

- 按圆周角 30° （或更小的合适角度）切分，计算每段钢轨的切变高度和中轴线到水平面的投影长度
- 根据实际情况选用 `10_AdjustableRoad → [S]DoubleRail` 或 `10_AdjustableRoad → [S]DoubleRailNoAlign`
- `height` 和 `length` 分别填入上述计算得到的高度和投影长度
- `rotateY` 设置为 `30`（右转）或 `-30` （左转）
- 点击 `generate` 生成第一段钢轨，摆放在合适的位置
- 不断点击 `clone` 直到生成完整钢轨

::: danger

由于分段形变路面的弯曲算法存在问题，请谨慎选用大于 30° 的切分角度。

:::

## 自定义形状护栏拼接

常规护栏的钢轨尖头朝上，因此拼接护栏时同样建议钢轨尖头朝上；下文也提供了转换为平头朝上的方案。

::: warning

`SO_SmallBlock` 无法顶点对齐，且有重新打开 BME 后不显示的 bug。改动护栏时请留意该元件，也可考虑使用 `10_AdjustableRoad → [A]StoneFullSides` 代替。

:::

### 常规护栏

- 使用 `04_StoneRoad → 9_Others → SO_SmallBlock` 作为底座
- 使用 `03_IronRail → 5_GuardRail → RGS_1` 作为支撑
- 使用 `10_AdjustableRoad → [A]SingleRailNoAlign`，绕 `Z` 轴旋转 22.5° 作为直轨
- 使用 `03_IronRail → 5_GuardRail → RGS_3` 作为弯轨

::: tip

不建议使用 `03_IronRail → 5_GuardRail → RGS_2` 作为直轨。

:::

### 自由形状护栏

- 使用 `04_StoneRoad → 9_Others → SO_SmallBlock` 作为底座
- 使用 `03_IronRail → 5_GuardRail → RGS_1` 作为支撑
- 在两处支撑点末端各添加一段 `10_AdjustableRoad → [S]SingleRailNoAlign`，设置 `length = 0.1` 或更短，`rotateZ = 22.5°`
- 充分发挥你的钢轨衔接技能完成其它部分
