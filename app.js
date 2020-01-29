// function tempConverter(){
//     var output = document.getElementById('output');
//     let convertBtn = document.getElementById('convert');
//     convertBtn.addEventListener('click', function(){
//         var fahTemp = Number(document.getElementById('fahTemp').value);
//         let celTemp = (fahTemp -32)*5/9;
//         console.log(fahTemp);
        
//         output.innerHTML= celTemp.toFixed(1);
        
//     } )
// };
// tempConverter()

function tempConverter(){
    let output = document.getElementById('output');
    let convertBtn = document.getElementById('convert');
    convertBtn.addEventListener('click', function(){
        let temp = Number(document.getElementById('temp').value);
        let unit1 = document.getElementById('unit1').value;
        let unit2 = document.getElementById('unit2').value;
        if(unit1 == 'fah' && unit2 == 'cel'){ 
            let newTemp = (temp -32)*5/9;
            output.innerHTML= ` ${newTemp.toFixed(1)} \u00B0 Celsius`;
        }
        if(unit1 == 'fah' && unit2 == 'kel'){
            let newTemp = (temp -32)*5/9 + 273.15;
            output.innerHTML= ` ${newTemp.toFixed(1)} \u00B0 Kelvin`;
        }
        if(unit1 == 'cel' && unit2 == 'fah'){
            let newTemp = (temp * 1.8)+ 32;
            output.innerHTML= ` ${newTemp.toFixed(1)} \u00B0 Fahrenheit`;
        }
        if(unit1 == 'cel' && unit2 == 'kel'){
            let newTemp = temp + 273;
            output.innerHTML= ` ${newTemp.toFixed(1)} \u00B0 Kelvin`;
        }
        if(unit1 == 'kel' && unit2 == 'fah'){
            let newTemp = (temp - 273)*1.8 + 32;
            output.innerHTML= ` ${newTemp.toFixed(1)} \u00B0 Fahrenheit`;
        }
        if(unit1 == 'kel' && unit2 == 'cel'){
            let newTemp = temp - 273;
            output.innerHTML= ` ${newTemp.toFixed(1)} \u00B0 Celsius`;
        }
        if(unit1 == unit2){
            alert('Same units, look again.')
        }
    })
}
tempConverter()