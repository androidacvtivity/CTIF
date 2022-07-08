(function($) {
    Drupal.behaviors.ei78 = {
      attach: function(context, settings) {
        jQuery('table').on('keypress', 'input.float, input.numeric', function(event) {
          if (isNumberPressed(this, event) === false) {
            event.preventDefault();
          }
        });
      }
    }
}