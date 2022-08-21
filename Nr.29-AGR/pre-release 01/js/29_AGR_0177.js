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



    if (!isNaN(Number(values.CAP1_R1242_C3))) {
        var R1242_C3 = Number(values.CAP1_R1242_C3);
    }

    if (!isNaN(Number(values.CAP1_R1242_C4))) {
        var R1242_C4 = Number(values.CAP1_R1242_C4);
    }

    if (!isNaN(Number(values.CAP1_R1243_C1))) {
        var R1243_C1 = Number(values.CAP1_R1243_C1);
    }

    if (!isNaN(Number(values.CAP1_R1243_C2))) {
        var R1243_C2 = Number(values.CAP1_R1243_C2);
    }

    if (!isNaN(Number(values.CAP1_R1243_C3))) {
        var R1243_C3 = Number(values.CAP1_R1243_C3);
    }

    if (!isNaN(Number(values.CAP1_R1243_C4))) {
        var R1243_C4 = Number(values.CAP1_R1243_C4);
    }


    if (!isNaN(Number(values.CAP1_R1329_C3))) {
        var R1329_C3 = Number(values.CAP1_R1329_C3);
    }



    if (!isNaN(Number(values.CAP1A_R1701_C2))) {
        var R1701_C2 = Number(values.CAP1A_R1701_C2);
    }


    if (!isNaN(Number(values.CAP1_R1330_C5))) {
        var R1330_C5 = Number(values.CAP1_R1330_C5);
    }



    if (!isNaN(Number(values.CAP1_R1117_C3))) {
        var R1117_C3 = Number(values.CAP1_R1117_C3);
    }

    if (!isNaN(Number(values.CAP1_R1117_C4))) {
        var R1117_C4 = Number(values.CAP1_R1117_C4);
    }



    if (!isNaN(Number(values.CAP1_R1119_C4))) {
        var R1119_C4 = Number(values.CAP1_R1119_C4);
    }


    if (!isNaN(Number(values.CAP1_R1440_C1))) {
        var R1440_C1 = Number(values.CAP1_R1440_C1);
    }

    if (!isNaN(Number(values.CAP1_R1442_C1))) {
        var R1442_C1 = Number(values.CAP1_R1442_C1);
    }

    if (!isNaN(Number(values.CAP1_R1411_C1))) {
        var R1411_C1 = Number(values.CAP1_R1411_C1);
    }


    if (!isNaN(Number(values.CAP1_R1412_C2))) {
        var R1412_C2 = Number(values.CAP1_R1412_C2);
    }


    if (!isNaN(Number(values.CAP1_R1413_C2))) {
        var R1413_C2 = Number(values.CAP1_R1413_C2);
    }


    if (!isNaN(Number(values.CAP1_R1414_C2))) {
        var R1414_C2 = Number(values.CAP1_R1414_C2);
    }




    if (!isNaN(Number(values.CAP1_R1415_C2))) {
        var R1415_C2 = Number(values.CAP1_R1415_C2);
    }

    if (!isNaN(Number(values.CAP1_R1630_C1))) {
        var R1630_C1 = Number(values.CAP1_R1630_C1);
    }


    if (!isNaN(Number(values.CAP1_R1631_C1))) {
        var R1631_C1 = Number(values.CAP1_R1631_C1);
    }


    if (!isNaN(Number(values.CAP1_R1501_C2))) {
        var R1501_C2 = Number(values.CAP1_R1501_C2);
    }


    if (!isNaN(Number(values.CAP1_R1502_C2))) {
        var R1502_C2 = Number(values.CAP1_R1502_C2);
    }



    if (!isNaN(Number(values.CAP2_R2100_C1))) {
        var R2100_C1 = Number(values.CAP2_R2100_C1);
    }

    if (!isNaN(Number(values.CAP2_R2110_C1))) {
        var R2110_C1 = Number(values.CAP2_R2110_C1);
    }

    if (!isNaN(Number(values.CAP2_R2120_C1))) {
        var R2120_C1 = Number(values.CAP2_R2120_C1);
    }



    if (!isNaN(Number(values.CAP2_R2200_C1))) {
        var R2200_C1 = Number(values.CAP2_R2200_C1);
    }

    if (!isNaN(Number(values.CAP2_R2300_C1))) {
        var R2300_C1 = Number(values.CAP2_R2300_C1);
    }


    if (!isNaN(Number(values.CAP1_R1418_C1))) {
        var R1418_C1 = Number(values.CAP1_R1418_C1);
    }

    if (!isNaN(Number(values.CAP1_R1419_C2))) {
        var R1419_C2 = Number(values.CAP1_R1419_C2);
    }


    if (!isNaN(Number(values.CAP1_R1420_C2))) {
        var R1420_C2 = Number(values.CAP1_R1420_C2);
    }

    if (!isNaN(Number(values.CAP1_R1421_C2))) {
        var R1421_C2 = Number(values.CAP1_R1421_C2);
    }

    if (!isNaN(Number(values.CAP1_R1422_C1))) {
        var R1422_C1 = Number(values.CAP1_R1422_C1);
    }

    var SUM_45_020 = R1419_C2 + R1420_C2 + R1421_C2 + R1422_C1

    if (R1418_C1 < (SUM_45_020)) {
        webform.errors.push({
            'fieldName': 'CAP1_R1418_C1',
            'weight': 23,
            'msg': Drupal.t('Cod eroare: 45-020. [@R1418_C1]- Rind.(1418) COL1 >= Rind.(1419+1420+1421) pe COL2+ Rind.1422 COL1 - [@SUM_45_020] ', { "@R1418_C1": R1418_C1, "@SUM_45_020": SUM_45_020 })
        });
    }







    var SUM_45_019 = R1412_C2 + R1413_C2 + R1414_C2 + R1415_C2

    if (R1411_C1 < SUM_45_019) {
        webform.errors.push({
            'fieldName': 'CAP1_R1411_C1',
            'weight': 22,
            'msg': Drupal.t('Cod eroare: 45-019. [@R1411_C1]- Rind.(1411) COL1> = Rind.(1412+1413+1414+1415) pe COL2 - [@SUM_45_019] ', { "@R1411_C1": R1411_C1, "@SUM_45_019": SUM_45_019 })
        });
    }



    // if (R1631_C1 < (R1440_C1 - R1442_C1)) {
    //     webform.errors.push({
    //         'fieldName': 'CAP1_R1631_C1',
    //         'weight': 10,
    //         'msg': Drupal.t('Cod eroare: 45-039. Rind.1631 col.1 >= rind.1440 - rind.1442 col.1')
    //     });
    // }



    // if (R1242_C3 < R1242_C4) {
    //     webform.errors.push({
    //         'fieldName': 'CAP1_R1242_C3',
    //         'weight': 11,
    //         'msg': Drupal.t('Cod eroare: 45-042. Rind.(1242) COL3 >= Rind.(1242) COL4')
    //     });
    // }


    // if (R1243_C1 < R1243_C2) {
    //     webform.errors.push({
    //         'fieldName': 'CAP1_R1243_C1',
    //         'weight': 12,
    //         'msg': Drupal.t('Cod eroare: 45-043. Rind.(1243) COL1 >= Rind.(1243) COL2')
    //     });
    // }


    // if (R1243_C3 < R1243_C4) {
    //     webform.errors.push({
    //         'fieldName': 'CAP1_R1243_C3',
    //         'weight': 13,
    //         'msg': Drupal.t('Cod eroare: 45-044. Rind.(1243) COL3 >=  Rind.(1243) COL4 ')
    //     });
    // }

    if (R1329_C3 != R1701_C2) {
        webform.errors.push({
            'fieldName': 'CAP1_R1329_C3',
            'weight': 21,
            'msg': Drupal.t('Cod eroare: 45-016. [@R1329_C3]- Rind.(1329) COL3 = Rind.(1701) pe COL2 - [@R1701_C2] ', { "@R1701_C2": R1701_C2, "@R1329_C3": R1329_C3 })
        });
    }


  


    // Start function 
    function row_45_004_CAP1(row) {
        var i;
        i = row;
        if (

            i == 1103 || i == 1104 || i == 1105 || i == 1106 || i == 1107 || i == 1110 || i == 1112 || i == 1113
            || i == 1115 || i == 1117 || i == 1119 || i == 1120 || i == 1121 || i == 1123 || i == 1124 || i == 1125
            || i == 1127 || i == 1133 || i == 1134 || i == 1135 || i == 1136 || i == 1140 || i == 1213 
            || i == 1216 || i == 1218 || i == 1219 || i == 1224 || i == 1225

        )
            return true;

    }



    // Start function 
    function row_45_004_CAP2(row) {
        var i;
        i = row;
        if (

            i == 2101 || i == 2102 || i == 2103 || i == 2201 || i == 2301 || i == 2302

        )
            return true;

    }


    // End function




    // Start 45-004

    for (var i = 1103; i <= 1240; i++) {
        {
            if (row_45_004_CAP1(i)) {

                if (!isNaN(Number(values["CAP1_R" + (i) + "_C3"]))) {
                    var col1 = Number(values["CAP1_R" + (i) + "_C3"]);
                }

                if (!isNaN(Number(values["CAP1_R" + (i) + "_C4"]))) {
                    var col2 = Number(values["CAP1_R" + (i) + "_C4"]);
                }


                if (col1 < col2) {
                    webform.errors.push({
                        'fieldName': 'CAP1_R' + (i) + '_C3',
                        'weight': 6,
                        'msg': Drupal.t('Cod eroare: 45-004 [@col1]  - Rind.(1103-1225) COL3 >= Rind.(1103-1225) COL4  - [@col2]', { "@col1": col1, "@col2": col2 })
                    });
                }
            }



        }
    }


    for (var i = 2101; i <= 2302; i++) {
        {
            if (

                (row_45_004_CAP2(i))



            ) {

                if (!isNaN(Number(values["CAP2_R" + (i) + "_C3"]))) {
                    var col1 = Number(values["CAP2_R" + (i) + "_C3"]);
                }

                if (!isNaN(Number(values["CAP2_R" + (i) + "_C4"]))) {
                    var col2 = Number(values["CAP2_R" + (i) + "_C4"]);
                }


                if (col1 < col2) {
                    webform.errors.push({
                        'fieldName': 'CAP2_R' + (i) + '_C3',
                        'weight': 7,
                        'msg': Drupal.t('Cod eroare: 45-004 [@col1]  - Rind.(2101-2301) COL3 >= Rind.(2101-2301) COL4  - [@col2]', { "@col1": col1, "@col2": col2 })
                    });
                }
            } //end  if 



        }
    }


    // End 45-004


    function row_45_003_CAP1(row) {
        var i;
        i = row;
        if (

            i == 1103 || i == 1104 || i == 1105 || i == 1106 || i == 1107 || i == 1110 || i == 1112 || i == 1113
            || i == 1115 || i == 1116 || i == 1117 || i == 1119 || i == 1120 || i == 1121 || i == 1123 || i == 1124
            || i == 1125 || i == 1126
            || i == 1127 || i == 1133 || i == 1134 || i == 1135 || i == 1136 || i == 1140 || i == 1213 || i == 1214
            || i == 1215 || i == 1216 || i == 1218 || i == 1219 || i == 1221 || i == 1224 || i == 1225
            || i == 1230 || i == 1232 || i == 1234 || i == 1235 || i == 1236 || i == 1237 || i == 1238 || i == 1232
            || i == 1240 || i == 1320 || i == 1321 || i == 1322 || i == 1323 || i == 1324 || i == 1325
            || i == 1325 || i == 1326 || i == 1327
            || i == 1401 || i == 1402 || i == 1403 || i == 1404 || i == 1405 || i == 1406 || i == 1409

        )
            return true;

    }


    // Start function 
    function row_45_003_CAP2(row) {
        var i;
        i = row;
        if (

            i == 2101 || i == 2102 || i == 2103 || i == 2201 || i == 2301 || i == 2302

        )
            return true;

    }



    // Start 45-003

    for (var i = 1103; i <= 1409; i++) {
        {
            if (row_45_003_CAP1(i)) {

                if (!isNaN(Number(values["CAP1_R" + (i) + "_C1"]))) {
                    var col1 = Number(values["CAP1_R" + (i) + "_C1"]);
                }

                if (!isNaN(Number(values["CAP1_R" + (i) + "_C2"]))) {
                    var col2 = Number(values["CAP1_R" + (i) + "_C2"]);
                }


                if (col1 < col2) {
                    webform.errors.push({
                        'fieldName': 'CAP1_R' + (i) + '_C1',
                        'weight': 3,
                        'msg': Drupal.t('Cod eroare: 45-003 [@col1]  - Rind.(1103-1409) COL1 >= Rind.(1103-1409) COL2  - [@col2]', { "@col1": col1, "@col2": col2 })
                    });
                }
            }



        }
    }

    function row_45_003_CAP1_float(row) {
        var i;
        i = row;
        if (


            i == 1302 || i == 1303 || i == 1305 || i == 1306 || i == 1307 || i == 1308 || i == 1309
            || i == 1310 || i == 1311 || i == 1312 || i == 1313 || i == 1314 || i == 1315 || i == 1316 || i == 1317
            || i == 1318 || i == 1319

        )
            return true;

    }

    //float
    for (var i = 1302; i <= 1319; i++) {
        {
            if (row_45_003_CAP1_float(i)) {

                if (!isNaN(toFloat(values["CAP1_R" + (i) + "_C1"]))) {
                    var col1 = toFloat(values["CAP1_R" + (i) + "_C1"]);
                }

                if (!isNaN(toFloat(values["CAP1_R" + (i) + "_C2"]))) {
                    var col2 = toFloat(values["CAP1_R" + (i) + "_C2"]);
                }


                if (col1 < col2) {
                    webform.errors.push({
                        'fieldName': 'CAP1_R' + (i) + '_C1',
                        'weight': 4,
                        'msg': Drupal.t('Cod eroare: 45-003 [@col1]  - Rind.(1302-1319) COL1 >= Rind.(1302-1319) COL2  - [@col2]', { "@col1": col1.toFixed(1), "@col2": col2.toFixed(1) })
                    });
                }
            }



        }
    }

    // Start function 
    function row_45_003_CAP2(row) {
        var i;
        i = row;
        if (

            i == 2101 || i == 2102 || i == 2103 || i == 2201 || i == 2301 || i == 2302

        )
            return true;

    }
    for (var i = 2101; i <= 2302; i++) {
        {
            if (

                (row_45_003_CAP2(i))



            ) {

                if (!isNaN(Number(values["CAP2_R" + (i) + "_C1"]))) {
                    var col1 = Number(values["CAP2_R" + (i) + "_C1"]);
                }

                if (!isNaN(Number(values["CAP2_R" + (i) + "_C2"]))) {
                    var col2 = Number(values["CAP2_R" + (i) + "_C2"]);
                }


                if (col1 < col2) {
                    webform.errors.push({
                        'fieldName': 'CAP2_R' + (i) + '_C1',
                        'weight': 5,
                        'msg': Drupal.t('Cod eroare: 45-003 [@col1]  - Rind.(2101-2302) COL3 >= Rind.(1103-1225) COL4  - [@col2]', { "@col1": col1, "@col2": col2 })
                    });
                }
            } //end  if 



        }
    }

    // End 45-003

    // Start 45 - 005
    function row_45_005_CAP1(row) {
        var i;
        i = row;
        if (


            i == 1117 || i == 1119

        )
            return true;

    }

    for (var i = 1117; i <= 1119; i++) {
        {
            if (row_45_005_CAP1(i)) {

                if (!isNaN(Number(values["CAP1_R" + (i) + "_C3"]))) {
                    var col1 = Number(values["CAP1_R" + (i) + "_C3"]);
                }

                if (!isNaN(Number(values["CAP1_R" + (i) + "_C4"]))) {
                    var col2 = Number(values["CAP1_R" + (i) + "_C4"]);
                }


                if (col1 != col2) {
                    webform.errors.push({
                        'fieldName': 'CAP1_R' + (i) + '_C3',
                        'weight': 8,
                        'msg': Drupal.t('Cod eroare: 45-005 [@col1]  - Rind.(1117,1119) COL3 = Rind.(1117,1119) COL4  - [@col2]', { "@col1": col1, "@col2": col2 })
                    });
                }


            }

        }
    }

    //End 45 - 005


    //Start 45 - 006


    for (var i = 1; i <= 5; i++) {
        if (!isNaN(Number(values["CAP1_R1134_C" + i]))) {
            var R1134_C = Number(values["CAP1_R1134_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP1_R1123_C" + i] || 0)
            .plus(values["CAP1_R1124_C" + i] || 0)
            .plus(values["CAP1_R1125_C" + i] || 0)
            .plus(values["CAP1_R1126_C" + i] || 0)
            .plus(values["CAP1_R1127_C" + i] || 0)
            .plus(values["CAP1_R1133_C" + i] || 0))) {

            var SUM_22_33 = Decimal(values["CAP1_R1123_C" + i] || 0)
                .plus(values["CAP1_R1124_C" + i] || 0)
                .plus(values["CAP1_R1125_C" + i] || 0)
                .plus(values["CAP1_R1126_C" + i] || 0)
                .plus(values["CAP1_R1127_C" + i] || 0)
                .plus(values["CAP1_R1133_C" + i] || 0);
        }


        if (R1134_C != SUM_22_33) {
            webform.errors.push({
                'fieldName': 'CAP1_R1134_C' + i,
                'weight': 9,
                'msg': Drupal.t('Cod eroare: 45-006. [@R1134_C] - Rind.(1134) = Rind.(1123+1124+1125+1126+1127+1133)  pe coloana. @col  -  [@SUM_22_33]', { '@col': i, '@R1134_C': R1134_C, '@SUM_22_33': SUM_22_33 })
            });
        }
    }

   

    //End 45 - 006



    //Start 45 - 023


    for (var i = 1; i <= 1; i++) {
        if (!isNaN(Number(values["CAP1_R1434_C" + i]))) {
            var R1434 = Number(values["CAP1_R1434_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP1_R1401_C" + i] || 0)
            .plus(values["CAP1_R1402_C" + i] || 0)
            .plus(values["CAP1_R1403_C" + i] || 0)
            .plus(values["CAP1_R1404_C" + i] || 0)
            .plus(values["CAP1_R1405_C" + i] || 0)
            .plus(values["CAP1_R1406_C" + i] || 0)
            .plus(values["CAP1_R1409_C" + i] || 0)
            .plus(values["CAP1_R1411_C" + i] || 0)
            .plus(values["CAP1_R1418_C" + i] || 0)
            
            )) {

            var SUM_45_023 = Decimal(values["CAP1_R1401_C" + i] || 0)
                .plus(values["CAP1_R1402_C" + i] || 0)
                .plus(values["CAP1_R1403_C" + i] || 0)
                .plus(values["CAP1_R1404_C" + i] || 0)
                .plus(values["CAP1_R1405_C" + i] || 0)
                .plus(values["CAP1_R1406_C" + i] || 0)
                .plus(values["CAP1_R1409_C" + i] || 0)
                .plus(values["CAP1_R1411_C" + i] || 0)
                .plus(values["CAP1_R1418_C" + i] || 0)
                
                ;
        }


        if (R1434 != SUM_45_023) {
            webform.errors.push({
                'fieldName': 'CAP1_R1434_C' + i,
                'weight': 23,
                'msg': Drupal.t('Cod eroare: 45-023. [@R1434] - Rind.(1434) COL1 = Rind.(1401+1402+1403+1404+1405+1406+1409+1411+1418) pe coloana  @col  -  [@SUM_45_023]', { '@col': i, '@R1434': R1434, '@SUM_45_023': SUM_45_023 })
            });
        }
    }



    //End 45 - 023


    //Start 45 - 024


    for (var i = 1; i <= 1; i++) {
        if (!isNaN(Number(values["CAP1_R1440_C" + i]))) {
            var R1440 = Number(values["CAP1_R1440_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP1_R1140_C" + i] || 0)
            .plus(values["CAP1_R1244_C" + i] || 0)
            .plus(values["CAP1_R1328_C" + i] || 0)
            .plus(values["CAP1_R1434_C" + i] || 0)
           

        )) {

            var SUM_45_024 = Decimal(values["CAP1_R1140_C" + i] || 0)
                .plus(values["CAP1_R1244_C" + i] || 0)
                .plus(values["CAP1_R1328_C" + i] || 0)
                .plus(values["CAP1_R1434_C" + i] || 0)
               

                ;
        }


        if (R1440 != SUM_45_024) {
            webform.errors.push({
                'fieldName': 'CAP1_R1440_C' + i,
                'weight': 24,
                'msg': Drupal.t('Cod eroare: 45-024. [@R1440] - Rind.(1440) COL1 = Rind.(1140+1244+1328+1434) pe coloana  @col  -  [@SUM_45_024]', { '@col': i, '@R1440': R1440, '@SUM_45_024': SUM_45_024 })
            });
        }
    }



    //End 45 - 024


    //Start 45 - 025


    for (var i = 1; i <= 2; i++) {
        if (!isNaN(Number(values["CAP1A_R1701_C" + i]))) {
            var R1701 = Number(values["CAP1A_R1701_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP1A_R1702_C" + i] || 0)
            .plus(values["CAP1A_R1703_C" + i] || 0)
            .plus(values["CAP1A_R1704_C" + i] || 0)
           


        )) {

            var SUM_45_025 = Decimal(values["CAP1A_R1702_C" + i] || 0)
                .plus(values["CAP1A_R1703_C" + i] || 0)
                .plus(values["CAP1A_R1704_C" + i] || 0)
               


                ;
        }


        if (R1701 < SUM_45_025) {
            webform.errors.push({
                'fieldName': 'CAP1A_R1701_C' + i,
                'weight': 25,
                'msg': Drupal.t('Cod eroare: 45-025. [@R1701] - Rind.(1701)>=Rind.(1702+1703+1704)  pe coloana  @col  -  [@SUM_45_025]', { '@col': i, '@R1701': R1701, '@SUM_45_025': SUM_45_025 })
            });
        }
    }
