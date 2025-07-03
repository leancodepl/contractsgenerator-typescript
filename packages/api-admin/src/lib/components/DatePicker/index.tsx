import { ComponentPropsWithoutRef, forwardRef } from "react"
import { DatePicker } from "antd"

export type TimePickerProps = Omit<ComponentPropsWithoutRef<typeof DatePicker>, "picker">
export type TimeRangePickerProps = Omit<ComponentPropsWithoutRef<typeof DatePicker.RangePicker>, "picker">

export const TimePicker = forwardRef<never, TimePickerProps>((props, ref) => (
    <DatePicker {...props} ref={ref} picker="time" />
))

export const TimeRangePicker = forwardRef<never, TimeRangePickerProps>((props, ref) => (
    <DatePicker.RangePicker {...props} ref={ref} picker="time" />
))

TimePicker.displayName = "TimePicker"
TimeRangePicker.displayName = "TimeRangePicker"

export { DatePicker }
