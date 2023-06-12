export function nFormatter(num, digits = 1){
    const lookup = [
        {value: 1, symbol: ""},
        {value: 1e3, symbol: "k"},
        {value: 1e6, symbol: "M"},
    ];

    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;

    const item = lookup.slice().reverse().find(function(item) {
        return num >= item.value
    });

    return item 
        ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
        : "0";
}