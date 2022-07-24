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

        var r1101 = toFloat(values.dec_table1_row_r1101c1);
        var r1102 = toFloat(values.dec_table1_row_r1102c1);
        var r1103 = toFloat(values.dec_table1_row_r1103c1);


        if (r1101 > 0 && r1102 > 0) {
            webform.errors.push({
                'fieldName': 'dec_table1_row_r1101c1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 02-003. Daca Rind.100>0, atunci Rind.110>0')
            });
        } 
        
        

        webform.validatorsStatus.agr29 = 1;
        validateWebform();
    };
})(jQuery)