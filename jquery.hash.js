/*
* Hash 1.0, jQuery plugin
* Repository: http://github.com/seinoxygen/jquery-hash
*
* Copyright(c) 2014, Pablo Cornehl
* http://www.seinoxygen.com
*
* Licensed under the MIT License
*/
(function($, window, undefined){  
	$.fn.hash = function(options) {
		
		var self = this;
		
		// Default config
		var defaults = {
			separator: '/',
			onChange: function(data){
			}
		};
		
		// Update all configs
		options = $.extend(true, {}, defaults, options);
		
		self.path = '';
		
		// Return all segments of the path
		self.segments = function() {
			return self.path.split(options.separator);
		}
		
		// return specific segment of the path
		self.segment = function(index) {
			var segments = self.segments();
			return segments[index];
		}		
		
		return self.on('hashchange', function() {
			self.path = window.location.hash.replace('#', '');
			options.onChange.call(this, self.path);
		});
	};
})(jQuery, window);