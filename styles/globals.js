export const styles = {
  global: (props) => ({
    '*, *::before, *::after': {
      boxSizing: 'inherit',
    },
    body: {
      overflowX: 'hidden',
      bg: 'default.white',
      color: 'default.black',
      boxSizing: 'border-box',
    },
    div: {
      borderRadius: 'sm',
      boxSizing: 'inherit',
    },
    li: {
      listStyleType: 'none',
    },
  }),
};
