function numberWithCommas(x: string): string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const formatBalance = (amount: string): string => {
  const withDecimals = Number.parseFloat(amount).toFixed(2);
  return numberWithCommas(withDecimals);
};
