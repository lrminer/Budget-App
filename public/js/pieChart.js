$(window).on("load", function () {


    google.charts.setOnLoadCallback(drawChart);
    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    // function getUsers() {
    Promise.all([$.get('/api/users/'), $.get('/api/budgets/')])
        .then(drawChart);
    // return .then(function (userData) {
    //     return userData = userData
    // })
    // console.log(userData)

    // .then(function (budgetData) {
    //     return budgetData = budgetData
    // })

    // allData()
    //     .then(drawChart);
    // console.log(budgetData)
    // getUsers()
    // .then(drawChart)

    function drawChart(all_data) {
        console.log(all_data);
        let avgData = all_data[1];
        console.log(avgData);
        
        let grocery = parseInt(avgData.Grocery)
        let dine_out = parseInt(avgData.Dine_Out)
        let alcohol = parseInt(avgData.Alcohol)
        let housing = parseInt(avgData.Housing)
        let apparel = parseInt(avgData.Apparel)
        let transportation = parseInt(avgData.Transportation)
        let health = parseInt(avgData.Health)
        let entertainment = parseInt(avgData.entertainment)
        let personal_care = parseInt(avgData.Personal_care)
        let education = parseInt(avgData.Education)
        let miscellaneous = parseInt(avgData.Miscallaneous)
        let donations = parseInt(avgData.Donations)
        let insurance = parseInt(avgData.Insurance)
        
        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Category');
        data.addColumn('number', '%');
        data.addRows([
            ['Grocery', grocery],
            ['Dine Out', dine_out],
            ['Alcohol', alcohol],
            ['Housing', housing],
            ['Apparel', apparel],
            ['Transportation', transportation],
            ['Health', health],
            ['Entertainment', entertainment],
            ['Personal Care', personal_care],
            ['Education', education],
            ['Miscellaneous', miscellaneous],
            ['Donations', donations],
            ['Insurance', insurance]
        ]);

        // Set chart options
        var options = {
            'title': 'Average Spending',
            'width': 500,
            'height': 500
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }
})