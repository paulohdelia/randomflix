import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import Loading from '../../../components/Loading';
import PrettyLi from '../../../components/PrettyLi';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

const CadastroCategoria = () => {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#FFFFFF',
  };

  const { handleChange, valores, clearForm } = useForm(valoresIniciais);

  const handleSubmit = (event) => {
    event.preventDefault();

    categoriasRepository.create({
      titulo: valores.titulo,
      cor: valores.cor,
      descricao: valores.descricao,
    });

    setCategorias([...categorias, valores]);
    clearForm(valoresIniciais);
  };

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://randomflix.herokuapp.com/categorias';
    fetch(URL).then(async (response) => {
      const res = await response.json();
      setCategorias([
        ...res,
      ]);
    });
  }, []);

  return (
    <>
      <PageDefault>
        <h1>
          Cadastro de Categoria:
          {' '}
          {valores.titulo}
        </h1>

        <form onSubmit={handleSubmit}>
          <FormField
            label="Título"
            type="text"
            name="titulo"
            value={valores.titulo}
            onChange={handleChange}
          />
          <FormField
            label="Descrição"
            name="descricao"
            value={valores.descricao}
            onChange={handleChange}
            as="textarea"
          />
          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={valores.cor}
            onChange={handleChange}
          />
          <Button>Cadastrar</Button>

          {categorias.length === 0 && (
            <Loading />
          )}
          <ul style={{ listStyle: 'none' }}>
            {categorias.map((categoria) => {
              const { titulo, cor } = categoria;
              return (
                <PrettyLi color={cor} key={`${titulo}`}>
                  {titulo}
                </PrettyLi>
              );
            })}
          </ul>
        </form>
        <Link to="/">Ir para a Home</Link>
      </PageDefault>
    </>
  );
};

export default CadastroCategoria;
