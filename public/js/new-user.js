$(document).ready(function () {

    $('#submit-btn').on('click', function (event) {
        event.preventDefault();

        const category1 = $('#category1').val();
        const category2 = $('#category2').val();
        const category3 = $('#category3').val();
        const category4 = $('#category4').val();
        const category5 = $('#category5').val();
        const category6 = $('#category6').val();
        const category7 = $('#category7').val();
        const category8 = $('#category8').val();
        const category9 = $('#category9').val();


        const dataToSend = {
            category1: category1,
            category2: category2,
            category3: category3,
            category4: category4,
            category5: category5,
            category6: category6,
            category7: category7,
            category8: category8,
            category9: category9,
        };

        $.post('/api/budgets', dataToSend, function () {

        }).then(function () {
            console.log(results);
            console.log('success');
        });
    });







});