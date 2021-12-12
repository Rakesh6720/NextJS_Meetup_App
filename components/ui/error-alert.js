import classes from "./error-alert.module.css";

function ErrorAlert(props) {
  const childStyle = {
    marginBottom: 400,
  };
  return <div className={classes.alert}>{props.children}</div>;
}

export default ErrorAlert;
