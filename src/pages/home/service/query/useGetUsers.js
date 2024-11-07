import { useQuery } from "@tanstack/react-query";
import request from "../../request/request";

const useGetUsers = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: () => request.get("/todos").then((res) => res.data),
  });
};

export default useGetUsers;
