import type { NextPage } from 'next'

import Layout from '../components/layout'

const ArtWork: NextPage = () => {
  return (
    <Layout home>

      <section>
        <div className="container-fluid">
            <div className="row">

              <div className="col-4 hero-left">
                <div className="inner-content">
                  <h4>My Art Work</h4>
                </div>
              </div>

              <div className="col-8 p-0">
                <img alt="Art By Eva Cover Photo" src="/images/slide-02.jpeg" />
              </div>

          </div>
        </div>
        
      </section>

    </Layout>
  )
}

export default ArtWork
