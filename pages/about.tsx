import type { NextPage } from 'next'
import Head from 'next/head'

import Layout from '../components/layout'

const About: NextPage = () => {
  return (
    <Layout home>

      <section className="section">
        <div className="container">
            <div className="row">

              <div className="col-12 col-md-6">
                <header>
                  <h6>About Me</h6>
                  <h2>A young and creative mind</h2>
                  <p>My name is Eva, and i&apos;m currently 10 years old.</p>
                  <p>I enjoy paining on canvas in my spare time.</p>
                </header>
              </div>

              <div className="col-12 col-md-6">
                <img alt="Be Happy Canvas" src="/images/be-happy.jpeg" width="100%" />
              </div>

          </div>
        </div>
        
      </section>

    </Layout>
  )
}

export default About
