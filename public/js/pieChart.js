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
            let grocery = 0.07
            let dine_out = 0.06
            let alcohol = 0.01
            let housing = 0.33
            let apparel = 0.03
            let transportation = 0.16
            let health = 0.08
            let entertainment = 0.05
            let personal_care = 0.01
            let education = 0.03
            let miscellaneous = 0.02
            let donations = 0.04
            let insurance = 0.12

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