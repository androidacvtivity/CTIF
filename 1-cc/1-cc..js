(function ($) {
    Drupal.behaviors.turism1 = {
        attach: function (context, settings) {
            var $table = jQuery("table");
            $table.on("keypress", "input.numeric, input.float", function (event) {
                var allowNegative = jQuery(this).attr("allow-negative") || false;
                if (isNumberPressed(this, event, allowNegative) === false) {
                    event.preventDefault();
                }
            });

            $table.on("paste", "input.numeric, input.float", function (event) {
                var value = (event.originalEvent || event).clipboardData.getData("text/plain");
                if (Number(value) < 0) {
                    event.preventDefault();
                }
            });
        }
    };

    webform.validators.cc1 = function () {
        var values = Drupal.settings.mywebform.values;

        var sumR100C1 = (toFloat(values.dec_table1_row_r200c1) + toFloat(values.dec_table1_row_r300c1) + toFloat(values.dec_table1_row_r400c1) 
        + toFloat(values.dec_table1_row_r500c1));
        sumR100C1 = (Math.round(sumR100C1 * 100) / 100);

        if (Number(values.dec_table1_row_r100c1) !== sumR100C1) {
            webform.errors.push({
                "fieldName": "dec_table1_row_r100c1",
                "error_code": 1,
                "msg": Drupal.t("Error code: 12-001, Cap VLC. Row.100, col.1 = Row.200, col.1 + Row.300, col.1 + Row.400, col.1 + Row.500, col.1")
            });
        }

        if (Number(values.dec_table1_row_r200c1) < Number(values.dec_table1_row_r240c1)) {
            webform.errors.push({
                "fieldName": "dec_table1_row_r200c1",
                "error_code": 3,
                "msg": Drupal.t("Error code: 12-003, Cap VLC. Row.200, col.1 >= Row.240, col.1")
            });
        }

        var sumR200C1 = (toFloat(values.dec_table1_row_r210c1) + toFloat(values.dec_table1_row_r220c1) + toFloat(values.dec_table1_row_r230c1));
        sumR200C1 = (Math.round(sumR200C1 * 100) / 100);
        if (Number(values.dec_table1_row_r200c1) !== sumR200C1) {
            webform.errors.push({
                "fieldName": "dec_table1_row_r200c1",
                "error_code": 6,
                "msg": Drupal.t("Error code: 12-006, Cap VLC. Row.200, col.1 = Row.210, col.1 + Row.220, col.1 + Row.230, col.1")
            });
        }

        var sumR300C1 = (toFloat(values.dec_table1_row_r310c1) + toFloat(values.dec_table1_row_r320c1) + toFloat(values.dec_table1_row_r330c1));
        sumR300C1 = (Math.round(sumR300C1 * 100) / 100);
        if (Number(values.dec_table1_row_r300c1) !== sumR300C1) {
            webform.errors.push({
                "fieldName": "dec_table1_row_r300c1",
                "error_code": 7,
                "msg": Drupal.t("Error code: 12-007, Cap VLC. Row.300, col.1 = Row.310, col.1 + Row.320, col.1 + Row.330, col.1")
            });
        }

        var sumR400C1 = (toFloat(values.dec_table1_row_r410c1) + toFloat(values.dec_table1_row_r420c1) + toFloat(values.dec_table1_row_r430c1));
        sumR400C1 = (Math.round(sumR400C1 * 100) / 100);
        if (Number(values.dec_table1_row_r400c1) !== sumR400C1) {
            webform.errors.push({
                "fieldName": "dec_table1_row_r400c1",
                "error_code": 9,
                "msg": Drupal.t("Error code: 12-009, Cap VLC. Row.400, col.1 = Row.410, col.1 + Row.420, col.1 + Row.430, col.1")
            });
        }

        if (!values.dec_group2_adres) {
            webform.warnings.push({
                "fieldName": "dec_group2_adres",
                "msg": Drupal.t('Câmpul nu este completat')
            });
        }

        webform.validatorsStatus.cc1 = 1;
        validateWebform();
    };

})(jQuery);