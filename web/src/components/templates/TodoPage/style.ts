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
    width: "80%",
    // margin: "0 auto",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: "20px",
    borderRadius: "10px",
    minHeight: "500px",

    "& h2": {
      textAlign: "center",
      fontSize: "32px",
      paddingBottom: "20px",
    },
  },
  main: {
    width: "100%",
  },

  leftBar: {
    width: "35%",
    // border: "2px solid #aaa",
    minHeight: "400px",
  },
  rightBar: {
    width: "50%",
    // border: "2px solid #aaa",
    minHeight: "400px",
  },
}));
