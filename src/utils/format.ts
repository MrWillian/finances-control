export const formatNumber = (amount: number, decimalCount = 2, decimal = ",", thousands = ".", sign = 'R$ ') => {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    let amountString: string = amount.toString();

    let i = parseInt(amountString = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    let j = (i.length > 3) ? i.length % 3 : 0;

    return sign + negativeSign + (j ? i.substr(0, j) + thousands : '') 
      + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) 
      + (decimalCount ? decimal + Math.abs(amount - +i).toFixed(decimalCount).slice(2) : "");
  } catch (e) {
    console.log(e)
  }
};
