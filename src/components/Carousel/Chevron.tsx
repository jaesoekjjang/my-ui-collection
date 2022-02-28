import React from 'react';

interface ChevronProps {
  direction: 'next' | 'prev';
}

const Chevron: React.VFC<ChevronProps> = ({ direction }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={direction === 'next' ? 'rotate(-90, 0, 0)' : 'rotate(90, 0, 0)'}
    >
      <path
        d="M19.7071 9.70711C20.0976 9.31658 20.0976 8.68342 19.7071 8.29289C19.3166 7.90237 18.6834 7.90237 18.2929 8.29289L19.7071 9.70711ZM12 16L11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071L12 16ZM5.70711 8.29289C5.31658 7.90237 4.68342 7.90237 4.29289 8.29289C3.90237 8.68342 3.90237 9.31658 4.29289 9.70711L5.70711 8.29289ZM18.2929 8.29289L11.2929 15.2929L12.7071 16.7071L19.7071 9.70711L18.2929 8.29289ZM12.7071 15.2929L5.70711 8.29289L4.29289 9.70711L11.2929 16.7071L12.7071 15.2929Z"
        fill="#00000050"
      />
      <defs>
        <linearGradient
          id="paint0_linear_17191_3355"
          x1="5"
          y1="16"
          x2="19"
          y2="9"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#14181F" />
          <stop offset="1" stop-color="#272A31" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Chevron;
