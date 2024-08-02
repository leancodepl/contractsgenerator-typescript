import { ReactNode } from "react"
import { Space } from "antd"

type FilterDropdownWrapperProps = {
    children?: ReactNode
}

export function FilterDropdownWrapper({ children }: FilterDropdownWrapperProps) {
    return (
        <Space direction="vertical" size="small" style={{ padding: 8 }}>
            {children}
        </Space>
    )
}
