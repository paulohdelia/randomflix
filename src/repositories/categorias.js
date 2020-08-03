import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

const getAllWithVideos = () => fetch(`${URL_CATEGORIES}?_embed=videos`)
  .then(async (response) => {
    if (response) {
      const res = await response.json();
      return res;
    }

    throw new Error('Não foi possível pegar os dados da API');
  });

export default {
  getAllWithVideos,
};
