import { FilterDropdownProps } from "antd/lib/table/interface"
import dayjs from "dayjs"
import { DatePicker } from "../../../../DatePicker"
import { ConfirmResetButtons } from "../../common/ConfirmResetButtons"
import { FilterDropdownWrapper } from "../../common/FilterDropdownWrapper"

type DatePickerFilterProps = FilterDropdownProps & {
    placeholder?: string
    type?: "dateOnly" | "dateTimeOffset"
}

export function DatePickerFilter({
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters,
    type,
}: DatePickerFilterProps) {
    return (
        <FilterDropdownWrapper>
            <DatePicker
                 
                autoFocus
                showTime={type === "dateTimeOffset"}
                value={selectedKeys[0] ? dayjs(selectedKeys[0]) : null}
                onChange={(_, date) => setSelectedKeys?.(Array.isArray(date) ? date : [date])}
            />
            <ConfirmResetButtons clearFilters={clearFilters} confirm={confirm} />
        </FilterDropdownWrapper>
    )
}
