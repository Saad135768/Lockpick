import React, { useEffect } from "react"
import Link from "next/link"
import { slide as Menu1 } from "react-burger-menu"
import Router, { useRouter } from "next/router"
import { Container, Grid } from "@material-ui/core"
import useStyles from "./style"
import { RiShoppingCartFill } from "react-icons/ri"
import { FaUser } from "react-icons/fa"
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
const MobileMenu = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = React.useState(false)
 
  const handleClose = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    setIsOpen(false)
  }, [router.query])
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }
  return (
    <div className={classes.MobileMenuHolder}>
      <Container maxWidth="lg">
        <div className={classes.MobileMenuContent}>
          <div className={classes.Logo}>
            <Link  href="/">
              <a href="/">
                <img src="../../static/images/logo.png" alt="est" />
              </a>
            </Link>
          </div>
          <div className={classes.MenuIcon}>
            <div></div>
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
            <div>
              <a href="#">
                <a href="#">
                  <FaUser />
                </a>
              </a>
            </div>
            <div>
              <a href="#">
                <a href="#">
                  <RiShoppingCartFill />
                </a>
              </a>
            </div>
        </div>
          <ul className={classes.centermenu}>
            <li>
              <a  href="/">
                <a>Home</a>
              </a>
            </li>
            <li>
              <a as={"/products"} href="/products">
                <a>
                  Products
                </a>
              </a>
            </li>


              <div className={classes.root}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                   <li>
              <a href="/support" className={router.pathname === "/support" ? "active" : ""}>
              Support
                </a>
            </li>
                  </AccordionSummary>
                  <div>
                  
              <a href="/support/faq">
                <a>
                  Faq
                </a>
                </a>
              <a href="/support/tutorials">
                <a>
                Tutorials
                </a>
                </a>


              <a href="/support/download">
                <a>
                Download
                </a>
              </a>
                  </div>
                </Accordion>
                </div>
    
       

            <a href="/about">
                <a>
                About
                </a>
              </a>

          </ul>
        
        </Grid>
      </Menu1>
    </div>
  )
}

export default MobileMenu
