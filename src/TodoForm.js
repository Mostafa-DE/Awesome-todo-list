import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { useInputState } from "./hooks/useInputState";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import styles from "./Styles/TodoFormStyle";
import { DispatchContext } from "./contexts/TodosContext";

function TodoForm({ classes }) {
  const [value, handleChange, reset] = useInputState("");
  const dispatch = useContext(DispatchContext);
  return (
    <Paper className={classes.root}>
      <ValidatorForm
        onSubmit={(evnt) => {
          evnt.preventDefault();
          dispatch({ type: "addTodo", task: value });
          reset();
        }}
      >
        <TextValidator
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add New To-do"
          fullWidth
          validators={["required"]}
          errorMessages={["Please Enter A New To-Do"]}
        />
        <Button type="submit" variant="outlined" className={classes.btn}>
          Add
        </Button>
      </ValidatorForm>
    </Paper>
  );
}

export default withStyles(styles)(TodoForm);
