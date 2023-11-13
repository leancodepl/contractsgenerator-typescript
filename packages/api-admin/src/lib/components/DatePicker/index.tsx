import { DatePicker } from "antd";
import { PickerTimeProps, RangePickerTimeProps } from "antd/lib/date-picker/generatePicker";
import { Dayjs } from "dayjs";
import { forwardRef } from "react";

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

export { DatePicker };
