export interface NestedOption {
  label: string;
  value: string;
  children?: NestedOption[];
}

export interface NestedMultiSelectProps {
  options: NestedOption[];

  value: NestedOption[];
  onChange: (items: NestedOption[]) => void;

  childValue?: NestedOption[];
  onChildChange?: (items: NestedOption[]) => void;

  placeholder?: string;
}