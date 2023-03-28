import { Space } from "antd";
import { FilterDropdownProps } from "antd/lib/table/interface";
import dayjs from "dayjs";
import { TimeRangePicker } from "../../../../DatePicker";
import { ConfirmResetButtons } from "../../common/ConfirmResetButtons";

type TimeRangePickerFilterProps = FilterDropdownProps;

export function TimeRangePickerFilter({
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters,
}: TimeRangePickerFilterProps) {
    return (
        <div style={{ padding: 8, display: "flex", flexDirection: "column", gap: 8 }}>
            <Space>
                <TimeRangePicker
                    autoFocus
                    value={[
                        selectedKeys[0] ? dayjs(selectedKeys[0]) : null,
                        selectedKeys[1] ? dayjs(selectedKeys[1]) : null,
                    ]}
                    onChange={(_, [date1, date2]) => setSelectedKeys?.([date1, date2])}
                />
            </Space>
            <ConfirmResetButtons clearFilters={clearFilters} confirm={confirm} />
        </div>
    );
}
