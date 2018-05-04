### This repo is no longer maintained. If you would like to take over ownership please [get in touch](mailto:&#103;&#105;&#108;&#098;&#101;&#114;&#116;&#064;&#112;&#101;&#108;&#108;&#101;&#103;&#114;&#111;&#109;&#046;&#109;&#101;).

Infiniscroll
============

Infiniscroll is a jQuery plugin for infinite scrolling (also known as lazy loading, endless scrolling, autopager, endless pages etc.)
where new content is loaded via AJAX within the current page or content area as you scroll down. This is the same technique that
Twitter and Facebook use for their news feeds.

Usage
-----

Include the scripts in your HTML head:

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
<script src="infiniscroll.min.js"></script>
```

Set up your HTML something like the following (class names/IDs can be changed and passed into `infiniscroll()`):

```html
<div class="content">
	<h1>My Content</h1>
	<p>Lorem ipsum dolor sit amet...</p>

	<div class="pagination">
		...
		<a href="/page/2" class="next">Next</a>
	</div>
</div>
<div class="loading">Loading...</div>
```

Then simply hook up Infiniscroll:

```html
<script>
$(document).ready(function(){
	$('.content').infiniscroll();
});
</script>
```

Options
-------

Below is a list of all the options that you can pass into Infiniscroll and a description of what they do:

```javascript
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
```

How?
----

There is a little known feature in the `.load()` method that lets you specify the CSS selector of the html you want to include.
jQuery will load in any local URL, then parse the html and grab only the elements you’ve defined with your selector. For example:

```javascript
// Load all post divs from page 2 into an off-DOM div
$('.content').load('/page/2/ .content',function(){
	$(this).appendTo('.content'); // once they're loaded, append them to our content area
});
```

Why?
----

See [http://gilbert.pellegrom.me/jquery-infiniscroll-plugin](http://gilbert.pellegrom.me/jquery-infiniscroll-plugin)

Credits
-------

Infiniscroll was created by [Gilbert Pellegrom](http://gilbert.pellegrom.me) from [Dev7studios](http://dev7studios.com). Released under the MIT license.
