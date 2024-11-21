const CurrencyCard = ({ flag, country, currency, buy, middle, sell }) => (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '200px', // Set width to a fixed value
        height: '200px', // Set height to match the width (square)
        marginBottom: '10px',
        padding: '15px',
        background: '#fff',
        borderRadius: '12px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
    }}>
        <img
            src={flag}
            alt={`${currency} flag`}
            style={{
                width: '50px',
                height: '50px', // Square flag image
                objectFit: 'cover', // Ensures image aspect ratio is preserved
                marginBottom: '10px'
            }}
        />
        <div>
            <h4 style={{margin: '0 0 5px 0'}}>{country}</h4>
            <p style={{margin: '5px 0'}}>{currency}</p>
            <hr></hr>
            <p style={{margin: '5px 0', color: 'green', fontWeight: 'bold'}}>Buy: {buy.toFixed(2)}</p>
            <p style={{margin: '5px 0', color: 'blue', fontWeight: 'bold'}}>Middle: {middle.toFixed(2)}</p>
            <p style={{margin: '5px 0', color: 'red', fontWeight: 'bold'}}>Sell: {sell.toFixed(2)}</p>
        </div>
    </div>

);

export default CurrencyCard;
