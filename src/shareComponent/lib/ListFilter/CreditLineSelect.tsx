/* eslint-disable @typescript-eslint/ban-ts-comment */
import { components, OptionProps } from 'react-select';
import { ISelectOption } from './types';
//@ts-ignore
type CreditLineCheckboxOptionProps = OptionProps<CreditLineOption, true> & {
  planTypes: ISelectOption[];
  setPlanTypes: React.Dispatch<React.SetStateAction<ISelectOption[]>>;
};

export const CreditLineCheckboxOption = ({
  planTypes,
  setPlanTypes,
  ...props
}: CreditLineCheckboxOptionProps) => {
  const { isSelected, data } = props;

  return (
    <components.Option {...props}>
      <div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={isSelected}
            readOnly
          />

          <span>{data.label}</span>
        </div>

        {isSelected &&
          data.value === '0' &&
          data.children &&
          data.children.length > 0 && (
            <div
  className="mr-6 mt-2 space-y-2"
  onClick={(e) => e.stopPropagation()}
  onMouseDown={(e) => e.stopPropagation()}
>
    
              {data.children.map((plan: ISelectOption) => (
               <label
  key={plan.value}
  className="flex items-center gap-2 cursor-pointer"
  onClick={(e) => e.stopPropagation()}
  onMouseDown={(e) => e.stopPropagation()}
><input
  type="checkbox"
  checked={planTypes.some(
    (item) => item.value === plan.value,
  )}
  onClick={(e) => e.stopPropagation()}
  onMouseDown={(e) => e.stopPropagation()}
  onChange={(e) => {
    e.stopPropagation();

    if (e.target.checked) {
      setPlanTypes([...planTypes, plan]);
    } else {
      setPlanTypes(
        planTypes.filter(
          (item) => item.value !== plan.value,
        ),
      );
    }
  }}
/>

                  <span>{plan.label}</span>
                </label>
              ))}
            </div>
          )}
      </div>
    </components.Option>
  );
};