//Start



    //End 45 - 025


    //Start 45 - 026


    for (var i = 1; i <= 4; i++) {
        if (!isNaN(Number(values["CAP2_R2100_C" + i]))) {
            var R2100 = Number(values["CAP2_R2100_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP2_R2101_C" + i] || 0)
            .plus(values["CAP2_R2102_C" + i] || 0)
            .plus(values["CAP2_R2103_C" + i] || 0)
            .plus(values["CAP2_R2104_C" + i] || 0)
           
        )) {

            var SUM_45_026 = Decimal(values["CAP2_R2101_C" + i] || 0)
                .plus(values["CAP2_R2102_C" + i] || 0)
                .plus(values["CAP2_R2103_C" + i] || 0)
                .plus(values["CAP2_R2104_C" + i] || 0)
               

                ;
        }


        if (R2100 != SUM_45_026) {
            webform.errors.push({
                'fieldName': 'CAP2_R2100_C' + i,
                'weight': 26,
                'msg': Drupal.t('Cod eroare: 45-026. [@R2100] - Rind.(2100)=Rind.(2101+2102+2103+2104)  pe coloana  @col  -  [@SUM_45_026]', { '@col': i, '@R2100': R2100, '@SUM_45_026': SUM_45_026 })
            });
        }
    }


 //End 45 - 026

    


    //Start 45 - 027


    for (var i = 1; i <= 4; i++) {
        if (!isNaN(Number(values["CAP2_R2110_C" + i]))) {
            var R2110 = Number(values["CAP2_R2110_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP2_R2111_C" + i] || 0)
            .plus(values["CAP2_R2112_C" + i] || 0)
            .plus(values["CAP2_R2113_C" + i] || 0)
            .plus(values["CAP2_R2114_C" + i] || 0)
            .plus(values["CAP2_R2115_C" + i] || 0)
            .plus(values["CAP2_R2116_C" + i] || 0)



        )) {

            var SUM_45_027 = Decimal(values["CAP2_R2111_C" + i] || 0)
                .plus(values["CAP2_R2112_C" + i] || 0)
                .plus(values["CAP2_R2113_C" + i] || 0)
                .plus(values["CAP2_R2114_C" + i] || 0)
                .plus(values["CAP2_R2115_C" + i] || 0)
                .plus(values["CAP2_R2116_C" + i] || 0)

                ;
        }


        if (R2110 != SUM_45_027) {
            webform.errors.push({
                'fieldName': 'CAP2_R2110_C' + i,
                'weight': 27,
                'msg': Drupal.t('Cod eroare: 45-027. [@R2110] - Rind.(2110)=Rind.(2111+2112+2113+2114+2115+2116)  pe coloana  @col  -  [@SUM_45_027]', { '@col': i, '@R2110': R2110, '@SUM_45_027': SUM_45_027 })
            });
        }
    }


 //End 45 - 027
    

    //Start 45 - 028


    for (var i = 1; i <= 4; i++) {
        if (!isNaN(Number(values["CAP2_R2120_C" + i]))) {
            var R2120 = Number(values["CAP2_R2120_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP2_R2121_C" + i] || 0)
           



        )) {

            var SUM_45_028 = Decimal(values["CAP2_R2121_C" + i] || 0)
                

                ;
        }


        if (R2120 < SUM_45_028) {
            webform.errors.push({
                'fieldName': 'CAP2_R2120_C' + i,
                'weight': 28,
                'msg': Drupal.t('Cod eroare: 45-028. [@R2120] - Rind.(2120)>=Rind.(2121)  pe coloana  @col  -  [@SUM_45_028]', { '@col': i, '@R2120': R2120, '@SUM_45_028': SUM_45_028 })
            });
        }
    }


 //End 45 - 028






    //Start 45 - 029


    for (var i = 1; i <= 4; i++) {
        if (!isNaN(Number(values["CAP2_R2200_C" + i]))) {
            var R2200 = Number(values["CAP2_R2200_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP2_R2201_C" + i] || 0)
            .plus(values["CAP2_R2202_C" + i] || 0)
            .plus(values["CAP2_R2203_C" + i] || 0)
            .plus(values["CAP2_R2204_C" + i] || 0)
            .plus(values["CAP2_R2205_C" + i] || 0)
            .plus(values["CAP2_R2206_C" + i] || 0)
            .plus(values["CAP2_R2207_C" + i] || 0)
            .plus(values["CAP2_R2208_C" + i] || 0)
            .plus(values["CAP2_R2209_C" + i] || 0)



        )) {

            var SUM_45_029 = Decimal(values["CAP2_R2201_C" + i] || 0)
                .plus(values["CAP2_R2202_C" + i] || 0)
                .plus(values["CAP2_R2203_C" + i] || 0)
                .plus(values["CAP2_R2204_C" + i] || 0)
                .plus(values["CAP2_R2205_C" + i] || 0)
                .plus(values["CAP2_R2206_C" + i] || 0)
                .plus(values["CAP2_R2207_C" + i] || 0)
                .plus(values["CAP2_R2208_C" + i] || 0)
                .plus(values["CAP2_R2209_C" + i] || 0)


                ;
        }


        if (R2200 != SUM_45_029) {
            webform.errors.push({
                'fieldName': 'CAP2_R2200_C' + i,
                'weight': 29,
                'msg': Drupal.t('Cod eroare: 45-029. [@R2200] - Rind.(2200)=Rind.(2201+2202+2203+2204+2205+2206+2207+2208+2209)  pe coloana  @col  -  [@SUM_45_029]', { '@col': i, '@R2200': R2200, '@SUM_45_029': SUM_45_029 })
            });
        }
    }


 //End 45 - 029




    // 45 - 007


    for (var i = 1; i <= 5; i++) {


        if (!isNaN(Number(values["CAP1_R1135_C" + i]))) {
            var R1135_C = Number(values["CAP1_R1135_C" + i]);
        }

        if (!isNaN(Number(values["CAP1_R1136_C" + i]))) {
            var R1136_C = Number(values["CAP1_R1136_C" + i]);
        }


        if (R1135_C < R1136_C) {
            webform.errors.push({
                'fieldName': 'CAP1_R1135_C' + i,
                'weight': 10,
                'msg': Drupal.t('Cod eroare: 45-007. [@R1135_C] - Rind.(1135)>=Rind.(1136)  pe coloana. @col  -  [@R1136_C]', { '@col': i, '@R1135_C': R1135_C, '@R1136_C': R1136_C })
            });
        }
    }

    // 45 - 007




    //Start 45 - 008


    for (var i = 1; i <= 5; i++) {
        if (!isNaN(Number(values["CAP1_R1140_C" + i]))) {
            var R1140_C = Number(values["CAP1_R1140_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP1_R1104_C" + i] || 0)
            .plus(values["CAP1_R1105_C" + i] || 0)
            .plus(values["CAP1_R1106_C" + i] || 0)
            .plus(values["CAP1_R1107_C" + i] || 0)
            .plus(values["CAP1_R1110_C" + i] || 0)
            .plus(values["CAP1_R1112_C" + i] || 0)
            .plus(values["CAP1_R1113_C" + i] || 0)
            .plus(values["CAP1_R1115_C" + i] || 0)
            .plus(values["CAP1_R1117_C" + i] || 0)
            .plus(values["CAP1_R1120_C" + i] || 0)
            .plus(values["CAP1_R1121_C" + i] || 0)
            .plus(values["CAP1_R1123_C" + i] || 0)
            .plus(values["CAP1_R1124_C" + i] || 0)
            .plus(values["CAP1_R1125_C" + i] || 0)
            .plus(values["CAP1_R1126_C" + i] || 0)
            .plus(values["CAP1_R1127_C" + i] || 0)
            .plus(values["CAP1_R1133_C" + i] || 0)
            .plus(values["CAP1_R1135_C" + i] || 0)
            )
            
            ) {

            var SUM_45_008 = Decimal(values["CAP1_R1104_C" + i] || 0)
                .plus(values["CAP1_R1105_C" + i] || 0)
                .plus(values["CAP1_R1106_C" + i] || 0)
                .plus(values["CAP1_R1107_C" + i] || 0)
                .plus(values["CAP1_R1110_C" + i] || 0)
                .plus(values["CAP1_R1112_C" + i] || 0)
                .plus(values["CAP1_R1113_C" + i] || 0)
                .plus(values["CAP1_R1115_C" + i] || 0)
                .plus(values["CAP1_R1117_C" + i] || 0)
                .plus(values["CAP1_R1120_C" + i] || 0)
                .plus(values["CAP1_R1121_C" + i] || 0)
                .plus(values["CAP1_R1123_C" + i] || 0)
                .plus(values["CAP1_R1124_C" + i] || 0)
                .plus(values["CAP1_R1125_C" + i] || 0)
                .plus(values["CAP1_R1126_C" + i] || 0)
                .plus(values["CAP1_R1127_C" + i] || 0)
                .plus(values["CAP1_R1133_C" + i] || 0)
                .plus(values["CAP1_R1135_C" + i] || 0);
        }


        if (R1140_C != SUM_45_008) {
            webform.errors.push({
                'fieldName': 'CAP1_R1140_C' + i,
                'weight': 11,
                'msg': Drupal.t('Cod eroare: 45-008. [@R1140_C] - Rind.(1140) = Rind.(1104 pina la 1107+1110+1112+1113+1115+1117+1120+1121+1123 pina la 1133+1135)  pe coloana. @col  -  [@SUM_45_008]', { '@col': i, '@R1140_C': R1140_C, '@SUM_45_008': SUM_45_008 })
            });
        }
    }



    //End 45 - 008

    // 45 - 007


    for (var i = 1; i <= 4; i++) {


        if (!isNaN(Number(values["CAP1_R1218_C" + i]))) {
            var R1218_C = Number(values["CAP1_R1218_C" + i]);
        }

        if (!isNaN(Number(values["CAP1_R1219_C" + i]))) {
            var R1219_C = Number(values["CAP1_R1219_C" + i]);
        }


        if (R1218_C < R1219_C) {
            webform.errors.push({
                'fieldName': 'CAP1_R1218_C' + i,
                'weight': 12,
                'msg': Drupal.t('Cod eroare: 45-009. [@R1218_C] - Rind.(1218)>=Rind.(1219) pe coloana  @col  -  [@R1219_C]', { '@col': i, '@R1218_C': R1218_C, '@R1219_C': R1219_C })
            });
        }
    }

    // 45 - 007


    //Start  45 - 010


    for (var i = 1; i <= 3; i++) {
        if (!isNaN(Number(values["CAP1_R1232_C" + i]))) {
            var R1232_C = Number(values["CAP1_R1232_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP1_R1234_C" + i] || 0)
           
            .plus(values["CAP1_R1235_C" + i] || 0)
            .plus(values["CAP1_R1236_C" + i] || 0)
            .plus(values["CAP1_R1237_C" + i] || 0)
            .plus(values["CAP1_R1238_C" + i] || 0)
            .plus(values["CAP1_R1239_C" + i] || 0))) {

            var SUM_45_010 = Decimal(values["CAP1_R1234_C" + i] || 0)
               
                .plus(values["CAP1_R1235_C" + i] || 0)
                .plus(values["CAP1_R1236_C" + i] || 0)
                .plus(values["CAP1_R1237_C" + i] || 0)
                .plus(values["CAP1_R1238_C" + i] || 0)
                .plus(values["CAP1_R1239_C" + i] || 0);
        }


        if (R1232_C != SUM_45_010) {
            webform.errors.push({
                'fieldName': 'CAP1_R1232_C' + i,
                'weight': 14,
                'msg': Drupal.t('Cod eroare: 45-010. [@R1232_C] - Rind.(1232) = Rind.(1234+1235+1236+1237+1238+1239)   pe coloana. @col  -  [@SUM_45_010]', { '@col': i, '@R1232_C': R1232_C, '@SUM_45_010': SUM_45_010 })
            });
        }
    }



    //End 45 - 010



    //Start 45 - 011


    for (var i = 2; i <= 2; i++) {
        if (!isNaN(Number(values["CAP1_R1240_C" + i]))) {
            var R1240_C = Number(values["CAP1_R1240_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP1_R1241_C" + i] || 0)
            .plus(values["CAP1_R1242_C" + i] || 0)
            
            
            )) {

            var SUM_45_011 = Decimal(values["CAP1_R1241_C" + i] || 0)
                .plus(values["CAP1_R1242_C" + i] || 0);
            
        }


        if (R1240_C != SUM_45_011) {
            webform.errors.push({
                'fieldName': 'CAP1_R1240_C' + i,
                'weight': 15,
                'msg': Drupal.t('Cod eroare: 45-011. [@R1240_C] - Rind.(1240) = Rind.(1241+1242) COL.2  pe coloana. @col  -  [@SUM_45_011]', { '@col': i, '@R1240_C': R1240_C, '@SUM_45_011': SUM_45_011 })
            });
        }
    }



    //End 45 - 011


    function fun_col_35(col) {
        var i;
        i = col;
        if (

            i == 3 || i == 5 
           

        )
            return true;

    }

    function fun_col_12(col) {
        var i;
        i = col;
        if (

            i == 1 || i == 2


        )
            return true;

    }


    function fun_col_1235(col) {
        var i;
        i = col;
        if (

            i == 1 || i == 2 || i == 3 || i == 5


        )
            return true;

    }

    //Start 45 - 012


    for (var i = 1; i <= 5; i++) {

        if (fun_col_12(i)) {

        if (!isNaN(toFloat(values["CAP1_R1302_C" + i]))) {
            var R1302_C = toFloat(values["CAP1_R1302_C" + i]);
        }


            if (!isNaN(Decimal(values["CAP1_R1303_C" + i] || 0)
                .plus(values["CAP1_R1305_C" + i] || 0)
                .plus(values["CAP1_R1306_C" + i] || 0)
                .plus(values["CAP1_R1307_C" + i] || 0)
                .plus(values["CAP1_R1308_C" + i] || 0)
                .plus(values["CAP1_R1309_C" + i] || 0)
                .plus(values["CAP1_R1310_C" + i] || 0)
                .plus(values["CAP1_R1311_C" + i] || 0)
                .plus(values["CAP1_R1312_C" + i] || 0)
                .plus(values["CAP1_R1313_C" + i] || 0)
                .plus(values["CAP1_R1314_C" + i] || 0)
                .plus(values["CAP1_R1315_C" + i] || 0)
                .plus(values["CAP1_R1316_C" + i] || 0)
                .plus(values["CAP1_R1317_C" + i] || 0)
                .plus(values["CAP1_R1318_C" + i] || 0)
                .plus(values["CAP1_R1319_C" + i] || 0))

        ) {

                var SUM_45_012 = Decimal(values["CAP1_R1303_C" + i] || 0)
                    .plus(values["CAP1_R1305_C" + i] || 0)
                    .plus(values["CAP1_R1306_C" + i] || 0)
                    .plus(values["CAP1_R1307_C" + i] || 0)
                    .plus(values["CAP1_R1308_C" + i] || 0)
                    .plus(values["CAP1_R1309_C" + i] || 0)
                    .plus(values["CAP1_R1310_C" + i] || 0)
                    .plus(values["CAP1_R1311_C" + i] || 0)
                    .plus(values["CAP1_R1312_C" + i] || 0)
                    .plus(values["CAP1_R1313_C" + i] || 0)
                    .plus(values["CAP1_R1314_C" + i] || 0)
                    .plus(values["CAP1_R1315_C" + i] || 0)
                    .plus(values["CAP1_R1316_C" + i] || 0)
                    .plus(values["CAP1_R1317_C" + i] || 0)
                    .plus(values["CAP1_R1318_C" + i] || 0)
                    .plus(values["CAP1_R1319_C" + i] || 0);
        }


            if (R1302_C != SUM_45_012) {
            webform.errors.push({
                'fieldName': 'CAP1_R1302_C' + i,
                'weight': 16,
                'msg': Drupal.t('Cod eroare: 45-012. [@R1302_C] - Rind.(1302)=Rind.(1303+1305+1306+1307+1308+1309+1310+1311+1312+1313+1314+1315+1316+1317+1318+1319) pe coloana. @col  -  [@SUM_45_012]', { '@col': i, '@R1302_C': R1302_C.toFixed(1), '@SUM_45_012': SUM_45_012.toFixed(1) })
            });
        }
    }

    }




    for (var i = 1; i <= 5; i++) {

        if (fun_col_35(i)) {

            if (!isNaN(Number(values["CAP1_R1302_C" + i]))) {
                var R1302_C = Number(values["CAP1_R1302_C" + i]);
            }


            if (!isNaN(Decimal(values["CAP1_R1303_C" + i] || 0)
                .plus(values["CAP1_R1305_C" + i] || 0)
                .plus(values["CAP1_R1306_C" + i] || 0)
                .plus(values["CAP1_R1307_C" + i] || 0)
                .plus(values["CAP1_R1308_C" + i] || 0)
                .plus(values["CAP1_R1309_C" + i] || 0)
                .plus(values["CAP1_R1310_C" + i] || 0)
                .plus(values["CAP1_R1311_C" + i] || 0)
                .plus(values["CAP1_R1312_C" + i] || 0)
                .plus(values["CAP1_R1313_C" + i] || 0)
                .plus(values["CAP1_R1314_C" + i] || 0)
                .plus(values["CAP1_R1315_C" + i] || 0)
                .plus(values["CAP1_R1316_C" + i] || 0)
                .plus(values["CAP1_R1317_C" + i] || 0)
                .plus(values["CAP1_R1318_C" + i] || 0)
                .plus(values["CAP1_R1319_C" + i] || 0))

            ) {

                var SUM_45_012 = Decimal(values["CAP1_R1303_C" + i] || 0)
                    .plus(values["CAP1_R1305_C" + i] || 0)
                    .plus(values["CAP1_R1306_C" + i] || 0)
                    .plus(values["CAP1_R1307_C" + i] || 0)
                    .plus(values["CAP1_R1308_C" + i] || 0)
                    .plus(values["CAP1_R1309_C" + i] || 0)
                    .plus(values["CAP1_R1310_C" + i] || 0)
                    .plus(values["CAP1_R1311_C" + i] || 0)
                    .plus(values["CAP1_R1312_C" + i] || 0)
                    .plus(values["CAP1_R1313_C" + i] || 0)
                    .plus(values["CAP1_R1314_C" + i] || 0)
                    .plus(values["CAP1_R1315_C" + i] || 0)
                    .plus(values["CAP1_R1316_C" + i] || 0)
                    .plus(values["CAP1_R1317_C" + i] || 0)
                    .plus(values["CAP1_R1318_C" + i] || 0)
                    .plus(values["CAP1_R1319_C" + i] || 0);
            }


            if (R1302_C != SUM_45_012) {
                webform.errors.push({
                    'fieldName': 'CAP1_R1302_C' + i,
                    'weight': 17,
                    'msg': Drupal.t('Cod eroare: 45-012. [@R1302_C] - Rind.(1302)=Rind.(1303+1305+1306+1307+1308+1309+1310+1311+1312+1313+1314+1315+1316+1317+1318+1319) pe coloana. @col  -  [@SUM_45_012]', { '@col': i, '@R1302_C': R1302_C, '@SUM_45_012': SUM_45_012 })
                });
            }
        }

    }

    //End 45 - 012



    //Start 45 - 013


    for (var i = 1; i <= 5; i++) {

        if (fun_col_12(i)) {

            if (!isNaN(Number(values["CAP1_R1244_C" + i]))) {
                var R1244_C = Number(values["CAP1_R1244_C" + i]);
            }


            if (!isNaN(Decimal(values["CAP1_R1240_C" + i] || 0)
                .plus(values["CAP1_R1213_C" + i] || 0)
                .plus(values["CAP1_R1214_C" + i] || 0)
                .plus(values["CAP1_R1215_C" + i] || 0)
                .plus(values["CAP1_R1216_C" + i] || 0)
                .plus(values["CAP1_R1218_C" + i] || 0)
                .plus(values["CAP1_R1221_C" + i] || 0)
                .plus(values["CAP1_R1224_C" + i] || 0)
                .plus(values["CAP1_R1225_C" + i] || 0)
                .plus(values["CAP1_R1230_C" + i] || 0)
                .plus(values["CAP1_R1232_C" + i] || 0)
                .plus(values["CAP1_R1243_C" + i] || 0)
                
                )

            ) {

                var SUM_45_013 = Decimal(values["CAP1_R1240_C" + i] || 0)
                    .plus(values["CAP1_R1213_C" + i] || 0)
                    .plus(values["CAP1_R1214_C" + i] || 0)
                    .plus(values["CAP1_R1215_C" + i] || 0)
                    .plus(values["CAP1_R1216_C" + i] || 0)
                    .plus(values["CAP1_R1218_C" + i] || 0)
                    .plus(values["CAP1_R1221_C" + i] || 0)
                    .plus(values["CAP1_R1224_C" + i] || 0)
                    .plus(values["CAP1_R1225_C" + i] || 0)
                    .plus(values["CAP1_R1230_C" + i] || 0)
                    .plus(values["CAP1_R1232_C" + i] || 0)
                    .plus(values["CAP1_R1243_C" + i] || 0);
            }


            if (R1244_C != SUM_45_013) {
                webform.errors.push({
                    'fieldName': 'CAP1_R1244_C' + i,
                    'weight': 18,
                    'msg': Drupal.t('Cod eroare: 45-013. [@R1244_C] - Rind.(1244) = Rind.(1213+1214+1215+1216+1218+1221+1224+1225+1230+1232+1240+1243) @col  -  [@SUM_45_013]', { '@col': i, '@R1244_C': R1244_C, '@SUM_45_013': SUM_45_013 })
                });
            }
        }

    }


