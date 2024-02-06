import React from 'react';

const Bolt = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill='currentColor'
      height='24'
      viewBox='0 0 24 24'
      width='24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M10.6655 21C10.3155 21 10.0455 20.69 10.0955 20.34L10.9955 14H7.49545C6.61545 14 7.16545 13.25 7.18545 13.22C8.44545 10.99 10.3355 7.69 12.8355 3.29C12.9355 3.11 13.1355 3 13.3355 3C13.6855 3 13.9555 3.31 13.9055 3.66L13.0055 10H16.5155C16.9155 10 17.1355 10.19 16.9155 10.66C13.6255 16.4 11.7155 19.75 11.1655 20.71C11.0655 20.89 10.8755 21 10.6655 21Z' />
    </svg>
  );
};

export default Bolt;
