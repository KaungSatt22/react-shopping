import { useState } from "react";
import { useGetAllDataQuery } from "../api/api";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import Category from "../components/Category";
import ShowItem from "../components/ShowItem";

const Home = () => {
  const [category, setCategory] = useState("All");
  const { data, isLoading } = useGetAllDataQuery();

  let navigate = useNavigate();
  const detailHandler = (id) => {
    navigate(`/product/${id}`);
  };
  const categoryHandler = (type) => {
    setCategory(type);
  };

  let showData =
    category === "All"
      ? data
      : data?.length > 0 &&
        data.filter(
          (item) => item.category.toLowerCase() === category.toLowerCase()
        );
  return (
    <div>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div>
          <Category category={category} onCategroy={categoryHandler} />
          <ShowItem data={showData} onDetail={detailHandler} />
        </div>
      )}
    </div>
  );
};

export default Home;