//End 45-013

//Start 45 - 014


    for (var i = 1; i <= 5; i++) {

        if (fun_col_1235(i)) {

            if (!isNaN(Number(values["CAP1_R1324_C" + i]))) {
                var R1324_C = Number(values["CAP1_R1324_C" + i]);
            }


            if (!isNaN(Decimal(values["CAP1_R1325_C" + i] || 0)
                .plus(values["CAP1_R1326_C" + i] || 0)
               

            )

            ) {

                var SUM_45_014 = Decimal(values["CAP1_R1325_C" + i] || 0)
                    .plus(values["CAP1_R1326_C" + i] || 0);
                   
            }


            if (R1324_C != SUM_45_014) {
                webform.errors.push({
                    'fieldName': 'CAP1_R1324_C' + i,
                    'weight': 19,
                    'msg': Drupal.t('Cod eroare: 45-014. [@R1324_C] - Rind.(1324) = Rind.(1325+1326) pe COL1,2,3,5  @col  -  [@SUM_45_014]', { '@col': i, '@R1324_C': R1324_C, '@SUM_45_014': SUM_45_014 })
                });
            }
        }

    }


  //End 45-014





    //Start 45 - 017


    for (var i = 3; i <= 3; i++) {

       

            if (!isNaN(Number(values["CAP1_R1330_C" + i]))) {
                var R1330_C = Number(values["CAP1_R1330_C" + i]);
            }


            if (!isNaN(Decimal(values["CAP1_R1302_C" + i] || 0)
                .plus(values["CAP1_R1329_C" + i] || 0))) {

                var SUM_45_017 = Decimal(values["CAP1_R1302_C" + i] || 0)
                    .plus(values["CAP1_R1329_C" + i] || 0);

            }


        if (R1330_C != SUM_45_017) {
                webform.errors.push({
                    'fieldName': 'CAP1_R1330_C' + i,
                    'weight': 20,
                    'msg': Drupal.t('Cod eroare: 45-017. [@R1330_C] - Rind.(1330) COL3=Rind.(1302+1329)  @col  -  [@SUM_45_017]', { '@col': i, '@R1330_C': R1330_C, '@SUM_45_017': SUM_45_017 })
                });
            }
        

    }


