import React from "react"
import useStyles from "../../../OrderHistory/style"
import { RiMapPinTimeFill } from "react-icons/ri"

const OrderHistoryData = () => {
  const classes = useStyles()

  return (
    <table>
      <tr>
        <td className={classes.imageTable}>
          <img src="../../../../static/images/products/4.png" />
        </td>

        <td className={classes.OrderTableTd}>
          <div className={classes.OrderTableHolder}>
            <div className={classes.OrderTableLeft}>
              <h4> LOCK PICK BASIC KIT </h4>
              <h4> Quantity </h4>
              <h4> track Number </h4>
              <h4> Order Status </h4>
              <h4> Shipping rate </h4>
              <h5>
                {" "}
                <RiMapPinTimeFill />
                Track
              </h5>
            </div>
            <div className={classes.OrderTableRight}>
              <h4> $0.000.00 </h4>
              <h4> 2 </h4>
              <h4> ------ </h4>
              <h4> Pending </h4>
              <h4> $0.000.00 </h4>
            </div>
          </div>
        </td>
      </tr>
    </table>
  )
}

export default OrderHistoryData
