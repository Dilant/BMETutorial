# Map testing

Hooray! You've just finished your map. It must be a great sense of accomplishment.
But before cheering up and call it a day, please test your map thoroughly before uploading to the Workshop to ensure the quality of the map and a fluid player experience.

Check out how to use maptest mode [here](/start/basic-operation.md#测试地图).

## Flying test

Tick all the boxes below:

- LevelInfo
- Cohesion and alignment
- Missing faces
- Clipping and flickering
- Object stacking and duplication (Especially keys and doors)
- Location of `GuardRail`(s)
- Coverage of `DeathBox`: Pay attention to sides or even ceiling under the circumstances of low-gravity, anti-gravity and/or JumpBox with large `jumpForce`
- Arrangement of `LifeBall`(s): Are they accessible? Edge cases of *accidentally* obtaining lives multiple times, or even life farming?
- Tolerance regarding prop ball/box maneuvering & gap handling

And some extras:

- Performance optimization: limit the scale of decorations. Keep your map size under 1MB if possible.
- Size of decoration: height of `Light`, location of `Pillar`
- Shortcut observation: Find out if there's any excessive shortcuts introduced by unexpected operations and/or routines, determine whether to block them. (Especially cross-section keys ~~finish with 5 keys~~)
- In-between `DeathBox` check: Proper coverage? Accidental blockage of expected routes? Be aware: **DO NOT use `S_InvisibleRoad` or `DeathBox` to block routes or shortcuts！**
- Verification of precise mechanisms: If precision are required by any specific mechanisms(e.g. automatic map), put them on extensive tests to ensure them working properly.

## Test in player's perspective

Do not use flying & Move2Next functionality for now, and walkthrough the whole map in player's perspective.

Tick all the boxes below:

- Fully operational machinery (Do not repeat the mistakes of Ability Training 3!)
- Difficulty control: Avoid wtf moments: no <ruby>first-attempt pitfalls<rt>初見殺し</rt></ruby> or before-the-finish-line troll. Also, avoid super-duper-long sections.
- Logic check: Ensure a complete chain of reasoning. Provide adequate hints when necessary. Avoid counter-intuitive requirements(go across the bar of `M_TurnBoard2`, nonsense triggers), no more "Room escape" clones (if you're not intended to)
- Player FOV check: Try out 4:3 resolutions, make sure all the necessary elements of puzzle solving are within player's field of view
- Reach out to other maptesters
