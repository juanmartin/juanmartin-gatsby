import React, { useEffect } from 'react';
import Typed from 'typed.js';

import Layout from '../../components/Layout';

import pic1 from '../../assets/images/pic01.jpg';
import pic2 from '../../assets/images/pic02.jpg';
import pic3 from '../../assets/images/pic03.jpg';
import pic4 from '../../assets/images/pic04.jpg';
import pic5 from '../../assets/images/pic05.jpg';
import pic6 from '../../assets/images/pic06.jpg';
import pic7 from '../../assets/images/pic07.jpg';
import logoPic from '../../assets/img/jmlogo.png';

import config from '../../../config';




const IndexPage = () => {

  useEffect(() => {
    const typedOpts = {
      strings: ['Juanm.art/in ', 'Juan Martin '],
      typeSpeed: 80,
      backSpeed: 80,
      startDelay: 800,
      backDelay: 1000,
      smartBackspace: true,
      showCursor: false
    };
    const tipi = new Typed('.nombreTipeado', typedOpts)
    return () => {
      tipi.destroy();
    };
  }, []
  )
  return (
    <Layout>
      <section id="banner">
        <div className="inner">
          <div className="logo">
            {/* <span className="icon fa-child"></span> */}
            <img src={logoPic} width='120vmin' />
          </div>
          <div className="inner">
            {/* <h2>{config.heading}</h2> */}
            <h2><span className="nombreTipeado"></span><br className="mobile-break" /> Sesali Maydana</h2>
            <p><span className="ingles">Tech tinker.</span> Music. <span className="ingles">Freelancer.</span></p>
          </div>
        </div>
      </section>

      <section id="wrapper">
        <section id="one" className="wrapper spotlight style1">
          <div className="inner">
            <a className="image">
              <img src={pic1} alt="" />
            </a>
            <div className="content">
              <h2 className="major">Music</h2>
              <p>Produzco música. Toco en una banda. <br className="mobile-break" /> <span className="ingles">I produce music and play in a band.</span></p>
              <ul style={{ marginBottom: -8, marginTop: -10, display: 'flex', justifyContent: 'flex-end', listStyle: 'none' }}>
                <li>
                  <h3>MAY NADA</h3>
                  <ul className="icons">
                    <li><a href="https://open.spotify.com/artist/171PrQcg6CjUbkWpYLYyMH?si=0LvMaa10SMS6hIeThpSmHw" className="icon fa-spotify" target="_blank"><span className="label">Spotify</span></a></li>
                    <li><a href="https://maynada.bandcamp.com/" className="icon fa-bandcamp" target="_blank"><span className="label">Bandcamp</span></a></li>
                    <li><a href="https://soundcloud.com/sesali" className="icon fa-soundcloud" target="_blank"><span className="label">Soundcloud</span></a></li>
                  </ul>
                </li>
                <li style={{ paddingLeft: 70 }}>
                  <h3>LUMENS</h3>
                  <ul className="icons">
                    <li><a href="https://open.spotify.com/artist/2UVpLOvrgkWZeYLLwrgrnj?si=4sWpevRgRFCU0yhjTcga2w" className="icon fa-spotify" target="_blank"><span className="label">Spotify</span></a></li>
                    <li><a href="https://lumenslumens.bandcamp.com/releases" className="icon fa-bandcamp" target="_blank"><span className="label">Bandcamp</span></a></li>
                  </ul>
                </li>
              </ul>

            </div>
          </div>
        </section>

        <section id="two" className="wrapper alt spotlight style2">
          <div className="inner">
            <a className="image">
              <img src={pic2} alt="" />
            </a>
            <div className="content">
              <h2 className="major">N3RD</h2>
              <p>
                Desarrollo soluciones tecnológicas. Desde su electrónica hasta su software.<br />
                <span className="ingles">I develop solutions using whatever technology is needed. Hardware and software.</span>
              </p>
              <a href="/#" className="special">
                <span className="ingles">WHAT</span> cosas?
            </a>
            </div>
          </div>
        </section>

        <section id="three" className="wrapper spotlight style3">
          <div className="inner">
            <a className="image">
              <img src={pic3} alt="" />
            </a>
            <div className="content">
              <h2 className="major">Diseño</h2>
              <p>
                Trabajé como diseñador gráfico. También puse en marcha varios sitios web. <br />
                <span className="ingles">I've worked as a graphic designer for many years. I've also built several websites.</span>
              </p>
              <a href="/#" className="special">
                A ver!? <span className="ingles">CHECK IT</span>
              </a>
            </div>
          </div>
        </section>

        <section id="four" className="wrapper alt spotlight style4">
          <div className="inner">
            <a className="image">
              <img src={pic4} alt="" />
            </a>
            <div className="content">
              <h2 className="major">Academia</h2>
              <p>
                Estudié Ing. en Informática (ITBA/UADE) y estoy terminado la Lic. en Artes Electrónicas (UNTREF) donde fui becario de un <a href="https://intercambiostransorganicos.org/" target="_blank" title="Intercambios Transorgánicos" rel="noopener noreferrer">proyecto de investigación</a>.<br />
                <span className="ingles">I studied IT Engineering and I'm about to achieve my Electronic Arts degree. I've been part of a <a href="https://intercambiostransorganicos.org/" target="_blank" title="Intercambios Transorgánicos" rel="noopener noreferrer">research team</a> (MUNTREF Arte y Ciencia).</span>
              </p>
            </div>
          </div>
        </section>
        {/* 
        <section id="five" className="wrapper style1">
          <div className="inner">
            <h2 className="major">Blog</h2>
            <p>
              Aventuras, pensamientos. <span className="ingles">Thoughts and adventures.</span>
            </p>
            <section className="features">
              <article>
                <a className="image">
                  <img src={pic4} alt="" />
                </a>
                <h3 className="major">Sed feugiat lorem</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                  nulla dignissim dapibus ultrices.
              </p>
                <a href="/#" className="special">
                  Learn more
              </a>
              </article>
              <article>
                <a href="/#" className="image">
                  <img src={pic5} alt="" />
                </a>
                <h3 className="major">Nisl placerat</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                  nulla dignissim dapibus ultrices.
              </p>
                <a href="/#" className="special">
                  Learn more
              </a>
              </article>
              <article>
                <a href="/#" className="image">
                  <img src={pic6} alt="" />
                </a>
                <h3 className="major">Ante fermentum</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                  nulla dignissim dapibus ultrices.
              </p>
                <a href="/#" className="special">
                  Learn more
              </a>
              </article>
              <article>
                <a href="/#" className="image">
                  <img src={pic7} alt="" />
                </a>
                <h3 className="major">Fusce consequat</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                  nulla dignissim dapibus ultrices.
              </p>
                <a href="/#" className="special">
                  Learn more
              </a>
              </article>
            </section>
            <ul className="actions">
              <li>
                <a href="/#" className="button">
                  Browse All
              </a>
              </li>
            </ul>
          </div>
        </section> */}
      </section>
    </Layout>
  );
};
export default IndexPage;
