// import { useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import "../Members.css";
import { useState, useEffect, useRef } from "react";
import logo from "../hands.png";
import Advisory from "./Advisory/Advisory.jsx";
import GB from "./GB/GB.jsx";
import JVM from "./JVM/jvm.jsx";
import Light from "./JVM/light/light.jsx";
import Rise from "./JVM/rise/rise.jsx";

export default function MembersPageYear({ year }) {
  document.title = "Members | GYWS";
  let menuRef = useRef();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [isSessionOpen, setSessionOpen] = useState(false);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const [isCollapsed, setCollapsed] = useState(
    windowSize.innerWidth >= 1024 ? false : true
  );

  const toggleSidebar = () => {
    setCollapsed(!isCollapsed);
  };
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setCollapsed(true);
        setSessionOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const toggleSessionDropdown = () => {
    setSessionOpen(!isSessionOpen);
  };
  // const openSessionDropdown = () => {
  //   setSessionOpen(true);
  // };

  const closeSessionDropdown = () => {
    setSessionOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Members | GYWS";
  }, []);

  //code to create a dynamic year list
  const [dynamicYearsList, setDynamicYearsList] = useState([]);

  useEffect(() => {
    // Create a list of years starting from 2024-25 up to the passed year
    let years = [];
    for (let i = 2024; i <= year; i++) {
      years.push(i);
    }
    setDynamicYearsList(years);
  }, [year]);

  return (
    <>
      <div className="wrapper">
        <div ref={menuRef}>
          <div className="hamburger" onClick={toggleSidebar}>
            <img src={logo} alt="" width={"35px"} />
          </div>
          <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
            <div className="everything">
              <h2>Members</h2>
              <ul>
                <li
                  className="dropdown"
                  // onMouseEnter={openSessionDropdown}
                  onMouseLeave={closeSessionDropdown}
                >
                  <div className="jack" onClick={toggleSessionDropdown}>
                    <span>Session {`${year}-${year - 1999}`}</span>
                    <span style={{ fontSize: "10px", marginLeft: "20px" }}>
                      {isSessionOpen ? "▲" : "▼"}
                    </span>
                  </div>
                  {isSessionOpen && (
                    <ul className="dropdown-content">
                    {/* Dynamically generated links for years after 2023-24 */}
                    {dynamicYearsList
                      .sort((a, b) => b - a) // Sorting the years in descending order
                      .map((y, index) => (
                        <li key={index}>
                          <Link to={`/member/members${y}-${y - 1999}`}>
                            Session {y}-{y - 1999}
                          </Link>
                        </li>
                      ))}
                    <li>
                      <Link
                        to="/member/members2023-24"
                        onClick={() => {
                          toggleSidebar();
                          scrollToTop();
                        }}
                      >
                        Session 2023-24
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/member/members2022-23"
                        onClick={() => {
                          toggleSidebar();
                          scrollToTop();
                        }}
                      >
                        Session 2022-23
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/member/members2021-22"
                        onClick={() => {
                          toggleSidebar();
                          scrollToTop();
                        }}
                      >
                        Session 2021-22
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/member/members2020-21"
                        onClick={() => {
                          toggleSidebar();
                          scrollToTop();
                        }}
                      >
                        Session 2020-21
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/member/members2019-20"
                        onClick={() => {
                          toggleSidebar();
                          scrollToTop();
                        }}
                      >
                        Session 2019-20
                      </Link>
                    </li>
                  </ul>
                  
                  )}
                </li>

                <Link
                  to={`/member/members${year}-${year - 1999}`}
                  onClick={() => {
                    toggleSidebar();
                    scrollToTop();
                  }}
                >
                  <li>
                    Governing Body {year}-{year - 1999}
                  </li>
                </Link>
                <Link
                  to={`/member/members${year}-${year - 1999}/Advisory`}
                  onClick={() => {
                    toggleSidebar();
                    scrollToTop();
                  }}
                >
                  <li>Advisory Committee</li>
                </Link>

                {/* New li with dropdown */}
              </ul>

              <h2>Intiatives</h2>
              <ul>
                <Link
                  to={`/member/members${year}-${year - 1999}/jvm`}
                  onClick={() => {
                    toggleSidebar();
                    scrollToTop();
                  }}
                >
                  <li>
                    Jagriti Vidya Mandir <br />
                    Education Initiative
                  </li>
                </Link>
                <Link
                  to={`/member/members${year}-${year - 1999}/rise`}
                  onClick={() => {
                    toggleSidebar();
                    scrollToTop();
                  }}
                >
                  <li>
                    RISE <br />
                    Reform and Innovate School Education
                  </li>
                </Link>
                <Link
                  to={`/member/members${year}-${year - 1999}/light`}
                  onClick={() => {
                    toggleSidebar();
                    scrollToTop();
                  }}
                >
                  <li>
                    LiGHT <br />
                    Expansion Initiative
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="main_content">
          <Routes>
            <Route exact path="/" element={<GB year={year} key={1} />} />
            <Route
              exact
              path={`/*`}
              element={<GB year={year} key={1} />}
            />
            <Route
              exact
              path={`/Advisory`}
              element={<Advisory key={4} />}
            />
            <Route
              exact
              path={`/jvm`}
              element={<JVM year={year} key={5} />}
            />
            <Route
              exact
              path={`/rise`}
              element={<Rise year={year} key={6} />}
            />
            <Route
              exact
              path={`/light`}
              element={<Light year={year} key={7} />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}
