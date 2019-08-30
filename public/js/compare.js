$('#submit-button').on('click', function () {
    const typeOfQuery = $('#typeOfQuery :selected').attr('value');

    const range = $('#input-range').val();

//    const url = '/api/budgets/category/' + typeOfQuery + '/' + range;

    const url = '/api/budgets/category/' + typeOfQuery + '/' + range;

    getComparisonData(url);
    console.log(url);
});

function getComparisonData(url) {
    $.ajax({
        method: "GET",
        url: url
    }).then(function (data) {
        console.log(data);
    });
}