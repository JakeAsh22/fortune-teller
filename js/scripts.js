var good = 0;
var bad = 0;

$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=bad-things]:checked").each(function() {
      bad += parseInt($(this).val());
    });
    $("input:checkbox[name=good-things]:checked").each(function() {
      good += parseInt($(this).val());
    });

      if (good - bad > 0) {
        $("#good-fortune").show();
      } else if (good - bad === 0) {
        $("#alright-fortune").show();
      } else {
        $("#bad-fortune").show();
      }

  });
});
