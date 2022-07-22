(function ($) {
    var activity_options_default_value = '';
    Drupal.behaviors.inf1 = {
        attach: function (context, settings) {
            jQuery('input.numeric').keypress(function (event) {
                if (isNumberPressed(this, event) === false) {
                    event.preventDefault();
                }
            });

            jQuery('input[type=checkbox]').change(function () {
                var state = jQuery(this).is(':checked');
                var group = jQuery(this).attr('name');
                var pos = group.indexOf('_flag');
                var res = group.substr(0, pos !== false ? pos : 0);

                var lengthChecs = null
                jQuery('input[type=checkbox]').each(function () {
                    if (jQuery(this).attr('name').indexOf(res) !== -1) {
                        jQuery(this).removeAttr('checked');
                        lengthChecs++;
                    }
                });
                jQuery(this).prop('checked', state);
            });
        }
    };

    webform.validators.inf1 = function (v, allowOverpass) {
        var values = Drupal.settings.mywebform.values;

        var r100 = toFloat(values.dec_table1_row_r100c1);
        var r110 = toFloat(values.dec_table1_row_r110c1);
        var r112 = toFloat(values.dec_table1_row_r112c1);

        var r200 = toFloat(values.dec_table2_row_r200c1);
        var r201 = toFloat(values.dec_table2_row_r201c1);
        var r210 = toFloat(values.dec_table2_row_r210c1);
        var r220 = toFloat(values.dec_table2_row_r220c1);

        var r301 = toFloat(values.dec_table3_row_r301c1);
        var r304 = toFloat(values.dec_table3_row_r304c1);
        var r305 = toFloat(values.dec_table3_row_r305c1);
        var r310 = toFloat(values.dec_table3_row_r310c1);

        var r409 = toFloat(values.dec_table4_row_r409c1);
        var r410 = toFloat(values.dec_table4_row_r410c1);
        var r411 = toFloat(values.dec_table4_row_r411c1);

        if (r100 > 0 && r110 <= 0) {
            webform.errors.push({
                'fieldName': 'dec_table1_row_r110c1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 02-003. Daca Rind.100>0, atunci Rind.110>0')
            });
        } else if (r110 > 0 && r100 <= 0) {
            webform.errors.push({
                'fieldName': 'dec_table1_row_r100c1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 02-003. Daca Rind.110>0, atunci Rind.100>0')
            });
        } else if (r100 != r110) {
            webform.errors.push({
                'fieldName': 'dec_table1_row_r100c1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 02-026. Rind.100 = Rind.110')
            });
        }

        if (r112 > 0 && r200 <= 0) {
            webform.errors.push({
                'fieldName': 'dec_table2_row_r200c1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 02-004. Daca Rind.112>0, atunci Rind.200>0')
            });
        }

        if (r200 < r201) {
            webform.errors.push({
                'fieldName': 'dec_table2_row_r200c1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 02-005. Rind.200 >= Rind.201')
            });
        }

        if (r210 > 0 && r200 <= 0) {
            webform.errors.push({
                'fieldName': 'dec_table2_row_r200c1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 02-006. Daca Rind.210>0, atunci Rind.200>0')
            });
        }

        if (r301 > r305) {
            webform.warnings.push({
                'fieldName': 'dec_table3_row_r301c1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 02-028. Rind.301 <= Rind.305')
            });
        }

        if (r200 < r301) {
            webform.errors.push({
                'fieldName': 'dec_table2_row_r200c1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 02-029. Rind.200 >= Rind.301')
            });
        }

        if (r200 < r304) {
            webform.errors.push({
                'fieldName': 'dec_table2_row_r200c1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 02-030. Rind.200 >= Rind.304')
            });
        }

        if (values.dec_table2_row_r200c1 != '' && values.dec_table2_row_r220c1 == '') {
            webform.errors.push({
                'fieldName': 'dec_table2_row_r220c1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 02-034. Daca este Rind.200 Atunci trebue sa fie Rind.220')
            });
        }

        if (r310 > 0 && r301 <= 0) {
            webform.errors.push({
                'fieldName': 'dec_table3_row_r301c1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 02-035. Daca Rind.310>0 atunci Rind.301>0')
            });
        }

        if (r305 > 0 && r301 <= 0) {
            webform.warnings.push({
                'fieldName': 'dec_table3_row_r301c1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 02-036. Daca Rind.305>0 atunci Rind.301>0')
            });
        }

        if (r409 > 0 && r200 <= 0) {
            webform.errors.push({
                'fieldName': 'dec_table2_row_r200c1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 02-037. Daca Rind.409>0 atunci Rind.200>0')
            });
        }

        if (values.dec_table4_row_r410c1 != '' && r410 == r411) {
            webform.errors.push({
                'fieldName': 'dec_table4_row_r410c1',
                'index': 0,
                'msg': Drupal.t('Cod eroare: 02-038. Rind.410 <> Rind.411')
            });
        }

        if (!values.dec_group2_adres) {
            webform.warnings.push({
                "fieldName": "dec_group2_adres",
                "msg": Drupal.t('Câmpul nu este completat')
            });
        }

        webform.validatorsStatus.inf1 = 1;
        validateWebform();
    };
})(jQuery)