import React from 'react'
import useStyles from '../OrderHistory/style'
import { RiMapPinTimeFill } from 'react-icons/ri'
import { pathOr } from 'ramda'

const OrderHistoryData = ({ data, status, shippingCost }) => {
  const image = pathOr(0, ['variation', 'product', 'images', '0'], data)
  const name = pathOr(0, ['variation', 'product', 'name', 'en'], data)
  const quantity = pathOr(0, ['quantity'], data)
  const total = pathOr(0, ['total'], data)
  
  const classes = useStyles()

  return (
    <>
      <tr>
        <td className={classes.imageTable}>
          <img src={image} alt='product image'/>
        </td>

        <td className={classes.OrderTableTd}>
          <div className={classes.OrderTableHolder}>
            <div className={classes.OrderTableLeft}>
         <h4 className={classes.OrderTablName}> {name}  </h4>
              <h4> Quantity </h4>
              <h4> track Number </h4>
              <h4> Order Status </h4>
              <h4> Shipping rate </h4>
              {/* <h5>
                <RiMapPinTimeFill />
                Track
              </h5> */}
            </div>
            <div className={classes.OrderTableRight}>
              <h4> ${total.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} </h4>
              <h4> {quantity} </h4>
              <h4> ------ </h4>
              <h4> {status} </h4>
              <h4> ${shippingCost.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} </h4>
            </div>
          </div>
        </td>
      </tr>
    </>
  )
}

export default OrderHistoryData
