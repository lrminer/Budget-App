array = [{
    alcohol: 100,
    grocery: 500,
    dineOut: 150,
    housing: 1000,
    apparelAndServices: 500,
    transportation: 200,
    healthCare: 250,
    entertainment: 300,
    personalCare: 60,
    education: 1000,
    miscellaneous: 40,
    donations: 500,
    insurance: 100
}, {
    alcohol: 0,
    grocery: 0,
    dineOut: 0,
    housing: 0,
    apparelAndServices: 0,
    transportation: 0,
    healthCare: 0,
    entertainment: 0,
    personalCare: 0,
    education: 0,
    miscellaneous: 0,
    donations: 0,
    insurance: 0
}];



function averagingData(array) {
    let alcoholTotal = 0;
    let groceryTotal = 0;
    let dineOutTotal = 0;
    let housingTotal = 0;
    let apparelAndServicesTotal = 0;
    let transportationTotal = 0;
    let healthCareTotal = 0;
    let entertainmentTotal = 0;
    let personalCareTotal = 0;
    let educationTotal = 0;
    let miscellaneousTotal = 0;
    let donationsTotal = 0;
    let insuranceTotal = 0;

    array.forEach(function (item) {
        let budgetTotal = 0; //this may be unnecessary

        alcoholTotal += parseInt(item.Alcohol);
        groceryTotal += parseInt(item.Grocery);
        dineOutTotal += parseInt(item.Dine_Out);
        housingTotal += parseInt(item.Housing);
        apparelAndServicesTotal += parseInt(item.Apparel);
        transportationTotal += parseInt(item.Transportation);
        healthCareTotal += parseInt(item.Health_care);
        entertainmentTotal += parseInt(item.entertainment);
        personalCareTotal += parseInt(item.Personal_care);
        educationTotal += parseInt(item.Education);
        miscellaneousTotal += parseInt(item.Miscallaneous);
        donationsTotal += parseInt(item.Donations);
        insuranceTotal += parseInt(item.Insurance);
    });

    alcoholTotal /= array.length;
    groceryTotal /= array.length;
    dineOutTotal /= array.length;
    housingTotal /= array.length;
    apparelAndServicesTotal /= array.length;
    transportationTotal /= array.length;
    healthCareTotal /= array.length;
    entertainmentTotal /= array.length;
    personalCareTotal /= array.length;
    educationTotal /= array.length;
    miscellaneousTotal /= array.length;
    donationsTotal /= array.length;
    insuranceTotal /= array.length;


    data = {
        Alcohol: alcoholTotal,
        Grocery: groceryTotal,
        Dine_Out: dineOutTotal,
        Housing: housingTotal,
        Apparel: apparelAndServicesTotal,
        Transportation: transportationTotal,
        Health: healthCareTotal,
        entertainment: entertainmentTotal,
        Personal_care: personalCareTotal,
        Education: educationTotal,
        Miscellaneous: miscellaneousTotal,
        Donations: donationsTotal,
        Insurance: insuranceTotal
    };
    
    return data;
}

console.log(averagingData(array));
module.exports = averagingData;