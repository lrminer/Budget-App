$(document).ready(function () {
    $.ajax({
        method: "GET",
        url: '/api/users' //going to grab every single user to make a dropdown using their names and the id as the value of the selection
    }).then(function (data) {
        console.log(data); // we will use this data to make a dropdown list


        const select = $('#user-list');
        // this is pseudocode below btw 
        for (i = 0; i < data.length; i++) {
            const firstname = data[i].firstName;/// check this property name
            const lastname = data[i].lastName; /// check this property name
            const id = data[i].id; /// check this property name

            const option = $('<option>').text(firstname + " " + lastname).attr('value', id);

            select.append(option);
        }


    });

    // use the proper selector for the button 
    // this may need to be in the piechart js...?
    $('button').on('click', function(event){
        event.preventDefault();
       
        // choose right selector again here
        // yourbox === the space for the piechart we are acting on behalf of
        $('yourbox').empty();

        // use piechart.js stuff here underneath...
        
        // build url for that user
        let selectedUserName = $('select :selected').text();
        const selectedUser = $('select :selected').attr('value'); // grabbing a user's id from the dropdown menu
        
        selectedUserName = selectedUserName.toLowerCase();
        selectedUserName = selectedUserName.split(' ');
        selectedUserName = selectedUserName[0];
        selectedUserName += "'s Budget";
        

        console.log(selectedUserName);
        console.log(selectedUser); //console.log user id to make sure

        $.get({
            url: '/api/budgets/category/user_id=' +  selectedUser
        }).then(function (data) {
            
            console.log(data);

            drawChart(data, selectedUserName);
        });

    
    });

    function drawChart(all_data, name) {
        console.log(all_data);
        let avgData = all_data[0];
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
            'title': name,
            'width': 500,
            'height': 500
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('user_div'));
        chart.draw(data, options);
    }


})