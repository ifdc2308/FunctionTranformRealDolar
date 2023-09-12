export const formatNumberToRealString = value => {
  let realFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return realFormatter.format(value);
};

export const formatRealStringToNumber = value => {
  return parseFloat(
    value.substring(2).replaceAll('.', '').replaceAll(',', '.'),
  );
