/* eslint-disable no-nested-ternary */
import Link from 'next/link'
import Router from 'next/router'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import useStyles from './style'
import Button from '../../../../common/Button'

import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
const ProductSliderData = ({
  title,
  type,
  price,
  description,
  buttonTitle,
  buttonLink,
  buttonLinkAs,
  include,
  spec,
}) => {
  const classes = useStyles()
  return (
    <div className={classes.ProductSliderDataHolder}>
        
          <div className={classes.SectionTitleHolder}>
            <h1> {title}</h1>
            <h4> {type} </h4>
            <h2> {price} </h2>
            <h3> {include} </h3>
            <h6> {description} </h6>
            <h5> {spec} </h5>

          </div>


          <div className={`${classes.SectionButton} SectionButton`}>
            {buttonTitle
              && (buttonLinkAs ? (
                <a onClick={() => Router.push(buttonLinkAs) }>
                  <Button>
                    {buttonTitle}
                    <ArrowForwardIcon />
                  </Button>
                </a>
              ) : buttonLink ? (
                <Link
                  href={buttonLink}
                  as={buttonLink}
                >
                  <a href={buttonLink}>
                    <Button>
                      {buttonTitle}
                      <ArrowForwardIcon />
                    </Button>
                  </a>
                </Link>
              ) : (
                <Button>
                  {buttonTitle}
                </Button>
              ))}

     
          </div>
    </div>
  )
}

export default ProductSliderData
