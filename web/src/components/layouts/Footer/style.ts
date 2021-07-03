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
  footer: {
    color: Theme.color.white,
    backgroundColor: Theme.color.deepGreen.full,
    width: "100%",
    height: "40px",
  },
  copyRight: {
    fontSize: "14px",
    textAlign: "center",
    margin: "0 auto",
    padding: "10px 0",
    width: "200px",
  },
}));
