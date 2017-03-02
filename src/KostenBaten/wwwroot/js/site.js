// Write your Javascript code.
$('.message a').click(function () {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
});

function registreer() {
    alert("Een bevestigingsmail werd verstuurd naar uw emailadres.")
}