import data from '../data/fx.json';

export const fetchRates = () => {
    return data.fx.map((item) => ({
        code: item.currency,
        currency: item.nameI18N || "Unknown Currency",
        buy: item.exchangeRate ? item.exchangeRate.buy : 0,
        middle: item.exchangeRate ? item.exchangeRate.middle : 0,
        sell: item.exchangeRate ? item.exchangeRate.sell : 0
    }));
};
