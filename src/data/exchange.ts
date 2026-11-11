/** Latest Bank of Canada daily average available on 2026-11-11. Indicative only. */
export const exchangeReference = {
  rate: 1.4181,
  publishedDate: '2026-11-10',
  checkedDate: '2026-11-11',
  source: 'https://www.bankofcanada.ca/rates/exchange/daily-exchange-rates/',
} as const
export const cadFromSource = (amount: number) => amount * exchangeReference.rate
