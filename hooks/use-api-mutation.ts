import { useMutation } from "convex/react";
import { useState } from "react";

// {useMutation}
export const useApiMutation = (mutationFunction: any) => {
  const [pending, setPending] = useState(false);
  const apiMutation = useMutation(mutationFunction);

  const mutate = (payload: any) => {
    setPending(true);
    return apiMutation(payload)
      .finally(() => setPending(false))
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  };

  return { mutate, pending };
};
