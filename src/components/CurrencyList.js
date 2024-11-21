import CurrencyCard from './CurrencyCard';

// Dynamically load flag images
const flagImages = require.context('../assets/flags', false, /\.(png|jpe?g|svg)$/);

// const CurrencyList = ({ currencies }) => (
//     <div style={{ padding: '20px' }}>
//         {currencies.map(({ code, currency, exchangeRate }) => {
//             // Match the flag image using the currency code
//             const flagSrc = flagImages(`./${code.toLowerCase().slice(0, -1)}.png`);
//             return (
//                 <CurrencyCard
//                     key={code}
//                     flag={flagSrc}
//                     country={currency}
//                     currency={code}
//                     rate={exchangeRate}
//                 />
//             );
//         })}
//     </div>
// );
//
// export default CurrencyList;

const CurrencyList = ({ currencies }) => (
    <div style={{
        padding: '20px',
        display: 'flex', // Enable flexbox layout
        flexWrap: 'wrap', // Allow wrapping of cards to new rows
        gap: '20px', // Add space between the cards
        justifyContent: 'start', // Center the cards horizontally
    }}>
        {currencies.map(({code, currency, buy, middle, sell}) => {
            let flagSrc;
            try {
                // Dynamically adjust the code to match flag filenames and load the flag
                flagSrc = flagImages(`./${code.toLowerCase().slice(0, -1)}.png`);
            } catch (error) {
                // Skip rendering if the flag is not found
                return null;
            }

            return (
                <CurrencyCard
                    key={code}
                    flag={flagSrc}
                    country={currency}
                    currency={code}
                    buy={buy}
                    middle={middle}
                    sell={sell}
                />
            );
        })}
    </div>

);

export default CurrencyList;

