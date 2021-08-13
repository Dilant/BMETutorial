# Changelog

## 3.5.2b3 → 3.5.3b2

- New assets `Assets → ...`
  - Triangle prism `02_Machinery → M_TriPrismB1`
  - A fixed corner creator `04_StoneRoad → 10_CornerCreator → CornerCreator5_5Fix`
- The default project changes from `MyBallexMap` to `NewProject`
- From now on new versions of BME will be deployed to Steam

## 3.5.1b1 → 3.5.2b3

- New features
  - Import `.bitem` custom objects made by BME Pro `File → Unpack BItem`
- Known bugs
  - Can't open maps with texts made by earlier versions <badge text="3.5.3b2" type="warning"/>
  - Can't upload maps with custom items <badge text="3.5.3b2"/>

## 3.4b3 → 3.5.1b1

- New assets `Assets → ...`
  - Block-rain field `5_Functional → BlockRainField`
  - Assets of BLE (not ready for standalone use)
- New features
  - Import maps made by BLE `File → Unpack BLE`
  - Unpack `.bms` maps `File → Unpack BMS`

## 3.3.1b2 → 3.4b3

- New assets `Assets → ...`
  - Base of ST guardrails `04_StoneRoad → 9_Others → SO_SmallBlock`
  - Adjustable assets `10_AdjustableRoad → *`
- Removed assets `Assets → ...`
  - Experimental assets (become stable ones) `10_[Experimental]Adjustable → *`
- New features
  - Set Ballex path (will launch automatically upon map test) `Settings → Set Ballex Path`
- Known bugs
  - Manually exported `.bpk` files don't include adjustable assets <badge text="Not fixed" type="danger"/>

## 3.3.0b5 → 3.3.1b2

- New assets `Assets → ...`
  - Iceball switcher with an ice cube `01_Extras → 2_BallSwitcher → SwitchBall_Ice_WithCube`
  - Camera height triggers `01_Extras → 5_Functional → CamTrigger(*)`
  - Fog thickness triggers `01_Extras → 5_Functional → FogTrigger(*-*)`
  - 3×9, 4×4, 4×5, 4×6, 4×7, 4×8, 4×9 full-side road block `04_StoneRoad → 2_FullSides → SFS_*`
  - Fixed and renamed corner creators `04_StoneRoad → 10_CornerCreator → *`
- Removed assets `Assets → ...`
  - Pointer magnet `02_Machinery → M_PointerMagnet`
  - Large-size jump board `02_Machinery → M_JumpBoardUltra`
  - 5×4 full-side road block `04_StoneRoad → 2_FullSides → SFS_5x4`
  - A duplicate `04_StoneRoad → 9_Others → SO_2`
  - Scaleable assets `11_ScaleableRoad → *`
- New features
  - Fix all texts `Edit → Fix Text`
  - Show player ball's coordinate in map test
- Known bugs
  - Can't select or multiselect transfer doors added directory (but ones unpacked from `.bpk` files can) <badge text="Not fixed" type="danger"/>

## 3.2b11 → 3.3.0b5

- New assets `Assets → ...`
  - Transfer door `02_Machinery → M_TransferDoor`
- New features
  - Texts `CustomText` are regarded as moving objects now
  - In-game map test
- Removed features
  - Maptester (replaced by in-game map test)
- Known bugs
  - The texture problems are relieved but not solved <badge text="3.3.1b2"/>
  - Can't re-export unpacked `.bpk` maps due to corrupted text <badge text="3.3.1b2"/>
  - Wrong model of `CornerCreator5_2` and `CornerCreator5_3` <badge text="3.3.1b2"/>
  - Wrong model of `CornerCreator5_5` <badge text="3.5.3b2"/>
  - Haze background is missing when taking screenshots <badge text="3.3.1b2"/>
  - Can't select or multiselect transfer doors <badge text="3.3.1b2" type="warning"/>

## 3.2b9 → 3.2b11

- New assets `Assets → ...`
  - Corner creators (typo bug →) `04_StoneRoad → 10_CornerCrearor → *`
  - Ice tube `09_Tube → *`
  - Scaleable assets `11_ScaleableRoad → *`
    - Adjustable road blocks
    - Adjustable texture blocks (including ice blocks)
- New weather `LevelInfo → Time → ...`
  - Haze `Haze`
- Known bugs
  - Most assets lose their texture in BME (but behave well in game) <badge text="3.3.1b2"/>

## 3.1 → 3.2b9

- New assets `Assets → ...`
  - Christmas decorations `01_Extras → 4_Decorations → Christmas → *`
  - Constant acceleration force field `01_Extras → 5_Functional → ConstantAccelerationForceField`
  - Tube `09_Tube → *`
    - Wooden tube adapters
    - Plastic tube adapters
  - Experimental assets `10_[Experimental]Adjustable → *`
    - Adjustable road blocks
    - Adjustable texture blocks (except ice blocks)
    - ST guardrails
    - Straight tube
- New scenes `LevelInfo → Scene → ...`
  - Morning glow `MorningGlow`
  - Sunset glow `SunsetGlow`
  - Abyss `Abyss`
- Known bugs
  - Maptester works improperly with new assets <badge text="3.3.0b5"/>
  - Can't multiselect T boards, pianos, pushers, laser-locked doors or laser pushes <badge text="Not fixed" type="danger"/>
