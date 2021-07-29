import React from "react";
import backGround from "./stars.jpg";
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import People from "./components/People";
import Details from "./components/Details";
import Header from "./components/Header";
import Pagination from "./components/Pagination";

const client = new ApolloClient({
  uri: "https://3sdv5.sse.codesandbox.io/",
  cache: new InMemoryCache(),
});

export const App: React.FC = () => {
  return (
    <div
      className="text-gray-100 work-sans leading-normal text-base tracking-normal bg-cover "
      style={{ backgroundImage: `url(${backGround})` }}
    >
      <ApolloProvider client={client}>
        <Router>
          <div>
            <section>
              <Header />
            </section>
            <Route exact path="/" component={People} />
            <Route exact path="/person/:name/:index" component={Details} />
            <Pagination />
          </div>
        </Router>
      </ApolloProvider>
    </div>
  );
};

export default App;
