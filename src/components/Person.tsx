import React from "react";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  index: number;
}
const Person: React.FC<Props> = (Props) => {
  const imageURL: string = `/characters/${Props.index + 1}.jpg`;
  return (
    <div
      className={`w-full w-1 md:w-1/3 xl:w-1/5 p-5 flex flex-col items-center`}
    >
      <div>
        <img
          className="hover:grow hover:shadow-lg w-48 rounded-xl  xl:w-48 w-60"
          src={imageURL}
        />

        <div className="pt-3 flex items-center justify-between">
          <p className="">{Props.name}</p>
        </div>
        <p className="pt-1 text-gray-200">
          <button className="bg-yellow-400 hover:bg-yellow-700 text-gray-700  hover:text-gray-200 font-bold py-1 px-2 rounded-full">
            <Link to={`/person/${Props.name}/${Props.index + 1}`}>Details</Link>
          </button>
        </p>
      </div>
    </div>
  );
};

export default Person;
