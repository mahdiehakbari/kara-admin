"use client";

import { Fragment, useMemo, useState } from 'react';

interface Props {
  username: string;
  caption: string;
}

const Caption = ({ username, caption }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const shouldCollapse = caption.length > 120;

  const displayCaption = useMemo(() => {
    if (expanded || !shouldCollapse) return caption;

    return caption.slice(0, 120) + '...';
  }, [caption, expanded, shouldCollapse]);

  const renderText = (text: string) => {
    return text.split('\n').map((line, lineIndex) => (
      <Fragment key={lineIndex}>
        {line.split(/(\s+)/).map((part, index) => {
          if (part.startsWith('#')) {
            return (
              <span key={index} className='font-medium text-sky-600'>
                {part}
              </span>
            );
          }

          if (part.startsWith('@')) {
            return (
              <span key={index} className='font-medium text-sky-600'>
                {part}
              </span>
            );
          }

          return <span key={index}>{part}</span>;
        })}

        {lineIndex < text.split('\n').length - 1 && <br />}
      </Fragment>
    ));
  };

  return (
    <div className='px-4 pb-4 pt-2 text-[14px] leading-6'>
      <span className='font-semibold text-(--text-black)'>{username}</span>{' '}
      <span className='text-(--text-black)'>{renderText(displayCaption)}</span>
      {shouldCollapse && (
        <button
          onClick={() => setExpanded(!expanded)}
          className='ml-1 inline text-(--text-muted) '
        >
          {expanded ? 'کمتر' : 'بیشتر'}
        </button>
      )}
    </div>
  );
};

export default Caption;