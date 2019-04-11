
![Favicon](/img/favicon.ico) 
# Todo App

## Introduction

This Todo app was created with Vanilla JavaScript. It is a simple todo app that adds tasks to a list, deletes the tasks and marks them as done when necessary.

The HTML and CSS files were validated by the followings validators  without any errors or warnings.
- [W3C HTML Validator](https://jigsaw.w3.org/css-validator/)
- [W3C CSS Validator](https://validator.w3.org/)

## Overview

This is a simple project and it's organized as follows:
 - index.html 
 - README.md 
 - /css
   - style.css -> style sheet 
 - /img
   - favicon.png -> my logo
 - /src
   - app.js -> vanilla JavaScript file

## How does it work?

- Add a new task
  - When the user types a new task and clicks on 'Add', a new `li` item is added to the `ul` containing the new task.
- Delete a task
  - When the user clicks on the trash icon, the `li` item is removed from the `ul`.
- Finish task
  - When the user clicks on the task, a class `.done` is toggled, making the item grey and adding a line through if the class is added or making it back to normal if the class is removed.

## How to install and use it?

Considering it uses only vanilla JavaScript, HTML and CSS, it is not necessary to install additional features. 
Just download the files and double click on the index.html file.
It works fine in Chrome (Version 73.0.3683.86), Firefox (Version 66.0.2) and Safari (Version 12.0.3).
This game works in different sizes of screens as well.

## References

- [MDN Documentation](https://developer.mozilla.org)
- [Tutorial FEND Udacity by Mentor Burak Tilek](https://www.youtube.com/watch?v=bFbXyPlXmhM)
- [Code Explaining Tutorial](https://www.youtube.com/watch?v=b8sUhU_eq3g)
