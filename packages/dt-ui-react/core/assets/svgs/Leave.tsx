import React from 'react';

const LeaveIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='18'
      height='19'
      viewBox='0 0 18 19'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M7.09 13.09L8.5 14.5L13.5 9.5L8.5 4.5L7.09 5.91L9.67 8.5H0V10.5H9.67L7.09 13.09ZM16 0.5H2C0.89 0.5 0 1.4 0 2.5V6.5H2V2.5H16V16.5H2V12.5H0V16.5C0 17.6 0.89 18.5 2 18.5H16C17.1 18.5 18 17.6 18 16.5V2.5C18 1.4 17.1 0.5 16 0.5Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default LeaveIcon;
