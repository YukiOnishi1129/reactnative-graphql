/**
 * style
 * @package components
 * @copyright Yuki Onishi
 */
import { makeStyles } from "@material-ui/core/styles";
/* styles */
import { Theme } from "@/styles/Theme";

/**
 * style
 */
export const useStyles = makeStyles(() => ({
  button: {
    width: "100%",
    textAlign: "center",
    backgroundColor: Theme.color.deepGreen.full,
    color: Theme.color.white,
    padding: "16px 0",
  },
}));
