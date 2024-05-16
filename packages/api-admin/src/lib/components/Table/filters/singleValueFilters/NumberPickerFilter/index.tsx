import { InputNumber } from "antd";
import { FilterDropdownProps } from "antd/lib/table/interface";
import { Key } from "react";
import { ConfirmResetButtons } from "../../common/ConfirmResetButtons";
import { FilterDropdownWrapper } from "../../common/FilterDropdownWrapper";

type DatePickerFilterProps = {
  placeholder?: string;
} & FilterDropdownProps;

export function NumberPickerFilter({ setSelectedKeys, selectedKeys, confirm, clearFilters }: DatePickerFilterProps) {
  return (
    <FilterDropdownWrapper>
      <InputNumber
        placeholder="Input number"
        size="small"
        value={typeof selectedKeys[0] === "bigint" ? selectedKeys[0].toString() : selectedKeys[0]}
        onChange={value => setSelectedKeys?.([value as Key])}
      />
      <ConfirmResetButtons clearFilters={clearFilters} confirm={confirm} />
    </FilterDropdownWrapper>
  );
}
