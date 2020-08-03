import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

const create = (video) => fetch(`${URL_VIDEOS}`, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(video),
})
  .then(async (response) => {
    if (response) {
      const res = await response.json();
      return res;
    }

    throw new Error('Não foi possível enviar os dados para o servidor');
  });

export default {
  create,
};
