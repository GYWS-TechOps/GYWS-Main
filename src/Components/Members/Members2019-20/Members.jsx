import Advisory from "./Advisory/Advisory.jsx";
import { Routes, Route, Link } from "react-router-dom";
import GB from "./GB/GB.jsx";
import "../Members.css";
import { useState, useEffect, useRef } from "react";
import logo from "../hands.png";


function Members() {
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
                    <span>Session 2019-20</span>
                    <span style={{ fontSize: "10px", marginLeft: '20px' }}>
                      {isSessionOpen ? "▲" : "▼"}
                    </span>
                  </div>
                  {isSessionOpen && (
                  <ul className="dropdown-content">
                    <li>
                      <Link
                        to="/member/"
                        onClick={() => {
                          toggleSidebar();
                          scrollToTop();
                        }}
                      >
                        Session 2024-25
                      </Link>
                    </li>
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
                    {/* Add more items as needed */}
                  </ul>
                  )}
                </li>
                <Link
                  to="/member/members2019-20/"
                  onClick={() => {
                    toggleSidebar();
                    scrollToTop();
                  }}
                >
                  <li>Governing Body 2019-20</li>
                </Link>
                <Link
                  to="/member/members2019-20/Advisory"
                  onClick={() => {
                    toggleSidebar();
                    scrollToTop();
                  }}
                >
                  <li>Advisory Committee</li>
                </Link>

                {/* New li with dropdown */}
              </ul>
            </div>
          </div>
        </div>
        <div className="main_content">
          <Routes>
            <Route exact path="/" element={<GB key={4} />} />
            <Route exact path="/Advisory" element={<Advisory key={4} />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Members;
