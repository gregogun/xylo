export const globalStyles = {
  global: (props) => ({
    '*, *::before, *::after': {
      boxSizing: 'inherit'
    },
    body: {
      overflowX: 'hidden',
      bg: props.colorMode === 'light' ? 'white' : 'black',
      color: props.colorMode === 'light' ? 'black' : 'white',
      boxSizing: 'border-box'
    },
    div: {
      borderRadius: 'sm',
      boxSizing: 'inherit'
    },
    li: {
      listStyleType: 'none'
    }
  })
};
