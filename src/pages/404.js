import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>404</h2>
          <p>Not a valid URL. No hay nada acá.</p>
        </div>
      </header>
    </section>
  </Layout>
);

export default IndexPage;
