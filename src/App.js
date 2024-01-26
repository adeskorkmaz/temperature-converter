import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [celsius, setCelsius] = useState('');
  const [kelvin, setKelvin] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const convertToKelvin = () => {
    setFahrenheit('');
    const kelvinValue = parseFloat(celsius) + 273.15;
    setKelvin(kelvinValue.toFixed(2));
  };

  const convertToFahrenheit = () => {
    setKelvin('');
    const fahrenheitValue = (parseFloat(celsius) * 9/5) + 32;
    setFahrenheit(fahrenheitValue.toFixed(2));
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <div className="mb-3">
          <label htmlFor="celsiusInput" className="form-label"></label>
          <input
          placeholder='Enter Celsius'
            type="number"
            className="form-control italic"
            id="celsiusInput"
            value={celsius}
            onChange={(e) => setCelsius(e.target.value)}
          />
        </div>

        <div className="d-flex justify-content-center">
          <button className="btn btn-primary me-2" onClick={convertToKelvin}>
            Convert to Kelvin
          </button>
          <button className="btn btn-success" onClick={convertToFahrenheit}>
            Convert to Fahrenheit
          </button>
        </div>

        <div className="mt-3">
          {kelvin && <p>Kelvin: {kelvin} K</p>}
          {fahrenheit && <p>Fahrenheit: {fahrenheit} °F</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
