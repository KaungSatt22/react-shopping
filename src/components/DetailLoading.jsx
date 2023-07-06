import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const DetailLoading = () => {
  return (
    <div className="flex flex-col items-center">
      <SkeletonTheme baseColor="#f5f4f4" highlightColor="#e9e8e8">
        <div>
          <Skeleton className="w-[20rem] h-[25rem] lg:w-[30rem] lg:h-[30rem]" />
        </div>
        <h2>
          <Skeleton className="w-[20rem] lg:w-[50rem] h-[5rem]" />
        </h2>
        <div>
          <Skeleton className="w-[20rem] lg:w-[50rem] h-[10rem]" />
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default DetailLoading;
