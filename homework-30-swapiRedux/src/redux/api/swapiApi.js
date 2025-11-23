const BASE_URL = 'https://swapi.dev/api';

export const getPeople = async () => {
  const response = await fetch(`${BASE_URL}/people/`);
  if (!response.ok) {
    throw new Error('Помилка завантаження персонажів');
  }
  const data = await response.json();
  return data.results;
};

export const getPersonById = async (id) => {
  const response = await fetch(`${BASE_URL}/people/${id}/`);
  if (!response.ok) {
    throw new Error('Помилка завантаження персонажа');
  }
  return response.json();
};