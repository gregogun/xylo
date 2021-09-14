import { createIcon, Icon } from '@chakra-ui/react';

const ConnectBase = createIcon({
  defaultProps: {
    stroke: 'default.white',
    fill: 'none',
  },
  displayName: 'ConnectBase',
  viewBox: '0 0 202 202',
  path: (
    <svg>
      <path
        d="M59.7 89.531a24.769 24.769 0 0 0-38.92-20.319 24.772 24.772 0 0 0-9.168 28.69h46.63a24.688 24.688 0 0 0 1.458-8.37Z"
        fill="#B4D2E7"
      />
      <path
        d="M113.357 27.166c-3.088 0-6.147.578-9.022 1.705v46.131a24.77 24.77 0 1 0 9.022-47.836Z"
        fill="#FAD1AB"
      />
      <path
        d="M89.925 131.209a24.766 24.766 0 0 0-23.911 18.355 24.77 24.77 0 0 0 32.363 29.704v-46.577a24.778 24.778 0 0 0-8.452-1.482Z"
        fill="#699D88"
      />
      <path
        d="M152.665 178.461c13.681 0 24.771-11.09 24.771-24.77s-11.09-24.77-24.771-24.77c-13.68 0-24.77 11.09-24.77 24.77s11.09 24.77 24.77 24.77Z"
        fill="#94C5CC"
      />
      <path
        d="M97.674 1.057H1v96.674h96.674V1.057ZM201 1.057h-96.674v96.674H201V1.057ZM97.674 104.326H1V201h96.674v-96.674ZM201 104.326h-96.674V201H201v-96.674Z"
        stroke="#000100"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </svg>
  ),
});

const Connect = ({ ...props }) => {
  return <Icon {...props} as={ConnectBase} />;
};

export default Connect;
