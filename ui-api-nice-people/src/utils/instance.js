
export const endpoint_api = (search) => {
  let url = `https://localhost:44310/api/weatherNews/${search}`;
  return url;
};