$('#submit-button').on('click', function () {
    const typeOfQuery = $('#typeOfQuery :selected').attr('value');

    const range = $('#input-range').val();

    const url = '/api/budgets/category/' + typeOfQuery + '/' + range;

    getComparisonData(url);
    console.log(url);
});

function getComparisonData(url) {
    $.ajax({
        url: url
    }).then(function (data) {
        console.log(data);
    });
}