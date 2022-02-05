# Goal

The goal is to create a memory game like [this one](https://heldersrvio.github.io/Memory-Card-Game/) where you have an array of images, shapes, or numbers in display. You play the game by selecting an item that you haven't selected before. Every time you select an item, the array of items gets shuffled into a random order. The idea is that the player has to rely on their memory to remember which items they've already selected. If they select an item that has already been selected, before selecting the last unique item, then the player loses. Every time the player selects a previously unselected item, they earn a point.

# Game Details

The game details will be a memory card game of 4 levels with 4, 8, 12, and 21 Tarot cards from easiest to hardest. The Player can choose at the beginning of the game.

There will be a score board and best score and if the player looses, there will be a modal that says how many points they got and if they want to restart the game. If they will, they also get a modal saying they've won and ask them if they want to reset the game.

# Components

Following will be the necessary React components that will be needed for this project.

## App

The root App component will keep the state of:

1. Current Score
2. Best Score
3. Game won? flag
4. Game Active Flag
5. Game Settings
   1. Dificulty Level
6. Game Modal Active

## Game Setup component

This component will start in the begining to show the game settings just as level and as well accept the name of the player.

## Cards Display

The card display will be the display for the card in play. It will take in the following props and keep the following state:

**Props**
1. Level - Game difficulty
2. setGameActive
3. setGameOver
4. setGameWon
5. setEndGameModal

**State**
1. Cards
   1. card id
   2. card image
   3. card order (maybe not even necessary)
   4. card name
2. Cards touched (by ID) - An Array of ids

**Functions**
clickHandler - This function should determine if the card has been touched before, if it has, then it ends the game, and displays the final modal. If not, the id is added to a list of cards touched. the scores should be sent back to App.js. And it should also reshuffle the cards.

There should also be a functionality to shuffle the order or the cards in play, keeping in mind to only shuffle and display the cards currently in play. For example, if the player is playing on the easy level with 4 cards, the shuffle function should only reshuffle those cards. This leads me to believe that there will be an array of cards that are a reference and an array of cards that are currently active in play.

## Modal Win or Lose Component

In the end of the game, there will be a modal that shows wether you've won or lost the game. As well as giving the player the option to play a new round.

# Modules

## CardModules

This module should have the following functions:

1. load initial standing of the cards.
2. a funtion that shuffles the cards it's been given and returns the result.

