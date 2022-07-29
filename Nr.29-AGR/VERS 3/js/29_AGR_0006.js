(function ($) {

    var activity_options_default_value = '';
  

    Drupal.behaviors.agr29 = {
        attach: function (context, settings) {
            jQuery('input.numeric').on('keypress', function (event) {
                if (isNumberPressed(this, event) === false) {
                    event.preventDefault();
                }
            });

            jQuery('input.float').on('keypress', function (event) {
                if (isNumberPressed(this, event) === false) {
                    event.preventDefault();
                }
            });
        }
    }


})(jQuery)

webform.validators.agr29 = function (v, allowOverpass) {
    var values = Drupal.settings.mywebform.values;




    for (var i = 1; i <= 5; i++) {
        var R1135_C = Number(values["CAP1_R1135_C" + i]);
        var R1136_C = Number(values["CAP1_R1136_C" + i]);
        if (R1135_C < R1136_C ) {
            webform.errors.push({
                'fieldName': 'CAP1_R1135_C' + i,
                'weight': 1,
                'msg': Drupal.t('Cod eroare: 45-007. Rind.(1135)>=Rind.(1136) pe coloana.@col', { '@col': i })
            });
        }
    }


    for (var i = 1; i <= 4; i++) {
        var R1218_C = Number(values["CAP1_R1218_C" + i]);
        var R1219_C = Number(values["CAP1_R1219_C" + i]);
        if (R1218_C < R1219_C) {
            webform.errors.push({
                'fieldName': 'CAP1_R1218_C' + i,
                'weight': 2,
                'msg': Drupal.t('Cod eroare: 45-009. Rind.(1218)>=Rind.(1219)  pe coloana.@col', { '@col': i })
            });
        }
    }

    for (var i = 1; i <= 5; i++) {
        var R2120_C = Number(values["CAP2_R2120_C" + i]);
        var R2121_C = Number(values["CAP2_R2121_C" + i]);
        if (R2120_C < R2121_C) {
            webform.errors.push({
                'fieldName': 'CAP2_R2120_C' + i,
                'weight': 3,
                'msg': Drupal.t('Cod eroare: 45-028. Rind.(2120)>=Rind.(2121)  pe coloana.@col', { '@col': i })
            });
        }
    }



    for (var i = 1; i <= 2; i++) {
        var R1630_C = Number(values["CAP1_R1630_C" + i]);
        var R1631_C = Number(values["CAP1_R1631_C" + i]);
        if (R1630_C < R1631_C) {
            webform.errors.push({
                'fieldName': 'CAP1_R1630_C' + i,
                'weight': 4,
                'msg': Drupal.t('Cod eroare: 45-036. Rind.1630 >= Rind.1631  pe coloana.@col', { '@col': i })
            });
        }
    }



    for (var i = 1; i <= 2; i++) {
        var R1701_C = Number(values["CAP1A_R1701_C" + i]);
        var R1702_C_SUM = Decimal(values["CAP1A_R1702_C" + i] || 0)
            .plus(values["CAP1A_R1703_C" + i] || 0)
            .plus(values["CAP1A_R1704_C" + i] || 0);
        if (R1701_C < R1702_C_SUM) {
            webform.errors.push({
                'fieldName': 'CAP1A_R1701_C' + i,
                'weight': 5,
                'msg': Drupal.t('Cod eroare: 45-028.  Rind.(1701)>=Rind.(1702+1703+1704) pe coloana.@col', { '@col': i })
            });
        }
    }



    for (var i = 1; i <= 2; i++) {
        var R1116_C = Number(values["CAP1_R1116_C" + i]);
        var R1117_C = Number(values["CAP1_R1117_C" + i]);
        if (R1116_C != R1117_C && R1116_C != 0 && R1117_C != 0) {
            webform.errors.push({
                'fieldName': 'CAP1_R1116_C' + i,
                'weight': 6,
                'msg': Drupal.t('Cod eroare: 45-037. Rind.1116 col.1,2 = Rind.1117  pe coloana.@col', { '@col': i })
            });
        }
    }


    //Sort warnings & errors
    webform.warnings.sort(function (a, b) {
        return sort_errors_warinings(a, b);
    });

    webform.errors.sort(function (a, b) {
        return sort_errors_warinings(a, b);
    });

    webform.validatorsStatus['agr29'] = 1;
    validateWebform();

}

function sort_errors_warinings(a, b) {
    if (!a.hasOwnProperty('weight')) {
        a.error_code = 9999;
    }

    if (!b.hasOwnProperty('weight')) {
        b.error_code = 9999;
    }

    return toFloat(a.error_code) - toFloat(b.error_code);
}