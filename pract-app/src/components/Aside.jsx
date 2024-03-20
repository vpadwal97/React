import { NavLink, Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Routes from "./Routes";

const Aside = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [openedSection, setOpenedSection] = useState(null);
  const [openedSubSection, setOpenedSubSection] = useState(null);
  const [activeLink, setActiveLink] = useState(null);

  const handleSectionToggle = (sectionName, subSectionName) => {
    if (openedSection === sectionName && openedSubSection === subSectionName) {
      setOpenedSection(null);
      setOpenedSubSection(null);
    } else {
      setOpenedSection(sectionName);
      setOpenedSubSection(subSectionName);
    }

    AsideCheck()
  };
  const toggle = () => {
    setIsOpen(!isOpen);
    setActiveLink(null);
  };


  const AsideCheck = () => {
    if (location.pathname.includes("manageUser")) {
      console.log("Yehh , I Am User and Security !!");
    } else if (location.pathname.includes("category")) {
      console.log("yehh , I Am Catalogue");
    }
  }



  return (
    <>
      <aside
        id="sidebar"
        className={isOpen ? "sidebar active" : "sidebar"}
        style={{
          width: isOpen ? "200px" : "80px",
          zIndex: 996,
          cursor: "pointer"
        }}
      >
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="d-flex menu-btn-con align-items-center">
            <i className="fs-5 fa fa-bars menu-btn text-white bg-none py-3 px-1" style={{ cursor: "pointer" }}>
              <FaBars onClick={toggle} />
            </i>
          </li>
          {Routes.map((s, i) => (
            <li key={i} className="nav-item" >
              <button
                className={`w-100 nav-link sidebar-nav-link cursor-pointer main-menu ${openedSection === s.name ? '  active' : 'collapsed'}`}
                onClick={() => handleSectionToggle(s.name, null)}>
                <img alt="" className="menu-icon" src={s.icon} width={21} onClick={toggle} />
                <span className="menu-content text-center">{s.name}</span>
                {openedSection === s.name && <i className="bi bi-chevron-down ms-auto" />}
              </button>
              {isOpen &&
                openedSection === s.name &&
                s.subModule.map((m, index) => (
                  <ul key={index} id="components-nav" className="nav-content">
                    <li className="border-before d-flex flex-nowrap position-relative ms-2">
                      <div className="border-mid"> </div>
                      <div className="w-100">
                        <button
                          className={`w-100 nav-link cursor-pointer collapsed${openedSubSection === m.subModuleName ? ' active' : ''}`}
                          onClick={() => handleSectionToggle(s.name, m.subModuleName)}>
                          {m.subModuleName}
                        </button>
                        {openedSubSection === m.subModuleName && (
                          <div>
                            {m.subSubModule.map((j, idx) => (
                              <ul key={idx} className="ps-0">
                                <li className="border-before d-flex flex-nowrap position-relative ms-2">
                                  <div className="border-mid"> </div>
                                  <NavLink
                                    to={j.path}
                                    className={`nav-link${location.pathname === j.path ? 'active sidevarActive' : ''}`}
                                  >
                                    {j.name}
                                  </NavLink>
                                </li>
                              </ul>
                            ))}
                          </div>
                        )}
                      </div>
                    </li>
                  </ul>
                ))}
            </li>
          ))}
        </ul>
      </aside>
      <main className={isOpen ? 'main active' : 'main'}>
        <Outlet style={{ marginTop: "20px" }} />
      </main>
    </>
  );
};

export default Aside;