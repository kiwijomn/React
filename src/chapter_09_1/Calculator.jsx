import React, {useState} from "react";
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";

function toCelsius(fahrenheit) { // 화씨 -> 섭씨
    return ((fahrenheit - 32) * 5) / 9; // 변환공식
}

function toFahrenheit(celsius) { // 섭씨 -> 화씨
    return (celsius * 9) / 5 + 32; // 변환공식
}

// 온도값과 변환함수를 넘겨서, 변환된 값을 리턴
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) { 
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculator(props) {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    // 섭씨온도가 입력되면 호출될 핸들러함수
    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    };

    // 화씨온도가 입력되면 호출될 핸들러함수
    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    };

    const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
    
    return (
        <div>
            { /* 자식컴포넌트에게 props 파라메터로 전달하면서 호출 */ }
            <TemperatureInput
            scale="c" // 섭씨용 컴포넌트
            temperature={celsius} // 화씨라면 섭씨로 변환 후 전달
            onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput
            scale="f" // 화씨용 컴포넌트
            temperature={fahrenheit} // 섭씨라면 화씨로 변환 후 전달
            onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}

export default Calculator;