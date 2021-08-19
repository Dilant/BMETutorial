---
sidebar: auto
---

# Frequently Asked Questions

::: tip

All the solutions are based on user feedback, and may not always fit your case. Make backups if necessary.

:::

## Assets are imported but not showing up

Loading maps fail.

- One or more maps are corrupted
- Maps with the same internal ID conflict with each other

Don't use any other tools to modify the project directory unless you know what you're doing. Especially, don't use another map to replace files of an existing map. You should always use `.bms` format and internal pack / unpack functions to process maps. Due to the complexity of both troubleshooting and solving problems, it is recommended to immediately seek help in [QQ group (700371890)](https://jq.qq.com/?_wv=1027&k=LhtfLbqL) or [discord server (Ballex)](https://discord.gg/CwC7u2wFmJ).

## No response after conforming to import / export <badge text="Windows" type="warning"/>

Use another readable / writable path **except for root directory of a disk**.

::: details Murmuring

> Dilant: wtf
> Dilant: i just move it from `D:\` to desktop
> Dilant: and duang i got it!?

:::

## Importing `.bms` process stops at 88%

Linking custom items failed.

- Check if all `.bitem` files of custom items exist.
- If it's other's map, fetch these files and place them in the directory assigned by the map.
- Close the import window, export `.bms` and re-import the new `.bms` file can successfully import it with all custom items dropped.

## Not responding to keyboard input

- Minimize and then resume the map editor window
- Check IME if you're using non-english languages

## Weather or initial ball type doesn't match the settings when testing map

- Weather is not supported by morning glow, sunset glow, overearth, universe or abyss scene.
- Check if level info is properly filled. Particularly, map and author name are required.
- Check if multiple level infos are added.

## Maptest process stops at 85%

Initializing object parameters failed.

- Try to fix texts with `Edit → Fix Text`.
- Check objects with extra parameters. Delete and re-add it if you find anything wrong. They may include:
  - Jumpbox
  - Text
  - Moving object along with its waypoints
  - Trigger
  - Adjustable object
  - Level info

## Maptest process stops at 95%

Writing files failed. The map name shouldn't contain special characters.

- Win: `\/:*?"<>|`
- Mac: `/:` and not starting with `.`

## Ballex loading stops at 53% when testing map

Linking custom items failed.

- Check if all `.bitem` files of custom items exist.
- If it's other's map, fetch these files and place them in the directory assigned by the map.

## Failed to connect to Steam

See: [Start → Preparation → Start the Map Editor](/en/start/preparation.md#start-the-map-editor)

## Hard to adjust my camera view

Arbitrary select an object in view and press `F` to focus on it.

See: [起步 → 基本操作 → 聚焦](/start/basics.md#聚焦)

## Can't do vertex alignments

- Some vertices are missing in certain assets (e.g. suspension bridge). Make use of another vertex, or do a coordinate alignment instead.
- Certain assets have dense vertices that cause drifting (e.g. fan). Do a coordinate alignment instead.

## `Generic Failure` occurs when uploading maps to Steam Workshop

Check your internet connection, and use proxy if necessary.

::: details Only for Mainland China users (简体中文)

以下为可供尝试的排查措施：

- 检查加速器是否冲突（例如同时开启了加速器和科学上网工具）
- 尝试手机流量热点
- 关闭所有加速工具，使用 Google DNS 或 CloudFlare DNS 直连
  - Google: `8.8.8.8`, `8.8.4.4`, `2001:4860:4860::8888`, `2001:4860:4860::8844`
  - CloudFlare: `1.1.1.1`, `1.0.0.1`, `2606:4700:4700::1111`, `2606:4700:4700::1001`

:::

## Others can't find my uploaded maps

- It takes time for your map to show up in the recent list. Check if it's successfully uploaded at your workshop homepage.
- Ensure that your Steam account is not limited. It's limited until you've spent at least $5 USD, either buying games or topping up your Steam wallet, which is described [here](https://support.steampowered.com/kb_article.php?ref=3330-IAGK-7663) in details. Ask other mappers to do a favor if needed.
