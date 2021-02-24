import React, { useEffect } from "react"
import Link from "next/link"
import { slide as Menu1 } from "react-burger-menu"
import Router, { useRouter } from "next/router"
import { Container, Grid } from "@material-ui/core"
import useStyles from "./style"
import { RiShoppingCartFill } from "react-icons/ri"
import { FaUser } from "react-icons/fa"
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
const MobileMenu = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = React.useState(false)
  useEffect(() => {
    setIsOpen(false)
  }, [router.query])
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  
  const handleClose = () => {
    setAnchorEl(null)
  }

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const classes = useStyles()
  return (
    <div className={classes.MobileMenuHolder}>
      <Container maxWidth="lg">
        <div className={classes.MobileMenuContent}>
          <div className={classes.Logo}>
            <Link as={"/"} href="/">
              <a href="/">
                <img src="../../static/images/logo.png" alt="est" />
              </a>
            </Link>
          </div>
          <div className={classes.MenuIcon}>
            <div></div>
          </div>
        </div>
        <div className="wrap">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="What are you looking for?"
          />
          <button type="submit" className="searchButton">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
      </Container>

      <Menu1
        customCrossIcon={<img src="../../static/images/cancel.svg" />}
        isOpen={isOpen}
        onStateChange={(e) => {
          setIsOpen(e.isOpen)
        }}
      >
        <Grid item lg={9}>
          <ul className={classes.centermenu}>
            <li>
              <Link as={"/"} href="/">
                <a className={router.pathname === "/" ? "active" : ""}>Home</a>
              </Link>
            </li>
            <li>
              <Link as={"/products"} href="/products">
                <a className={router.pathname === "/products" ? "active" : ""}>Products</a>
              </Link>
            </li>

            <li>
              <Link as={"/download"} href="/download">
                <a className={router.pathname === "/download" ? "active" : ""}>
                Download
                </a>
              </Link>
            </li>
            <li>
              <Link as={"/about"} href="/about">
                <a className={router.pathname === "/about" ? "active" : ""}>
                  About
                </a>
              </Link>
            </li>
           
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >

          <Link as={"/support"} href="/support">
                <a className={router.pathname === "/support" ? "active" : ""}>
                Support
                </a>
              </Link>
        </AccordionSummary>
        <AccordionDetails>

                    <li>
              <Link as={"/support/faq"} href="/support/faq">
                <a className={router.pathname === "/support/faq" ? "active" : ""}>Support</a>
              </Link>
            </li>

                    

        </AccordionDetails>
      </Accordion>
          </ul>
          <ul className={classes.RightMenu}>
            <li></li>
            <li>
              <Link as={"#"} href="#">
                <a href="#">
                  <FaUser />
                </a>
              </Link>
            </li>
            <li>
              <Link as={"#"} href="#">
                <a href="#">
                  <RiShoppingCartFill />
                </a>
              </Link>
            </li>
          </ul>
        </Grid>
      </Menu1>
  
    </div>
  )
}

export default MobileMenu
