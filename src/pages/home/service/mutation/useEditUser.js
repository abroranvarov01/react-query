import { useMutation, useQueryClient } from "@tanstack/react-query";
import request from "../../request/request";

const useEditUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => request.put(`/todos/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};

export default useEditUser;
