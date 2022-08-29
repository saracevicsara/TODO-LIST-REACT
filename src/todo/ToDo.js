import { Grid } from "@mui/material";
import { useState } from "react";
import CreateToDo from "./CreateToDo";
import ToDoList from "./ToDoList";
const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const addTask = (createTask) => {
    setTasks([...tasks, createTask]);
  };
  return (
    <Grid container rowspasing={3}>
      <Grid item xs={6}>
        <CreateToDo handleAdd={addTask} />
      </Grid>
      <Grid item xs={6}>
        <ToDoList data={tasks} />
      </Grid>
    </Grid>
  );
};
export default ToDo;
