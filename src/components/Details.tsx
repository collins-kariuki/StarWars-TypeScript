import React from "react";
import { PERSON_QUERY } from "./Queries";
import { useQuery } from "@apollo/client";
import { useParams, useHistory } from "react-router-dom";

const Details: React.FC = () => {
  const { name, index }: { name: string; index: string } = useParams();
  const { loading, error, data } = useQuery(PERSON_QUERY, {
    variables: { name },
  });

  let history = useHistory();
  const goToPrevPath = () => history.goBack();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const imageURL: string = `/characters/${index}.jpg`;
  const person = data.person[0];
  const iconStyle: string = "h-4 fill-current text-yellow-300 pr-4";
  return (
    <div className=" max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
      {/*-Main Col */}
      <div
        id="profile"
        className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl opacity-75 mx-6 lg:mx-0 bg-gray-900"
      >
        <div className="p-4 md:p-12 text-center lg:text-left">
          {/* <!-- Image for mobile view--> */}
          <div
            className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center "
            style={{ backgroundImage: `url(${imageURL})` }}
          ></div>

          <h1 className="text-3xl font-bold pt-8 lg:pt-0">{person.name}</h1>
          <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
          <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
            <svg
              className={iconStyle}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
            Height: {person.height}
          </p>
          <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
            <svg
              className={iconStyle}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
            Mass: {person.mass}
          </p>
          <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
            <svg
              className={iconStyle}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
            Gender: {person.gender}
          </p>
          <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
            <svg
              className={iconStyle}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
            Home World
          </p>

          {/*Back button */}

          <div className="pt-12 pb-8">
            <button
              className="bg-yellow-400 hover:bg-yellow-700 text-gray-700  hover:text-gray-200 font-bold py-2 px-4 rounded-full"
              onClick={goToPrevPath}
            >
              Back
            </button>
          </div>
        </div>
      </div>

      {/*Img Col*/}
      <div className="w-full lg:w-2/5">
        {/*Big profile image for side bar (desktop) */}
        <img
          src={imageURL}
          className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
        />
      </div>

      {/*Pin to top right corner*/}
      <div className="absolute top-0 right-0 h-12 w-18 p-4">
        <button className="js-change-theme focus:outline-none">🌙</button>
      </div>
    </div>
  );
};

<svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-6 w-6"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M9 5l7 7-7 7"
  />
</svg>;

export default Details;
