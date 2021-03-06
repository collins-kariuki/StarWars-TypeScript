import React from "react";
import { useQuery, ApolloError } from "@apollo/client";
import { PEOPLE_QUERY, PERSON_QUERY, PAGE_QUERY } from "./Queries";
import Person from "./Person";
import Pagination from "./Pagination";

interface Props {
  data: CallableFunction;
  currentPage: number;
}

const People: React.FC<Props> = (Props) => {
  const {
    loading,
    error,
    data,
  }: {
    loading: boolean | undefined;
    error: ApolloError | undefined;
    data: any;
  } = Props.data();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  let people: Array<{ name: string }>;

  data.allPeople
    ? (people = data.allPeople)
    : data.person
    ? (people = data.person)
    : (people = data.people);

  return (
    <section className="py-8">
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12 ">
        {people.map(
          ({ name }: { name: string }, index: number): string =>
            (<Person name={name} index={index} />) as any
        )}
      </div>
      <Pagination currentPage={Props.currentPage} />
    </section>
  );
};

export default People;
