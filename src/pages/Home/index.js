import React, { useEffect, useState } from 'react';

import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';
import Loading from '../../components/Loading';

const Home = () => {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll="0">

      {dadosIniciais.length === 0 ? (<Loading />)
        : (
          <>
            <BannerMain
              videoTitle={dadosIniciais[0].videos[0].titulo}
              url={dadosIniciais[0].videos[0].url}
              videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
            />

            {dadosIniciais.map((dado, index) => (
              <Carousel key={`${dado.titulo}-${dado.id}`} ignoreFirstVideo={index === 0} category={dado} />
            ))}
          </>
        )}

    </PageDefault>
  );
};

export default Home;
