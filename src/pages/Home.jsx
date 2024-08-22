import React, { useState, useEffect } from "react";
import { Loader, Card, FormFilled } from "../components";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

return (<h2>{title}</h2>) };
function Home() {
  const [load, setLoad] = useState(false);
  const [allPost, setAllPost] = useState(null);
  const [searchText, setSearchText] = useState("abcd");
  return (
    <section className=" max-w-7xl mx-auto">
      <div>
        <h1 className=" text-5xl font-serif">welcome to the AI</h1>
        <p>LETS EXPLORE AI GENERATED IMAGES</p>
      </div>

      <div className="mt-16">
        <FormFilled />
      </div>
      <div className="mt-10">
        {load ? (
          <div className="flex justify-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className=" text-red-600 mb-3">
                showing results{" "}
                <span className="text-red-600"> {searchText} </span>
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap 3"></div>
            {searchText ? (
              <RenderCards data={[]} title="no search result found" />
            ) : (
              <RenderCards data={[]} title="no post found" />
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default Home;
