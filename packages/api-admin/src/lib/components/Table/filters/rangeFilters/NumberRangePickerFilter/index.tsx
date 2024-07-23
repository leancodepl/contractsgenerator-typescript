import { InputNumber, Space } from "antd"
import { FilterDropdownProps } from "antd/lib/table/interface"
import { Key } from "react"
import { ConfirmResetButtons } from "../../common/ConfirmResetButtons"
import { bigIntToString } from "../../../../../utils/bigIntToString"

type DatePickerFilterProps = {
    placeholder?: string
} & FilterDropdownProps

export function NumberRangePickerFilter({
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters,
}: DatePickerFilterProps) {
    return (
        <div style={{ padding: 8, display: "flex", flexDirection: "column", gap: 8 }}>
            <Space direction="horizontal">
                <InputNumber
                    placeholder="From"
                    size="small"
                    value={bigIntToString(selectedKeys[0])}
                    onChange={value => setSelectedKeys?.([value as Key, selectedKeys[1]])}
                />
                -
                <InputNumber
                    placeholder="To"
                    size="small"
                    value={bigIntToString(selectedKeys[1])}
                    onChange={value => setSelectedKeys?.([selectedKeys[0], value as Key])}
                />
            </Space>
            <ConfirmResetButtons clearFilters={clearFilters} confirm={confirm} />
        </div>
    )
}
