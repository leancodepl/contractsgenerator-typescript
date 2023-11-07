import generatePicker, { PickerTimeProps, RangePickerTimeProps } from "antd/lib/date-picker/generatePicker";
import { Dayjs } from "dayjs";
// eslint-disable-next-line import/no-extraneous-dependencies
import dayjsGenerateConfig from "rc-picker/lib/generate/dayjs";
import { forwardRef } from "react";

export const DatePicker = generatePicker<Dayjs>(dayjsGenerateConfig);

export type TimePickerProps = Omit<PickerTimeProps<Dayjs>, "picker">;
export type TimeRangePickerProps = Omit<RangePickerTimeProps<Dayjs>, "picker">;

export const TimePicker = forwardRef<never, TimePickerProps>((props, ref) => (
  <DatePicker {...props} ref={ref} picker="time" />
));

export const TimeRangePicker = forwardRef<never, TimeRangePickerProps>((props, ref) => (
  <DatePicker.RangePicker {...props} ref={ref} picker="time" />
));

TimePicker.displayName = "TimePicker";
TimeRangePicker.displayName = "TimeRangePicker";
