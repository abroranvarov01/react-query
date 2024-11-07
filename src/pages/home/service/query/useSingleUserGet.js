import { useQuery } from "@tanstack/react-query";
import request from "../../request/request";

const useSingleUserGet = (id) => {
  return useQuery({
    queryKey: ["single-user", id],
    queryFn: () => request.get(`/todos/${id}`).then((res) => res.data),
  });
};

export default useSingleUserGet;
