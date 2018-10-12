function testGetCurrentPriceNoExchange() {
    const a = getCurrentPrice(['ETH'], ['BTC'], null);
    const b = getCurrentPrice(['ETH'], ['BTC'], undefined);
    const c = getCurrentPrice(['ETH'], ['BTC']);
    return;
}

function testGetCurrentPrice() {
    const a = getCurrentPrice(['ETH','BTC'], ['USD']);
    return;
}