//End 45-017

 //Start 45 - 018


    for (var i = 5; i <= 5; i++) {



        if (!isNaN(Number(values["CAP1_R1330_C" + i]))) {
            var R1330_C = Number(values["CAP1_R1330_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP1_R1302_C" + i] || 0))) {

            var R1302_C = Decimal(values["CAP1_R1302_C" + i] || 0);
              

        }


        if (R1330_C != R1302_C) {
            webform.errors.push({
                'fieldName': 'CAP1_R1330_C' + i,
                'weight': 21,
                'msg': Drupal.t('Cod eroare: 45-018. [@R1330_C] - Rind.(1330) COL5 = Rind.(1302) pe  @col  -  [@R1302_C]', { '@col': i, '@R1330_C': R1330_C, '@R1302_C': R1302_C })
            });
        }


    }


  //End 45-018

 //Start 45-015 

    if (!isNaN(Number(values.CAP1_R1328_C1))) {
        var R1328_015 = Number(values.CAP1_R1328_C1);
    }
    if (!isNaN(toFloat(values.CAP1_R1301_C1))) {
        var R1301_015 = toFloat(values.CAP1_R1301_C1);
    }
    if (!isNaN(toFloat(values.CAP1_R1302_C1))) {
        var R1302_015 = toFloat(values.CAP1_R1302_C1);
    }
    if (!isNaN(Number(values.CAP1_R1320_C1))) {
        var R1320_015 = Number(values.CAP1_R1320_C1);
    }
    if (!isNaN(Number(values.CAP1_R1321_C1))) {
        var R1321_015 = Number(values.CAP1_R1321_C1);
    }
    if (!isNaN(Number(values.CAP1_R1322_C1))) {
        var R1322_015 = Number(values.CAP1_R1322_C1);
    }
    if (!isNaN(Number(values.CAP1_R1323_C1))) {
        var R1323_015 = Number(values.CAP1_R1323_C1);
    }
    if (!isNaN(Number(values.CAP1_R1324_C1))) {
        var R1324_015 = Number(values.CAP1_R1324_C1);
    }
    if (!isNaN(Number(values.CAP1_R1327_C1))) {
        var R1327_015 = Number(values.CAP1_R1327_C1);
    }



     var sum_01_27_015 = Math.round((R1301_015 + R1302_015 + R1320_015 + R1321_015 + R1322_015 + R1323_015 + R1324_015 + R1327_015)*10) / 10

   


    if (R1328_015 != sum_01_27_015) {
        webform.warnings.push({
            'fieldName': 'CAP1_R1328_C1',

            'weight': 20,
            'msg': Drupal.t('Cod eroare: 45-015.   [@R1328_015] - Rind.(1328) =  Rind.(1301+1302+1320+1321+1322+1323+1324+1327) pe COL1 - [@sum_01_27_015]', { "@R1328_015": R1328_015, "@sum_01_27_015": sum_01_27_015 })
        });
    }




   // End 45-015





    //Start 45-001
    if (!isNaN(Number(values.CAP1_R1101_C1))) {
        var R1101_001 = Number(values.CAP1_R1101_C1);
    }

    if (!isNaN(Number(values.CAP1_R1102_C1))) {
        var R1102_001 = Number(values.CAP1_R1102_C1);
    }

    if (!isNaN(Number(values.CAP1_R1103_C1))) {
        var R1103_001 = Number(values.CAP1_R1103_C1);
    }
    if (!isNaN(Number(values.CAP1_R1224_C1))) {
        var R1224_001 = Number(values.CAP1_R1224_C1);
    }

    var SUM_001 = Math.round(R1102_001 + R1103_001 + R1224_001)
    if (R1101_001 != SUM_001) {
        webform.errors.push({
            'fieldName': 'CAP1_R1101_C1',

            'weight': 1,
            'msg': Drupal.t('Cod eroare: 45-001. [@R1101_001] - Rind.1101=Rind.1102+1103+1224 pe COL1 - [@SUM_001] ', { "@R1101_001": R1101_001, "@SUM_001": SUM_001 })
        });
    }




    // //End 45-001




    // //Start 45-024
    // if (!isNaN(Number(values.CAP1_R1440_C1))) {
    //     var R1440_024 = Number(values.CAP1_R1440_C1);
    // }

    // if (!isNaN(Number(values.CAP1_R1140_C1))) {
    //     var R1140_024 = Number(values.CAP1_R1140_C1);
    // }

    // if (!isNaN(Number(values.CAP1_R1244_C1))) {
    //     var R1244_024 = Number(values.CAP1_R1244_C1);
    // }
    // if (!isNaN(Number(values.CAP1_R1328_C1))) {
    //     var R1328_024 = Number(values.CAP1_R1328_C1);
    // }
    // if (!isNaN(Number(values.CAP1_R1434_C1))) {
    //     var R1434_024 = Number(values.CAP1_R1434_C1);
    // }
    // var SUM_024 = Math.round(R1140_024 + R1244_024 + R1328_024 + R1434_024)
    // if (R1440_024 != SUM_024) {
    //     webform.errors.push({
    //         'fieldName': 'CAP1_R1440_C1',

    //         'weight': 76,
    //         'msg': Drupal.t('Cod eroare: 45-024. [@R1440_024] - Rind.(1440) = Rind.(1140+1244+1328+1434) pe COL1 - [@SUM_024] ', { "@R1440_024": R1440_024, "@SUM_024": SUM_024 })
    //     });
    // }




    //  //End 45-024


    // Start 45-002
    for (var i = 1; i <= 5; i++) {

        if (!isNaN(Number(values["CAP1_R1103_C" + i]))) {
            var R1103_C = Number(values["CAP1_R1103_C" + i]);
        }


        if (!isNaN(Decimal(values["CAP1_R1104_C" + i] || 0)
            .plus(values["CAP1_R1105_C" + i] || 0)
            .plus(values["CAP1_R1106_C" + i] || 0)
            .plus(values["CAP1_R1107_C" + i] || 0))) {
            var SUM_002 = Decimal(values["CAP1_R1104_C" + i] || 0)
                .plus(values["CAP1_R1105_C" + i] || 0)
                .plus(values["CAP1_R1106_C" + i] || 0)
                .plus(values["CAP1_R1107_C" + i] || 0);
        }


        if (R1103_C != SUM_002) {
            webform.errors.push({
                'fieldName': 'CAP1_R1103_C' + i,
                'weight': 2,
                'msg': Drupal.t('Cod eroare: 45-002. [@R1103_C]-  Rind.1103 = Rind.1104 + 1105 + 1106 + 1107 pe coloana.@col  - [@SUM_002]', { '@col': i, "@R1103_C": R1103_C, "@SUM_002": SUM_002 })
            });
        }
    }

    //End 45-002


    //-------------------------------------------------------------

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