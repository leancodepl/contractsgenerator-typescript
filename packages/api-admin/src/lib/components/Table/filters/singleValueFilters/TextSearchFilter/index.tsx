import { Input } from "antd";
import { FilterDropdownProps } from "antd/lib/table/interface";
import { ConfirmResetButtons } from "../../common/ConfirmResetButtons";
import { bigIntToString } from "../../../../../utils/bigIntToString";

type TextSearchFilterProps = {
  placeholder: string;
} & FilterDropdownProps;

export function TextSearchFilter({
  setSelectedKeys,
  selectedKeys,
  confirm,
  clearFilters,
  placeholder,
}: TextSearchFilterProps) {
  return (
    <div style={{ padding: 8 }}>
      <Input
        autoFocus
        placeholder={placeholder}
        style={{ width: 188, marginBottom: 8, display: "block" }}
        value={bigIntToString(selectedKeys?.[0])}
        onChange={e => setSelectedKeys?.(e.target.value ? [e.target.value] : [])}
        onPressEnter={() => confirm()}
      />
      <ConfirmResetButtons clearFilters={clearFilters} confirm={confirm} />
    </div>
  );
}
