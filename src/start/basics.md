# 基本操作

## 添加地图信息

`Create → Create Level Info`

First things first. 为了避免各种各样的奇葩情况，请养成首先添加地图信息的习惯。[事故现场](/faq/#测图时天气或出生球种和设定不一致)

[在此](/glossary/assets-in-menu.md#地图信息)查看地图信息填写说明。

## 保存

`File → Save Scene` / `Ctrl + S`

保存后的地图会在 `Project` 窗口中出现，可以双击打开。

::: tip

地图实际保存位置为：

- Win: `%USERNAME%\AppData\LocalLow\MushREB\Ballex MapEditor\NewProject\Assets\`
- Mac: `~/Library/Application Support/com.MushREB.BallexMapEditor/NewProject/Assets/`

`.rtscene` `.rtscene.rtmeta` `.rtscene.rtview` 三个一组。**一般情况下，请勿手动处理该文件夹内容。**[事故现场](/faq/#已导入元件但根目录不显示)

:::

## 添加元件

在 `Project` 窗口中找到需要的元件，拖入 `Scene` 窗口，即可添加元件。你会在 `Hierarchy` 窗口的列表末尾看到它，并可在 `Inspector` 窗口中调整它的位置，姿态，缩放和其它提供的参数。

现在，你可以任意拖入一些元件摆弄一番了。之后会讲方便得多的调整方法。

## 撤销与还原

`Ctrl + Z` `Ctrl + Y`，对应右上角工具栏前两个按钮。

不过请勿过分依赖撤销与还原操作，进行破坏性操作前请注意备份。

~~我在冰与火之舞和节奏医生制谱器深受其害（摔~~

## 视图调整

### 平移视图

按住 `鼠标右键` 并拖动。

### 旋转视图

按住 `Alt + 鼠标左键` 并拖动。

### 缩放视图

使用 `鼠标滚轮`。

### 聚焦

`F`，按下触发。

该功能将自动调整视图，使选定元件位于视野中心，并改变视图调整中心点为当前位置。

::: tip

所有视图调整操作的效果都与视图调整中心点有关。如果调整时遇到困难，可以尝试使用聚焦功能改变视图调整中心。

:::

### 三视图

点击右上角坐标轴箭头。

### 切换透视 / 正交视角

右上角坐标轴下方显示了当前视角（透视 `Persp` / 正交 `Ortho`），点击即可切换。正交视角在精调布局时很有用。

## 元件调整

### 观察模式

`Q`，按下切换，对应右上角工具栏第 3 个按钮。

该模式下无法选中元件，也无法对元件作任何调整，~~防止手贱~~ 一般没什么用。

### 移动模式

`W`，按下切换，对应右上角工具栏第 4 个按钮。

拖动三个坐标轴箭头在该方向内移动元件，或拖动面符号在该面内移动元件。

### 旋转模式

`E`，按下切换，对应右上角工具栏第 5 个按钮。

拖动三个有色圆弧在对应面内旋转元件，或拖动白色大圆在投影面内旋转元件，或拖动圆面 ~~放飞自我~~ 自由旋转元件。

### 缩放模式

`R`，按下切换，对应右上角工具栏第 6 个按钮。

拖动三个操作柄在该方向内缩放元件。可以拖动到负半轴，此时元件会变为原来的镜像。

::: warning

对于固定元件，多数情况下不需要缩放；对于机关，多数机关缩放后会引发意外性质。因此在有其它可行方案时，请不要缩放元件。

:::

### 量化

`Ctrl`，按住开启，松开关闭。

在量化开启时，可以以 1 为单位移动，以 15° 为单位旋转，以相对当前大小 10% 为单位缩放。

## 多选

在 `Scene` 窗口中多选：按住 `鼠标左键` 并框选。
在 `Hierarchy` 窗口中多选：可按照通用多选方法配合 `Ctrl` `Shift` 多选。

::: tip

在 `Scene` 窗口中多选时，将按照正交视角判定，碰撞箱**任意部位**进入选框即视为选中。

为了尽量避免选中不需要的元件，建议使用[正交](#切换透视-正交视角)、[俯视](#三视图)视角操作。

:::

## 复制元件

`Ctrl + D`

按下后在原位生成一个新元件，出现在 `Hierarchy` 窗口列表末尾，带有 `(Clone)` 字样。

虽然但是，没有 `Ctrl + X` `Ctrl + C` `Ctrl + V`。

## 删除元件

`Delete`

## 创建存档点和终点

`Create → SavePoints`

需要特别注意：**存档点必须按顺序触发，然后才能触发终点。**

参见：[图鉴 → 菜单栏中的元件 → 存档点和终点](/glossary/assets-in-menu.md#存档点和终点)

## 测试地图

`File → Test Map`

如果正确[设置了 Ballex 路径](/start/preparation.md#设置-ballex-路径)，Ballex 将自动启动并进入测图模式。

::: tip

测图模式无法激活终点。

如果地图已经完成，正在进行最终测试，[这里](/start/test-map.md)提供了一些参考存档点。

:::

### 当前坐标

右上角信息中 `Coord. (x, y, z)` 即为玩家球球心坐标。在 ~~大物实验~~ 制作自动图或一些特殊玩法中也许有用。

~~以及注意坐标系，例如重力沿 Y 轴负方向~~

### 跳节

`Ctrl + P`

### 飞行

`Ctrl + G`，按下开启，再次按下关闭。

飞行状态开启后，球不再受重力作用。~~但可能被阴间恒加速度场送走~~

`W` 键上升，`S` 键下降，暂不支持更改。

### 截图

`Ctrl + C`

可调整距离 `CameraDistance`，高度 `CameraAltitude`，视场角 `CameraFOV`，偏航角 `CameraYaw`，俯仰角 `CameraPitch`，横滚角 `CameraRoll`六个参数。截图为 1920×1080 `.jpg` 文件，保存在：

- Win: `%USERNAME%\AppData\LocalLow\MushREB\Ballex\ScreenShots`
- Mac: `~/Library/Application Support/com.MushREB.Ballex/ScreenShots`

### 自动备份

每次测试地图，会导出一份 `.bpk` 格式的备份，可用于意外情况下的地图恢复：

- Win: `%USERNAME%\AppData\LocalLow\MushREB\Ballex MapEditor\Maps\`
- Mac: `~/Library/Application Support/com.MushREB.BallexMapEditor/Maps/`
