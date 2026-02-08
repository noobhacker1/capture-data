$(document).ready(function () {
    InitUI();
});

function InitUI() {
    $.datepicker.setDefaults($.datepicker.regional[language]);
    $(".date-picker").datepicker({ changeMonth: true, changeYear: true, showAnim: "fold", showOtherMonths: true, showWeek: true });
}