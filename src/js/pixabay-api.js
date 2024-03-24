export function getImage(value) {
  const KEY = '22926721-5d20aa08498ffd1ff2f906542';
  const BASE_URL = 'https://pixabay.com/api/';

  const params = new URLSearchParams({
    key: KEY,
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 30,
    safesearch: true,
  });
  const url = `${BASE_URL}?${params}`;

  return fetch(url).then(res => res.json());
}
