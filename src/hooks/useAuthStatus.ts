import { useAtom } from "jotai";
import { authStatus } from "@/storage/atom";

const useAuthStatus = () => {
  const [status] = useAtom(authStatus);
  return status;
};

export default useAuthStatus;