import React from 'react';
import {ArrowBackIos, ArrowForwardIos} from '@mui/icons-material';

const PeliculasRecomendadas = () => {
  return (
    <div class="peliculas-recomendadas contenedor" >
        <div class="contenedor-titulo-controles">
            <h3>Películas Recomendadas</h3>
            <div class="indicadores">
              <button class="activo"></button>
              <button></button>
              <button></button>
            </div>

        </div>

        <div class="contenedor-principal">
            <button id="flecha-izquierda" class="flecha-izquierda"><ArrowBackIos></ArrowBackIos></button>
            <div class="contenedor-carousel">
              <div class="carousel">
                <div class="pelicula">
                  <a href="https://www.themoviedb.org/movie/157336-interstellar?language=es" target="_blank" rel="noreferrer"><img src="https://img13.tokyvideo.com/videos/225/225743/previews/previews_0012_custom_1679180721.9268.jpg" alt="Interestellar"/></a>
                  <a href="https://www.themoviedb.org/movie/286217-the-martian?language=es"target="_blank" rel="noreferrer"><img src="https://espanol.reviewjournal.com/wp-content/uploads/2017/08/web1_the-martian3.jpg?w=640" alt="The Martian"/></a>
                  <a href="https://www.themoviedb.org/movie/333339-ready-player-one?language=es"target="_blank" rel="noreferrer"><img src="https://enseriopod.com/wp-content/uploads/2018/03/ready-player-one-cuong-phim.jpeg" alt="Ready Player One"/></a>
                  <a href="https://www.themoviedb.org/movie/744-top-gun?language=es"target="_blank" rel="noreferrer"><img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/star/9D2181FAFA68FEF1D3323C7E71CC6EC8636FADCF11F65617E7E74F2183ED58FF/scale?width=1200&aspectRatio=1.78&format=jpeg" alt="Top Gun"/></a>
                  <a href="https://www.themoviedb.org/movie/20526-tron-legacy?language=es"target="_blank" rel="noreferrer"><img src="https://images.squarespace-cdn.com/content/v1/5eeb3a47a5c7d2506242e581/8d8f85fb-7065-4ec1-9a4a-942403f6f471/key_art_landscape+%281%29.png" alt="Tron"/></a>
                  <a href="https://www.themoviedb.org/movie/155-the-dark-knight?language=es"target="_blank" rel="noreferrer"><img src="https://cdn.vox-cdn.com/thumbor/K1WKyMb31K-K1vvseGAyFsjfYYE=/0x0:1200x675/1200x800/filters:focal(478x31:670x223)/cdn.vox-cdn.com/uploads/chorus_image/image/60384393/0_c9S8ajFBpwX89ZuU.0.jpeg" alt="Batman"/></a>
                  <a href="https://www.themoviedb.org/movie/241554-run-all-night?language=es"target="_blank" rel="noreferrer"><img src="https://i.blogs.es/b4a238/runallnightcover/840_560.jpg" alt="Una noche para sobrevivir"/></a>
                </div>
              </div>
            </div>
            <button id="flecha-derecha" class="flecha-derecha"><ArrowForwardIos></ArrowForwardIos></button>
        </div>
      </div>
  )
}

export default PeliculasRecomendadas