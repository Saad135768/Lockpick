import React, { useState } from 'react'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import useStyles from './style'
import { useRouter } from 'next/router'
import { RiShoppingCartFill } from 'react-icons/ri'
import { FaUser } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'
import Router from 'next/router'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { AiOutlineSearch } from 'react-icons/ai'
import Cookies from 'js-cookie'

const Navbar = () => {
  const classes = useStyles()
  const router = useRouter()
  const { parsed } = router
  const [anchorEl, setAnchorEl] = useState(null)
  const [searchTerm, setSearchTerm] = useState()
  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget)
    }
  }
  function handleClose() {
    setAnchorEl(null)
  }

  return (
    <div className={classes.NavbarHolder}>
      <div className={classes.NavbaTopImage} />
      <Container maxWidth="lg">
        <Grid container>
          <Grid item lg={3} md={3} sm={3}>
            <div className={classes.Logo}>
              <Link as={'/'} href="/">
                <a href="/">
                  <img
                    src="../../static/images/homepage/logo.svg"
                    alt="logo-pick-lock"
                  />
                </a>
              </Link>
            </div>
          </Grid>
          <Grid item lg={9} md={9}>
            <div className={classes.navbarContent} onMouseLeave={handleClose}>
              <ul className={classes.centermenu}>
                <li>
                  <Link href="/">
                    <a
                      onMouseEnter={handleClose}
                      className={router.pathname === '/' ? 'active' : ''}
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/products">
                    <a
                      onMouseEnter={handleClose}
                      className={
                        router.pathname === '/products' ? 'active' : ''
                      }
                    >
                      Products
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/support">
                    <a
                      aria-owns={anchorEl ? 'simple-menu' : undefined}
                      className={router.pathname === '/support' ? 'active' : ''}
                      onMouseOver={handleClick}
                    >
                      Support
                    </a>
                  </Link>
                </li>

                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  MenuListProps={{ onMouseLeave: handleClose }}
                  getContentAnchorEl={null}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  <MenuItem onClick={handleClose} onClose={handleClose}>
                    <a
                      className={
                        router.pathname === '/support/faq' ? 'active' : ''
                      }
                      onClick={() => {
                        Router.push({
                          pathname: '/support/faq',
                        })
                        handleClose()
                      }}
                    >
                      Faq
                    </a>
                  </MenuItem>

                  <MenuItem onClick={handleClose}>
                    <a
                      className={
                        router.pathname === '/support/tutorials' ? 'active' : ''
                      }
                      onClick={() => {
                        Router.push({
                          pathname: '/support/tutorials',
                        })
                        handleClose()
                      }}
                    >
                      Tutorials
                    </a>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <a
                      className={
                        router.pathname === '/support/download' ? 'active' : ''
                      }
                      onClick={() => {
                        Router.push({
                          pathname: '/support/download',
                        })
                        handleClose()
                      }}
                    >
                      Download
                    </a>
                  </MenuItem>
                </Menu>
                <li>
                  <Link as={'/about'} href="/about">
                    <a
                      onMouseEnter={handleClose}
                      className={router.pathname === '/about' ? 'active' : ''}
                    >
                      About us
                    </a>
                  </Link>
                </li>
              </ul>

              <ul className={classes.RightMenu}>
                <li>
                  <div className="wrap">
                    <div className="search">
                        <input
                          type="text"
                          className="searchTerm"
                          placeholder="Search ..."
                          onChange={(e) => {
                            setSearchTerm(e.target.value)
                          }}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              Router.push({ pathname: '/products', query: { ...parsed, searchTerm } })
                              setSearchTerm()
                            }
                          }}
                        />
                        <button 
                        onClick={() => { 
                           Router.push({ pathname: '/products', query: { ...parsed, searchTerm } })
                          setSearchTerm()
                          }}
                        type="button" 
                        className="searchButton">
                          <AiOutlineSearch/>
                        </button>
                    </div>
                  </div>
                </li>

                <li>
                  {Cookies.get('token') ? 
                  <a>
                    <FiLogOut onClick={() => {
                      Cookies.remove('token')
                      window.location = '/'
                    }}/>
                  </a>
                  :  <Link href='/login'>
                  <a>
                    <FaUser />
                  </a>
                </Link>
                  }
                
                </li>
                <li className={classes.testholder}>
                  <Link href='/cart'>
                    <a>
                      <RiShoppingCartFill />
                    </a>
                  </Link>
                  {/* <em className={classes.test}>
                   
                    <span> 3</span>
                  </em> */}
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </Container>

    </div>
  )
}

export default Navbar
