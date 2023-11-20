# Map Testing

Hooray! You've just finished your map. It must be a great sense of accomplishment.
But before cheering up and call it a day, please test your map thoroughly before uploading to the workshop to ensure the quality of the map and a fluid player experience.

Check out how to use maptest mode [here](/en/start/basic-operation.md#map-testing).

## Flying Test

Tick all the boxes below:

- LevelInfo
- Concatenation and alignment
- Missing faces fixed
- Clipping and flickering fixed
- Object stacking and duplication fixed
  - Especially keys and doors
- Location of guard rails
- Coverage of death zone
  - Pay attention to sides or even ceiling under the circumstances of low-gravity, anti-gravity and super jump boxes
- Arrangement of life balls
  - Are they easily accessible?
  - Edge cases of accidentally obtaining multiple lives in one section, or even life farming, are avoided?
- Tolerance regarding prop ball and box maneuvering, and gap handling

And some extras:

- Performance optimization
  - Limit the scale of decorations
  - Keep your map size under 1MB if possible
- Style of decorations
  - Height of lights
  - Location of pillars
- Shortcut observation
  - Find out if there's any excessive shortcuts introduced by unexpected operations or routines, and determine whether to block them
  - Especially cross-section keys ~~Entering destination with 5 keys~~
- In-between death zone check
  - Proper coverage?
  - Accidental blockage of expected routes?
  - Be aware: **DO NOT use invisible blocks or death zones to block routes or shortcuts!**
- Verification of precise mechanisms
  - If precision are required by any specific mechanisms (e.g. automatic map), put them on extensive tests to ensure them working properly

## Test in Player Perspective

Don't use flying or skipping section functions for now, and walkthrough the whole map in player perspective.

Tick all the boxes below:

- Fully operational machinery
  - Don't repeat the mistakes of _<ruby>Ability Training 3<rt>能力训练 3</rt></ruby>_!
- Difficulty control
  - Avoid WTF moments
  - Avoid <ruby>first-attempt pitfalls<rt>初見殺し</rt></ruby>
  - Avoid before-the-finish-line troll
  - Avoid super-duper-long sections ~~<ruby>One NANFU battery is better than six others<rt>南孚电池，一节更比六节强</rt></ruby>~~
- Logic check
  - Ensure a complete chain of reasoning
  - Provide adequate hints when necessary
  - Avoid counter-intuitive requirements
    - Jumping down from the fence
    - Going across the bar of a 2-way board
    - Iron ball forcing a way towards the laser
    - Ice ball flying across a 2-unit-wide gap
    - Jump boxes with no force
    - Nonsense constant acceleration fields
    - Nonsense triggers
  - No more room escape clones
- Player FOV check
- Reach out to other map testers
