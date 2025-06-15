const MoonSvg = ({ color = '#e50000', className = '', ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='256'
    height='256'
    viewBox='0 0 256 256'
    className={className}
    {...props}
  >
    <g
      style={{
        stroke: 'none',
        strokeWidth: 0,
        strokeDasharray: 'none',
        strokeLinecap: 'butt',
        strokeLinejoin: 'miter',
        strokeMiterlimit: 10,
        fill: 'none',
        fillRule: 'nonzero',
        opacity: 1,
      }}
    >
      <path
        d='M89.634 59.683a1.003 1.003 0 0 0-1.184-.062c-16.514 10.864-38.661 8.589-52.661-5.41C21.79 40.212 19.515 18.065 30.38 1.551A1 1 0 0 0 29.17.074a46.375 46.375 0 0 0-15.523 10.283c-18.195 18.195-18.195 47.802 0 65.997C22.744 85.451 34.695 90 46.645 90c11.951 0 23.901-4.549 32.999-13.646a46.392 46.392 0 0 0 10.284-15.523 1.002 1.002 0 0 0-.294-1.148z'
        style={{
          stroke: 'none',
          strokeWidth: 1,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 10,
          fill: color,
          fillRule: 'nonzero',
          opacity: 1,
        }}
        transform='matrix(2.81 0 0 2.81 1.407 1.407)'
      />
      <path
        d='M77.254 40.17a16.55 16.55 0 0 1-10.42-10.419 1.917 1.917 0 0 0-1.841-1.334c-.848 0-1.571.524-1.84 1.335A16.551 16.551 0 0 1 52.734 40.17a1.917 1.917 0 0 0-1.334 1.841c0 .848.524 1.571 1.334 1.841a16.544 16.544 0 0 1 10.418 10.419h.001c.27.811.992 1.334 1.84 1.334.849 0 1.572-.524 1.841-1.334a16.553 16.553 0 0 1 10.419-10.419 1.916 1.916 0 0 0 1.335-1.841c0-.849-.524-1.572-1.334-1.841zM81.635 11.577a8.783 8.783 0 0 1-5.53-5.529 1.523 1.523 0 0 0-2.894.001 8.775 8.775 0 0 1-5.527 5.528 1.523 1.523 0 0 0-.001 2.892 8.784 8.784 0 0 1 5.529 5.529 1.525 1.525 0 0 0 1.445 1.047h.002c.656 0 1.238-.421 1.446-1.046a8.783 8.783 0 0 1 5.53-5.529 1.526 1.526 0 0 0 1.046-1.446c0-.657-.421-1.238-1.046-1.447zM52.274 18.689a10.928 10.928 0 0 1-6.882-6.881 1.638 1.638 0 0 0-3.112 0 10.929 10.929 0 0 1-6.881 6.881 1.638 1.638 0 0 0 0 3.112 10.928 10.928 0 0 1 6.881 6.882 1.638 1.638 0 0 0 3.112 0 10.93 10.93 0 0 1 6.881-6.882 1.64 1.64 0 0 0 .001-3.112z'
        style={{
          stroke: 'none',
          strokeWidth: 1,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 10,
          fill: color,
          fillRule: 'nonzero',
          opacity: 1,
        }}
        transform='matrix(2.81 0 0 2.81 1.407 1.407)'
      />
    </g>
  </svg>
);
export default MoonSvg;
