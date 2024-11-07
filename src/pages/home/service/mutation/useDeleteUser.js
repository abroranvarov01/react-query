import { useMutation, useQueryClient } from "@tanstack/react-query";
import request from "../../request/request";

const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => request.delete(`/todos/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};

export default useDeleteUser;
