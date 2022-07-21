(function ($) {

  var activity_options_default_value = '';
  var caem_sorted = false;

  Drupal.behaviors.agr9 = {
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

webform.validators.agr9 = function (v, allowOverpass) {
  var values = Drupal.settings.mywebform.values;

  for (var i = 1; i <= 8; i++) {
    var r02 = Number(values["CAP1_R02_C" + i]);
    var r03 = Number(values["CAP1_R03_C" + i]);
    if (r02 < r03 && r02 != 0 && r03 != 0) {
      webform.errors.push({
        'fieldName': 'CAP1_R02_C' + i,
        'weight': 1,
        'msg': Drupal.t('Cod eroare: 39-002 (Cap.1). Rind.02>=Rind.03 pe coloana.@col', { '@col': i })
      });
    }
  }

  for (var i = 1; i <= 8; i++) {
    var r06 = Number(values["CAP1_R06_C" + i]);
    var r07_11 = Decimal(values["CAP1_R07_C" + i] || 0)
      .plus(values["CAP1_R08_C" + i] || 0)
      .plus(values["CAP1_R10_C" + i] || 0)
      .plus(values["CAP1_R11_C" + i] || 0);
    if (r06 < r07_11) {
      webform.errors.push({
        'fieldName': 'CAP1_R06_C' + i,
        'weight': 2,
        'msg': Drupal.t('Cod eroare: 39-003 (Cap.1). Rind.06>=Rind.07+Rind.08+Rind.10+Rind.11 pe coloana.@col', { '@col': i })
      });
    }
  }

  for (var i = 1; i <= 8; i++) {
    var r15 = Number(values["CAP1_R15_C" + i]);
    var r16_17 = Decimal(values["CAP1_R16_C" + i] || 0)
      .plus(values["CAP1_R17_C" + i] || 0);
    if (r15 < r16_17) {
      webform.errors.push({
        'fieldName': 'CAP1_R15_C' + i,
        'weight': 3,
        'msg': Drupal.t('Cod eroare: 39-004 (Cap.1). Rind.15>=Rind.16+Rind.17 pe coloana.@col', { '@col': i })
      });
    }
  }

  for (var i = 1; i <= 8; i++) {
    var r19 = Number(values["CAP1_R19_C" + i]);
    var r20_21 = Decimal(values["CAP1_R20_C" + i] || 0)
      .plus(values["CAP1_R21_C" + i] || 0);
    if (r19 < r20_21) {
      webform.errors.push({
        'fieldName': 'CAP1_R19_C' + i,
        'weight': 4,
        'msg': Drupal.t('Cod eroare: 39-006 (Cap.1). Rind.19>=Rind.20+Rind.21 pe coloana.@col', { '@col': i })
      });
    }
  }

  for (var i = 1; i <= 17; i++) {
    if (i != 4 && i != 9) {
      var col6 = Number(values["CAP1_R" + (i < 10 ? ('0' + i) : i) + "_C6"]);
      var col7_8 = Decimal(values["CAP1_R" + (i < 10 ? ('0' + i) : i) + "_C7"] || 0)
        .plus(values["CAP1_R" + (i < 10 ? ('0' + i) : i) + "_C8"] || 0);
      if (col6 < col7_8) {
        webform.errors.push({
          'fieldName': 'CAP1_R' + (i < 10 ? ('0' + i) : i) + '_C6',
          'weight': 5,
          'msg': Drupal.t('Cod eroare: 39-009 (Cap.1). Col.6>=Col.7+Col.8 pe rindul.@row', { '@row': i })
        });
      }
    }
  }

  for (var i = 1; i <= 17; i++) {
    if (i != 4 && i != 9) {
      var col5 = Number(values["CAP1_R" + (i < 10 ? ('0' + i) : i) + "_C5"]);
      var col8 = Decimal(values["CAP1_R" + (i < 10 ? ('0' + i) : i) + "_C8"] || 0);
      if ((col5 > 0 && col8 == 0)) {
        webform.errors.push({
          'fieldName': 'CAP1_R' + (i < 10 ? ('0' + i) : i) + '19_C8',
          'weight': 6,
          'msg': Drupal.t('Cod eroare: 39-011 (Cap.1). Col.5>0 iar Col8 trebuie sa fie >0 pe rindul.@row', { '@row': i })
        });
      }
      else if ((col5 == 0 && col8 > 0)) {
        webform.errors.push({
          'fieldName': 'CAP1_R' + (i < 10 ? ('0' + i) : i) + '19_C5',
          'weight': 6,
          'msg': Drupal.t('Cod eroare: 39-011 (Cap.1). Col.8>0 iar Col5 trebuie sa fie >0 pe rindul.@row', { '@row': i })
        });
      }
    }
  }

  for (var i = 1; i <= 17; i++) {
    if (i != 4 && i != 9) {
      var col1 = Number(values["CAP1_R" + (i < 10 ? ('0' + i) : i) + "_C1"]);
      var col7 = Decimal(values["CAP1_R" + (i < 10 ? ('0' + i) : i) + "_C7"] || 0);
      if ((col1 > 0 && col7 == 0) || (col1 == 0 && col7 > 0)) {
        webform.errors.push({
          'fieldName': 'CAP1_R' + (i < 10 ? ('0' + i) : i) + '_C7',
          'weight': 7,
          'msg': Drupal.t('Cod eroare: 39-013 (Cap.1). Col.1 > 0 atunci Col.7 > 0 si invers pe rindul.@row', { '@row': i })
        });
      }
    }
  }


  /*for (var h = 2; h < 13; h++) {
    var fields_caem = values["dec_caem_c" + h];
    for (var m = 2; m < 13; m++) {
      if (h != m) {
        var comparable_caem = values["dec_caem_c" + m];
        if (comparable_caem == fields_caem && comparable_caem !== "") {
          webform.errors.push({
            'fieldName': 'dec_caem_c' + m,
            'weight': 25,
            'msg': Drupal.t('Cod eroare: 07-025 (Cap.1). Cod CAEM nu trebuie sa se repete')
          });
        }
      }
    }
  }*/


  //Sort warnings & errors
  webform.warnings.sort(function (a, b) {
    return sort_errors_warinings(a, b);
  });

  webform.errors.sort(function (a, b) {
    return sort_errors_warinings(a, b);
  });

  webform.validatorsStatus['agr9'] = 1;
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