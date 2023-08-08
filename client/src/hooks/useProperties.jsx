import React from "react";
import { getAllProperties } from "../utils/api";
import { useQuery } from "react-query";

const useProperties = () => {
  const { data, isLoading, isError, refetch } = useQuery(
    "allProperties",
    getAllProperties,
    { refetchOnWindowFocus: false }
  );
  return {
    data,
    isLoading,
    isError,
    refetch,
  };
};

export default useProperties;
