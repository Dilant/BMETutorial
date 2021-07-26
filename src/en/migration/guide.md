# Migration Guide

::: warning

You'll lose all unexisting assets in earlier versions of BME if you downgrade.

:::

## `try:`

- Backup your project directory:
  - Win: `%USERNAME%\AppData\LocalLow\MushREB\Ballex MapEditor\MyBallexMap\`
  - Mac: `~/Library/Application Support/com.MushREB.BallexMapEditor/MyBallexMap/`
- Right-click and remove all **built-in** assets in `Project` window in new BME
- [Re-import assets](/en/start/preparation.md#import-assets)
- Open and test every map

::: tip

Congrats if you don't encounter any problems!

Or... you have to go next.

:::

## `except Exception _:`

- Test every map in old BME but just press `Enter` to return, so you get `.bpk` autosave files
- Backup and delete the project directory:
  - Win: `%USERNAME%\AppData\LocalLow\MushREB\Ballex MapEditor\MyBallexMap\`
  - Mac: `~/Library/Application Support/com.MushREB.BallexMapEditor/MyBallexMap/`
- Open the autosave directory:
  - Win: `%USERNAME%\AppData\LocalLow\MushREB\Ballex MapEditor\Maps\`
  - Mac: `~/Library/Application Support/com.MushREB.BallexMapEditor/Maps/`
- Copy all `.bpk` files generated just now
- [Re-import assets](/en/start/preparation.md#import-assets) in new BME
- For every `.bpk` file, unpack, [re-add level info](/start/basics.md#添加地图信息) and save
