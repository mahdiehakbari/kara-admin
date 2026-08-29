'use client';


import { tabs } from "../constants";
import { Props } from "../types";

export default function ContentTabs({ active, onChange }: Props) {
  return (
    <div className='mb-5'>
      <div
        className='
          flex
          gap-3
          overflow-x-auto
          px-1
          pb-2
        '
      >
        {tabs.map(({ id, title, icon: Icon }) => {
          const isActive = active === id;

          return (
            <button
              key={id}
              onClick={() => onChange(id)}
              className={`
                shrink-0
                flex
                items-center
                gap-2
                rounded-xl
                border
                px-3
                py-3
                transition-all
                duration-200
                whitespace-nowrap
                cursor-pointer
                ${
                  isActive
                    ? 'bg-(--primary) border-(--primary) text-white shadow-sm'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-(--primary) hover:text-(--primary)'
                }
              `}
            >
              <Icon className='text-lg' />
              <span className='text-sm font-medium'>{title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}