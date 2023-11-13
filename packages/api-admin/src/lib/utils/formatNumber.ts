type FormatNumberParams = {
  options?: Intl.NumberFormatOptions;
  locale?: string | string[];
};

export function formatNumber(number?: number, { options, locale }: FormatNumberParams = {}) {
  if (number === undefined) return "";

  const formatter = new Intl.NumberFormat(locale, options);

  return formatter.format(number);
}
