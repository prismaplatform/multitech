// components/HeaderOne.tsx
"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import OffCanvas from "@/common/OffCanvas";
import menu_data from "@/data/menu-data";
import useSticky from "@/hooks/use-sticky";
import { useRouter, usePathname } from "@/i18n/navigation";
import { locales } from "@/i18n/routing";
import CartDropdown from "@/components/CartDropdown/CartDropdown";
import {
  ShoppingCart,
  ChevronDown,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  Linkedin,
  YoutubeIcon,
  PhoneCall,
} from "lucide-react";
import { useNotification } from "@/context/NotificationContext";
import Image from "next/image";
import { useLocale } from "next-intl";

const HeaderOne = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const { sticky } = useSticky();
  const router = useRouter();
  const pathname = usePathname(); // Ezt fogjuk összehasonlítani a menülinkekkel
  const { showCartDrawer } = useNotification();
  const languageDropdownRef = useRef<HTMLDivElement>(null);
  const currentLocale = useLocale();

  // Sticky scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Kezdeti állapot beállítása

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Nyelv konfigurációk
  const languageConfig = {
    en: { flag: "/assets/images/flags/en.png", name: "English" },
    ro: { flag: "/assets/images/flags/ro.webp", name: "Română" },
    hu: { flag: "/assets/images/flags/hu.webp", name: "Magyar" },
  };

  // Kívülre kattintás kezelése a nyelv dropdownhoz
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target as Node)
      ) {
        setLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const changeLocale = (locale: string) => {
    router.push(pathname, { locale });
    setLanguageDropdownOpen(false);
  };

  const handleCartClick = () => {
    showCartDrawer();
  };

  // Segédfüggvény az almenük rekurzív ellenőrzéséhez
  // Ez a függvény megnézi, hogy az aktuális útvonal (currentPath) pontosan megegyezik-e
  // bármelyik almenü (vagy annak al-almenüje stb.) linkjével.
  const checkSubMenusForExactMatch = (subMenus: any[] | undefined, currentPath: string): boolean => {
    if (!subMenus) return false;
    for (const subItem of subMenus) {
      if (subItem.link === currentPath) {
        return true;
      }
      if (subItem.inner_submenu && subItem.sub_menu) {
        if (checkSubMenusForExactMatch(subItem.sub_menu, currentPath)) {
          return true;
        }
      }
    }
    return false;
  };

  // Aktív főmenüpont ellenőrzése
  // Ez a függvény dönti el, hogy egy felső szintű menüelem aktívnak minősül-e.
  const isMainMenuActive = (item: any) => {
    // 1. Ha az aktuális útvonal pontosan megegyezik a főmenü elem linkjével
    if (pathname === item.link) {
      return true;
    }

    // 2. Ha a főmenü elem linkje az aktuális útvonal "előtagja"
    // Például: item.link = "/shop", pathname = "/shop/videojet/1280" -> aktív
    // KIVÉVE a gyökér útvonalat ("/"), mert az mindenhol aktívvá tenné a "Home" linket.
    if (item.link !== "/" && pathname.startsWith(item.link)) {
        return true;
    }

    // 3. Ha a főmenünek van almenüje, és valamelyik almenü (bármely mélységben)
    // pontosan megegyezik az aktuális útvonallal.
    if (item.has_dropdown && item.sub_menus) {
      return checkSubMenusForExactMatch(item.sub_menus, pathname);
    }

    return false;
  };

  return (
    <>
      <div className="top-bar-blue">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-sm-3 d-none d-sm-block">
              <div className="social-icons-wrapper">
                <ul>
                  <li>
                    <a href="https://www.facebook.com" aria-label="Facebook">
                      <FacebookIcon size={16} className="text-white" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com" aria-label="Twitter">
                      <TwitterIcon size={16} className="text-white" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com" aria-label="Instagram">
                      <InstagramIcon size={16} className="text-white" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com" aria-label="LinkedIn">
                      <Linkedin size={16} className="text-white" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com" aria-label="YouTube">
                      <YoutubeIcon size={16} className="text-white" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7 col-sm-9  text-end">
              <div className="contact-info">
                <PhoneCall size={16} className="me-2" />
                <Link href="tel:0772268584"><span className="text-white">Vânzări & Service: 0-7722-MULTI (0-7722-68584)</span></Link>
                <div className="language-dropdown" ref={languageDropdownRef}>
                  <button
                    onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                    className={`language-dropdown-trigger `}
                    aria-label="Nyelvválasztó menü"
                  >
                    <span className="current-language">
                      <Image
                        src={
                          languageConfig[
                            currentLocale as keyof typeof languageConfig
                          ]?.flag
                        }
                        alt={`${
                          languageConfig[
                            currentLocale as keyof typeof languageConfig
                          ]?.name
                        } flag`}
                        className="flag-image"
                        width={15}
                        height={15}
                      />
                      <span className="language-name d-sm-inline">
                        {
                          languageConfig[
                            currentLocale as keyof typeof languageConfig
                          ]?.name
                        }
                      </span>
                    </span>
                    <ChevronDown
                      size={16}
                      className={`chevron ${
                        languageDropdownOpen ? "rotated" : ""
                      }`}
                    />
                  </button>

                  {languageDropdownOpen && (
                    <div className="language-dropdown-menu">
                      {locales.map((locale) => (
                        <button
                          key={locale}
                          onClick={() => changeLocale(locale)}
                          className={`language-option ${
                            currentLocale === locale ? "active" : ""
                          }`}
                          disabled={currentLocale === locale}
                        >
                          <Image
                            src={
                              languageConfig[
                                locale as keyof typeof languageConfig
                              ]?.flag
                            }
                            alt={`${
                              languageConfig[
                                locale as keyof typeof languageConfig
                              ]?.name
                            } flag`}
                            className="flag-image"
                            width={15}
                            height={15}
                          />
                          <span className="">
                            {
                              languageConfig[
                                locale as keyof typeof languageConfig
                              ]?.name
                            }
                          </span>
                          {currentLocale === locale && (
                            <span className="checkmark">✓</span>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header
        className={`sticky-menu site-header multitech-header-section ${
          isSticky ? "header-sticky" : ""
        }`}
        id="sticky-menu"
      >
        <div className="container">
          <div className="row gx-3 align-items-center justify-content-between">
            <div className="col-6 col-sm-auto">
              <div className="header-logo1">
                <Link href="/">
                  <img src="/assets/images/logo/logo-dark.svg" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="multitech-main-menu-item">
                <nav className="main-menu menu-style1 d-none d-lg-block">
                  <ul className="d-flex justify-content-center">
                    {menu_data.map((item, i) => (
                      <li
                        key={i}
                        // Csak a főmenü `li` elemre alkalmazzuk az 'active' class-t
                        className={`${
                          item.has_dropdown ? "menu-item-has-children" : ""
                        } ${isMainMenuActive(item) ? "active" : ""}`}
                      >
                        {/* A Link komponensre NEM kerül 'active' class itt! */}
                        <Link href={item.link}>
                          {item.title}
                        </Link>
                        {item.has_dropdown && item.sub_menus && (
                          <ul className="sub-menu shadow-lg rounded-md">
                            {item.sub_menus.map((sub_item, index) => (
                              <li
                                key={index}
                                // Az almenü `li` elemek NEM kapnak 'active' class-t
                                className={`${
                                  sub_item.inner_submenu
                                    ? "menu-item-has-children"
                                    : ""
                                }`}
                              >
                                {/* Az almenü Link komponensre NEM kerül 'active' class */}
                                <Link
                                  href={sub_item.link}
                                  className={`${
                                    sub_item.inner_submenu ? "no-border" : ""
                                  }`}
                                >
                                  {sub_item.title}
                                </Link>

                                {sub_item.inner_submenu &&
                                  sub_item.sub_menu && (
                                    <ul className="sub-menu ml-4 bg-white shadow-md rounded-md">
                                      {sub_item.sub_menu.map(
                                        (inner_item, inner_index) => (
                                          <li
                                            key={inner_index}
                                            // Az al-almenü `li` elemek SEM kapnak 'active' class-t
                                            className={`${
                                              (inner_item as any)
                                                .inner_submenu
                                                ? "menu-item-has-children"
                                                : ""
                                            }`}
                                          >
                                            {/* Az al-almenü Link komponensre SEM kerül 'active' class */}
                                            <Link
                                              href={inner_item.link}
                                              className={`${
                                                (inner_item as any)
                                                  .inner_submenu
                                                  ? "no-border"
                                                  : ""
                                              }`}
                                            >
                                              {inner_item.title}
                                            </Link>

                                            {(inner_item as any)
                                              .inner_submenu &&
                                              (inner_item as any).sub_menu && (
                                                <ul className="sub-menu ml-4 bg-white shadow-md rounded-md">
                                                  {(
                                                    inner_item as any
                                                  ).sub_menu.map(
                                                    (
                                                      deep_item: any,
                                                      deep_index: any
                                                    ) => (
                                                      <li key={deep_index}>
                                                        <Link
                                                          href={deep_item.link}
                                                        >
                                                          {deep_item.title}
                                                        </Link>
                                                      </li>
                                                    )
                                                  )}
                                                </ul>
                                              )}
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
                </nav>
              </div>
            </div>
            <div className="col-auto d-flex align-items-center">
              <div className="multitech-header-info-wraper2">
                <div className={`multitech-header-info-content content2}`}>
                  <ul>
                    <li>
                      <Link href="/sign-in">Demo</Link>
                    </li>
                  </ul>
                </div>
                <button
                  className={`multitech-default-btn multitech-header-btn `}
                  onClick={handleCartClick}
                >
                  {" "}
                  <ShoppingCart size={20} className="me-2" /> Cere ofertă
                </button>
              </div>

              {/* Mobilmenü gomb */}
              <div className="multitech-header-menu">
                <nav className="navbar site-navbar justify-content-between">
                  <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="multitech-menu-toggle d-inline-block d-lg-none"
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