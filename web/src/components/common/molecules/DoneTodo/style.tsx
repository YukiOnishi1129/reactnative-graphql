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
  todo: {
    border: "1px solid #aaa",
    borderRadius: "20px",
    backgroundColor: Theme.color.deepGreen.sixty,
    color: Theme.color.white,
    display: "flex",
    justifyContent: "space-around",
    height: "70px",
  },
  title: {
    width: "40%",
    height: "100%",
    lineHeight: "60px",
    fontSize: "24px",
  },
  iconArea: {
    width: "30%",
    height: "100%",
    lineHeight: "80px",
    display: "flex",
    justifyContent: "space-between",
  },
  icon: {
    cursor: "pointer",
  },
}));
