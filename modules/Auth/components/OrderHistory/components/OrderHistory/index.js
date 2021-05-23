import React, { useState, Fragment } from 'react'
import useStyles from './style'
import { withSnackbar } from 'notistack'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { propOr, pathOr } from 'ramda'
import {
  Grid,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core'
import OrderHistoryData from './../OrderHistoryData'
import { useQuery } from '@apollo/react-hooks'
import { GET_ORDER } from '../../../../data/'
import Loader from 'react-loader-spinner'
import Link from 'next/link'
import useStore from '../../../../../../store'

const OrderHistory = ({ data, ...props }) => {
  const [_id, set_id] = useState()
  const { data: getOrderData, loading } = useQuery(GET_ORDER, {
    variables: { _id },
  })
  const date = +pathOr(0, ['createdAt'], data)
  const total = pathOr(0, ['totals', 'total'], data)

  const setOpenModal = useStore((state) => state.setOpenModal)
  
  const classes = useStyles()
  return (
    <Accordion square onChange={() => set_id(data?._id)}>
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <div className={classes.OrderSummaryInfo}>
          <Grid container spacing={1}>
            <Grid item lg={8} md={8}>
              <div className={classes.OrderNummber}>
                <h4>Order No </h4>
                <span className={classes.OrderText}>
                  {propOr(0, ['orderId'], data)}
                </span>
              </div>
            </Grid>
            <Grid item lg={4} md={4}>
              <div className={classes.OrderInvoice}>
                <h4>
                  <span
                    onClick={event => {
                      event.stopPropagation()
                      setOpenModal()
                    }}
                  >
                    <Link href={`/invoice/${data?._id}`}>
                      <a>view invoice</a>
                    </Link>
                  </span>{' '}
                  <MdKeyboardArrowRight />
                </h4>
              </div>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              {!!date && (
                <h4 className={classes.OrdePlaced}>
                  Placed on: 
                  {new Date(date).toLocaleString('en-us', {
                    day: 'numeric',
                    month: 'numeric',
                    year: 'numeric',
                  })}
                </h4>
              )}
            </Grid>
            <Grid item lg={6} md={6}>
              <div className={classes.OrderItems}>
                <h4>
                  item :{' '}
                  <span> {pathOr(0, ['variations', 'length'], data)}</span>
                </h4>
              </div>
            </Grid>
            <Grid item lg={6} md={6}>
              <div className={classes.OrderTotal}>
                <h4>
                  Total :{' '}
                  <span>
                    {' '}
                    $
                    {(total)
                      .toFixed(2)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}{' '}
                  </span>
                </h4>
              </div>
            </Grid>
          </Grid>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <table>
        {!loading ? pathOr([], ['getOrder', 'variations'], getOrderData).map((data) => 
        <Fragment key={data.variation?.product._id}> 
          <OrderHistoryData 
            data={data} 
            status={getOrderData?.getOrder?.status}  
            shippingCost={getOrderData?.getOrder?.totals?.shipping}
            />
        </Fragment>
        ): <Loader
              type="Oval"
              color="#fba631"
              height={50}
              width={50}
      />}
        </table>
      </AccordionDetails>
    </Accordion>
  )
}

export default withSnackbar(OrderHistory)
