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
        const selectedUser = $('select :selected').attr('value'); // grabbing a user's id from the dropdown menu
        console.log(selectedUser); //console.log user id to make sure

        $.get({
            url: '/api/budgets/category/user_id=' +  selectedUser
        }).then(function (data) {
            console.log(data);
        });
    });








})