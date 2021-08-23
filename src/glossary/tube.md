# 管道

`09_Tube`

包含木、塑料、冰材质的管道部件。

性质：

- 固定元件。
- 木质管道不透明，塑质管道半透明，冰质管道略微透明（能见度非常差）。
- 冰质管道不阻挡激光。
- 纸球可能卡在管道里，请谨慎设计相关路线。

::: tip

标注 \* 的元件位于[可形变元件](/glossary/adjustable-object.md)章节。

冰质直管道 `T_IceScaleableTube` 可以直接沿 `Y` 轴缩放使用，冰质管道部件均不自带管道环 `T_IceTubeRing`，可以自行添加。

目前并没有三向异面转接管道，此处条目空缺便于日后添加。

:::

按用途分类：

|              | 冰质                 | 塑质                 | 木质                |
| ------------ | -------------------- | -------------------- | ------------------- |
| 直管道       | `T_IceScaleableTube` | `[A]TransTube` \*    | `[A]WoodTube` \*    |
| 单向（端子） | `T_IceTube0x`        | `T_TransTube0x`      | `T_WoodTube0x`      |
| 双向（圆弧） | `T_IceTubeCorner`    | `T_TransTubeCorner`  | `T_WoodTubeCorner`  |
| 双向（L 形） | `T_IceTube2x`        | `T_TransTube2x`      | `T_WoodTube2x`      |
| 三向（T 形） | `T_IceTube3x`        | `T_TransTube3x`      | `T_WoodTube3x`      |
| 三向（异面） |                      |                      |                     |
| 四向（十字） | `T_IceTube4xTypeA`   | `T_TransTube4xTypeA` | `T_WoodTube4xTypeA` |
| 四向（鞍形） | `T_IceTube4xTypeB`   | `T_TransTube4xTypeB` | `T_WoodTube4xTypeB` |
| 五向         | `T_IceTube5x`        | `T_TransTube5x`      | `T_WoodTube5x`      |
| 六向         | `T_IceTube6x`        | `T_TransTube6x`      | `T_WoodTube6x`      |
| 管道环       | `T_IceTubeRing`      | 自带                 | 自带                |
