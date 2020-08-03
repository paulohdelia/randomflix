import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

const create = (categoria) => fetch(`${URL_CATEGORIES}`, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(categoria),
})
  .then(async (response) => {
    if (response) {
      const res = await response.json();
      return res;
    }

    throw new Error('Não foi possível enviar os dados para o servidor');
  });

const getAll = () => fetch(`${URL_CATEGORIES}`)
  .then(async (response) => {
    if (response) {
      const res = await response.json();
      return res;
    }

    throw new Error('Não foi possível pegar os dados da API');
  });

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
  getAll,
  create,
};
