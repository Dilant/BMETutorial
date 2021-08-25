# Connecting road and rails

![](/images/joints-example.jpg)

The recommendation for beginners are:

- Line up the central line of the rail with the one of the road
- Align the upper bound of rail to the upper surface of road
- No direct connection between a rail slope and a horizontal road
- Add an auxiliary single rail for dual rails

## Dual rails

- Add a `10_AdjustableRoad → [A]DoubleRail` to the scene, line it up with the road
- Add a `10_AdjustableRoad → [A]SingleRail` to the scene as the auxiliary single, also line it up with the road
- Set its parameter as `length = 0.8` `height = -0.2`

After those settings, the auxiliary single should have a slope of 15°. You may also tweak aforementioned parameters as you like.

## Dual rail turns

Out of aesthetics and simplicity, attaching dual rail turns directly to road is not recommended. Consider attaching short straight dual rails first.

- Align `10_AdjustableRoad → [A]DoubleRail` to the road
- Align two curved rails to each rail of the dual rail accordingly
- Remove the straight dual rail
- Add `10_AdjustableRoad → [S]SingleRailNoAlign` to the scene to line up with the road ([Vertex Alignment + Coordinate Alignment](/start/alignment.md#顶点对齐-坐标对齐))
- Tweak the parameters for the auxiliary single according to actual situation

For reference, the parameters for the two auxiliary single in the header are as the following:

- `length = 0.9` `height = -0.2` `rotationY = 45°`
- `length = 0.9` `height = -0.2` `rotationX = 30°`
