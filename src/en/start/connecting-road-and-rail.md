# Connecting Road and Rail

![](/images/joints-example.jpg)

The recommendation for beginners are:

- Line up the central line of the rail with the one of the road
- Align the upper bound of rail to the upper surface of road
- No direct connection between a rail slope and a horizontal road
- Add an auxiliary single rail for double rails

## Double Rails

- Add a `10_AdjustableRoad → [A]DoubleRail` to the scene, and line it up with the road
- Add a `10_AdjustableRoad → [A]SingleRail` to the scene as the auxiliary single rail, also line it up with the road
- Set its parameter as `length = 0.8` `height = -0.2`

After those settings, the auxiliary rail should have a slope of approximately 15°. You may tweak its parameters as you like.

## Double Rail Arcs

Out of aesthetics and simplicity, attaching double rail arcs directly to road is not recommended. Consider attaching short straight double rails first.

- Align `10_AdjustableRoad → [A]DoubleRail` to the road
- Align two rail arcs to each rail of the double rail accordingly
- Remove the straight double rail
- Add `10_AdjustableRoad → [S]SingleRailNoAlign` to the scene, and line it up with the road ([Vertex Alignment + Coordinate Alignment](/en/start/alignment.md#vertex-alignment-coordinate-alignment))
- Tweak the parameters of the auxiliary rail according to actual situation

For reference, the parameters of the two auxiliary rail in the header are:

- `length = 0.9` `height = -0.2` `rotationY = 45°`
- `length = 0.9` `height = -0.2` `rotationX = 30°`
