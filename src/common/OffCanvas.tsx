"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import menu_data from "@/data/menu-data";

const OffCanvas = ({ setMenuOpen, menuOpen }: any) => {
  const [navTitle, setNavTitle] = useState("");
  const [navTitle2, setNavTitle2] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);
  
  // Body scroll blokkolása/feloldása
  useEffect(() => {
    if (menuOpen) {
      // Menü nyitásakor body scroll blokkolása
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
    } else {
      // Menü bezárásakor body scroll visszaállítása
      document.body.style.overflow = '';
      document.body.style.height = '';
    }

    // Cleanup function - komponens unmount-kor visszaállítja a scroll-t
    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, [menuOpen]);

  // Kívülre kattintás kezelése
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    // Csak akkor add hozzá az event listener-t, ha a menü nyitva van
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen, setMenuOpen]);
  
  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };
  
  //openMobileMenu
  const openMobileMenu2 = (menu: string) => {
    if (navTitle2 === menu) {
      setNavTitle2("");
    } else {
      setNavTitle2(menu);
    }
  };

  // Funkció a mobilos menü kattintás kezelésére
  const handleMobileMenuClick = (e: React.MouseEvent, item: any) => {
    if (item.has_dropdown) {
      // Ha van alkategória, megakadályozzuk a navigációt és csak kinyitjuk a menüt
      e.preventDefault();
      openMobileMenu(item.title);
    } else {
      // Ha nincs alkategória és navigálunk, akkor zárjuk be a menüt
      setMenuOpen(false);
    }
  };

  // Funkció az alkategóriák kattintás kezelésére
  const handleSubMenuClick = (e: React.MouseEvent, subItem: any) => {
    if (subItem.inner_submenu) {
      // Ha van további almenu, megakadályozzuk a navigációt
      e.preventDefault();
      openMobileMenu2(subItem.title);
    } else {
      // Ha nincs további almenu és navigálunk, akkor zárjuk be a menüt
      setMenuOpen(false);
    }
  };

  // Inner submenu linkekre kattintáskor is zárjuk be a menüt
  const handleInnerLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className={`lonyo-menu-wrapper ${menuOpen ? "lonyo-body-visible" : ""}`}>
        <div 
          ref={menuRef}
          className="lonyo-menu-area text-center"
        >
          <div className="lonyo-menu-mobile-top">
            <div className="mobile-logo">
              <Link href="/" onClick={handleInnerLinkClick}>
                <img src="/assets/images/logo/logo-dark.svg" alt="logo" />
              </Link>
            </div>
            <button className="lonyo-menu-toggle mobile" onClick={() => setMenuOpen(false)}>
              <i className="ri-close-line"></i>
            </button>
          </div>
          <div className="lonyo-mobile-menu">
            <ul>
              {menu_data.map((item, i) => (
                <li
                  key={i}
                  className={`${
                    item.has_dropdown ? "menu-item-has-children lonyo-item-has-children" : ""
                  } ${navTitle === item.title ? "lonyo-active" : ""}`}
                >
                  <Link 
                    href={item.link} 
                    onClick={(e) => handleMobileMenuClick(e, item)}
                  >
                    {item.title}
                    {item.has_dropdown && <span className="lonyo-mean-expand"></span>}
                  </Link>
                  {item.has_dropdown && (
                    <ul
                      className="sub-menu"
                      style={{ display: navTitle === item.title ? "block" : "none" }}
                    >
                      {item.sub_menus?.map((sub_item, index) => (
                        <li
                          key={index}
                          className={`menu-item-has-children lonyo-item-has-children ${
                            navTitle2 === sub_item.title ? "lonyo-active" : ""
                          }`}
                        >
                          <Link
                            href={sub_item.link}
                            onClick={(e) => handleSubMenuClick(e, sub_item)}
                          >
                            {sub_item.title}
                            {sub_item.inner_submenu && <span className="lonyo-mean-expand"></span>}
                          </Link>
                          {sub_item.inner_submenu && (
                            <ul
                              className="sub-menu lonyo-submenu"
                              style={{ display: navTitle2 === sub_item.title ? "block" : "none" }}
                            >
                              {sub_item.sub_menu?.map((inner_sub_item, inner_index) => (
                                <li key={inner_index}>
                                  <Link 
                                    href={inner_sub_item.link}
                                    onClick={handleInnerLinkClick}
                                  >
                                    {inner_sub_item.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="lonyo-mobile-menu-btn">
            <Link className="lonyo-default-btn sm-size w-100 text-center" href="/contact" data-text="Get in Touch">
              <span className="btn-wraper text-center d-flex m-auto">Contact</span>
            </Link>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default OffCanvas;