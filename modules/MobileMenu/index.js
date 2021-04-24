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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import useStore from '../../store'
import Cookies from 'js-cookie'
import Auth from '../../modules/Auth'

const MobileMenu = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = React.useState(false)
 
  const cart = useStore((state) => state.cart)

  const handleClose = () => {
    setAnchorEl(null)
  }
  const setOpenModal = useStore((state) => state.setOpenModal)
  const cartLength = cart?.variations?.length || 0

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
  const token = Cookies.get('token')

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
          <form action="/products">

            <input
              type="text"
              className="searchTerm"
              placeholder="Search ..."
            />
            <button type="submit" className="searchButton">
              <i className="fa fa-search"></i>
            </button>
            </form>
          </div>
            <div>
              <a href="#">
                <a href="#">
                <FaUser onClick={() => setOpenModal(1)}/>
                </a>
              </a>
            </div>
            <div>
              
              <li className={classes.CartIconHolder}>
              <Link href='/cart'>
                    <a>
                      <RiShoppingCartFill />
                    </a>
                  </Link>
                  {token && <em className={classes.CartIconNumber}>
                   
                    <span> {cartLength}</span>
                  </em>
}
                </li>
            </div>
        </div>
          <ul className={classes.centermenu}>
            <li>
            <a href="/" className={router.pathname === "/" ? "active" : ""}>
            Home
                </a>
            </li>

            <a href="/products" className={router.pathname === "/products" ? "active" : ""}>
            Products
                </a>


              <div className={classes.root}>
                <Accordion>
                  <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
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
                  
            
                <a href="/support/faq" className={router.pathname === "/support/faq" ? "active" : ""}>
                Faq
                </a>
                <a href="/support/tutorials" className={router.pathname === "/support/tutorials" ? "active" : ""}>
                Tutorials
                </a>

                <a href="/support/download" className={router.pathname === "/support/download" ? "active" : ""}>
                Download
                </a>
            

                  </div>
                </Accordion>
                </div>
    

                <a href="/about" className={router.pathname === "/about" ? "active" : ""}>
                About
                </a>

           

          </ul>
        
        </Grid>
      </Menu1>
      <Auth />
    </div>
  )
}

export default MobileMenu
