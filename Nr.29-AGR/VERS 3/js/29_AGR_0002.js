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

    /*webform.afterLoad.bns_split_tables = function() {
      if (Drupal.settings.mywebform.preview) {
        if (typeof(split_tables) == "function") {
          split_tables();
        }
      }
    }*/
})(jQuery)

webform.validators.agr29 = function (v, allowOverpass) {
    var values = Drupal.settings.mywebform.values;




    for (var i = 1; i <= 5; i++) {
        var R1135_C = Number(values["CAP1_R1135_C" + i]);
        var R1136_C = Number(values["CAP1_R1136_C" + i]);
        if (R1135_C < R1136_C && R1135_C != 0 && R1136_C != 0) {
            webform.errors.push({
                'fieldName': 'CAP1_R1135_C' + i,
                'weight': 1,
                'msg': Drupal.t('Cod eroare: 45-007. Rind.(1135)>=Rind.(1136) pe coloana.@col', { '@col': i })
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