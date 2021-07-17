import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Details from "./components/Details";
import Test from "./components/Test";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [posts,setPosts]=useState([])
useEffect(()=>{
  const url='https://jsonplaceholder.typicode.com/posts';//api url
  fetch(url).then(resp=>resp.json())//calling url by method GET
  .then(resp=>setPosts(resp))//setting response to state posts
},[])


  return (
    <div className="App">
      <>
        <Navbar />

        <Test/>
        {posts.map((post) => (
        <div>
          <p>{`${post.id}. ${post.title}`}</p>
        </div>
      ))}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </>
    </div>
  );
}

export default App;
