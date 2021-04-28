import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  OrderSummaryHolder: {
    "& h4": {
      fontFamily: "Poppins-Bold",
      marginBottom: 0,
      fontSize: 18,
    },
    "& h3 ": {
      fontSize: 19,
    },
    "& h3 , p": {
      marginBottom: 0,
    },
    "&  p , h4": {
      marginTop: 22,
    },
    "& h2": {
      color: "#fba530",
      fontFamily: "Poppins-Bold",
    },
    "& img": {
      width: "100%",
      marginTop: 40,
    },

    "& button": {
      textTransform: "capitalize",
      width: "100%",
      fontSize: 23,
      marginTop: 20,

    },
  },

  OrderSummaryContent: {
    marginTop: 9,
    paddingBottom: 30,
  },

  OrderSummaryFlex: {
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
  },
  OrderSummaryFlex: {
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
  },
  OrderSummaryInformation: {
    textAlign: "center",
    marginTop: 15,
    color: "#fff",
    "& p": {
      margin: 0,
    },
  },
  total: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    marginTop: '16px !important',
  },
  OrderHeight:{

  },
}));

export default useStyles;
