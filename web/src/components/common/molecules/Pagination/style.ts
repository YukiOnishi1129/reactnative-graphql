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
  list: {
    width: "100%",
    height: "40px",
    display: "flex",
    justifyContent: "space-around",
  },
  iconArea: {
    marginRight: "20px",

    "& last-child": {
      marginRight: "0",
    },
  },
  icon: {
    cursor: "pointer",
    // marginRight: "10px",
    display: "block",
    borderRadius: "50%",
    border: "1px solid #bbbbbb",
    margin: "0 auto",
    textAlign: "center",
    color: "#bbbbbb",
    letterSpacing: "0.1rem",
    minWidth: "36px",
    height: "36px",
    lineHeight: "36px",
  },
  currentIcon: {
    cursor: "pointer",
    // marginRight: "10px",
    display: "block",
    borderRadius: "50%",
    backgroundColor: Theme.color.deepGreen.full,
    border: "1px solid #bbbbbb",
    margin: "0 auto",
    textAlign: "center",
    color: "#dce5ec",
    letterSpacing: "0.1rem",
    minWidth: "36px",
    height: "36px",
    lineHeight: "36px",
  },
}));
