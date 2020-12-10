import React, { Component, useState, useEffect } from "react";
import Moviecard from "./Moviecard";
import { data } from "../data";
import { Link } from "react-router-dom";

class home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };
  render() {
    return (
      <div className="home">
        <body>
          <div className="infoYts">
            <h1>Download YTS YIFY movies: HD Smallest size</h1>
            <p>
              Welcome to the official YTS.MX (.LT) website. Here you can browse
              and download YIFY movies in excellent 720p, 1080p, 2160p 4K and 3D
              quality, all at the smallest file size. YTS Movies Torrents.
            </p>
            <span className="important">
              IMPORTANT - YTS.MX is the only new official domain for YIFY Movies
            </span>
            <h3>Popular Downloads</h3>
            <hr />
          </div>
          <div className="movielist">
            {data.map((movie, index) => (
              <Link to={`/${index}`}>
                <Moviecard movie={movie} key={`movies-${index}`} />
              </Link>
            ))}
          </div>
        </body>
      </div>
    );
  }
}

export default home;
