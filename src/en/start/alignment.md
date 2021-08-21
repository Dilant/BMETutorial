# Alignment

::: danger

**This section includes critical strategies that contributes to a productive workflow for quality map making. It is recommended to try the techniques out as you read.**

DO NOT SKIP THIS SECTION!
DO NOT SKIP THIS SECTION!

:::

## Coordinate Alignment

Go over to the `Inspector` tab and type in the parameter of an object. Simple and straightforward. ~~Where's my calculator?~~

Often applied on irregular shaped objects such as decoration or machinery.

## Vertex Alignment

Hold down `V` to enable, release to disable.

**Under moving mode**，press and hold `V`, mouse pointer will attach to the nearest vertex. Then press and hold `Left Mouse Button` and perform a drag, the aforementioned vertex will attach to another vertex belongs to another object. Release `Left Mouse Button`, then release `V` to apply changes.

Often applied when aligning block shaped objects such as road, wood boards and wood box, and concatenating iron rails.

![a gif showing how to perform a vertex alignment](/images/vertex-alignment-example.gif)

::: tip

- Multiple object can be selected to perform alignment simultaneously. Their relative position will remain unchanged.
- The selectable vertices includes all the ones on the mesh of the object, which may include excessive ones at where the textures meet. In most cases, only the ones at the outside of the object are used.

:::

## Vertex Alignment + Quantization

Perform a vertex alignment first, then fine tune the position using [quantization](/start/basics.md#量化).

Often applied ~~on pixelated/chessboard map~~ when determining location a unit apart from a certain object.

## Vertex Alignment + Coordinate Alignment

Perform a vertex alignment to nail down the coordinate of an axis or two, then perform a coordinate alignment to tune the rest.

Often applied on the connection of road and iron rails, and for fine tuning purposes.

## Cheat Alignment

Add an arbitrary object to the scene as a pivot(usually a single block of road), then align other object with it by vertex. Delete that auxiliary object when finished.

Often applied when moving objects in a batch(for instance, a whole section) to a specific location, which related to some existing objects.

## Duplicate + Quantization

When an identical object is nearby, [duplicate that in place](/start/basics.md#复制元件), then [perform a quantized move](/start/basics.md#量化) to pinpoint the destination, will likely save you a lot of hassle.(Especially those having the same posture!)

Specially, when a lot of identical objects are required to be placed orderly(e.g. ~~大恒方尖碑~~ chessboard), this method will come in real handy.

::: tip

This method can also be useful to create the auxiliary objected for cheat alignment! Try to mix and match those methods, and connect the dots as you progress.

:::
