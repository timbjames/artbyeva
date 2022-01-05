import type { NextPage } from 'next'
import Link from 'next/link';

import Layout from '../components/layout'

import { getSortedPostsData } from '../lib/artWork';

export async function getStaticProps() {
  const allArtData = getSortedPostsData();

  return {
    props: {
      allArtData
    }
  }
}

interface IArt {
  id: string;
  title: string;
  price: number;
  img: string;
}

const ArtWork: NextPage<{allArtData: IArt[]}> = ({ allArtData }) => {
  return (
    <Layout home>

      <section className="section">
        <div className="container">
            <div className="row">

              <div className="col-12">
                <header>
                  <h6>Art Work</h6>
                  <h2>Limited Editons</h2>
                </header>
              </div>

          </div>
        </div>

        <div className="container-fluid">

          <div className="row flex-wrap">

            { 
              allArtData.map(x => {
                return (
                  <div className="col flex-wrap-25" key={x.title}>
                    <div className="card">
                      <div className="price">£{x.price}</div>
                      <img alt="Canvas 1" src={x.img} width="100%" />
                      <div className="info">
                        <h4>{x.title}</h4>
                        <Link href={`/artWork/${x.id}`}>
                          <a>View More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>

        </div>
        
      </section>

    </Layout>
  )
}

export default ArtWork
