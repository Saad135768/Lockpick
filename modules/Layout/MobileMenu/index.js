import React, { useEffect } from 'react'
import Link from 'next/link'
import { slide as Menu1 } from 'react-burger-menu'
import { useRouter } from 'next/router'
import { Container, Grid } from '@material-ui/core'
import useStyles from './style'
import { RiShoppingCartFill } from 'react-icons/ri'
import { FaUser } from 'react-icons/fa'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import useStore from '../../../store'
import Cookies from 'js-cookie'
import Auth from '../../../modules/Auth'

const MobileMenu = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = React.useState(false)

  const cart = useStore(state => state.cart)
  const setOpenModal = useStore(state => state.setOpenModal)
  const cartLength = cart?.variations?.length || 0

  useEffect(() => {
    setIsOpen(false)
  }, [router.query])

  const token = Cookies.get('token')

  const classes = useStyles()
  const { parsed, pathname } = router

  return (
    <div className={`${classes.MobileMenuHolder} ${pathname.includes('invoice' || 'order')? classes.none : ''}`}>

      <Container maxWidth='lg'>
        <div className={classes.MobileMenuContent}>
          <div className={classes.Logo}>
            <Link href='/'>
              <a>
                <img src='https://image.devteam9260.workers.dev/?width=1200&image=https://m2k-static.s3-eu-west-1.amazonaws.com/lock-pick/logo.png' alt='Lockpick logo' />
              </a>
            </Link>
          </div>
          <div className={classes.MenuIcon}>
            <div></div>
          </div>
        </div>
      </Container>

      <Menu1
        customCrossIcon={<img src='../../static/images/cancel.svg' />}
        isOpen={isOpen}
        onStateChange={e => { setIsOpen(e.isOpen) }}
      >
        <Grid item lg={9}>
          <div className='wrap'>
            <div className='search'>
              <form action='/products'>
                <input
                  type='text'
                  className='searchTerm'
                  placeholder='Search ...'
                />
                <button type='submit' className='searchButton'>
                  <i className='fa fa-search'></i>
                </button>
              </form>
            </div>
            <div>
              <a>
                <a>
                  <FaUser onClick={() => setOpenModal(1)} />
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
                {token && (
                  <em className={classes.CartIconNumber}>
                    <span> {cartLength}</span>
                  </em>
                )}
              </li>
            </div>
          </div>
          <ul className={classes.centermenu}>
            <li>
              <Link href='/' className={router.pathname === '/' ? 'active' : ''}>
                <a>
                Home
                </a>
              </Link>
            </li>

            <Link
              href='/products'
              className={router.pathname === '/products' ? 'active' : ''}
            >
              <a>
              Products
              </a>
            </Link>

            <div className={classes.root}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1bh-content'
                  id='panel1bh-header'
                >
                  <li>
                    <Link
                      href='/support'
                      className={router.pathname === '/support' ? 'active' : ''}
                    >
                      <a>
                      Support
                      </a>
                    </Link>
                  </li>
                </AccordionSummary>
                <div>
                  <Link
                    href='/support/faq'
                    className={
                      router.pathname === '/support/faq' ? 'active' : ''
                    }
                  >
                    <a>
                    Faq
                    </a>
                  </Link>
                  <Link
                    href='/support/tutorials'
                    className={
                      router.pathname === '/support/tutorials' ? 'active' : ''
                    }
                  >
                    <a>
                    Tutorials
                    </a>
                  </Link>

                  <Link
                    href='/support/download'
                    className={
                      router.pathname === '/support/download' ? 'active' : ''
                    }
                  >
                    <a>
                    Download
                    </a>
                  </Link>
                </div>
              </Accordion>
            </div>

            <Link
              href='/about'
              className={router.pathname === '/about' ? 'active' : ''}
            >
              <a>
              About
              </a>
            </Link>
          </ul>
        </Grid>
      </Menu1>
      <Auth />
    </div>
  )
}

export default MobileMenu
