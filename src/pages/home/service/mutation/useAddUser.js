import { useMutation, useQueryClient } from "@tanstack/react-query";
import request from "../../request/request";

const useAddUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => request.post("/todos", data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};

export default useAddUser;
