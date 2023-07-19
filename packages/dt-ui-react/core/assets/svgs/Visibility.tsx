import React from 'react';

const Visibility = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='24'
      height='24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#a)' fill='currentColor'>
        <path
          opacity='.3'
          d='M12 6a9.77 9.77 0 0 0-8.82 5.5A9.77 9.77 0 0 0 12 17a9.77 9.77 0 0 0 8.82-5.5A9.77 9.77 0 0 0 12 6Zm0 10c-2.48 0-4.5-2.02-4.5-4.5S9.52 7 12 7s4.5 2.02 4.5 4.5S14.48 16 12 16Z'
        />
        <path d='M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4Zm0 13a9.77 9.77 0 0 1-8.82-5.5A9.77 9.77 0 0 1 12 6a9.77 9.77 0 0 1 8.82 5.5A9.77 9.77 0 0 1 12 17Zm0-10c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7Zm0 7a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5Z' />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h24v24H0z' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Visibility;
