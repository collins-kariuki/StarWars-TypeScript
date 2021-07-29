import React from "react";
import { useQuery } from "@apollo/client";
import { PEOPLE_QUERY } from "./Queries";
import Person from "./Person";

// import Person from "./Person";

const People: React.FC = () => {
  const { loading, error, data } = useQuery(PEOPLE_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);

  return (
    <section className="py-8">
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12 ">
        {data.allPeople.map(
          ({ name }: { name: string }, index: number): string =>
            (<Person name={name} index={index} />) as any
        )}
      </div>
    </section>
  );
};

export default People;
