# Cooperative Mapping

## Reach a Consensus

Please everyone reach an agreement and tick all the boxes below:

- Map name and author name
- Form of cooperation
  - Segmenting (one mapper for one section)
  - Streaming (drafting → building → polishing → decorating)
- Blame for each part or link
- Serial numbers allocated to each mapper
  - This ensures that waypoints, triggers or portals of different sections won't conflict with each other
- Deadline and completion date

In order to improve cooperation efficiency, we also suggest these:

- Keep a consistent style of [start point](/en/start/road-locating-at-start-point.md) and [save point](/en/start/road-locating-at-save-point.md) layout
- Keep a consistent style of decorations (e.g. lights)
- Pack the save points of current and next section for easier integration
- Assign only one mapper to integrate everything

## Packing

`File → Export .bms File`

See: [Export `.bms` File](/en/start/release.md#export-bms-file)

::: tip

The `.bpk` format and `File → Pack Objects` function are deprecated.

:::

## Unpacking

`File → Unpack BMS`

Level info is not generated upon unpacking, so [add one manually](/en/start/basic-operation.md#create-level-info) before unpacking if needed.

Here's a bug that mesh of adjustable objects are not automatically updated. You can update them manually by [undo and redo](/en/start/basic-operation.md#undo-and-redo) once.

All save points and destinations are preserved, so remember to delete redundant ones.

::: tip

The `.bpk` format and `File → Unpack Objects` function are deprecated.

:::

## Map Testing

When it comes to maptest of cooperative maps, pay particular attention to these things besides [basic maptest criteria](/en/start/map-testing.md):

- Splicing of each part
- Sequence of save points
- Will the death zone of one part block the route of another part?
- Fully operational moving objects, triggers and portals

## Add contributors in Steam Workshop

- Make sure the uploader (creator) is Steam friend of all other cooperators (contributors)
- The uploader adds contributors to the map: Library → Ballex → View this Workshop → Your Files → Files You've Posted → _Map_ → Add / Remove Contributors
- A cooperator accepts the contributor invitation: Library → Ballex → View this Workshop → Your Files → Files You've Posted → _Map_ → Accept Contributor Invite
