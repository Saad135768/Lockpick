import React from 'react'
import { Container, Grid } from '@material-ui/core'
import useStyles from './style'
import FirstProductSlider from '../ProductsModule/components/FirstProductSlider'
import SecondProductSlider from '../ProductsModule/components/SecondProductSlider'
import ScrollAnimation from 'react-animate-on-scroll'

const ProductsModule = () => {
 
  const classes = useStyles()
  return (
    <div className={classes.ProductsHolder}>
      <div className={classes.ProductsHolderBg}>
        <Container>
          <Grid container justify="center">
            <Grid item lg={11} xs={12}>
              <div className={classes.FormHolder}>
                <ScrollAnimation animateIn="fadeIn">
                  <h5>
                    BASIC KIT<span> – </span> FULL PACKAGE <br />
                    ADD-ON <span> – </span> OPTIONS
                  </h5>
                </ScrollAnimation>

                <div className={classes.ProductsMainImge}>
                  <img
                    src="../../static/images/products/header.png"
                    style={{
                      filter:
                        'drop-shadow(0.35rem 3.35rem 0.9rem rgba(0, 0, 0, 0.3)',
                    }}
                  />
                </div>
                <div className={classes.Holder2}>
                  <div>
                    <p>
                      You can purchase the Lock Pick package (main device,
                      accessories & boards, and software) and install on your
                      own laptop. You can also buy it as a complete package with
                      one of the professional laptops we offer. Lock Pick can
                      also be purchased as an add on to our BMW Wizard.
                    </p>
                  </div>
                  <FirstProductSlider />
                </div>
              </div>

              <div className={classes.CustomeTitle}>
                <h3> full package & options </h3>
              </div>

              <SecondProductSlider taxonomyName={'full package'}/>
              <SecondProductSlider taxonomyName={'bmw wizard'} />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}

export default ProductsModule
