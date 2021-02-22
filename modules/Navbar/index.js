import Link from "next/link"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import useStyles from "./style"
import { useRouter } from "next/router"
import { RiShoppingCartFill } from "react-icons/ri"
import { FaUser } from "react-icons/fa"
import React from "react"
import Router from "next/router"
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
const Navbar = () => {
  const classes = useStyles()
  const router = useRouter()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.NavbarHolder}>
      <div className={classes.NavbaTopImage}>
        <img src="../../static/images/homepage/topimage.png" alt="top-image" />
      </div>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item lg={3} md={3}>
            <div className={classes.Logo}>
              <Link as={"/"} href="/">
                <a href="/">
                  <img
                    src="../../static/images/logo.png"
                    alt="logo-pick-lock"
                  />
                </a>
              </Link>
            </div>
          </Grid>
          <Grid item lg={9} md={9}>
            <div className={classes.navbarContent}>
              <ul className={classes.centermenu}>
                <li>
                  <Link href="/">
                    <a className={router.pathname === "/" ? "active" : ""}>
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/products">
                    <a
                      className={
                        router.pathname === "/products" ? "active" : ""
                      }
                    >
                      Products
                    </a>
                  </Link>
                </li>
                <li
                >
                  <Link as={"/support"} href="/support">
                    <a href="/support" onMouseEnter={handleClick}
                    >
                      Support
                    </a>
                  </Link>
                </li>

                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                    <a
                      onClick={() => {
                        Router.push({
                          pathname: "/support",
                        })
                        handleClose()
                      }}
                    >
                      Support
                    </a>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <a
                      onClick={() => {
                        Router.push({
                          pathname: "/support/faq",
                        })
                        handleClose()
                      }}
                    >
                      Faq
                    </a>
                  </MenuItem>

                  <MenuItem onClick={handleClose}>
                    <a
                      onClick={() => {
                        Router.push({
                          pathname: "/support/tutorials",
                        })
                        handleClose()
                      }}
                    >
                      Tutorials
                    </a>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <a
                      onClick={() => {
                        Router.push({
                          pathname: "/support/download",
                        })
                        handleClose()
                      }}
                    >
                      Download
                    </a>
                  </MenuItem>
                
                </Menu>

                <li>
                  <Link as={"/about"} href="/about">
                    <a className={router.pathname === "/about" ? "active" : ""}>
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
                      />
                      <button type="submit" className="searchButton">
                        <i class="fa fa-search"></i>
                      </button>
                    </div>
                  </div>
                </li>

                <li>
                  <Link as={"#"} href="#">
                    <a href="#">
                      <FaUser />
                    </a>
                  </Link>
                </li>
                <li className={classes.testholder}>
                  <Link as={"#"} href="#">
                    <a href="#">
                      <RiShoppingCartFill />
                    </a>
                  </Link>
                  <em className={classes.test}>
                   
                    <span> 3</span>
                  </em>
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
