# CrystalsCollector

<p>
    <img alt="License: MIT" src="https://img.shields.io/static/v1?label=stack&message=front-end&color=important" target="_blank" />

  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/sandtr0ut/crystals-collector#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/sandtr0ut/crystals-collector/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/sandtr0ut/crystals-collector/issues">
    <img alt="Issues" src="https://img.shields.io/github/issues/sandtr0ut/crystals-collector" target="_blank" />
  </a>
  <a href="https://github.com/sandtr0ut/crystals-collector/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
  
</p>

Essentially, a practice exercise focused on use of jQuery for DOM interaction. The user is shown a random target number at the start of the game in the score box. There are four crystals that load onto the page. Each crystal has a randomly generated number with it as a property. This was the primary challenge of the assignment - figuring out how to associate a non-rendered value with an html-element so said value can be read and/or re-written by the jQuery/JavaScript game logic.
<br>

## Demo

See the deployed application [here](https://sandtr0ut.github.io/crystals-collector/)
<br>

## Development Tools Used

| Tool                           | Use        |
| ------------------------------ | ---------- |
| Page Structure                 | HTML       |
| Stylish, Responsive Styling    | CSS        |
| Logic                          | Javascript |
| HTML/Javascript Interaction    | JQuery     |
| Color Palette Selection        | Coolors.co |
| Image Editing and Optimization | Pixlr      |
| Code Validation                | W3C        |

<br>

## How the App Works

- There will be four crystals displayed as buttons on the page.

| ![ArgonCrystal](assets/images/ArgonCrystal.jpg) | ![blueCrystal](assets/images/blueCrystal.jpg) | ![greenCrystal](assets/images/greenCrystal.jpg) | ![orangeCrystal](assets/images/orangeCrystal.jpg) |

- The player will be shown a random number at the start of the game.

- When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

- The player wins if their total score matches the random number from the beginning of the game.

- The player loses if their score goes above the random number.

- The game restarts whenever the player wins or loses.

- When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

- The app keeps track of the number of games the player wins and loses (until the game is refreshed, that is).

 <br>
 
 
## Author

👤 **Ford Crosby**

- Website: [fordcrosby.com](fordcrosby.com)
- LinkedIn: [@FordCrosby](https://www.linkedin.com/in/fordcrosby/)
- Github: [@sandtr0ut](https://github.com/sandtr0ut)
- Twitter: [@FordCrosby](https://twitter.com/FordCrosby)
