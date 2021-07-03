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
  header: {
    position: "fixed",
    width: "100%",
    zIndex: 10,
  },
  headerDummy: {
    height: "70px",
  },
  main: {
    padding: "30px",
    minHeight: "600px",
  },
  footer: {
    width: "100%",
  },
}));
