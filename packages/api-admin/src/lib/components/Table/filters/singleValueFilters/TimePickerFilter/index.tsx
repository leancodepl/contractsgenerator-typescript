import { FilterDropdownProps } from "antd/lib/table/interface"
import dayjs from "dayjs"
import { TimePicker } from "../../../../DatePicker"
import { ConfirmResetButtons } from "../../common/ConfirmResetButtons"
import { FilterDropdownWrapper } from "../../common/FilterDropdownWrapper"

type TimePickerFilterProps = FilterDropdownProps

export function TimePickerFilter({ setSelectedKeys, selectedKeys, confirm, clearFilters }: TimePickerFilterProps) {
    return (
        <FilterDropdownWrapper>
            <TimePicker
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                value={selectedKeys[0] ? dayjs(selectedKeys[0]) : null}
                onChange={(_, date) => setSelectedKeys?.([date])}
            />
            <ConfirmResetButtons clearFilters={clearFilters} confirm={confirm} />
        </FilterDropdownWrapper>
    )
}
