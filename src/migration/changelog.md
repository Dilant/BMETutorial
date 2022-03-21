# 更新日志

## 3.5.2b3 → 3.5.3b2

- 新增元件 `Assets → ...`
  - 三棱柱 `02_Machinery → M_TriPrismB1`
  - 某块修复的单格路面拼接件 `04_StoneRoad → 10_CornerCreator → CornerCreator5_5Fix`
- 默认工程由 `MyBallexMap` 改为 `NewProject`
- 从本版开始新版 BME 将在 Steam 推送

## 3.5.1b1 → 3.5.2b3

- 新增功能
  - 导入 BME Pro 制作的 `.bitem` 格式自定义元件 `File → Unpack BItem`
- 新增 bug
  - 无法打开先前版本制作的带有文字的地图 <badge text="3.5.3b2" type="warning"/>
  - 无法上传带有自定义元件的地图 <badge text="3.5.3b2"/>

## 3.4b3 → 3.5.1b1

- 新增元件 `Assets → ...`
  - 遮雨区 `5_Functional → BlockRainField`
  - Ballex Level Editor 元件组（暂不开放使用）
- 新增功能
  - 导入 Ballex Level Editor 制作的地图 `File → Unpack BLE`
  - 解包 `.bms` 地图文件 `File → Unpack BMS`

## 3.3.1b2 → 3.4b3

- 新增元件 `Assets → ...`
  - ST 护栏底座 `04_StoneRoad → 9_Others → SO_SmallBlock`
  - 全新的单段形变元件和分段形变元件 `10_AdjustableRoad → *`
- 移除元件 `Assets → ...`
  - 实验性元件 `10_[Experimental]Adjustable → *`
- 新增功能
  - 设置 Ballex 路径以在测图时自动唤起 `Settings → Set Ballex Path`
- 新增 bug
  - 手动导出的 `.bpk` 文件不包含可形变元件 <badge text="暂未修复" type="danger"/>

## 3.3.0b5 → 3.3.1b2

- 新增元件 `Assets → ...`
  - 自带冰块底座的冰球变球器 `01_Extras → 2_BallSwitcher → SwitchBall_Ice_WithCube`
  - 相机高度控制器 `01_Extras → 5_Functional → CamTrigger(*)`
  - 雾浓度控制器 `01_Extras → 5_Functional → FogTrigger(*-*)`
  - 3×9, 4×4, 4×5, 4×6, 4×7, 4×8, 4×9 全边框路面 `04_StoneRoad → 2_FullSides → SFS_*`
  - 修复并更名的单格路面拼接件 `04_StoneRoad → 10_CornerCreator → *`
- 移除元件 `Assets → ...`
  - 磁针 `02_Machinery → M_PointerMagnet`
  - 大号跳板 `02_Machinery → M_JumpBoardUltra`
  - 5×4 全边框路面 `04_StoneRoad → 2_FullSides → SFS_5x4`
  - 某块重复的特殊路面 `04_StoneRoad → 9_Others → SO_2`
  - 可缩放元件 `11_ScaleableRoad → *`
- 新增功能
  - 一键修复所有文字 `Edit → Fix Text`
  - 本体测试新增玩家球坐标
- 新增 bug
  - 从 `.bpk` 导入的传送门可以点选或框选，但直接添加的仍然不能 <badge text="暂未修复" type="danger"/>

## 3.2b11 → 3.3.0b5

- 新增元件 `Assets → ...`
  - 传送门 `02_Machinery → M_TransferDoor`
- 新增功能
  - 文字 `CustomText` 视为移动元件
  - 本体测试
- 移除功能
  - 测图器（被本体测试替代）
- 新增 bug
  - 贴图问题得以缓解，但仍存在偏色和丢失问题 <badge text="3.3.1b2"/>
  - 打包为 `.bpk` 文件时文字损坏，导致解包后地图无法导出 <badge text="3.3.1b2"/>
  - `CornerCreator5_2` `CornerCreator5_3` 建模错误 <badge text="3.3.1b2"/>
  - `CornerCreator5_5` 建模错误 <badge text="3.5.3b2"/>
  - 雾天气时本体测试截图背景丢失 <badge text="3.3.1b2"/>
  - 传送门无法点选或框选 <badge text="3.3.1b2" type="warning"/>

## 3.2b9 → 3.2b11

- 新增元件 `Assets → ...`
  - 单格路面拼接件 `04_StoneRoad → 10_CornerCrearor → *`
  - 冰质管道 `09_Tube → *`
  - 可缩放元件 `11_ScaleableRoad → *`
    - 可缩放路面
    - 可缩放材质块（包括冰块）
- 新增天气 `LevelInfo → Time → ...`
  - 雾 `Haze`
- 新增 bug
  - 大量元件在制图器中丢失贴图，在游戏中可正常显示 <badge text="3.3.1b2"/>

## 3.1 → 3.2b9

- 新增元件 `Assets → ...`
  - 圣诞装饰 `01_Extras → 4_Decorations → Christmas → *`
  - 恒加速度场 `01_Extras → 5_Functional → ConstantAccelerationForceField`
  - 管道 `09_Tube → *`
    - 木质管道转接头
    - 塑料管道转接头
  - 实验性元件 `10_[Experimental]Adjustable → *`
    - 可形变路面
    - 可形变材质块（不包括冰块）
    - ST 护栏
    - 直管道
- 新增场景 `LevelInfo → Scene → ...`
  - 朝霞 `MorningGlow`
  - 晚霞 `SunsetGlow`
  - 深渊 `Abyss`
- 新增 bug
  - 多数新增元件在测图器中无法正常工作 <badge text="3.3.0b5"/>
  - T 板、钢琴、活塞、激光门、激光摆无法框选 <badge text="暂未修复" type="danger"/>
