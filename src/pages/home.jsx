import { Container, Grid2 } from "@mui/material";
import React from "react";
import useGetUsers from "./home/service/query/useGetUsers";
import ProductCard from "../components/product-card";
import Form from "../components/form";
import useAddUser from "./home/service/mutation/useAddUser";
const Home = () => {
  const { data, isLoading } = useGetUsers();
  const { mutate } = useAddUser();
  const dataSubmit = (data) => {
    mutate(data,{
      onSuccess: () => {
        console.log("success");
      },
    });
    
  };
  return (
    <Container>
      <Form dataSubmit={dataSubmit} />
      <div>
        {isLoading ? (
          "loading"
        ) : (
          <Grid2 container spacing={2} columns={4}>
            {data?.map((user) => (
              <Grid2 key={user.id}>
                <ProductCard {...user} />
              </Grid2>
            ))}
          </Grid2>
        )}
      </div>
    </Container>
  );
};

export default Home;
