const assert = require('chai').assert;


const {calculate_BMI, determine_BMI_category_risk} = require('../helper')
const BMI_category_and_healthRisk = require('../BMI_category.json')
const data = require('../testingData.json')
const {
    calculate_bmi_category_risk,
    overweightCount
} = require('../index')

describe('Testing calculate BMI from weight in Kg and Height in meters',function(){
    const result = calculate_BMI(75,1.75);
    it('It should return number',()=>{
        assert.typeOf(result,'number')
    })

    it('It should return BMI',()=>{
        assert.equal(result,24.49);
    })

    
})

describe('Testing determine_BMI_category_risk',function(){
    const result = determine_BMI_category_risk(calculate_BMI(75,1.75),BMI_category_and_healthRisk);
    it('It should return object',()=>{
        assert.typeOf(result,'object');

    })
    it('It should return keys - BMI, BMI_category, BMI_health_risk',()=>{
        assert.hasAnyDeepKeys(result,['BMI', 'BMI_category', 'BMI_health_risk']);

    })
})


describe('Testing calculate_bmi_category_risk',function(){
    const result = calculate_bmi_category_risk(data,BMI_category_and_healthRisk);

    it('It should return Array',function(){
        assert.typeOf(result, 'array')
    })

    it('It should return non empty array',function(){
        assert.isNotEmpty(result)
    })

    it('It should return array of objects',function(){
        result.forEach(element=>{
            assert.hasAnyDeepKeys(element,['Gender','HeightCm','WeightKg','BMI', 'BMI_category', 'BMI_health_risk']);
        })
    })
    
})


describe('Testing overweightCount',function(){
    const result = overweightCount(calculate_bmi_category_risk(data,BMI_category_and_healthRisk));

    it('It should return number',function(){
        assert.typeOf(result, 'number')
    })    
})