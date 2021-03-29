import useStyles from "./style"
import React from "react"
import Button from "../../../../common/Button"
import Link from "next/link"

const OrderSummary = () => {
  const classes = useStyles()

  return (
    <div className={classes.OrderSummaryHolder}>
      <h2> Order Summary</h2>
      <hr />
      <div className={classes.OrderSummaryContent}>
        <div className={classes.OrderSummaryFlex}>
          <div>
            <h3> Subtotal</h3>
          </div>
          <div>
            <h4> $ 9,790.00 </h4>
          </div>
        </div>
        <div className={classes.OrderSummaryFlex}>
          <div>
            <h3> Shipping</h3>
          </div>
          <div>
            <p> FREE</p>
          </div>
        </div>
        <div className={classes.OrderSummaryInformation}>
          <p> USA ( destination information )</p>
        </div>
        <div className={classes.OrderSummaryFlex}>
          <div>
            <h3> Sales Tax</h3>
          </div>
          <div>
            <p> 0.00$</p>
          </div>
        </div>
      </div>
      <hr />
      <div className={classes.OrderSummaryFlex}>
        <div>
          <h3>Total</h3>
        </div>
        <div>
          <p className={classes.total}> $ 9,790.00 </p>
        </div>
      </div>
      <Link as={"#"} href="#">
        <a href="#">
          <Button> CheckOut</Button>
        </a>
      </Link>
      <img src="../../../../static/images/cart/payment.jpeg" />
    </div>
  )
}

export default OrderSummary
