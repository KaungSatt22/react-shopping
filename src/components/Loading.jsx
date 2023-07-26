import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  let fakeArr = new Array(10).fill("loading");
  return (
    <div className="p-5 grid grid-cols-fluid gap-[5rem]">
      {fakeArr.map((arr, i) => (
        <Frame key={i} />
      ))}
    </div>
  );
};

const Frame = () => {
  return (
    <div>
      <SkeletonTheme baseColor="#f5f4f4" highlightColor="#e9e8e8">
        <div>
          <Skeleton className="w-[20rem] h-[20rem] lg:w-[25rem] lg:h-[20rem]" />
        </div>
        <div>
          <Skeleton className="w-[20rem] h-[5rem] lg:w-[25rem] lg:h-[5rem]" />
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default Loading;
