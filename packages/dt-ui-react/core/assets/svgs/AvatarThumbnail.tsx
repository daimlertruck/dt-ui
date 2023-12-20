import React from 'react';

const AvatarThumbnail = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='33'
      height='32'
      viewBox='0 0 33 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clip-path='url(#clip0_1627_31268)'>
        <rect x='0.5' width='32' height='32' rx='16' fill='#D3D4D5' />
        <circle cx='16.5' cy='34' r='14' fill='white' />
        <circle cx='16.5' cy='13' r='5' fill='white' />
      </g>
      <defs>
        <clipPath id='clip0_1627_31268'>
          <rect x='0.5' width='32' height='32' rx='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AvatarThumbnail;
