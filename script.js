const calculateTemp = () => {
    const numberTemp=document.getElementById('temp').value;
    // console.log(numberTemp)

    const tempselected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempselected.selectedIndex].value;

    const celsiustofahrenheit=(celsius)=>{
        let fahrenheit = ((celsius * 9/5)+32);
        return fahrenheit ;
    }
    const fahrenheittocelsius=(fahrenheit)=>{
        let celsius = ((fahrenheit - 32)* 5/9);
        return celsius ;
    }


    let result;
    if(valueTemp == 'celsius'){
        result= celsiustofahrenheit(numberTemp);
        document.getElementById('resultContainer').innerHTML= `= ${result}°fahrenheit`;
    }
    else {
        result= fahrenheittocelsius(numberTemp);
        document.getElementById('resultContainer').innerHTML= `= ${result}°celsius`;
    }
}