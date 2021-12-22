import type { NextPage } from 'next'
import Head from 'next/head'

import Layout from '../components/layout'

const Home: NextPage = () => {
  return (
    <Layout home>

        <div className="container-fluid">
            <div className="row">

              <div className="col-12 col-md-4 hero-left">
                <div className="inner-content">
                  <h4>Art By Eva</h4>
                </div>
              </div>

              <div className="col-12 col-md-8 p-0">
                <img alt="Art By Eva Cover Photo" src="/images/slide-01.jpeg" width="100%" />
              </div>

          </div>
        </div>

    </Layout>
  )
}

export default Home
