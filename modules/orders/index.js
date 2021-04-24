import React from 'react'
import { Container } from '@material-ui/core'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import useStyles from './style'
import Head from 'next/head'

export default ({ orderId, order, ordertError }) => {
    const classes = useStyles()
    return (
        <>
        <Head>
        <title>Lock pick | Order</title>
      </Head>
        <div className={classes.orderHolder}>
        <Container maxWidth="lg">
        <div className={classes.orderContent}>

            <AiOutlineCheckCircle/>
            <h1> Payment  Successful</h1>
            <h3>
                Your order id is {order.getOrder.orderId} 
            </h3>
            <p>
            its status is: <span> {order.getOrder.status}</span>
            </p>
            </div>
            </Container>
        </div>
        </>
    )
}
