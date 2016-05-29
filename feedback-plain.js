var feedback = feedback || {};
(
	function() {
		/* Inner method to extract specific configurations.
		* Parameter is either jQuery object, or a selector string */
		var getConfigs = function(e) {
			var elem = (e instanceof jQuery) ? e : jQuery(e);
			if (elem.length == 0) return {};
			if (elem.length > 1) elem = elem.eq(0);
			var configs = {
				shake_interval : elem.attr('p-shake-interval') || 4000,
				bg_color : elem.attr('p-bg-color'),
				bg_alt_color : elem.attr('p-bg-alt-color'),
				item_bg_color : elem.attr('p-item-bg-color'),
				right : elem.attr('p-right'),
				bottom : elem.attr('p-bottom'),
				box_right : elem.attr('p-box-right'),
				box_bottom : elem.attr('p-box-bottom')
			};
			return configs;
		}
		
		
		/*** Initialise all feedback buttons ***/
		this._init = function() {
			/* Find feedback tag and render the button */
			jQuery('.feedback').append(jQuery('<i class="fa fa-commenting"></i>'))
				.after(jQuery('<div class="feedback-box" style="display:none;">'))
				.each(function(index) {
				
					/* Mark each feedback with an identity */
					jQuery(this).attr('fdid', index);
					/* Grab their specific configuration */
					var configs = getConfigs(jQuery(this));
					
				  	/* Apply specific positioning */
					if (configs.right) { jQuery(this).css('right', configs.right); }
					if (configs.bottom) { jQuery(this).css('bottom', configs.bottom); }
					if (configs.box_right) { jQuery(this)
						.next('.feedback-box').css('right', configs.box_right); }
					if (configs.box_bottom) { jQuery(this)
						.next('.feedback-box').css('bottom', configs.box_bottom); }
				
				
					/* If there is p-shake-interval, make it shake */
					var pid = 0;
					if (configs.shake_interval > 0) {
						pid = setInterval(function() {
							var fd = jQuery('.feedback[fdid="' + index + '"].shake');
							if (fd.length > 0) fd.removeClass('shake');
							else jQuery('.feedback[fdid="' + index + '"]').addClass('shake');
						}, configs.shake_interval / 2);
						jQuery(this).attr('p-shake-id', pid);
					}
				
					/* On click to open box and stop shake */				
					jQuery(this).click(function() {
						event.stopPropagation(); // prevent the html.click to hide feedback-box
						if (pid) clearInterval(pid);
						jQuery(this).next('.feedback-box').toggle();
					});
				
				
					/* Background-color applies to round button and also popup box */
					if (configs.bg_color) 
						jQuery(this)
							.css('background-color', configs.bg_color)
							.next('.feedback-box')
							.css('background-color', configs.bg_color);
				  	/* Alt-background-color applies when hover */
					if (configs.bg_alt_color) {						
						jQuery(this).hover(
							function() {
								jQuery(this).css('background-color', configs.bg_alt_color);
							}, function() {
								jQuery(this).css('background-color', configs.bg_color || '');
							});
					}
				});
			
			/* Hides all feedback boxes when click anywhere */
			jQuery('html').click(function() {
				jQuery('.feedback-box').hide();
			});
		};
		
		
		
		/*****************************************
		* Removes all items in set under given Feedback.
		* 		e : A feedback jQuery element or selector to it
		*		set : Removes all buttons in this set
		*****************************************/
		var removeItemsInSet = function(e, set) {
			if (e) {
				var elem = (e instanceof jQuery) ? e : jQuery(e);
				elem.next('.feedback-box').find('.feedback-segment-' + set).remove();
			}
		}
				
		
		
		/**********************************************
		* Creates a popup box showing message
		* 		msg : Message to show
		* 		title : Title of this message
		* NOT AVAILABLE IN THIS PLAIN VERSION
		***********************************************/
		this.createNotification = function(msg, title) {
		}
			
		
		/**********************************************
		* Creates standard message box. Standard message box will remove all
		* feedback items under set "main". The selector parameter "e" is needed only for 
		* this purpose, otherwise, it is ok to leave it blank.
		* 		e : A feedback jQuery element or selector to it
		* 		title : Title of this message box
		* 		charlimit : Character limit of the text area in this box
		* 		callback(msg) : Callback to execute when Send button is clicked, it will be given one
		*								parameter that is the text from textarea in message box. 
		* NOT AVAILABLE IN THIS PLAIN VERSION
		***********************************************/
		this.createMessageBox = function(e, title, charlimit, callback) {
		}
		
		
		/*****************************************
		* Adds a new click item to feedback box.
		* 		e : A feedback jQuery element or selector to it
		* 		icon_code : A fontawesome icon code name
		* 		text : Message on the item
		* 		set : Allocate this item to a set name
		* 		callback : callback upon click on this item
		*****************************************/
		var baseAddItem = function(e, icon_code, text, set, callback) {
			var elem = (e instanceof jQuery) ? e : jQuery(e);
			
			/* Append the new item to bottom of box */
			var items = elem.next('.feedback-box').append(jQuery(
				'<div class="feedback-segment feedback-segment-' + set + '">'
				+	'<i class="fa fa-' + icon_code + '"></i>'
				+		text
				+ '</div>'
			))
			.find('.feedback-segment');

			/* Re-tag the first and last item class to ensure only they have rounded corners */
			items.removeClass('first')
				.removeClass('last')
				.first().addClass('first')
				.nextAll('.feedback-segment').last().addClass('last');
			
			/* Set a callback on click if it is defined */
			if (callback) items.last().click(function() { callback(); });
			
			/* New segment added, have to adjust its color if parameters differ */
			var configs = getConfigs(elem);
			if (configs.item_bg_color) items.css('background-color', configs.item_bg_color);
			if (configs.bg_alt_color) items.hover(
				function() { jQuery(this).css('background-color', configs.bg_alt_color); },
				function() { jQuery(this).css('background-color', configs.item_bg_color || ''); }
			);
			
		};
		
		/*****************************************
		* Adds new click item with Tick/Cross/Mail icon to feedback box.
		* 		e : A feedback jQuery element or selector to it
		* 		text : Message on the item
		*		set : Allocate this item to a set name, you can then later delete all buttons in this set in a single function.
		* 		callback : callback upon click on this item
		*****************************************/
		this.addItem = function(e, icon_code, text, set, callback) { baseAddItem(e, icon_code, text, set, callback); }
		
		
		/*****************************************
		* Removes all items in set under given Feedback.
		* 		e : A feedback jQuery element or selector to it
		*		set : Removes all buttons in this set
		*****************************************/
		this.removeItemsInSet = function(e, set) { removeItemsInSet(e, set); }
	}
).apply(feedback);