import Container from "@material-ui/core/Container"
import useStyles from "./style"
import { IoIosClose } from "react-icons/io"
import Grid from "@material-ui/core/Grid"
import OrderSummary from "./components/OrderSummary"
import { MdKeyboardArrowRight } from "react-icons/md"
import Link from "next/link"
import NumericInput from "react-numeric-input"
import { AiOutlineTag } from "react-icons/ai"
import { GrNotes } from "react-icons/gr"

const CartModule = () => {
  const classes = useStyles()

  return (
    <div className={classes.CartHolder}>
      <Container>
        <Grid container justify="center">
          <Grid item lg={11} md={11} sm={12} xs={12}>
            <Grid container spacing={8}>
              <Grid item lg={8} md={8} sm={12} xs={12}>
                <div className={classes.CartTable}>
                  <div className={classes.CartTableTitle}>
                    <div>
                      <h2>My Cart </h2>
                    </div>
                    <div>
                      <h4>
                        <Link as={"#"} href="#">
                          <a href="#">Continue Shopping</a>
                        </Link>
                        <MdKeyboardArrowRight />
                      </h4>
                    </div>
                  </div>
                  <hr />

                  <table>
                  <tr>
                      <td>
                        <img src="../../static/images/products/2.png" />
                      </td>
                      <td>
                        Wizard update <br /> <p>3,800,00 $</p>
                        <div className={classes.NumericInput}>
                          <NumericInput mobile min={1} value={1} />
                        </div>
                      </td>
                      <td>3,800,00 $ </td>
                      <td>
                        <IoIosClose />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="../../static/images/products/1.png" />
                      </td>
                      <td>
                        Wizard update <br /> <p>3,800,00 $</p>
                        <div className={classes.NumericInput}>
                          <NumericInput mobile min={1} value={1} />
                        </div>
                      </td>
                      <td>3,800,00 $ </td>
                      <td>
                        <IoIosClose />
                      </td>
                    </tr>
                  </table>
                </div>
                <div className={classes.CartInputs}>
               <div className={classes.promocode}>
                 <div>
                <AiOutlineTag/>
                 </div>
                 <div>
                <input placeholder="Enter  a promo code"/> 
                 </div>
                 </div>
                 <div className={`${classes.promocode} note`}>
                 <div>
                <GrNotes/>
                 </div>
                 <div>
                <input placeholder="Add  a note"/> 
                 </div>
                 </div>
               </div>
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <OrderSummary />
              </Grid>
             
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default CartModule
