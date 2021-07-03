/**
 * InputForm
 * @package components
 * @copyright Yuki Onishi
 */
import React from "react";
import TextField from "@material-ui/core/TextField";
/* types */
import { EventType } from "@/types/event";
/* styles */
import { useStyles } from "./style";

/**
 * props
 */
type Props = {
  label: string;
  value: string;
  placeholder?: string;
  errorMessage: string;
  errorFlg: boolean;
  onChange: EventType["onChange"];
};

/**
 * InputForm
 * @param {Props} props
 * @returns
 */
export const InputForm: React.VFC<Props> = (props: Props) => {
  const {
    label,
    value,
    placeholder = "",
    errorMessage,
    errorFlg,
    onChange,
  } = props;
  /* styles */
  const classes = useStyles();

  if (errorFlg) {
    <TextField
      error
      label={label}
      value={value}
      placeholder={placeholder}
      helperText={errorMessage}
      onChange={onChange}
    />;
  }

  return (
    <TextField
      className={classes.input}
      label={label}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
