import React, { Component } from "react";
import { data } from "../data";

class Moviedetails extends React.Component {
  render(props) {
    const sl = this.props.match.params.No;
    const a = data[sl];
    if (a === undefined) {
      return (
        <div>
          <h1>
            <a href="/">Click on Home to continue</a>
          </h1>
        </div>
      );
    } else {
      return (
        <div>
          <body>
            <div className="main-box">
              <div className="top-shelf">
                <div>
                  <img src={a.Poster} alt="Movie Poster" className="display" />
                  <br />
                  <button
                    className="download"
                    onClick={() => console.log(a.Title)}
                  >
                    Download
                  </button>
                </div>
                <div>
                  <h1>{a.Title}</h1>
                  <p>{a.Year}</p>

                  <p>{a.Genre}</p>
                  <br />
                  <br />
                  <p>
                    Available in: <button>720p web</button>
                    <button>1080p web</button>
                  </p>
                  <button>Download Subtitles</button>
                </div>
                <div className="related">
                  <h3>Similar Movies</h3>
                  <div>
                    <div className="l1">
                      <img
                        className="r1"
                        src="https://tse2.mm.bing.net/th?id=OIP.0G03jPUGr1tLvgTSapgQ1wHaK-&pid=Api&P=0&w=300&h=300"
                        alt="r1"
                      />
                      <img
                        className="r1"
                        src="https://tse1.mm.bing.net/th?id=OIP.8r5Bs71UrHBJ7wunnGYgowHaK-&pid=Api&P=0&w=300&h=300"
                        alt="r2"
                      />
                    </div>
                    <div className="l1">
                      <img
                        className="r1"
                        src="https://tse1.mm.bing.net/th?id=OIP.PsrAEX68UaRgzh7oyMb3ugHaK9&pid=Api&P=0&w=300&h=300"
                        alt="r3"
                      />
                      <img
                        className="r1"
                        src="https://tse4.mm.bing.net/th?id=OIP.i8SLXIzSSaGlwHdmngSjFwHaK-&pid=Api&P=0&w=300&h=300"
                        alt="r4"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="second-shelf">
                <div className="img-container">
                  <img
                    src="https://tse3.mm.bing.net/th?id=OIP.T3XYYD8K_7Ee58E4p0dJXgHaEK&pid=Api&P=0&w=326&h=184"
                    alt="img1"
                    className="l2-img"
                  />
                  <img
                    src="https://images.pushsquare.com/54fdc9c8a3099/marvels-avengers-ps4-playstation-4.900x.jpg"
                    alt="img1"
                    className="l2-img"
                  />
                  <img
                    src="https://tse4.mm.bing.net/th?id=OIP._rWiFg8PliBXLfklEolqTgHaEK&pid=Api&P=0&w=308&h=174"
                    alt="img1"
                    className="l2-img"
                  />
                </div>
              </div>
              <div className="third-shelf">
                <div className="synopsis">
                  <h1>Synopsis</h1>
                  <p>
                    In a twilight world of international espionage, an unnamed
                    CIA operative, known as The Protagonist, is recruited by a
                    mysterious organization called Tenet to participate in a
                    global assignment that unfolds beyond real time. The
                    mission: prevent Andrei Sator, a renegade Russian oligarch
                    with precognition abilities, from starting World War III.
                    The Protagonist will soon master the art of "time inversion"
                    as a way of countering the threat that is to come.
                  </p>
                  Parental Guide
                  <p>Uploaded By: FREEMAN</p>
                  <p>December 06, 2020 at 05:30 AM</p>
                </div>
                <div className="cast">
                  <div className="director">
                    <h3>Director</h3>
                    <p>{a.Director}</p>
                    <hr />
                  </div>
                  <div className="cast">
                    <h3>Cast</h3>
                    <p>{a.Actors}</p>
                  </div>
                </div>
              </div>
              <div className="technical">
                <div className="tek">
                  <h1 className="tec">Tech Specs</h1>
                  <div className="kw">
                    <span>720pBLU&emsp;</span>
                    <span>1080pBLU</span>
                  </div>
                </div>
                <div className="spec">
                  <div className="s1">
                    <p>1.9GB</p>
                    <br />
                    <hr /> <br />
                    <p>Subtitles</p>
                  </div>
                  <div className="s1">
                    <p>1280*714</p>
                    <br />
                    <hr /> <br />
                    <p>23.976fps</p>
                  </div>
                  <div className="s1">
                    <p>English2.0</p>
                    <br />
                    <hr /> <br />
                    <p>2hr 30 min</p>
                  </div>
                  <div className="s1">
                    <p>Pg-13</p>
                    <br />
                    <hr /> <br />
                    <p>P/S 2248/4870</p>
                  </div>
                </div>
              </div>
              <div className="fourth-shelf">
                <div className="comment">
                  <h1>Comments</h1>
                  <input
                    type="text"
                    className="first-comment"
                    placeholder="BE The FIRST TO COMMENT"
                  />
                  <br />
                  <br />
                  <div className="c2">Login to Leave a Comment</div>
                </div>
                <div className="movie-reviews">
                  <h1>Movie-Reviews</h1>
                </div>
              </div>
            </div>
            <footer>This app has no more Contents</footer>
          </body>
        </div>
      );
    }
  }
}

export default Moviedetails;
