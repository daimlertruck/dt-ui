import React from 'react';

const InputIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill='none'
      height='17'
      viewBox='0 0 16 17'
      width='16'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_446_1650)'>
        <path
          d='M14 2.50732H1.99999C1.26666 2.50732 0.666656 3.10732 0.666656 3.84066V6.50066H1.99999V3.82732H14V13.1807H1.99999V10.5007H0.666656V13.174C0.666656 13.9073 1.26666 14.494 1.99999 14.494H14C14.7333 14.494 15.3333 13.9073 15.3333 13.174V3.84066C15.3333 3.10066 14.7333 2.50732 14 2.50732ZM7.33332 11.1673L9.99999 8.50066L7.33332 5.83399V7.83399H0.666656V9.16732H7.33332V11.1673Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_446_1650'>
          <rect
            fill='white'
            height='16'
            transform='translate(0 0.500488)'
            width='16'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default InputIcon;
