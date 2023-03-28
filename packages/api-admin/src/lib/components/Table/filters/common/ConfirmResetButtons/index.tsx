import { SearchOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import type { FilterDropdownProps } from "antd/lib/table/interface";

type ConfirmResetButtonsProps = Pick<FilterDropdownProps, "confirm" | "clearFilters">;

export function ConfirmResetButtons({ confirm, clearFilters }: ConfirmResetButtonsProps) {
    return (
        <Space>
            <Button icon={<SearchOutlined />} size="small" type="primary" onClick={() => confirm()}>
                Filter
            </Button>
            <Button size="small" onClick={clearFilters}>
                Reset
            </Button>
        </Space>
    );
}
