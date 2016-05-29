Feedback Button
==================================

Quick and easy way to plug in a feedback button with customizable feedback menu items.
Comes with it a default message box for text inputs and is able to take callbacks to handle feedback submission event.

<img style="height:300px; width:531px;" src="https://github.com/Kyeo1983/Feedback-Button/blob/master/sample/standard.gif"/>



Demo
=====

See a demo <a href="http://codepen.io/Kyeo1983/full/vKBjyQ" target="_blank">here</a>.



Usage
======

Because this plugin makes use of <a href="http://fancybox.net/" target="_blank">FancyBox</a> and <a href="https://github.com/CodeSeven/toastr" target="_blank">Toastr</a> to create its default message box and notification, you have to first import these two plugins.
Credits to these sources for these tools.

Next, import feedback.css and feedback.js for the base feedback content, 
To start using it, add this HTML &lt;div&gt; to your page:     &lt;div class="feedback"&gt;&lt;/div&gt;
And then run feedback._init() on Javascript.

If you do not require the default message box nor notification feature, then just import feedback-plain.css and feedback-plain.js.


Customization
===============

Set attributes to the &lt;div&gt; tag to configure the feedback button.

|Attribute  | Description  | Example|
|------------- | ------------- | -------------|  
|p-shake-interval  | Interval between each shake in ms. Input <= 0 to disable shake.  |  6000|
|p-bg-color  | Background color of the button and box  | #1D4DDD|
|p-bg-alt-color  | Background color of button and box when hovered  | #4B83E7|
|p-item-bg-color  | Background color of menu item  | #144BCC|
|p-right  | Absolute right of button positioning of button from window | 560px|
|p-bottom  | Absolute bottom of button positioning of button from window | 200px|
|p-box-right  | Absolute right of box positioning of button from window | 540px|
|p-box-bottom  | Absolute bottom of box positioning of button from window | 260px|