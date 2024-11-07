import React from "react";
import { useParams } from "react-router-dom";
import useSingleUserGet from "../pages/home/service/query/usesingleUserGet";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";


const Deatil = () => {
  const { id } = useParams();
  const { data } = useSingleUserGet(id);

  return (
    <div>
      <Container>
        <Typography mb={1}>{data?.title}</Typography>
        <Typography mb={1}>{data?.description}</Typography>
      </Container>
    </div>
  );
};

export default Deatil;
