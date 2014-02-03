/*
 * Infiniscroll v1.0
 * https://github.com/gilbitron/Infiniscroll
 *
 * Copyright 2014, Gilbert Pellegrom
 * Free to use and abuse under the MIT license.
 * http://opensource.org/licenses/MIT
 */

;(function($, window, document, undefined){

	var pluginName = 'infiniscroll',
		defaults = {
			navSelector: '.pagination',				// Selector for your static naivgation (this will be hidden)
			nextSelector: '.pagination a.next',		// Selector for the NEXT link (e.g. to page 2)
			loadingSelector: '.loading',			// Selector for the loading element
			pageFragment: '.content',				// Selector for the content you want to extract from the response
			scrollBuffer: 200,						// The scroll amount in px before the bottom of the page that Infiniscroll should start to load the next page
			scrollOnLoad: true,						// Should the window scroll to the position of the newly loaded content (if the user is at the bottom of the page)
			scrollOnLoadDistance: 200,				// The distance to scroll down when new content is loaded,
			scrollOnLoadSpeed: 500,					// The speed to scroll down when new content is loaded
			onInit: function(){},					// Callback after plugin has loaded
			beforeContentLoaded: function(link){},	// Callback before new content is loaded
			afterContentLoaded: function(html){}	// Callback after new content has been loaded
		};

	function Infiniscroll(element, options){
		this.el = element;
		this.$el = $(this.el);

		this.options = $.extend({}, defaults, options);

		this._isLoading = false;
		this._nextLink = null;

		this.init();
	}

	Infiniscroll.prototype = {

		init: function(){
			var $this = this;

			// Hide the pagination container
			$(this.options.navSelector).hide();
			// Setup the scroll event listener
			$(window).on('scroll', function(){
				$this.doScroll.apply($this);
			});

			this.options.onInit.call(this);
		},

		doScroll: function(){
			// Only load one page at a time
			if(this._isLoading) return;

			// Do we need to load the next page?
			if($(window).scrollTop() >= ($(document).height() - $(window).height() - this.options.scrollBuffer)){
				this._isLoading = true;

				// Get the next page link
				if(!this._nextLink){
					this._nextLink = $(this.options.nextSelector);
				}

				if(this._nextLink.attr('href')){
					this.options.beforeContentLoaded.call(this, this._nextLink);
					$(this.options.loadingSelector).show();

					// Setup "iscroll" for use in the load() callback
					var iscroll = this,
						url = this._nextLink.attr('href');

					// Add pageFragment to URL if required
					if(this.options.pageFragment)
						url += ' '+ this.options.pageFragment;

					// Load the next page into an off-DOM div
					$('<div/>').load(url, function(){
						var html = $(this).children(),
							shouldScroll = false;

						// If user is waiting at bottom of page?
						if(iscroll.options.scrollOnLoad && $(window).scrollTop() === $(document).height() - $(window).height())
							shouldScroll = true;

						// Process new content
						html.find(iscroll.options.navSelector).hide();
						iscroll._nextLink = html.find(iscroll.options.nextSelector);

						// Hide the loader
						$(iscroll.options.loadingSelector).hide();
						// Actually add our new content to the container
						html.appendTo(iscroll.el);

						// Scroll to the new content
						if(shouldScroll){
							$('html, body').animate({
								scrollTop: $(window).scrollTop() + iscroll.options.scrollOnLoadDistance
							}, iscroll.options.scrollOnLoadSpeed);
						}

						iscroll._isLoading = false;
						iscroll.options.afterContentLoaded.call(iscroll, html);
					});
				}
			}
		}

	};

	$.fn[pluginName] = function(options){
		return this.each(function(){
			if(!$.data(this, pluginName)){
				$.data(this, pluginName, new Infiniscroll(this, options));
			}
		});
	};

})(jQuery, window, document);