import { useState } from "react";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [data, setdata] = useState({});
  const [currency, setCurrency] = useState("");
  const url = `https://api.coingecko.com/api/v3/coins/${currency}`;

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  // console.log(currency);

  const searchCurrency = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setdata(response.data);
        // console.log(response.data);
      });
    }
  };

  // console.log(data);
  return (
    <div className="App">
      <h1>{data.symbol}</h1>
      <input
        value={currency}
        onChange={handleChange}
        onKeyPress={searchCurrency}
      />
    </div>
  );
}
