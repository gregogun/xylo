export const styles = {
  global: (props) => ({
    '*, *::before, *::after': {
      boxSizing: 'inherit'
    },
    body: {
      overflowX: 'hidden',
      bg: props.colorMode === 'light' ? 'default.white' : 'default.black',
      color: props.colorMode === 'light' ? 'default.black' : 'default.white',
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
