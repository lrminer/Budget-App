$(document).ready(function () {

    $('#submit-user').on('click', function (event) {
        event.preventDefault();

        const username = $('#input-username').val();
        const password = $('#input-password').val();
        const age = $('#input-age').val();
        const location = $('#input-location').val();
        const income = $('#input-income').val();


        const dataToSend = {
            username: username,
            password: password,
            age: age,
            location: location,
            income: income,

        };
        
        console.log(dataToSend);

        $.post('/api/budgets', dataToSend, function () {

        }).then(function () {
            console.log(results);
            console.log('success');
        });
    });







});