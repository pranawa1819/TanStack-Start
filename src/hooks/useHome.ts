
import { getHome } from "~/lib/getHome";
import { useQuery } from "@tanstack/react-query";

export interface HomeData {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export const useHome = (userId:number) => {
  const { data, isLoading, isError, refetch } = useQuery<HomeData[]>({
    queryKey: ["data"],
    queryFn: () => getHome(userId),
  });
  return { data, isLoading, isError, refetch };
};
