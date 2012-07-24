/* -------------- *
 *  Dynamic Form  *
 * -------------- */

// Form Factory
//  for each form in $("#form") create and return dynamic form object

(function ($) {
   // Contructor
   var DynamicForm = function(self) {
      return $.fn.dynamicForm.setup(self);
   };

   // Real Constructor
   DynamicForm.prototype.setup = function(self) {
      // Get all the inputs from a form
      var inputs = self.find('input');

      // Create a list to hold the inputs
      self.inputs = {}
      self.inputs.length = inputs.length

      // Assign each input as a property of the jQuery object
      //  created from the form
      for( var j = 0; j < inputs.length; j++) {
         // Allow the user to define the property to use.
         var input = inputs[j];
         var property = self.opts.property;

         // Each form element will be accessable by the property
         // attribute chosen by dynamicForm.opts
         self[input[property]] = inputs[j];

         // For easy iterability, append each input property attribute
         // to a list. (Notice the self)
         self.inputs[j] = input[property]; 
      }

      return self;
   };

   DynamicForm.prototype.print = function() {

   };

   var methods = {
      init: function(options) {
            var opts = $.extend({}, $.fn.dynamicForm.defaults, options);
            this.opts = opts;
            return DynamicForm(this);
      },
   };

 
   $.fn.dynamicForm = function (method) {
      if ( methods[method] ) {
         return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
      } else if ( typeof method === 'object' || ! method ) {
         return methods.init.apply( this, arguments );
      } else {
         $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
      }  
   };

   $.fn.dynamicForm.defaults = {
      'property': 'name',
      //'property': 'id',
   };

})(jQuery);
