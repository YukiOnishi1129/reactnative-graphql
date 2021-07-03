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
  root: {
    flexGrow: 1,
  },
  bgColor: {
    backgroundColor: Theme.color.deepGreen.full,
  },
  titleArea: {
    flexGrow: 1,
    marginLeft: 60,
    cursor: "pointer",
  },
  title: {
    letterSpacing: 5,
  },
  nav: {
    marginRight: 200,
  },
  button: {
    letterSpacing: 2,
  },
}));
