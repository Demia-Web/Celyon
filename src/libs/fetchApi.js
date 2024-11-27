export async function fetchApi() {
  const url = `${import.meta.env.PUBLIC_URL_STRAPI}/api/celyon-progetti?populate=*`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${import.meta.env.PUBLIC_TOKEN_STRAPI}`
    }
  });
  const data = response.json;
  const projects = data.data;
  return projects;
}
