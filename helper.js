

// helper function to calculate BMI
exports.calculate_BMI = function (weight, hieght){
    return parseFloat((weight/(hieght*hieght)).toFixed(2))
}

// helper function to determine BMI Category
exports.determine_BMI_category_risk = function (bmi, arr){
    var n = arr.length;
    for(i = 0; i<n;i++){
        if(arr[i].min_value >= bmi && arr[i].max_value){
            return arr[i]
        }
    }
    return {}
}
