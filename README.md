jquery.hash [![Code Climate](https://codeclimate.com/github/seinoxygen/jquery-hash.png)](https://codeclimate.com/github/seinoxygen/jquery-hash)
===========

Simple plugin to handle url hash changes.

## Installation

Include script *after* the jQuery library.

```html
<script src="/path/to/jquery.hash.js"></script>
```

## Initialize

```javascript
$(window).hash();
```

#### With callbacks
```javascript
$(window).hash({
	onChange: function(path){
		alert('The new path is: ' + path);
	}
});
```