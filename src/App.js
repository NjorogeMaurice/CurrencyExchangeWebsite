import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CurrencyList from './components/CurrencyList';
import { fetchRates } from './utils/fetchRates';
import './index.css';

const App = () => {
  const [currencies, setCurrencies] = useState(fetchRates());

  const handleSearch = (query) => {
    const filtered = fetchRates().filter(({ code, currency, buy, middle, sell }) =>
        [code.toString(), currency.toString(), buy.toString(), middle.toString(),  sell.toString()].some((field) => field.toLowerCase().includes(query.toLowerCase()))
    );
    setCurrencies(filtered);
  };

  return (
      <Router>
        <Header />
        <SearchBar onSearch={handleSearch} />
        <CurrencyList currencies={currencies} />
      </Router>
  );
};

export default App;
