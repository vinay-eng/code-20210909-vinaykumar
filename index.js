const data = require('./testingData.json')


const {
    calculate_BMI,
    determine_BMI_category_risk
} = require('./helper')


const BMI_category_and_healthRisk = require('./BMI_category.json')


// function to calculate BMI, BMI Category, Health Risk
exports.calculate_bmi_category_risk = function (data, BMI_category_and_healthRisk){
    return data.map(element=>{
        const BMI_value = calculate_BMI(parseInt(element.WeightKg), parseInt(element.HeightCm)/100);
        const risk_category = determine_BMI_category_risk(parseFloat(BMI_value),BMI_category_and_healthRisk);
        return {
            ...element,
            BMI : BMI_value,
            BMI_category : risk_category.BMI_category?risk_category.BMI_category:'-',
            BMI_health_risk : risk_category.Health_risk?risk_category.Health_risk:'-'   
        }
    })
}




// function to calculate no of overweight people
exports.overweightCount = function(arr){
    const n = arr.length;
    var count = 0;
    for(var j = 0;j<n;j++){
        if(arr[j].BMI_category === "Overweight"){
            count += 1;
        }
    }
    return count
}

