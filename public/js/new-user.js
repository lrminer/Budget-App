$(document).ready(function () {

    $('#submit-btn').on('click', function (event) {
        event.preventDefault();

        const firstName = $('#input-first-name').val();
        const lastName = $('#input-last-name').val();
        const age = $('#input-age').val();
        const location = $('#input-location').val();
        const income = $('#input-income').val();


        const dataToSend = {
            firstName: firstName,
            lastName: lastName,
            Age: age,
            Location: location,
            Income: income,

        };

        console.log(dataToSend);

        $.post('/api/users', dataToSend, function () {

        }).then(function () {
            console.log(results);
            console.log('success');
        });
    });







});