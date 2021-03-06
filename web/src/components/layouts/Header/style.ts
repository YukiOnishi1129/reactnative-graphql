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
    height: "70px",
  },
  bgColor: {
    height: "100%",
    backgroundColor: Theme.color.deepGreen.full,
  },
  titleArea: {
    flexGrow: 1,
    marginLeft: 60,
  },
  titleClickArea: {
    width: "150px",
    cursor: "pointer",
  },
  title: {
    letterSpacing: 5,
  },
}));
