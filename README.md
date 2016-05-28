Feedback Button
==================================

Quick and easy way to plug in a feedback button with customizable feedback menu items.
Comes with it a default message box for text inputs and is able to take callbacks to handle feedback submission event.

<img src="https://github.com/Kyeo1983/"/>



Demo
=====

See a demo <a href="http://codepen.io/Kyeo1983/full/vKBjyQ" target="_blank">here</a>.



Usage
======

Because this plugin makes use of FancyBox and Toastr to create its default message box and notification, you have to first import these two plugins.
The plugins can be found at http://fancybox.net/ and at https://github.com/CodeSeven/toastr. Credits to these sources for these tools.
Next, import feedback.css and feedback.js for the base feedback content, 
To start using it, add this HTML &lt;div&gt; to your page:     &lt;div class="feedback"&gt;&lt;/div&gt;
And then run feedback._init() on Javascript.


Customization
===============

Set attributes to the &lt;div&gt; tag to configure the scoreboard number.

|Attribute  | Description  | Example|
|------------- | ------------- | -------------|  
|data-scorer-digits  | Number of digits  |  2|
|data-divider-size  | Size of horizontal divider running across the board  | 2|
|data-divider-color  | Color of frame and horizontal divider  | white|
|data-edge-color  | Color of card frame  | grey|
|data-edge-size  | Thickness of card frame  | 8|
|data-bg-color  | Background color of card  | black|
|data-color  | Color of number  | red|
|data-font-size  | Size of number  | 8em|
|data-card-width  | Width of each card  | 120|
|data-height  | Height of each card  | 8em|
