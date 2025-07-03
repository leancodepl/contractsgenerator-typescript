import { DatePicker } from "antd"
import { FilterDropdownProps } from "antd/lib/table/interface"
import dayjs from "dayjs"
import { ConfirmResetButtons } from "../../common/ConfirmResetButtons"

type DatePickerFilterProps = FilterDropdownProps & {
    placeholder?: string
    type?: "dateOnly" | "dateTimeOffset"
}

export function DateRangePickerFilter({
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters,
    type,
}: DatePickerFilterProps) {
    return (
        <div style={{ padding: 8, display: "flex", flexDirection: "column", gap: 8 }}>
            <DatePicker.RangePicker
                autoFocus
                showTime={type === "dateTimeOffset"}
                value={[
                    selectedKeys[0] ? dayjs(selectedKeys[0]) : null,
                    selectedKeys[1] ? dayjs(selectedKeys[1]) : null,
                ]}
                onChange={(_, [date1, date2]) => setSelectedKeys?.([date1, date2])}
            />
            <ConfirmResetButtons clearFilters={clearFilters} confirm={confirm} />
        </div>
    )
}
