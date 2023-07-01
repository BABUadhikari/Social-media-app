import React from 'react'
import { Link } from 'react-router-dom'
import HeaderLoggedIn from './HeaderLoggedIn'
function Header() {
  return (
    <>
      <header className="header-bar bg-primary mb-3">
        <div className="container d-flex flex-column flex-md-row align-items-center p-3">
          <h4 className="my-0 mr-md-auto font-weight-normal">
            <Link href="/" className="text-white">
              ComplexApp
            </Link>
          </h4>
          <HeaderLoggedIn/>
        </div>
      </header>
    </>
  )
}

export default Header
