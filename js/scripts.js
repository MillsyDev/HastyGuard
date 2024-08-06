document.addEventListener("DOMContentLoaded", function() {
    const apiKey = '5637830a1d7c463bff90dd71'; // Replace with your ExchangeRate-API key
    const audToLocalCurrency = async () => {
        try {
            const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/AUD`);
            const data = await response.json();
            const userCurrency = data.base_code;
            const rates = data.conversion_rates;

            const basicPriceAud = 10;
            const premiumPriceAud = 20;

            const basicPriceLocal = (basicPriceAud * rates[userCurrency]).toFixed(2);
            const premiumPriceLocal = (premiumPriceAud * rates[userCurrency]).toFixed(2);

            document.getElementById('basic-price').innerText = `Price: ${basicPriceLocal} ${userCurrency}`;
            document.getElementById('premium-price').innerText = `Price: ${premiumPriceLocal} ${userCurrency}`;
        } catch (error) {
            console.error('Error fetching exchange rates:', error);
        }
    };

    audToLocalCurrency();
});
