// noinspection ES6ConvertVarToLetConst
var BASE_URL = "https://min-api.cryptocompare.com/data/pricemulti";

// noinspection JSUnusedGlobalSymbols
/**
 * Get the current price of a cryptocurrency
 * @param inputCurrencies The three (or four) characters code of the currency you want to get the value of. ex: BTC, ETH
 * @param outputCurrencies The three (or four) characters code of the currency used to evaluate {@inputCurrencies}
 *        price as a reference
 * @param exchange (optional)
 * Example of called URL: https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,BTC&tsyms=BTC,USD,EUR,e=CCCAGG
 */
function getCurrentPrice(inputCurrencies, outputCurrencies, exchange) {
    Logger.log('Requesting current price of currency(ies)',
        {inputCurrencies: inputCurrencies, outputCurrencies: outputCurrencies, exchange: exchange});
    // noinspection ES6ConvertVarToLetConst
    var url =  BASE_URL;
    const fromParameter = 'fsyms=' + inputCurrencies.join(',');
    url += '?' + fromParameter;
    const toParameter = 'tsyms=' + outputCurrencies.join(',');
    url += '&' + toParameter;
    if(!!exchange){
        const exchangeParameter = 'e=' + exchange;
        url += '&' + exchangeParameter;
    }

    const response = UrlFetchApp.fetch(url);
    Logger.log('Repsonse from cryptocompare: ', response);
    const responseData = JSON.parse(response.getContentText());
    return responseData;
}
