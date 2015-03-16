(function ($) {
    
    var pad = require("underscore.string/pad");
    
    $.fn.hexjs = function (options) {
        
        var settings = $.extend({
            bytesPerLine: 16,
            bytesPerGroup: 4
        }, options);
        
        return this.each(function () {
            
            var $viewer = $('div').add('hexjs'),
                $header = $('<div>').addClass('hexjs-header'),
                i;
            
            for( i=0; i < settings.bytesPerLine; i++ ) {
                $header.append( '0x' + pad(i.toString(16), 2, '0') );
            }
            
            $viewer.append($header);
            
            return $(this).append($viewer);
        });
    };
    
})(jQuery);
