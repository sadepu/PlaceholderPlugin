/*! Placeholder plugin for jQuery */
(function (jQuery) {
    var testAttribute = function (element, attribute) {
        var test = document.createElement(element);
        if (attribute in test)
            return true;
        else
            return false;
    }
    $.fn.applyPlaceholder = function () {
        $element = $(this);
        var demo = $element[0];
		var elementTag = (demo.tagName).toLowerCase();
        var placeholder = $(this).attr('placeholder');
		var hasPlaceholder = placeholder ? true : false;
		if(!hasPlaceholder){
			return;
		}
        demo.style.color = "gray";
        var isEdited = demo.value ? true : false;
        if (!testAttribute('input','placeholder')) {
            $(this).attr({ 'place-holder': $(this).attr('placeholder') }).removeAttr('placeholder');
            demo.value = placeholder;
            demo.onfocus = function () {
                if (!isEdited){ this.value = ""; this.style.color = "black"; isEdited = true; }
            }

            demo.onblur = function () {
                if (this.value === ""){ this.value = placeholder; this.style.color = "gray"; isEdited = false; }
            }
        } else {
			demo.onfocus = function () {
				if (!isEdited){ $(this).removeAttr('placeholder'); isEdited = true; }
			}

			demo.onblur = function () {
				if (this.value === ""){ $(this).attr({'placeholder' : placeholder}); isEdited = false; }
			}
        }
    };
	
	$.fn.applyPlaceholderForAll = function () {
		
		$(this).children().each(function(){
			if($(this).children().length > 0){
				$(this).applyPlaceholderForAll(); return;
			}else{
				$(this).applyPlaceholder(); return;
			}
		});
	};

})(jQuery);
