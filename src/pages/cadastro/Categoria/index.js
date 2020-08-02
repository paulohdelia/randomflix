import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import Loading from '../../../components/Loading';

const Li = styled.li`
  ::before {
    content: '\\2022';
    color: ${(props) => props.color};
    font-weight: bold;
    display: inline-block;
    margin-right: 8px;
  }
`;

const CadastroCategoria = () => {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#FFFFFF',
  };

  const [valores, setValores] = useState(valoresIniciais);

  const setValor = (chave, valor) => {
    setValores({ ...valores, [chave]: valor });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setCategorias([valores, ...categorias]);
    setValores(valoresIniciais);
  };

  const handleChange = (event) => {
    setValor(event.target.getAttribute('name'), event.target.value);
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
          {valores.nome}
        </h1>

        <form onSubmit={handleSubmit}>
          <FormField
            label="Nome"
            type="text"
            name="nome"
            value={valores.nome}
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
              const { nome, cor } = categoria;
              return (
                <Li color={cor} key={`${nome}`}>
                  {nome}
                </Li>
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
