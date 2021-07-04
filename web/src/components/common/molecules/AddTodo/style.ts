/**
 * style
 * @package components
 * @copyright Yuki Onishi
 */
import { makeStyles } from "@material-ui/core/styles";

/**
 * style
 */
export const useStyles = makeStyles(() => ({
  area: {
    width: "100%",
    // marginRight: "auto",
    // marginLeft: "auto",
    marginBottom: "20px",
    border: "1px solid #aaa",
    borderRadius: "10px",
    minHeight: "500px",

    "& h2": {
      textAlign: "center",
      fontSize: "24px",
      paddingTop: "30px",
      paddingBottom: "10px",
    },
  },
  error: {
    textAlign: "center",
    color: "red",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  form: {
    padding: "40px 30px",
  },
  input: {
    marginBottom: "50px",

    "& :last-child": {
      marginBottom: "0",
    },
  },
  button: {
    marginBottom: "50px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "40%",
  },
}));
