import { SVGProps } from 'react';

const AllOut = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    {...props}
  >
    <g clipPath='url(#a)' fill='#91CEFF'>
      <path opacity='.3' d='M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z' />
      <path d='M4 4v4l4-4H4Zm12 0 4 4V4h-4Zm4 16v-4l-4 4h4ZM4 20h4l-4-4v4Zm15-8c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7 7-3.13 7-7Zm-7 5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
);

export default AllOut;
