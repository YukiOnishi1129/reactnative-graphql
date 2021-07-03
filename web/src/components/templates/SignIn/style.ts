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
    width: "50%",
    // margin: "0 auto",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: "20px",
    border: "2px solid #aaa",
    borderRadius: "10px",
    minHeight: "500px",

    "& h2": {
      textAlign: "center",
      fontSize: "32px",
      paddingTop: "30px",
      paddingBottom: "10px",
    },
  },
  form: {
    padding: "40px 60px",
  },
  input: {
    marginBottom: "50px",

    "& :last-child": {
      marginBottom: "0",
    },
  },
  button: {
    margin: "0 auto",
    width: "40%",
  },
}));
