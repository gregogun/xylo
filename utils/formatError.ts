export const formatError = (error) => {
  return {
    error: { ...error.data, status_code: error.status }
  };
};
