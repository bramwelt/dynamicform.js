/* --------------
 *  Dynamic Form  *
 * -------------- */

// Form Factory
//  for each form in $("#form") create and return dynamic form object

(function ($) {

  $.fn.dynamicForm = function () {
	// Get all the inputs from a form
	var inputs = this.find('input');
        // Assign each input as a property of the jQuery object
        //  created from the form
        for(j = 0; j < inputs.length; j++) {
	   this[inputs[j].name] = inputs[j];
	}
	return this;
  };
})(jQuery);