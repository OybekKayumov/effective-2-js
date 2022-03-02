import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
          <a>
            <img src="/images/home-icon.svg"></img>
            <span>HOME</span>
          </a>
          <a>
            <img src="/images/search-icon.svg"></img>
            <span>SEARCH</span>
          </a>
          <a>
            <img src="/images/watchlist-icon.svg"></img>
            <span>WATCHLIST</span>
          </a>
          <a>
            <img src="/images/original-icon.svg"></img>
            <span>ORIGINALS</span>
          </a>
          <a>
            <img src="/images/movie-icon.svg"></img>
            <span>MOVIE</span>
          </a>
          <a>
            <img src="/images/series-icon.svg"></img>
            <span>SERIES</span>
          </a>


      </NavMenu>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
   
`

const Logo = styled.img`
  width: 80px;
`

const NavMenu = styled.div`
  display: flex;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    
    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px; 
    }
  }
`