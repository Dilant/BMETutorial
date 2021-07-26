# 迁移指南

::: warning

高版本切换为低版本时，将丢失所有低版本中不存在的元件。

:::

## `try:`

- 备份项目文件夹：
  - Win: `%USERNAME%\AppData\LocalLow\MushREB\Ballex MapEditor\MyBallexMap\`
  - Mac: `~/Library/Application Support/com.MushREB.BallexMapEditor/MyBallexMap/`
- 打开新版本 BME，右键删除 `Project` 窗口中所有**内置**元件
- 重新[导入元件库](/start/preparation.md#导入元件库)
- 逐个打开并测试地图文件

::: tip

如果上述步骤没有遇到任何问题，恭喜你已经完成版本迁移。

否则，你需要使用下述方法。

:::

## `except Exception _:`

- 在旧版本 BME 中逐个打开地图文件，测图后直接 `Enter` 返回，得到 `.bpk` 备份文件
- 备份后删除项目文件夹：
  - Win: `%USERNAME%\AppData\LocalLow\MushREB\Ballex MapEditor\MyBallexMap\`
  - Mac: `~/Library/Application Support/com.MushREB.BallexMapEditor/MyBallexMap/`
- 打开自动备份文件夹：
  - Win: `%USERNAME%\AppData\LocalLow\MushREB\Ballex MapEditor\Maps\`
  - Mac: `~/Library/Application Support/com.MushREB.BallexMapEditor/Maps/`
- 复制出上述步骤创建的所有 `.bpk` 文件
- 打开新版本 BME，重新[导入元件库](/start/preparation.md#导入元件库)
- 将各个 `.bpk` 格式地图解包，重新[添加地图信息](/start/basics.md#添加地图信息)后保存
