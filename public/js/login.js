$(document).ready(function() {
  $("#login-button").on("click", function(event) {
    event.preventDefault();

    const form = $("<form>");

    const usernameInput = $("<input>").attr("type", "text");
    const passwordInput = $("<input>").attr("type", "password");
    const formButton = $("<input>")
      .attr("type", "button")
      .attr("id", "submit-btn")
      .val("Submit")
      .on("click", function(event) {
        event.preventDefault();

        const dataToSend = {};
        dataToSend.username = $(this).prev().prev().val();
        dataToSend.password = $(this).prev().val();
        console.log(dataToSend);
      });
    form.append(usernameInput, passwordInput,formButton);
    $('#login-form').append(form);
  });

  $("#submit-btn").on("click", function(event) {
    event.preventDefault();

    const username = $("#input-username").val();
    const password = $("#input-password").val();

    const dataToSend = {
      username: username,
      password: password
    };

    //// this will need to be changed to some authentication route
    $.post("/login", dataToSend, function() {}).then(function() {
      console.log(results);
      console.log("success");
    });
  });
});
