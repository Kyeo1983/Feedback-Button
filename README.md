Feedback Button
==================================

Quick and easy way to plug in a feedback button with customizable feedback menu items.
Comes with it a default message box for text inputs and is able to take callbacks to handle feedback submission event.

<img height="300px" width="531px" src="https://github.com/Kyeo1983/Feedback-Button/blob/master/sample/standard.gif"/>



Demo
=====

See a demo <a href="http://codepen.io/Kyeo1983/full/vKBjyQ" target="_blank">here</a>.



Usage
======

### Getting Started
You will need to import font-awesome for the use of icons in this plugin, get it <a href="http://fontawesome.io/" target="_blank">here</a>.
Because this plugin makes use of <a href="http://fancybox.net/" target="_blank">FancyBox</a> and <a href="https://github.com/CodeSeven/toastr" target="_blank">Toastr</a> to create its default message box and notification, you have to first import these two plugins.
Credits to the above sources for these tools.

Next, import feedback.css and feedback.js for the base feedback content, 
To start using it, add this HTML &lt;div&gt; to your page:     **&lt;div class="feedback"&gt;&lt;/div&gt;**
And then run **feedback._init()** on Javascript.

If you do not require the default message box nor notification feature, then just import feedback-plain.css and feedback-plain.js.


### Concept
You can have multiple feedback buttons on your screen, they operate independantly (though I don't see a reason to have many of them).
After initializing the feedback plugin, use the native functions to attach menu items to the feedback button.
You can define each menu item's text and after-click actions by passing in callbacks during definition.
We provide native functions to create default message box and toast notifications if you include the above 3rd party plugins.


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



Examples
======

Below are some examples of the customizations you can do to the feedback button.
These examples work off a sample feedback &lt;div&gt; tag with id="myFD" and assume that feedback._init() has been ran to initialize the plugin.

### Creating a positive feedback item with just a toast alert
Call **addPosFeedback** method and pass a selector to the feedback button, a text for the menu, the message in toast upon click and the title to the toast.
Default positive feedback item is grouped with the default negative feedback item. Clicking one of which will close off both options thereafter (nobody feedbacks positively and negatively at the same time right?).
See API for more details of this call.
```javascript
feedback.addPosFeedback('#myFD', 'Creating a normal positive button', 'Glad that you like it!', 'Thank you'); 
```
<img height="300px" width="531px" src="https://github.com/Kyeo1983/Feedback-Button/blob/master/sample/addPosFeedback.gif"/>


### Creating a negative feedback item with message box and a toast alert
Call **addNegFeedback** method and pass a selector to the feedback button, a text for the menu, the heading in message box, character limit for message box and the title to the toast.
Default negative feedback item is grouped with the default positive feedback item. Clicking one of which will close off both options thereafter (explained above in positive feedback section).
See API for more details of this call.
```javascript
feedback.addNegFeedback('#myFD', 'Standard dislike button', 'Sorry about it, tell me more?', 500, 'Your feedback is well received!'); 
```
<img height="300px" width="531px" src="https://github.com/Kyeo1983/Feedback-Button/blob/master/sample/standard.gif"/>


### Creating a contact us feedback item with message box and a toast alert
Call **addMsgFeedback** method and give a callback to define actions upon click. In this example, we make use of a native function to create the default message box and toast alerts.
See API for more details of this call.
```javascript
feedback.addMsgFeedback('#myFD', 'Message us', function() {
		feedback.createMessageBox('#myFD', 'Thank you for helping us improve', 500, 
			function(msg) { 
				feedback.createNotification(msg, 'Your feedback is well received!'); 
			} 
		); 
	}
);
```


### Creating a customized feedback item and action
Call generic **addItem** method. You can provide a font-awesome code for its icon and the text to appear on feedback box.
Give it a group name if applicable, see example on groups to find out what they do.
Finally provide a callback action for its click. In this example, we simply launch an alert with a message.
See API for more details of this call.
```javascript
feedback.addItem('#myFD', 'check-circle-o', 'Some Text', 'grpName', 
					 function() { alert('customize your action here'); });
```
<img height="300px" width="531px" src="https://github.com/Kyeo1983/Feedback-Button/blob/master/sample/customize.gif"/>


API
=======

### createMessageBox
Creates standard message box. Standard message box will remove all feedback items under set "main".
The selector parameter "e" is needed only for this purpose, otherwise, it is ok to leave it blank.
```
feedback.createMessageBox(e, title, charlimit, callback) 
e 				:		A feedback jQuery element or selector to it
title 			: 		Title of this message box
charlimit 		:		Character limit of the text area in this box
callback(msg) 	:		Callback to execute when Send button is clicked, it will be given one parameter that is the text from textarea in message box. 
```

### createNotification
Creates a popup (toast) box showing message.
```
feedback.createNotification(msg, title)
msg 			:		Message to show
title 			: 		Title of this message
```

### addPosFeedback
Adds new click item with Tick icon to feedback box. Generally used to receive a quick positive response with no need for any additional inputs. Customize its callback for any actions neccessary to record this feedback.
```
feedback.addPosFeedback(e, text, msg, title, callback)
e				:		A feedback jQuery element or selector to it
text			:		Message on the item
title 			: 		Title on notification
callback	 	:		Callback to execute when this feedback item is clicked. No additional parameter is given.
```
Example
```javascript
feedback.addPosFeedback(
	'#myFD', 'Creating a normal positive button', 
	'Glad that you like it!', 'Thank you', 
	function() { alert('You can call AJAX here.'); }
); 
```

		* 		e : A feedback jQuery element or selector to it
		* 		text : Message on the item
		*		set : Allocate this item to a set name, you can then later delete all buttons in this set in a single function.
		* 		callback : callback upon click on this item
		*****************************************/
		this.addPosFeedback = function
		this.addNegFeedback = function(e, text, msgboxTitle, msgBoxCharLimit, notifyTitle)
		this.addMsgFeedback = function(e, text, callback)
		this.addItem = function(e, icon_code, text, set, callback)
		
		/*****************************************
		* Removes all items in set under given Feedback.
		* 		e : A feedback jQuery element or selector to it
		*		set : Removes all buttons in this set
		*****************************************/
		this.removeItemsInSet