# 迁移指南

## 升级到最新版

- 打开并备份项目文件夹：
  - Win: `%USERNAME%\AppData\LocalLow\MushREB\Ballex MapEditor\MyBallexMap\`
  - Mac: `~/Library/Application Support/com.MushREB.BallexMapEditor/MyBallexMap/`
- 删除 `Assets` 文件夹中所有**内置元件**
- 打开新版本 BME，重新导入元件组
- 逐个打开地图文件，`Edit → Fix Text` 修复文字后保存

## 其它情况

::: warning

- 部分版本存在一些影响使用和测图的 BUG，请确保自己能够处理它们。
- 高版本切换为低版本时，将丢失所有低版本中不存在的元件。因此**升级后请务必多加试用**，确认是否达到自己的功能期望，切勿在此之前大规模制图，避免再次降级导致损失。
- 低版本切换为高版本时，会丢失层级结构和关卡信息，请在完成转换后重新整理层级 ~~虽然好像没多少人用文件夹~~ 并添加关卡信息。

:::

- 在旧版本 BME 中逐个打开地图文件，`File → Test Map` 测图后直接 `Enter` 返回，得到 `.bpk` 备份文件
- 备份后删除项目文件夹：
  - Win: `%USERNAME%\AppData\LocalLow\MushREB\Ballex MapEditor\MyBallexMap\`
  - Mac: `~/Library/Application Support/com.MushREB.BallexMapEditor/MyBallexMap/`
- 打开自动备份文件夹：
  - Win: `%USERNAME%\AppData\LocalLow\MushREB\Ballex MapEditor\Maps\`
  - Mac: `~/Library/Application Support/com.MushREB.BallexMapEditor/Maps/`
- 复制出上述步骤创建的所有 `.bpk` 文件
- 打开新版本 BME，重新导入元件组
- 将各个 `.bpk` 格式地图解包，重新添加关卡信息，修复文字后保存
