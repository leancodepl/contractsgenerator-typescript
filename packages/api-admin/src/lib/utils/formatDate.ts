import dayjs, { Dayjs, duration } from "dayjs";
import bigIntSupport from "dayjs/plugin/bigIntSupport";

dayjs.extend(duration);
dayjs.extend(bigIntSupport);

type FormatDateParams = {
  options?: Intl.DateTimeFormatOptions;
  locale?: string | string[];
};

export function formatDate(date: Date | Dayjs | string, { options, locale }: FormatDateParams = {}) {
  let dateToFormat = new Date();

  if (dayjs.isDayjs(date)) {
    if (!date.isValid()) {
      return "Invalid date";
    }

    dateToFormat = date.toDate();
  }

  if (typeof date === "string") dateToFormat = new Date(date);

  const formatter = new Intl.DateTimeFormat(locale, options);

  return formatter.format(dateToFormat);
}
