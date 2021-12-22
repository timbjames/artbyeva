import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Layout: NextPage<{ home?: boolean }> = ({ children, home: boolean }) => {
  return (
    <div>
      <Head>

        <title>Create Next App</title>

        <meta name="description" content="Generated by create next app" />

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
                    <img alt="Art By Eva Logo" src="/images/logo.png" />
                  </a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                    <li className="nav-item dropdown">
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
                    </li>
                  </ul>
                  <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </div>
              </div>
            </nav>
            </div>
          </div>
        </div>
      </header>

      {children}

    </div>
  )
}

export default Layout
