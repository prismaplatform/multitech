// components/HeaderOne.tsx
"use client";
import Link from "next/link";
import React, { useState } from "react";
import OffCanvas from "@/common/OffCanvas";
import menu_data from "@/data/menu-data"; // Ensure this path is correct
import useSticky from "@/hooks/use-sticky";
import { useRouter, usePathname } from "@/i18n/navigation";
import { locales } from "@/i18n/routing";
import CartDropdown from "@/components/CartDropdown/CartDropdown";
import { ShoppingCart } from "lucide-react";
import { useNotification } from "@/context/NotificationContext"; // Assuming useNotification is needed for cart drawer

const HeaderOne = ({ style_2, style_3, toggle_color }: any) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { sticky } = useSticky();
  const router = useRouter();
  const pathname = usePathname();
  const { showCartDrawer } = useNotification();

  const changeLocale = (locale: string) => {
    router.push(pathname, { locale });
  };

  const handleCartClick = () => {
    showCartDrawer(); // Modern drawer megnyitása
  };

  return (
    <>
      <header
        className={`${sticky ? "sticky-menu" : ""} site-header ${
          style_2
            ? "bg-heading lonyo-header-section"
            : style_3
            ? "lonyo-header-section3"
            : "lonyo-header-section light-bg"
        }`}
        id="sticky-menu"
      >
        <div className="container">
          <div className="row gx-3 align-items-center justify-content-between">
            <div className="col-8 col-sm-auto">
              <div className="header-logo1">
                <Link href="/">
                  {style_2 ? (
                    <img src="/assets/images/logo/logo-white.svg" alt="logo" />
                  ) : (
                    <img src="/assets/images/logo/logo-dark.svg" alt="logo" />
                  )}
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="lonyo-main-menu-item">
                <nav className="main-menu menu-style1 d-none d-lg-block menu-left">
                  <ul>
                    {menu_data.map((item, i) => (
                      <li
                        key={i}
                        className={`${item.has_dropdown ? "menu-item-has-children" : ""}`}
                      >
                        <Link href={item.link} className={`${style_2 ? "light-color" : ""}`}>
                          {item.title}
                        </Link>
                        {item.has_dropdown && item.sub_menus && (
                          <ul className="sub-menu">
                            {item.sub_menus.map((sub_item, index) => (
                              <li
                                key={index}
                                className={`${
                                  sub_item.inner_submenu ? "menu-item-has-children" : ""
                                }`}
                              >
                                <Link
                                  href={sub_item.link}
                                  className={`${sub_item.inner_submenu ? "no-border" : ""}`}
                                >
                                  {sub_item.title}
                                </Link>
                                {sub_item.inner_submenu && sub_item.sub_menu && (
                                  <ul className="sub-menu">
                                    {sub_item.sub_menu.map((inner_item, inner_index) => (
                                      <li
                                        key={inner_index}
                                        className={`${
                                          // Added for potential fourth level if needed, or just for styling
                                          (inner_item as any).inner_submenu
                                            ? "menu-item-has-children"
                                            : ""
                                        }`}
                                      >
                                        <Link
                                          href={inner_item.link}
                                          className={`${
                                            (inner_item as any).inner_submenu ? "no-border" : ""
                                          }`}
                                        >
                                          {inner_item.title}
                                        </Link>
                                        {/* Potentially add another level if (inner_item as any).inner_submenu is true */}
                                        {(inner_item as any).inner_submenu &&
                                          (inner_item as any).sub_menu && (
                                            <ul className="sub-menu">
                                              {(inner_item as any).sub_menu.map(
                                                (deep_item: any, deep_index: any) => (
                                                  <li key={deep_index}>
                                                    <Link href={deep_item.link}>
                                                      {deep_item.title}
                                                    </Link>
                                                  </li>
                                                )
                                              )}
                                            </ul>
                                          )}
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
                </nav>
              </div>
            </div>
            <div className="col-auto d-flex align-items-center">
              <div className="lonyo-header-info-wraper2">
                <div className={`lonyo-header-info-content ${style_2 ? "content2" : ""}`}>
                  <ul>
                    <li>
                      <Link href="/sign-in">Log in</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Locale Switcher */}
              <div className="locale-switcher d-flex ms-3">
                {locales.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => changeLocale(loc)}
                    className="text-sm px-2 py-1 me-2"
                    style={{
                      background: "transparent",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontWeight: "bold",
                      cursor: "pointer", // Add cursor pointer for better UX
                    }}
                  >
                    {loc.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Cart Toggle Button */}
              <div className="header-action-item">
                <button
                  onClick={handleCartClick}
                  className="modern-cart-btn"
                  aria-label="Kosár megnyitása"
                >
                  <div className="cart-icon-wrapper">
                    <ShoppingCart size={20} />
                  </div>
                </button>
              </div>

              <div className="lonyo-header-menu">
                <nav className="navbar site-navbar justify-content-between">
                  <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className={`lonyo-menu-toggle d-inline-block d-lg-none ${
                      toggle_color ? "white-color" : ""
                    }`}
                  >
                    <span></span>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

     

      <OffCanvas setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
    </>
  );
};

export default HeaderOne;