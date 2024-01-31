import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleDataQuery } from "../api/api";
import DetailLoading from "../components/DetailLoading";
import DetailItem from "../components/DetailItem";

const Detail = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleDataQuery(id);
  return (
    <div>
      {isLoading ? (
        <div className="container mx-auto mt-10">
          <DetailLoading />
        </div>
      ) : (
        <DetailItem data={data} />
      )}
    </div>
  );
};

export default Detail;
