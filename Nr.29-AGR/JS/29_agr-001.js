(function ($) {
    var activity_options_default_value = '';
    Drupal.behaviors.agr29 = {
        attach: function (context, settings) {
            jQuery('input.numeric').keypress(function (event) {
                if (isNumberPressed(this, event) === false) {
                    event.preventDefault();
                }
            });

      
        }
    };

    webform.validators.agr29 = function (v, allowOverpass) {
        var values = Drupal.settings.mywebform.values;

        var r1135 = toFloat(values.CAP1_R1135_C1);
        var r1136 = toFloat(values.CAP1_R1136_C1);
       


        if (r1135 < r1136 ) {
            webform.errors.push({
                'fieldName': 'CAP1_R1135_C1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 02-003. Daca Rind.100>0, atunci Rind.110>0')
            });
        } 
        
        
   
        webform.validatorsStatus.agr29 = 1;
        validateWebform();
    };
})(jQuery)