import React from 'react'
import clsx from 'clsx'
import useStyles from "./style"
import Drawer from '@material-ui/core/Drawer'
import Button from '../../../../common/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import Link from "next/link"
import CartData from '../CartData'
import { MdKeyboardArrowRight } from "react-icons/md"


export default function QuickCart() {
  const classes = useStyles()
  const [state, setState] = React.useState({
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
           <div className={classes.CartTable2}>

            <div className={classes.CartHolder}>

      <List>
      <div className={classes.QuickTableTitle}>
      <div>
                      <h4>
                        <Link as={"#"} href="#">
                          <a href="#"></a>
                        </Link>
                        <MdKeyboardArrowRight />
                      </h4>
                    </div>
                    <div className={classes.QuickCartTitle}>
                      <h2> QUICK CART  </h2>
                    </div>
                   
                  </div>
      <CartData/>
      </List>
      </div>
      <div className={classes.CartInputs}>
                <div className={classes.ViewCart}>
      <Link as={"/cart"} href="/cart">
        <a href="/cart">
          <Button> View Cart </Button>
        </a>
      </Link>
      </div>
               </div>
      <Divider />
     
    </div>
    </div>
  )

  return (
    <div>
      {['Add to cart'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer  className={classes.QuickCart} anchor={'right'} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}