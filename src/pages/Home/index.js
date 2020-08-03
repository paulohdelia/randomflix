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
              videoDescription="The term random refers to any collection of data or information that has no determined order, or is chosen in a way that is unknown beforehand. For example, 5, 8, 2, 9, and 0 are single-digit numbers listed in random order. Random data may be re-ordered, or sorted, by date, name, time, age, etc., in which case its order is no longer random."
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
