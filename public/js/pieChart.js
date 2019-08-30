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
        // console.log(all_data);
        let newUser = all_data[1][0]
        console.log(newUser);
        let grocery = parseInt(newUser.Grocery)
        let dine_out = parseInt(newUser.Dine_Out)
        let alcohol = parseInt(newUser.Alcohol)
        let housing = parseInt(newUser.Housing)
        let apparel = parseInt(newUser.Apparel)
        let transportation = parseInt(newUser.Transportation)
        let health = parseInt(newUser.Health)
        let entertainment = parseInt(newUser.entertainment)
        let personal_care = parseInt(newUser.Personal_care)
        let education = parseInt(newUser.Education)
        let miscellaneous = parseInt(newUser.Miscallaneous)
        let donations = parseInt(newUser.Donations)
        let insurance = parseInt(newUser.Insurance)
        
        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Category');
        data.addColumn('number', '%');
        data.addRows([
            ['Grocery', grocery],
            ['Dine_out', dine_out],
            ['Alcohol', alcohol],
            ['Housing', housing],
            ['Apparel', apparel],
            ['Transportation', transportation],
            ['Health', health],
            ['Entertainment', entertainment],
            ['Personal_care', personal_care],
            ['Education', education],
            ['Miscellaneous', miscellaneous],
            ['Donations', donations],
            ['Insurance', insurance]
        ]);

        // Set chart options
        var options = {
            'title': 'Spending budget',
            'width': 600,
            'height': 600
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }
})