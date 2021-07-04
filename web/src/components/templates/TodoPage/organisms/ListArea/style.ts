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
  container: {
    minHeight: "450px",
  },
  list: {
    width: "80%",
    margin: "20px auto",

    // marginTop: "10px",
    // marginBottom: "10px",
  },
  pagination: {
    width: "80%",
    margin: "10px auto",
  },
}));
