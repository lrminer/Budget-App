$(document).ready(function () {

    $('#submit-btn').on('click', function (event) {
        event.preventDefault();

        const username = $('#input-username').val();
        const password = $('#input-password').val();



        const dataToSend = {
            username: username,
            password: password
        };
//// this will need to be changed to some authentication route
        $.post('/api/budgets', dataToSend, function () {

        }).then(function () {
            console.log(results);
            console.log('success');
        });
    });







});