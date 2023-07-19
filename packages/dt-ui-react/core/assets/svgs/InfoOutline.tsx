const InfoOutline = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='20'
      height='20'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z'
        fill='currentColor'
      />
      <path
        d='M6.5 15.5h7V14H11V6.5H6.5V8H9v6H6.5v1.5ZM11 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'
        fill='currentColor'
      />
    </svg>
  );
};

export default InfoOutline;
