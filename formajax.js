var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbyucvVfBYJVSJmjH6fwws_9x_vbcslJ_Z3NoRdx0MDol67gz8Jo/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
