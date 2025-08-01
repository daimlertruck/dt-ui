import React from 'react';

const AvatarThumbnail = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill='none'
      height='32'
      viewBox='0 0 33 32'
      width='33'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_1627_31268)'>
        <rect fill='#D3D4D5' height='32' rx='16' width='32' x='0.5' />
        <circle cx='16.5' cy='34' fill='white' r='14' />
        <circle cx='16.5' cy='13' fill='white' r='5' />
      </g>
      <defs>
        <clipPath id='clip0_1627_31268'>
          <rect fill='white' height='32' rx='16' width='32' x='0.5' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AvatarThumbnail;
