/**
 * ActionButton
 * @package components
 * @copyright Yuki Onishi
 */
import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles, Theme as MaterialTheme } from "@material-ui/core/styles";
/* types */
import { EventType } from "@/types/event";
/* styles */
import { useStyles } from "./style";
import { Theme } from "@/styles/Theme";

/**
 * ColorButton
 */
const ColorButton = withStyles((theme: MaterialTheme) => ({
  root: {
    color: Theme.color.white,
    backgroundColor: Theme.color.deepGreen.full,
    "&:hover": {
      backgroundColor: Theme.color.deepGreen.forty,
    },
  },
}))(Button);

/**
 * props
 */
type Props = {
  label: string;
  disabled?: boolean;
  onClick: EventType["onClickButton"];
};

/**
 * ActionButton
 * @param {Props} props
 * @returns
 */
export const ActionButton: React.VFC<Props> = (props: Props) => {
  const { label, disabled = false, onClick } = props;
  /* styles */
  const classes = useStyles();

  if (disabled) {
    <ColorButton className={classes.button} disabled onClick={onClick}>
      {label}
    </ColorButton>;
  }

  return (
    <ColorButton className={classes.button} onClick={onClick}>
      {label}
    </ColorButton>
  );
};
