# Typescript Basic Sorting

This app will sort numbers, characters, linked list

## Table of contents

- [Packages Used](#packages-used)
- [To Execute this app](#to-execute-this-app)
- [Folder Structure](#folder-structure)

## Packages Used

nodemon
concurrently

## To Execute this app

Package.json Scripts - write the following script
"scripts": {
"start:build": "tsc -w",
"start:run": "nodemon build/index.js",
"start": "concurrently npm:start:\*"
},

On git bash: npm start -> runs every npm start:pattern scripts // no space between start, :, and pattern

## Folder Structure

Sort (Root Directory)

- build // all compiled files will go here
  - the below 5 files but in js
- src
  - index.ts // instantiates child classes (bottom 3) w/ num, sorts them appropriately
  - Sorter.ts // abstract parent class -> give sorting method to children classes (3 below)
  - CharactersCollection.ts // child class, characters, can give length, compare, and swap methods
  - NumbersCollection.ts // child class, numbers, can give length, compare, and swap methods
  - LinkedList.ts // child class, linked list, can give length, compare, and swap methods
