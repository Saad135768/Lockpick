import React from 'react'
import clsx from 'clsx'
import useStyles from './style'
import Drawer from '@material-ui/core/Drawer'
import Button from '../../../../common/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import CartData from '../CartData'
import { MdKeyboardArrowRight } from 'react-icons/md'
import Cookies from 'js-cookie'
import { withSnackbar } from 'notistack'
import useStore from '../../../../store'

const QuickCart = props => {
  const classes = useStyles()
  const [state, setState] = React.useState({
    right: false,
  })
  const setOpenModal = useStore((state) => state.setOpenModal)

  const token = Cookies.get('token')
  const navigation = () => {
    setOpenModal(1)
    props.enqueueSnackbar('Please login first', { variant: 'warning' })
  }
  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

const handleAddToCart = async (event) => {
  if(token && props.AddToCartMutation) {
    await props?.AddToCartMutation()
    // Opens the quick cart
    toggleDrawer('Add to cart', true)(event)
  }
}

  const list = anchor => (
    <div>
      <div className={classes.CartTable2}>
        <div className={classes.CartHolder}>
          <List>
            <div className={classes.QuickTableTitle}>
              <div>
                <h4>
                  <MdKeyboardArrowRight
                    className={clsx(classes.list, {
                      [classes.fullList]:
                        anchor === 'top' || anchor === 'bottom',
                    })}
                    role="presentation"
                    onClick={toggleDrawer(anchor, false)}
                    onKeyDown={toggleDrawer(anchor, false)}
                  />
                </h4>
              </div>
              <div className={classes.QuickCartTitle}>
                <h2> QUICK CART </h2>
              </div>
            </div>
            <CartData />
          </List>
        </div>
        <Divider />
      </div>
    </div>
  )

  return (
    <div onClick={token ? null : navigation}>
      <div>
        <Button onClick={handleAddToCart}>{'Add to cart'}</Button>
      </div>
      <Drawer
        className={classes.QuickCart}
        anchor={'right'}
        open={state['Add to cart']}
        onClose={toggleDrawer('Add to cart', false)}
      >
        {list('Add to cart')}
      </Drawer>
    </div>
  )
}

export default withSnackbar(QuickCart)
