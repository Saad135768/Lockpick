import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({

  FaqHolder:{
    margin:'30px 0',
  },

  MoreQuestion:{
    background:'#414750',
    padding:'30px 0',
    margin:'50px 0',
    ' & p': {
      color: '#fff',
      textTransform: 'uppercase',
      fontSize: 21,
      fontFamily: 'Poppins-Bold',
    },
    ' & span': {
      color: '#3580D6',
      fontSize: 21,
      marginLeft:5,
      textTransform: 'none',
    
    },
      },
  root: {
    width: '100%',

    ' & .MuiPaper-root': {
      color: '#fff',
      transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
    ' & .MuiAccordionSummary-root': {
      padding: '5px 0',
    },
    ' & .MuiAccordionDetails-root': {
      padding: '5px 0',
    },

    ' & h1': {
      color: '#fff',
      marginBottom:'40px',  
      fontFamily: 'Poppins-Bold',
    },
    ' & h2': {
      color: '#ffa62f',
      margin: '0',
      fontSize: 24,
      fontFamily: 'Poppins-Bold',
    },
    ' & h3 , .MuiAccordionSummary-content.Mui-expanded, .MuiAccordion-root.Mui-expanded': {
      margin: '0',
    },
    ' & .MuiAccordion-root:before': {
      background: 'rgba(53,128,214,0.5) !important',
    },

    ' &  svg.MuiSvgIcon-root': {
      color: '#fba62f',
      fontSize: 34,
    },

    
  },


}))

export default useStyles
