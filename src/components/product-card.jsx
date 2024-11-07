import { Button, Typography } from "@mui/material";
import React from "react";
import useDeleteUser from "../pages/home/service/mutation/useDeleteUser";
import useEditUser from "../pages/home/service/mutation/useEditUser";
import { useNavigate } from "react-router-dom"; // Импортируем useNavigate

const ProductCard = (props) => {
  const { mutate: deleteUser } = useDeleteUser();
  const { mutate: editUser } = useEditUser();
  const navigate = useNavigate(); 

  const Edit = () => {
    const newTitle = prompt("Enter new title");
    const newDescription = prompt("Enter new description");
    if (newTitle && newDescription) {
      editUser({
        id: props.id,
        data: { title: newTitle, description: newDescription },
      });
    }
  };

  const removeProd = () => {
    deleteUser(props.id);
  };

  const viewDetails = () => {
    navigate(`/detail/${props.id}`);
  };

  return (
    <div style={{ border: "1px solid black", padding: "10px", width: "300px" }}>
      <Typography mb={1}>{props.title}</Typography>
      <Typography mb={1}>{props.description}</Typography>
      <Button
        sx={{ mb: 2 }}
        color="error"
        variant="contained"
        fullWidth
        onClick={removeProd}
      >
        Delete
      </Button>
      <Button sx={{ mb: 2 }} variant="contained" fullWidth onClick={Edit}>
        Edit
      </Button>
      <Button
        color="success"
        variant="contained"
        fullWidth
        onClick={viewDetails} 
      >
        View
      </Button>
    </div>
  );
};

export default ProductCard;
