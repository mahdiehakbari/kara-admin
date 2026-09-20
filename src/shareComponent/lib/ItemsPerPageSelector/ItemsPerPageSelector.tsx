import { ItemsPerPageSelectorProps } from './types';

const ItemsPerPageSelector = ({
  options = [10, 20, 30, 50],
  itemsPerPage,
  totalCount,
  onChange,
}: ItemsPerPageSelectorProps) => {
  return (
    <div className="border border-(--border-color) rounded-[5px]">
      {options.map((count) => {
        const disabled = totalCount < count;

        return (
          <button
            key={count}
            type="button"
            onClick={() => {
              if (!disabled) {
                onChange(count);
              }
            }}
            disabled={disabled}
            className={`min-w-8 first:rounded-tr-md first:rounded-br-md last:rounded-tl-md last:rounded-bl-md border-l last:border-l-0  border-(--border-color) h-8 px-2 text-sm transition ${
              disabled
                ? 'text-gray-400 cursor-not-allowed'
                : itemsPerPage === count
                  ? 'bg-(--primary) text-white font-bold'
                  : 'text-(--text-muted) hover:bg-(--surface) hover:text-primary'
            }`}
          >
            {count}
          </button>
        );
      })}
    </div>
  );
}

export default ItemsPerPageSelector;