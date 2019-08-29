$(document).ready(function () {

    $('#submit-btn').on('click', function (event) {
        event.preventDefault();

        const alcohol = $('#input-alcohol').val();
        const grocery = $('#input-grocery').val();
        const dineOut = $('#input-dineOut').val();
        const housing = $('#input-housing').val();
        const apparelAndServices = $('#input-apparelAndServices').val();
        const transportation = $('#input-transportation').val();
        const healthCare = $('#input-healthCare').val();
        const entertainment = $('#input-entertainment').val();
        const personalCare = $('#input-personalCare').val();
        const education = $('#input-education').val();
        const miscellaneous = $('#input-miscellaneous').val();
        const donations = $('#input-donations').val();
        const insurance = $('#input-insurance').val();
        


        const dataToSend = {
            alcohol: alcohol,
            grocery: grocery,
            dineOut: dineOut,
            housing: housing,
            apparelAndServices: apparelAndServices,
            transportation: transportation,
            healthCare: healthCare,
            entertainment: entertainment,
            personalCare: personalCare,
            education: education,
            miscellaneous: miscellaneous,
            donations: donations,
            insurance: insurance,
            
        };

        $.post('/api/budgets', dataToSend, function () {

        }).then(function () {
            console.log(results);
            console.log('success');
        });
    });







});