
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
            'msg': Drupal.t('Cod eroare: 45-002. [@R1103_C]  -  Rind.1103 = Rind.1104 + 1105 + 1106 + 1107 pe coloana.@col  - [@SUM_002]', { '@col': i, "@R1103_C": R1103_C, "@SUM_002": SUM_002 })
        });
    }
}