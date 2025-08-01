import React from 'react';

const Topic = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill='none'
      height='17'
      viewBox='0 0 16 17'
      width='16'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_7377_8666)'>
        <path
          d='M13.3327 12.5H2.66602V4.5H6.11268L7.44602 5.83333H13.3327V12.5ZM11.9993 8.5H3.99935V7.16667H11.9993V8.5ZM9.33268 11.1667H3.99935V9.83333H9.33268V11.1667Z'
          fill='currentColor'
          opacity='0.3'
        />
        <path
          d='M13.334 4.49935H8.00065L6.66732 3.16602H2.66732C1.93398 3.16602 1.34065 3.76602 1.34065 4.49935L1.33398 12.4993C1.33398 13.2327 1.93398 13.8327 2.66732 13.8327H13.8473C14.3007 13.8327 14.6673 13.4593 14.6673 13.0127V5.83268C14.6673 5.09935 14.0673 4.49935 13.334 4.49935ZM13.334 12.4993H2.66732V4.49935H6.11398L7.44732 5.83268H13.334V12.4993ZM12.0007 8.49935H4.00065V7.16602H12.0007V8.49935ZM9.33398 11.166H4.00065V9.83268H9.33398V11.166Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_7377_8666'>
          <rect
            fill='white'
            height='16'
            transform='translate(0 0.5)'
            width='16'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Topic;
