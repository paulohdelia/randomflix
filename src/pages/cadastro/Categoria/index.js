import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

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
    const URL = 'http://localhost:8080/categorias';
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
            <div>
              Loading...
            </div>
          )}
          <ul>
            {categorias.map((categoria) => {
              const { nome, descricao, cor } = categoria;
              return (
                <li style={{ background: cor }} key={`${nome}`}>
                  {nome}
                  {' '}
                  -
                  {descricao}
                </li>
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
