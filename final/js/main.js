// add count to shopping cart

var count = 0;
var button = document.getElementById("countButton");
var display = document.getElementById("displayCount");

button.onclick = function(){
  count++;
  display.innerHTML = count;
}

$('input').blur(function(){
        
    if($(this).val() !== ""){
        var form  = $(this).parents('form');
        console.log($("[type=submit]"));
        $("[type=submit]").removeClass('disabled').removeAttr('disabled').data('dismiss', 'modal');
    }
})

$('.modal form').submit(function(e){
    e.preventDefault();
})
    

// Example starter JavaScript for disabling form submissions if there are invalid fields
    (function() {
        'use strict';
        window.addEventListener('load', function() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName('needs-validation');
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
            }, false);
          });
        }, false);
      })();

    document.getElementById("BillingState").addEventListener("input", selectState);
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}