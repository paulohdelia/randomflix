import React from 'react';

import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';

const CadastroVideo = () => {
  const history = useHistory();
  const { handleChange, valores } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  return (
    <>
      <PageDefault>
        <h1>
          Cadastro de Vídeo:
          {' '}
          {valores.titulo}
        </h1>

        <form onSubmit={(event) => {
          event.preventDefault();

          videosRepository.create({
            titulo: valores.titulo,
            url: valores.url,
            categoriaId: 1,
          })
            .then(() => {
              history.push('/');
            });
        }}
        >
          <FormField
            label="Título"
            name="titulo"
            value={valores.titulo}
            onChange={handleChange}
          />
          <FormField
            label="URL"
            type="url"
            name="url"
            value={valores.url}
            onChange={handleChange}
          />
          <FormField
            label="Categoria"
            name="categoria"
            value={valores.categoria}
            onChange={handleChange}
          />

          <Button type="submit">
            Cadastrar
          </Button>
        </form>

        <br />
        <br />

        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </PageDefault>

    </>
  );
};

export default CadastroVideo;
