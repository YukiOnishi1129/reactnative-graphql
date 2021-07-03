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
  input: {
    width: "100%",
    "& input": {
      paddingLeft: "5px",
      paddingRight: "5px",
    },
  },
}));
