import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import useStyles from './style'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '../../common/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'

const Paypal = () => {
  const classes = useStyles()

  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  const [age, setAge] = React.useState('');

  const handleChange2 = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className={classes.AboutHolder}>
      <Container>
      <Grid
  container
  direction="row"
  justify="center"
  spacing={2}
  alignItems="left"
>
          <Grid item md={6} xs={6}> 
          <Grid
  container
  direction="row"
  justify="center"
  spacing={2}
  alignItems="center"
>
        <div className={classes.FormHolder}>
          <h2> Ordr Now</h2>
          <h6> Would you like to buy one of our items? </h6>

          <h4> My products</h4>
          <FormControl component="fieldset">
      <FormGroup aria-label="position" >
     
       
       
        <div className={classes.ProductItemHolder}>
      <div className={classes.ProductItemCheckbox}>

        <FormControlLabel
          value="top"
          control={<Checkbox color="primary" />}
          label="Product Name 1"
          labelPlacement="end"
        />
        </div>
        <div className={classes.ProductItemPrice}>

  <h3> 120$ </h3>
  
  </div>

        </div>
        <div className={classes.ProductItemHolder}>
      <div className={classes.ProductItemCheckbox}>

        <FormControlLabel
          value="top"
          control={<Checkbox color="primary" />}
          label="Product Name 1"
          labelPlacement="end"
        />
        </div>
        <div className={classes.ProductItemPrice}>

  <h3> 120$ </h3>
  
  </div>

        </div>
        <div className={classes.ProductItemHolder}>
      <div className={classes.ProductItemCheckbox}>

        <FormControlLabel
          value="top"
          control={<Checkbox color="primary" />}
          label="Product Name 1"
          labelPlacement="end"
        />
        </div>
        <div className={classes.ProductItemPrice}>

  <h3> 120$ </h3>
  
  </div>

        </div>
      </FormGroup>
    </FormControl>
           
    <div className={classes.FormTotal}>
      <h3> Total:  <b> 3000$</b></h3>
     
</div>
<div className={classes.PaymentMethod}>

<h3> Payment Method
</h3>
</div>
<div className={classes.FormContent}>
      <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
         <img src="../../static/images/checkout/paypal2.png"/>
        </AccordionSummary>
        <AccordionDetails>
          <div>
          <div  className={classes.FormTitle}>First Name</div> 
        <TextField id="outlined-basic" label="first Name" variant="outlined" />
            </div>
          
        <div>


        <div  className={classes.FormTitle}>Last Name</div> 

        <TextField id="outlined-basic" label="last Name" variant="outlined" />

        </div>
        <div>


<div  className={classes.FormTitle}>Email </div> 

<TextField id="outlined-basic" label="email " variant="outlined" />

</div>
<Button> Submit</Button>



        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
        <img src="../../static/images/checkout/visa2.png"/>
        </AccordionSummary>
        <AccordionDetails>
        <div className={classes.PaymentMethod}>

<h3> Credit Card
</h3>
</div>
        <div>
          <div  className={classes.FormTitle}>First Name</div> 
        <TextField id="outlined-basic" label="first Name" variant="outlined" />
            </div>
          
        <div>


        <div  className={classes.FormTitle}>Last Name</div> 

        <TextField id="outlined-basic" label="last Name" variant="outlined" />

        </div>
        <div>


<div  className={classes.FormTitle}>Credit Card Number </div> 

<TextField id="outlined-basic" label="card number " variant="outlined" />

</div>
<div>
<div  className={classes.FormTitle}>Security Code   </div> 

<TextField id="outlined-basic" label="cvv " variant="outlined" />

</div>
<FormControl className={classes.formControl}>
  
<div  className={classes.FormTitle}> Expiration Month   </div> 
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange2}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
  
<div  className={classes.FormTitle}> Expiration Year   </div> 
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange2}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
<div className={classes.PaymentMethod}>

<h3> Shipping Address

</h3>
</div>

<div>
<div  className={classes.FormTitle}>Street Address    </div> 

<TextField id="outlined-basic" label="street  " variant="outlined" />

</div>
<div>
<div  className={classes.FormTitle}>City   </div> 

<TextField id="outlined-basic" label="city  " variant="outlined" />

</div>
<div className={classes.PaymentMethod}>

<h3> Buyer info

</h3>
</div>
<div>
<div  className={classes.FormTitle}> Name    </div> 

<TextField id="outlined-basic" label="name" variant="outlined" />

</div>
<div>
<div  className={classes.FormTitle}>Buyer Email   </div> 

<TextField id="outlined-basic" label="ex: myname@example.com  " variant="outlined" />

</div>
<Button> Submit</Button>

        </AccordionDetails>
      </Accordion>
      
    </div>
          </div>
    </Grid>

    </Grid>
    </Grid>

    </Container>

    </div>
  )
}

export default Paypal
