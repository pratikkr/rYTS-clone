import React, { Component } from "react";
import { Link } from "react-router-dom";

class header extends Component {
  render() {
    return (
      <div>
        <header className="nav-bar">
          <div className="nv-logo">
            <a>
              <img
                src="https://yts.unblockit.app/assets/images/website/logo-YTS.svg"
                alt="YTS.MX"
              />
            </a>
          </div>
          <div className="search">
            <form>
              <input
                autoComplete="off"
                type="search"
                name="querry"
                className="search-bar"
                placeholder="Quick Search"
                onChange={this.handleChange}
              />
            </form>
          </div>
          <div className="nav-links">
            <p className="nav-linkss">
              <span className="l1">
                <a href="/">Home</a>
              </span>

              <span className="qwality">4K</span>
              <span className="l1">Trending</span>
              <span className="l1">Browse Movies</span>
              <span className="l1" id="login">
                Login &emsp;{" "}
              </span>
              <span className="l1">Register</span>
            </p>
          </div>
        </header>
      </div>
    );
  }
}

export default header;
