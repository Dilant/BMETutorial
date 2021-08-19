# 制图前准备

## 启动制图器

直接双击 `Ballex MapEditor.exe` 或 `Ballex MapEditor.app` 即可打开。打开前请确保：

- Steam 已经启动并登录
- 制图器目录存在文件 `steam_appid.txt`，内容为 `1114430`

::: tip

Ballex 游戏本体和制图器可以同时运行。实际上，可以用相同的方法打开 `Ballex.exe` 或 `Ballex.app`。

:::

::: warning

如果使用 Steam++ 或类似工具自动启动了 Steam，并遇到了无法启动制图器的情况，请关闭 Steam 并手动重启。

:::

## 调整界面

### 设置帧率

`Settings → Frame Rate`

### 设置 DPI 缩放

`Settings → Scale Rate`

### 调整窗口布局

拖动窗口边缘可调整大小，拖动窗口标题可调整位置。窗口右上角可以全屏化或关闭窗口。关闭的窗口可以从 `Window` 菜单中再次调出。

## 设置 Ballex 路径

`Settings → Set Ballex Path`

需定位到 `Ballex.exe`，正式版或内测版 Ballex 均可。进入测图模式时，该路径指向的 Ballex 将自动启动。

## 初识窗口

### `Scene`

场景窗口。显示地图布局，多数操作都在此窗口完成。

### `Inspector`

视察窗口。可在此窗口查看并调整选中元件的位姿和参数。

### `Hierarchy`

层级窗口。列出当前地图中的所有元件及其层级关系。

::: tip

显示顺序与内部排序无关。

:::

### `Project`

项目窗口。存放当前项目中导入的元件库和存放的所有地图。

## 管理项目

`File → Manage Projects`

当需要制作系列图时，新建项目会很有用。但绝大多数情况下，使用默认项目 `NewProject` 即可。

为了避免引发各种问题，**请保留至少一个项目**。

::: tip

在本教程中，所有操作都基于默认项目 `NewProject`。

:::

## 导入元件库

`File → Import Assets`

此处会显示所有尚未导入的元件，一般情况下，直接点击 `Import` 全部导入即可。导入后的元件会显示在 `Project` 窗口中。

::: warning

废弃的旧版元件并不会自动处理，需要自行右键删除。

参见：[更多 → 版本迁移 → 迁移指南](/migration/guide.md)

:::
