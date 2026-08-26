'use client';

import { useEffect, useRef, useState } from 'react';
import { NestedMultiSelectProps, NestedOption } from './types';
import { FiChevronDown } from 'react-icons/fi';

const NestedMultiSelect = ({
  options,
  value,
  onChange,
  childValue = [],
  onChildChange,
  placeholder = 'انتخاب کنید',
}: NestedMultiSelectProps) => {
  const [open, setOpen] = useState(false);
const [search, setSearch] = useState('');
const [expanded, setExpanded] = useState<string[]>([]);
  const ref = useRef<HTMLDivElement>(null);
const filteredOptions = options.filter((option) => {
  return option.label
    .toLowerCase()
    .includes(search.toLowerCase());
});

  const displayValue = value.map((item) => {
    if (item.children?.length) {
      const selectedChildren = childValue.filter((child) =>
        item.children!.some((c) => c.value === child.value),
      );

      return {
        ...item,
        displayLabel:
          selectedChildren.length > 0
            ? `${item.label} (${selectedChildren
                .map((c) => c.label)
                .join('، ')})`
            : `${item.label} (طرح)`,
      };
    }

    return {
      ...item,
      displayLabel: item.label,
    };
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: NestedOption) => {
    const exists = value.some((item) => item.value === option.value);

    if (exists) {
      onChange(value.filter((item) => item.value !== option.value));

      setExpanded((prev) => prev.filter((item) => item !== option.value));

      if (option.value === '0') {
        onChildChange?.([]);
      }
    } else {
      // اضافه کردن آیتم
      onChange([...value, option]);

      // اگر زیرمجموعه دارد، بازش کن
      if (option.children?.length) {
        setExpanded((prev) => [...prev, option.value]);
      }
    }
  };

  return (
    <div ref={ref} className='relative w-[300px]'>
      {/* Input */}

      <div
        className='
    min-h-[40px]
    border
    border-gray-300
    rounded-md
    px-2
    py-2
    flex
    items-center

    gap-2
    cursor-text
    bg-(--surface)
    hover:border-blue-500
    w-[300px]
    overflow-auto
  '
        onClick={() => setOpen(true)}
      >
        {displayValue.length === 0 ? (
          <span className='text-gray-400'>{placeholder}</span>
        ) : (
          displayValue.map((item) => (
            <div
              key={item.value}
              className='
        flex
        items-center
        gap-2
        bg-blue-100
        text-blue-800
        rounded-md
        px-2
        py-1
        text-sm
      '
            >
              <span>{item.displayLabel}</span>

              <button
                type='button'
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();

                  onChange(value.filter((x) => x.value !== item.value));
                  const parent = options.find((o) => o.value === item.value);

                  if (parent?.children && onChildChange) {
                    onChildChange(
                      childValue.filter(
                        (child) =>
                          !parent.children!.some(
                            (c) => c.value === child.value,
                          ),
                      ),
                    );
                  }

                  setExpanded((prev) => prev.filter((v) => v !== item.value));
                }}
                className='text-red-500 hover:text-red-700 cursor-pointer'
              >
                ×
              </button>
            </div>
          ))
        )}

        <div
          className='mr-auto cursor-pointer text-gray-500'
          onClick={(e) => {
            e.stopPropagation();
            setOpen((prev) => !prev);
          }}
        >
          <FiChevronDown />
        </div>
      </div>

      {/* Dropdown */}

      {open && (
        <div
          className='
      absolute
      z-50
      mt-1
      w-full
      rounded-md
      border
      bg-(--surface)
      shadow-lg
      max-h-80
      overflow-auto
    '
        >
          <div className='sticky top-0 bg-(--surface) p-2 border-b'>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='جستجو...'
              className='
          w-full
          rounded-md
          border
          border-gray-300
          px-3
          py-2
          outline-none
          focus:border-blue-500
        '
            />
          </div>
          {filteredOptions.map((option, index) => {
            const selected = value.some((item) => item.value === option.value);

            return (
              <div key={option.value} className='border-b last:border-b-0'>
                <div>
                  <label className='flex items-center gap-2 p-2 cursor-pointer hover:bg-(--background)'>
                    <input
                      type='checkbox'
                      checked={selected}
                      onChange={() => handleSelect(option)}
                    />

                    <div className='flex justify-between w-full'>
                      <span>{option.label}</span>

                      {index === 0 && <FiChevronDown />}
                    </div>
                  </label>

                  {expanded.includes(option.value) &&
                    option.children &&
                    option.children.length > 0 && (
                      <div className='mr-8 mb-2 space-y-2'>
                        {option.children.map((child) => {
                          const childSelected = childValue.some(
                            (item) => item.value === child.value,
                          );

                          return (
                            <label
                              key={child.value}
                              className='flex items-center gap-2 cursor-pointer'
                            >
                              <input
                                type='checkbox'
                                checked={childSelected}
                                onChange={(e) => {
                                  if (!onChildChange) return;

                                  if (e.target.checked) {
                                    onChildChange([...childValue, child]);
                                  } else {
                                    onChildChange(
                                      childValue.filter(
                                        (item) => item.value !== child.value,
                                      ),
                                    );
                                  }
                                }}
                              />

                              <span>{child.label}</span>
                            </label>
                          );
                        })}
                      </div>
                    )}
                </div>
              </div>
            );
          })}
          {filteredOptions.length === 0 && (
            <div className='p-4 text-center text-gray-400'>موردی پیدا نشد</div>
          )}
        </div>
      )}
    </div>
  );
};

export default NestedMultiSelect;