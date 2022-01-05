import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const Layout: NextPage<{ home?: boolean }> = ({ children, home: boolean }) => {

  const [ navBarCollapsed, toggleNav ] = useState(true);

  const handleNavClick = () => {
    toggleNav(!navBarCollapsed);
  }

  return (
    <>
      <Head>

        <title>Art By Eva</title>

        <meta name="description" content="Art By Eva" />

        <link rel="icon" href="/favicon.ico" />

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
        crossOrigin="anonymous"></link>

      </Head>

      <header className="main-header">
        <div className="container">
          <div className="row">
            <div className="col">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <Link href="/">
                  <a className="navbar-brand">
                    <img alt="Art By Eva Logo" src="/images/logo-2.png" />
                  </a>
                </Link>
                <button className="navbar-toggler" type="button" 
                  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                  onClick={handleNavClick}>
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className={navBarCollapsed ? 'collapse navbar-collapse' : 'navbar-collapse'} id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link href="/">
                        <a className="nav-link active" aria-current="page">Home</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about">
                        <a className="nav-link">About</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/art-work">
                        <a className="nav-link">Art Work</a>
                      </Link>
                    </li>
                    {/* <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" href="#" aria-disabled="true">Disabled</a>
                    </li>*/}
                  </ul>
                  {/*<form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </form> */}
                </div>
              </div>
            </nav>
            </div>
          </div>
        </div>
      </header>

      {children}

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              Socials coming soon
            </div>
            <div className="col-12 col-md-4">&nbsp;</div>
            <div className="col-12 col-md-4 align-self-end">
              Copyright Art By Eva.
              <br />
              Designed and Built by timjames.me
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Layout
