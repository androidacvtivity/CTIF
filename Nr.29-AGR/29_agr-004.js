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


        for (var i = 1; i <= 5; i++) {
            var R1135_C1 = Number(values["CAP1_R1135_C" + i]);
            var R1136_C1 = Number(values["CAP1_R1136_C" + i]);
            if (R1135_C1 < R1136_C1 && R1135_C1 != 0 && R1136_C1 != 0) {
                webform.errors.push({
                    'fieldName': 'CAP1_R1135_C' + i,
                    'weight': 1,
                    'msg': Drupal.t('Cod eroare: 45-007 Rind.(1135)>=Rind.(1136) pe coloana.@col', { '@col': i })
                });
            }
        }

        for (var i = 1; i <= 4; i++) {
            var R1218_C1 = Number(values["CAP1_R1218_C" + i]);
            var R1219_C1 = Number(values["CAP1_R1219_C" + i]);
            if (R1218_C1 < R1219_C1 && R1218_C1 != 0 && R1219_C1 != 0) {
                webform.errors.push({
                    'fieldName': 'CAP1_R1218_C' + i,
                    'weight': 1,
                    'msg': Drupal.t('Cod eroare: 45-009 Rind.(1218)>=Rind.(1219)  pe coloana.@col', { '@col': i })
                });
            }
        }


        for (var i = 1; i <= 5; i++) {
            var R2120_C = Number(values["CAP2_R2120_C" + i]);
            var R2121_C = Number(values["CAP2_R2121_C" + i]);
            if (R2120_C < R2121_C && R2120_C != 0 && R2121_C != 0) {
                webform.errors.push({
                    'fieldName': 'CAP2_R2120_C' + i,
                    'weight': 1,
                    'msg': Drupal.t('Cod eroare: 45-028 Rind.(2120)>=Rind.(2121)  pe coloana.@col', { '@col': i })
                });
            }
        }


        webform.validatorsStatus.agr29 = 1;
        validateWebform();
    };
})(jQuery)