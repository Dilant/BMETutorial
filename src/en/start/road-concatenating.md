# 路面拼接

对于初学者，最具可操作性的一般准则是：

- 使用[可形变元件](/glossary/adjustable-object.md)制作直路面
- 使用[单格路块拼接件](/glossary/stone-road.md#单格路块拼接件)制作直角转角和平凹路面衔接
- 保持路面衔接自然，不出现断层、缺口和穿模
- 保持路面边缘纹理完整简洁

::: tip

值得一提的是，考虑到路面与其它元件的衔接问题，目前不必强求路面位于格点处。虽然确实有办法做到，但需要的技术和理解可能远超你目前的能力。

:::

## 直路面

- 使用 `10_AdjustableRoad → [A]StoneTwoSides` 制作平路面
- 使用 `10_AdjustableRoad → [A]StoneTwoSidesConcave` 制作凹路面
- 使用 `10_AdjustableRoad → [A]StoneLargeConcave` 制作宽凹路面
- 设置 `length` 参数控制长度，点击 `generate` 即可生成路面
- 合理设置 `height` 参数并勾选 `fullUVLength` 即可制作斜坡路面

::: tip

出于易用性考虑，不再推荐使用 `04_StoneRoad → 3_TwoSides` `04_StoneRoad → 4_Concave` `04_StoneRoad → 5_LargeConcave` 中的直路面。

:::

## 路面种类转换

- 使用 `04_StoneRoad → 4_Concave → SC_Ends2` 转接平路面和凹路面
- 使用 `04_StoneRoad → 5_LargeConcave → SCTS_toTwoSides` 转接平路面和宽凹路面
- 使用 `04_StoneRoad → 5_LargeConcave → SCTS_toConcave` 转接凹路面和宽凹路面

::: tip

有时为了统一风格，可以拼接 `04_StoneRoad → 10_CornerCreator` 中的 `CornerCreator2_3` `CornerCreator2_5` `CornerCreator3_2` `CornerCreator3_5` 四个元件用于转接平路面和凹路面。
参见：[《四方来朝》通关视频](https://www.bilibili.com/video/BV1554y1Y7YB)

:::

## 路端

- 使用 `04_StoneRoad → 3_TwoSides → STS_Ends` 封闭平路面
- 使用 `04_StoneRoad → 4_Concave → SC_Ends1` 封闭凹路面
- 宽凹路面没有端子元件，可参见[转角](#转角)部分提供的方案
- [转角](#转角)部分另提供了使用[单格路块拼接件](/glossary/stone-road.md#单格路块拼接件)的方案
- 对于连接其它元件（钢轨、机关、木板、材质块等）的情况，是否使用端子均可

## 转角

- 使用 `04_StoneRoad → 10_CornerCreator` 中的元件，四个一组制作平路面和凹路面的转角
- 使用 `04_StoneRoad → 6_CrossRoad` 中的元件制作宽凹路面的转角
- 对于简单的路端和转角情况，下表列出了需要的元件（*斜体*的 `SCS_0_1` 位于 `04_StoneRoad → 1_Construct → 2_LargeConcaveSide`）

|              | 平路面                                                                                  | 凹路面                                                                                  | 宽凹路面                                                                  |
| ------------ | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| 单向（端子） | `CornerCreator2_1`<br/>`CornerCreator3_1`<br/>`CornerCreator4_1`<br/>`CornerCreator4_1` | `CornerCreator2_3`<br/>`CornerCreator3_2`<br/>`CornerCreator4_5`<br/>`CornerCreator4_5` | `SCR_ConcaveSideRoadOuter`<br/>`SCR_ConcaveSideRoadOuter`<br/>_`SCS_0_1`_ |
| 双向（L 形） | `CornerCreator2_1`<br/>`CornerCreator3_1`<br/>`CornerCreator4_1`<br/>`CornerCreator5_1` | `CornerCreator2_3`<br/>`CornerCreator3_2`<br/>`CornerCreator4_5`<br/>`CornerCreator5_4` | `SCR_TwoRoadsConcaveTwoSides`                                             |
| 三向（T 形） | `CornerCreator2_1`<br/>`CornerCreator3_1`<br/>`CornerCreator5_1`<br/>`CornerCreator5_1` | `CornerCreator2_3`<br/>`CornerCreator3_2`<br/>`CornerCreator5_4`<br/>`CornerCreator5_4` | `SCR_ThreeRoadsConcaveTwoSides`                                           |
| 四向（十字） | `CornerCreator5_1`<br/>`CornerCreator5_1`<br/>`CornerCreator5_1`<br/>`CornerCreator5_1` | `CornerCreator5_4`<br/>`CornerCreator5_4`<br/>`CornerCreator5_4`<br/>`CornerCreator5_4` | `SCR_FourRoadsConcaveTwoSides`                                            |

::: tip

出于易用性考虑，不再推荐使用 `04_StoneRoad → 6_CrossRoad` 中的元件制作平路面和凹路面的转角。

:::

## 圆弧路面与螺旋路面

- 挑选 `04_StoneRoad → 7_Helix` `04_StoneRoad → 8_Circle` 中合适的元件使用即可
- 反向螺旋可缩放 `scaleZ = -1` 得到

为了制作更加复杂的弯曲路面，需要使用[分段形变元件](/glossary/adjustable-object.md)，相关使用技巧将在进阶版块介绍。

## 缺面处理

- 如果严格遵循了上述指南，除了圆弧路面与螺旋路面外，应当不会遇到缺面
- 使用 `04_StoneRoad → 1_Construct → 1_Cap → SO_8` 封闭平路面缺面
- 使用 `04_StoneRoad → 1_Construct → 1_Cap → SO_7` 封闭凹路面缺面
- 使用 `04_StoneRoad → 1_Construct → 1_Cap → SO_10` 封闭宽凹路面缺面

## 大块路面拼接

在起步阶段，并不建议使用大块路面。

对于大块平路面：

- 使用 `04_StoneRoad → 1_Construct → 4_OneSide → SOS_Ends` 制作角落
- 使用 `10_AdjustableRoad → [A]StoneOneSide` 制作边缘
- 使用 `10_AdjustableRoad → [A]StoneInner` 填充中心
- 使用 `04_StoneRoad → 10_CornerCreator` 中的元件，四个一组处理与相邻路面的衔接

对于大块凹路面：

- 使用 `04_StoneRoad → 6_CrossRoad → SCR_ConcaveSideRoadOuter` 制作角落
- 使用 `10_AdjustableRoad → [A]StoneLargeConcaveHalf` 制作边缘
- 使用 `10_AdjustableRoad → [A]StoneInner` 填充中心
- 由于并没有简单高效的解决方式，可以忽略与相邻路面连接处的多余边纹

对于仿造 Ballance 风格的大块凹路面：

- 使用 `04_StoneRoad → 10_CornerCreator` 中的元件，四个一组制作角落，其中内侧一块需要缩放 `scaleY = 0.9`
- 使用 `10_AdjustableRoad → [A]StoneOneSideConcave` 制作边缘
- 使用 `10_AdjustableRoad → [A]StoneInner` 填充中心，需要缩放 `scaleY = 0.9`
- 使用 `04_StoneRoad → 10_CornerCreator` 中的元件，四个一组处理与相邻路面的衔接

::: tip

出于易用性考虑，不再推荐使用 `04_StoneRoad → 1_Construct` 中未提及的元件。

:::
