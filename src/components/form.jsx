import { Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";

const Form = ({ dataSubmit }) => {
  const { handleSubmit, register, reset } = useForm();

  const submit = (data) => {
    dataSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <TextField fullWidth placeholder="title" {...register("title")} />
      <TextField
        fullWidth
        margin="normal"
        placeholder="description"
        {...register("description")}
      />
      <Button sx={{ mb: 4 }} variant="contained" fullWidth type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
