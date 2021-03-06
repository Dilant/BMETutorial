# 机关

`02_Machinery`

## 弹门

`M_BallDamper` `M_BallDamperDestructible`

## 秋千

`M_BallVessel`

也称为摇篮。

## 磁铁

`M_BarMagnet` `M_UMagnet`

会吸引玩家钢球和磁球。

性质：

- 均为固定元件。
- 不吸引道具钢球。
- 磁心位于刷漆部分中心。
- 磁力与到磁极的距离为固定关系，4 格以内逐渐减小为零，以外迅速增大趋于无穷，至 7.5 格附近**会导致游戏崩溃**。
- 磁力作用范围为 4 格，磁铁缩放时，该范围随三轴缩放参数的最大值改变。由于上述引发崩溃的原因，**请勿将任一缩放参数设定为 1.8 以上。**
- 各个磁极的施力分别计算，遵从向量合成法则。

## 木箱

`M_Box`

## 传送带

`M_Conveyor*`

## 单向门

`M_DirectionalDoor`

## 落板

`M_FallDownBoard`

常根据颜色称为蓝板。

## 风扇

`M_Fan`

性质：

- 固定元件。
- 吹起玩家球需要的风扇数量：纸球(1)，冰球(2)，橡胶球(4)，木球(5)，石球(26)，光球(26)，钢球(39)。
- 缩放不改变风力。
- 风口外 5 格范围内会阻挡激光，风扇沿 `Y` 轴缩放时，该范围随之改变。
- 上述范围内，第 1 至 4 格为吹力，更远区域为吸力。（若缩放后作用范围不足 4 格，则没有吸力）

## 强力风扇

`M_FanPowerful`

常根据底座材质称为木风扇。

性质：

- 固定元件。
- 吹起玩家球需要的风扇数量：纸球(1)，冰球(1)，橡胶球(1)，木球(1)，石球(5)，光球(5)，钢球(7)。
- 缩放不改变风力。
- 风口外 6 格范围内会阻挡激光，风扇沿 `Y` 轴缩放时，该范围随之改变。
- 上述范围内，第 1 至 5 格为吹力，更远区域为吸力。（若缩放后作用范围不足 5 格，则没有吸力）

## 旋转喷火器

`M_FlamethrowerRotate`

## 定向喷火器

`M_FlamethrowerStatic`

## 浮板

`M_FloatBoard`

常根据颜色称为绿板。

## 跳板

`M_JumpBoard`

常根据颜色称为红板。

## 弹盒

`M_JumpBox`

## 激光

`M_Laser`

激光能提供一定推力，杀死纸球，点燃木球，使冰球以外的球种快速损失耐久。

性质：

- 固定元件。
- 激光推力沿光路方向，作用点为物体被照射的点。
- 同一物体受到多束激光照射时，受力遵从向量合成法则。
- 玩家球受到多束激光照射时，受到的伤害叠加。
- 激光造成的伤害属于可恢复耐久（浅蓝条）。_不包括木球被点燃损失的耐久。_
- 激光不会引爆 TNT。_但被推到撞墙还是会炸的。_
- 木球在水池中不会被激光点燃。
- 激光可以在水中传播，也可以自由入水出水。
- 激光对冰球、道具冰球和冰管道完全无效，也不提供推力。_但是会被冰块（已被移除）和冰球变球器自带的冰块阻挡。_
- 激光遇到除**钢球变球器**外的所有钢质物体会反射。_护栏、路灯、磁铁是事故多发地。_
- 激光会被补给物和功能方块阻挡。
- **激光缩放、反射、合束时判定非常复杂，请在需要用到这些性质时自行测试。**

::: details 以下是部分测试内容

- 无任何干扰时，激光的射程为 30 格，沿 `Z` 轴缩放时，该范围随之改变。
- 光路发生反射，且反射点在 30 格以内时，激光总射程为 30 格，该范围**不随缩放改变**。
- 光路发生反射，且反射点在 30 格以外时，会发生严重影响使用的 BUG，请勿以此法使用。
- 两束激光相交时，若交点在两者的 30 格以内，会沿角平分线方向合成一束激光，推力和伤害与单束激光相同。三条光路总长为 60 格，该范围**不随缩放和反射改变。**
- 两束激光相交时，若交点在至少一者的 30 格以外，不会合束，互不影响。
- 同一束激光多次反射与自身相交时不会合束。
- 合束激光可以与其它激光继续合束，当共有 n 个激光发射器参与时，所有光路总长为 30n 格。
- 在激光合束后，各激光器剩余射程（与缩放有关）存在一条不显示的**幽灵激光**。幽灵激光的推力和伤害与单束激光相同，但不会反射或合束，会被任意物体截停。

:::

## 激光门

`M_LaserLockedDoor`

激光门在被激光照射时保持开启，在激光移除两秒后自动关闭。

性质：

- 固定元件。
- 会阻挡激光。
- 激光门关闭时，门中的可动物体（包括玩家球）将被挤出门外。

## 激光摆

`M_LaserPushLong` `M_LaserPushShort`

性质：

- 刚体，可绕一轴转动。
- 其它参见[激光](#激光)。

## 旋转激光

`M_LaserRotatingS*`

- 运动学元件，自动绕一轴转动。
- `S1` `S2` `S3` 的转速分别为 25deg/s，50deg/s，100deg/s。
- 其它参见[激光](#激光)。

## 上锁门

`M_LockedDoor`

常称为钥匙门。

## 磁球

`M_MagnetBall`

_该机关会与大量其它机关产生联动 BUG，慎用！_

## 钢琴

`M_Piano*`

## 活塞

`M_Pusher*`

## 栅栏

`M_PushTarget`

## 旋转摆

`M_RotateTarget`

常称为单摆。~~虽然但是大家都这么叫~~

## 沙袋

`M_SandBag`

## 落石

`M_StoneBlock`

由于 Ballance 中该机关 ID 为 `P_Modul_34`，因此也称为 34。

## 软木桥

`M_SuspensionBridge16` `M_SuspensionBridge8`

## 吊盘

`M_SuspensionCircle`

## 旋转吊盘

`M_SuspensionCircleRotating`

## T 板

`M_TBoardL` `M_TBoardS`

## TNT

`M_TNT`

## 传送门

`M_TransferDoor`

## 倒板

`M_TurnBoard1`

## 两翼板

`M_TurnBoard2`

## 跷跷板

`M_TurnBoard3`

## 木桶

`M_WoodenVat`
