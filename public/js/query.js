$(document).ready(function () {
  // use the proper selector for the button 
  // this may need to be in the piechart js...?
  $('button').on('click', function (event) {
    event.preventDefault();

    // choose right selector again here
    // yourbox === the space for the piechart we are acting on behalf of
    $('yourbox').empty();

    // use piechart.js stuff here underneath...

    const category = $('#category-select').val();
    console.log(category);
    const query = $('#queryResponse').val();
    console.log(query);
    console.log('/api/budgets?' + category + "=" + query);

    $.get({
      url: '/api/budgets?' + category + "=" + query
    }).then(function (data) {

      console.log(data);

      drawChart(data);
    });


  });

  function drawChart(all_data, name) {
    console.log(all_data);
    let avgData = all_data;
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
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }


})