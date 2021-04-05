import useStyles from "./style"
import { IoIosClose } from "react-icons/io"
import NumericInput from "react-numeric-input"


  const CartData = ({
    title,
    type,
    price,
    description,
    buttonTitle,
    buttonLink,
    buttonLinkAs,
    include,
    softwareon,
    spec,
  }) => {
  const classes = useStyles()
  return (
                <div className={classes.CartTable}>
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
                      <td  className={`${classes.TotalPrice} TotalPrice`}> 3,800,00 $ </td>
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
                      <td  className={`${classes.TotalPrice} TotalPrice`}> 3,800,00 $ </td>
                      <td>
                        <IoIosClose />
                      </td>
                    </tr>
                  </table>
                </div>
  )
}

export default CartData
