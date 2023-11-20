# Extra Assets

`01_Extras`

## Prop Ball

`1_Balls`

Properties:

- Rigid body, can move freely
- The physical properties of each prop ball are somewhat different from the player ball
- Prop balls have no durability settings, and cannot be ignited or melted
- A iron prop ball can reflect the laser, and laser can penetrate an ice prop ball

## Ball Switcher

`2_BallSwitcher`

There're 7 types of ball switchers, with an additional one bundled with the ice base.

Properties:

- Fixed object
- The trigger area is a cuboid area above the switcher, from which new balls are created at zero initial velocity
- Both the switcher and its trigger area will block the laser

## Supply

`3_Supply`

钥匙 `DoorKeys` 可用于打开一扇上锁门，耐久球 `HealthBall` 增加 20 点耐久值，生命球 `LifeBall` 提供一条额外生命，分数球 `ScoreBall` 分为 5 个粒子，每个粒子提供 100 分。

Properties:

- Fixed object
- 钥匙判定区为圆片，帧率越高旋转越快。_帧率低时可以鬼躲。_**请勿有意利用此性质**
  参见：[《奥丁挑战 14：当机立断》通关视频](https://www.bilibili.com/video/BV1ST4y1j76b?p=1&t=60) 1:00
- 三种补给球判定区为球
- 钥匙不与上锁门配对，任意一把钥匙可以打开任意一扇门
- 最多同时携带 5 把钥匙
- 耐久球和生命球立即生效；玩家球接触分数球时，分数球分散为 5 个粒子，各个粒子接触到球时分别生效
- 经过存档点时粒子不会消失，进入终点时会直接吃到所有粒子
- 暂停时粒子也会暂停运动，死亡结算时吃到的粒子无效
- 额外生命数上限为 10
- 耐久上限为 100，仅增加当前耐久，可恢复耐久（浅蓝条）相应减少，不改变完全恢复（浅蓝条回满）后的耐久值
- 死亡重生时，吃过的分数球不再出现，其它补给物重新出现。**但请尽可能阻止玩家刷命或跨小节吃钥匙**
- 钥匙和分数球的粒子会阻挡激光。**请勿有意利用此性质**

## Decoration

`4_Decorations`

### Christmas Decoration

`Christmas`

Properties:

- 礼物盒为刚体，can move freely；其它均为固定元件
- 礼物盒盒体和丝带都具有碰撞箱
- `ChristmasTree` 在夜间具有照明效果

### Bonfire

`Bonfire`

Properties:

- Fixed object
- 在夜间具有照明效果
- 木柴具有碰撞箱
- 篝火视为火焰，参见[定向喷火器](/glossary/machinery.md#定向喷火器)

### Street Light

`Light`

为附近区域提供照明。

Properties:

- Fixed object
- 在夜间具有照明效果

### Pillar

`Pillar`

Properties:

- Fixed object
- 碰撞箱与显示不同，是顶面与顶部相同，底面与柱身横截面相同，长约 35 格的圆台；更远距离处没有碰撞箱，材质逐渐透明。**请勿利用底柱挡路**

## 功能方块

`5_Functional`

### 遮雨区

`BlockRainField`

玩家纸球边缘接触到遮雨区时，将免受雨水导致的耐久损失。

Properties:

- Fixed object
- Stay to trigger
- 不影响因水池导致的耐久损失
- Will block the laser

### 相机高度控制器

`CamTrigger(A)`

玩家球边缘接触到相机高度控制器时，将改变相机高度。

元件名中，`A` 表示相机高度系数，数字越大高度越高。

Properties:

- Fixed object
- Enter to trigger
- Will block the laser
- 初始相机高度系数为 `5`
- 按下 `Space` 抬升视野时，将在当前高度上附加一定高度
- 重生或重新开始时，相机高度恢复默认值

### 恒加速度场

`ConstantAccelerationForceField`

常称为力场。

任何物体边缘接触到恒加速度场时会额外受力，获得沿恒加速度场 `Z` 方向正向，大小 0.5g 的加速度。

Properties:

- Fixed object
- Stay to trigger
- Will block the laser
- 此处 g 为常规场景的重力加速度，意味着地外和太空场景的恒加速度场与常规场景施力一致
- 若物体受到多个恒加速度场同时作用，获得的加速度遵从向量合成法则

### 死亡区

`DeathBox`

玩家球边缘接触到死亡区时将立即死亡。

Properties:

- Fixed object
- Enter to trigger
- 除**磁球**以外的所有自由刚体接触到死亡区时，会逐渐变小，一段时间后**消失**
- 其它元件接触到死亡区时，也可能有部件变小消失或直接消失。但为了避免意外状况，**请勿有意利用此法改造元件**
  例如：栅栏底座直接消失，只留下栅栏推杆；沙袋绳逐渐变小，消失后沙包掉落。
- Will block the laser
- 死亡结算过程中，玩家球无法触发存档点和终点，吃到的补给物不生效
- 重生球种为死亡瞬间左上角显示的球种
- 在失去最后一条生命导致游戏结束时，点击“继续游戏”后会再次死亡结算，所以此情况下从死亡到继续游戏期间的变球会生效。**请勿有意利用此性质**
  参见：[《奥丁挑战 15：从零开始》通关视频](https://www.bilibili.com/video/BV1yg4y1B7Ct?t=215) 3:35

### 雾浓度控制器

`FogTrigger(A-B)`

玩家球边缘接触到雾浓度控制器时，将改变雾浓度。

元件名中，`A-B` 表示能见度渐变系数，数字越大雾越淡。

Properties:

- Fixed object
- Enter to trigger
- Will block the laser
- 初始示能见度渐变系数为 `5.3-8.5`
- 重生或重新开始时，雾浓度恢复默认值

### 触发器

`Trigger` `TriggerEnterDisappear`

前者为控制器，后者为效应器。常根据颜色分别称为红块和绿块。

触发器带有标签参数 `triggerTag`，当玩家球边缘接触到**任一**控制器时，该控制器和**所有**标签相同的效应器消失。

Properties:

- Fixed object
- 控制器为一次性进入时扳机
- 控制器会阻挡激光
- 效应器可以阻挡玩家球和**道具冰球**以外的所有物体
- 玩家球以外的物体不会激活控制器
- 效应器没有配套的控制器时仍然存在

### 路点

`WayPoint`

控制[移动元件](/glossary/moving-object.md)的运动轨迹。

路点带有编号 `index` 和停留时间 `stayTime` 两个参数，停留时间单位为秒。

Properties:

- Fixed object
- 当存在多个编号相同的路点时，只有第一个添加的路点有效
- 其它参见[移动元件](/glossary/moving-object.md)
