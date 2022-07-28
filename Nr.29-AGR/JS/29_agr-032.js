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
                    'msg': Drupal.t('Cod eroare: 45-007. Rind.(1135)>=Rind.(1136) pe coloana.@col', { '@col': i })
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
                    'msg': Drupal.t('Cod eroare: 45-009. Rind.(1218)>=Rind.(1219)  pe coloana.@col', { '@col': i })
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
                    'msg': Drupal.t('Cod eroare: 45-028. Rind.(2120)>=Rind.(2121)  pe coloana.@col', { '@col': i })
                });
            }
        }

        for (var i = 1; i <= 2; i++) {
            var R1630_C = Number(values["CAP1_R1630_C" + i]);
            var R1631_C = Number(values["CAP1_R1631_C" + i]);
            if (R1630_C < R1631_C && R1630_C != 0 && R1631_C != 0) {
                webform.errors.push({
                    'fieldName': 'CAP1_R1630_C' + i,
                    'weight': 1,
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
                    'weight': 3,
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
                    'weight': 1,
                    'msg': Drupal.t('Cod eroare: 45-037. Rind.1116 col.1,2 = Rind.1117  pe coloana.@col', { '@col': i })
                });
            }
        }


        var R1242_C3 = Number(values.CAP1_R1242_C3);
        var R1242_C4 = Number(values.CAP1_R1242_C4);
        var R1243_C1 = Number(values.CAP1_R1243_C1);
        var R1243_C2 = Number(values.CAP1_R1243_C2);
        var R1243_C3 = Number(values.CAP1_R1243_C3);
        var R1243_C4 = Number(values.CAP1_R1243_C4);
        var R1329_C3 = Number(values.CAP1_R1329_C3);
        var R1701_C2 = Number(values.CAP1A_R1701_C2);
        var R1330_C5 = Number(values.CAP1_R1330_C5);
        var R1330_C5 = Number(values.CAP1_R1330_C5);
        var R1117_C3 = Number(values.CAP1_R1117_C3);
        var R1117_C4 = Number(values.CAP1_R1117_C4);
        var R1302_C5 = Number(values.CAP1_R1302_C5);
        var R1119_C3 = Number(values.CAP1_R1119_C3);
        var R1119_C4 = Number(values.CAP1_R1119_C4);

        
        var R1440_C1 = Number(values.CAP1_R1440_C1);
        var R1442_C1 = Number(values.CAP1_R1442_C1);

        var R1411_C1 = Number(values.CAP1_R1411_C1);
        var R1412_C2 = Number(values.CAP1_R1412_C2);
        var R1413_C2 = Number(values.CAP1_R1413_C2);
        var R1414_C2 = Number(values.CAP1_R1414_C2);
        var R1415_C2 = Number(values.CAP1_R1415_C2);

        var R1630_C1 = Number(values.CAP1_R1630_C1);
        var R1631_C1 = Number(values.CAP1_R1631_C1);
        var R1501_C2 = Number(values.CAP1_R1501_C2);
        var R1502_C2 = Number(values.CAP1_R1502_C2);
        var R2100_C1 = Number(values.CAP2_R2100_C1);
        var R2110_C1 = Number(values.CAP2_R2110_C1);
        var R2120_C1 = Number(values.CAP2_R2120_C1);
        var R2200_C1 = Number(values.CAP2_R2200_C1);
        var R2300_C1 = Number(values.CAP2_R2300_C1);

        var R1418_C1 = Number(values.CAP1_R1418_C1);
        var R1419_C2 = Number(values.CAP1_R1419_C2);
        var R1420_C2 = Number(values.CAP1_R1420_C2);
        var R1421_C2 = Number(values.CAP1_R1421_C2);
        var R1422_C1 = Number(values.CAP1_R1422_C1);



        if (R1418_C1 < ( R1419_C2  +  R1420_C2  +  R1421_C2  +  R1422_C1)) {
            webform.errors.push({
                'fieldName': 'CAP1_R1418_C1',
                'weight': 1,
                'msg': Drupal.t('Cod eroare: 45-020. Rind.(1418) COL1 >= Rind.( 1419 + 1420 + 1421) pe COL2 + Rind.1422 COL1')
            });
        }





        if (R1630_C1 < (R1631_C1 + R1501_C2 + R1502_C2 + R2100_C1 + R2110_C1 + R2120_C1 + R2200_C1 + R2300_C1)) {
            webform.errors.push({
                'fieldName': 'CAP1_R1630_C1',
                'weight': 2,
                'msg': Drupal.t('Cod eroare: 45-040. Rind.1630 col.1 >= rind.1631 col.1 + rind.(1501+1502) col.2 + rind.(2100 + 2110 + 2120 + 2200 + 2300) col.1')
            });
        }




        if (R1411_C1 < (R1412_C2 + R1413_C2 + R1414_C2 + R1415_C2)) {
            webform.errors.push({
                'fieldName': 'CAP1_R1411_C1',
                'weight': 3,
                'msg': Drupal.t('Cod eroare: 45-019. Rind.(1411) COL1>=Rind.(1412+1413+1414+1415) pe COL2')
            });
        }



        if (R1631_C1 < (R1440_C1 - R1442_C1) ) {
            webform.errors.push({
                'fieldName': 'CAP1_R1631_C1',
                'weight': 4,
                'msg': Drupal.t('Cod eroare: 45-039. Rind.1631 col.1 >= rind.1440 - rind.1442 col.1')
            });
        }



        if (R1242_C3 < R1242_C4) {
            webform.errors.push({
                'fieldName': 'CAP1_R1242_C3',
                'weight': 5,
                'msg': Drupal.t('Cod eroare: 45-042. Rind.(1242) COL3 >= Rind.(1242) COL4')
            });
        }


        if (R1243_C1 < R1243_C2) {
            webform.errors.push({
                'fieldName': 'CAP1_R1243_C1',
                'weight': 6,
                'msg': Drupal.t('Cod eroare: 45-043. Rind.(1243) COL1 >= Rind.(1243) COL2')
            });
        }


        if (R1243_C3 < R1243_C4) {
            webform.errors.push({
                'fieldName': 'CAP1_R1243_C3',
                'weight': 7,
                'msg': Drupal.t('Cod eroare: 45-044. Rind.(1243) COL3 >=  Rind.(1243) COL4 ')
            });
        }

        if (R1329_C3 != R1701_C2  ) {
            webform.errors.push({
                'fieldName': 'CAP1_R1329_C3',
                'weight': 8,
                'msg': Drupal.t('Cod eroare: 45-016. Rind.(1329) COL3 = Rind.(1701) pe COL2 ')
            });
        }



        if (R1330_C5 != R1302_C5 ) {
            webform.errors.push({
                'fieldName': 'CAP1_R1330_C5',
                'weight': 9,
                'msg': Drupal.t('Cod eroare: 45-018. Rind.(1330) COL5 = Rind.(1302) pe COL5 ')
            });
        }



        if (R1117_C3 != R1117_C4 ) {
            webform.errors.push({
                'fieldName': 'CAP1_R1117_C3',
                'weight': 10,
                'msg': Drupal.t('Cod eroare: 45-005. Rind.(1117) COL3=Rind.(1117) COL4 ')
            });
        }

        if (R1119_C3 != R1119_C4 ) {
            webform.errors.push({
                'fieldName': 'CAP1_R1119_C3',
                'weight': 11,
                'msg': Drupal.t('Cod eroare: 45-005. Rind.(1119) COL3=Rind.(1119) COL4 ')
            });
        }


        for (var i = 0; i < 2; i++) {
            if (i != 4 && i != 9) {
                var col1 = Number(values["CAP2_R21" + (i < 2 ? ('0' + i) : i) + "_C1"]);
                var col2 = Number(values["CAP2_R21" + (i < 2 ? ('0' + i) : i) + "_C2"]);
                    
                if (col1 < col2) {
                    webform.errors.push({
                        'fieldName': 'CAP2_R21' + (i < 2 ? ('0' + i) : i) + '_C1',
                        'weight': 12,
                        'msg': Drupal.t('Cod eroare: 45-031 Rind.(2100 + … PÎNĂ LA  2302) COL1 >= Rind.(2100 + … PÎNĂ LA  2302) COL2 ')
                    });
                }
            }
        }


        webform.validatorsStatus.agr29 = 1;
        validateWebform();
    };
})(jQuery)