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
import { ShoppingCart, ChevronDown } from "lucide-react";
import { useNotification } from "@/context/NotificationContext";
import Image from "next/image";
import { useLocale } from 'next-intl';
const HeaderOne = ({ style_2, style_3, toggle_color }: any) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const { sticky } = useSticky();
  const router = useRouter();
  const pathname = usePathname();
  const { showCartDrawer } = useNotification();
  const languageDropdownRef = useRef<HTMLDivElement>(null);
  const currentLocale = useLocale();

  // Aktuális nyelv meghatározása


  // Nyelv konfigurációk zászlókkal és nevekkel
const languageConfig = {
  en: { flag: '/assets/images/flags/en.png', name: 'En' },
  ro: { flag: '/assets/images/flags/ro.webp', name: 'Ro' },
  hu: { flag: '/assets/images/flags/hu.webp', name: 'Hu' }
};

  // Kívülre kattintás kezelése a nyelv dropdownhoz
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const changeLocale = (locale: string) => {
    router.push(pathname, { locale });
    setLanguageDropdownOpen(false);
  };

  const handleCartClick = () => {
    showCartDrawer();
  };

  // Aktív menüpont ellenőrzése
  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <>
      <header
        className={`${sticky ? "sticky-menu" : ""} site-header ${
          style_2
            ? "bg-heading multitech-header-section"
            : style_3
            ? "multitech-header-section3"
            : "multitech-header-section light-bg"
        }`}
        id="sticky-menu"
      >
        <div className="container">
          <div className="row gx-3 align-items-center justify-content-between">
            <div className="col-6 col-sm-auto">
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
              <div className="multitech-main-menu-item">
                <nav className="main-menu menu-style1 d-none d-lg-block">
                  <ul className="d-flex justify-content-center">
                    {menu_data.map((item, i) => (
                      <li
                        key={i}
                        className={`${item.has_dropdown ? "menu-item-has-children" : ""}`}
                      >
                     <Link href={item.link} className={`${style_2 ? "light-color" : ""}`}>
                          {item.title}
                        </Link>
                        {item.has_dropdown && item.sub_menus && (
                          <ul className="sub-menu shadow-lg rounded-md">
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
                                  <ul className="sub-menu ml-4 bg-white shadow-md rounded-md">
                                    {sub_item.sub_menu.map((inner_item, inner_index) => (
                                      <li
                                        key={inner_index}
                                        className={`${
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

                                        {(inner_item as any).inner_submenu &&
                                          (inner_item as any).sub_menu && (
                                            <ul className="sub-menu ml-4 bg-white shadow-md rounded-md">
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
              {/* Lenyíló nyelvválasztó menü */}
              <div className="language-dropdown" ref={languageDropdownRef}>
                <button
                  onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                  className={`language-dropdown-trigger ${
                    style_2 ? 'text-white' : 'text-gray-700'
                  } hover:bg-gray-100 transition-colors duration-200`}
                  aria-label="Nyelvválasztó menü"
                >
                  <span className="current-language">
                  <Image 
  src={languageConfig[currentLocale as keyof typeof languageConfig]?.flag} 
  alt={`${languageConfig[currentLocale as keyof typeof languageConfig]?.name} flag`}
  className="flag-image"
  width={15}
  height={15}
/>
                    <span className="language-name d-sm-inline">
                      {languageConfig[currentLocale as keyof typeof languageConfig]?.name}
                    </span>
                  </span>
                  <ChevronDown 
                    size={16} 
                    className={`chevron ${languageDropdownOpen ? 'rotated' : ''}`}
                  />
                </button>
                
                {languageDropdownOpen && (
                  <div className="language-dropdown-menu">
                    {locales.map((locale) => (
                      <button
                        key={locale}
                        onClick={() => changeLocale(locale)}
                        className={`language-option ${
                          currentLocale === locale ? 'active' : ''
                        }`}
                        disabled={currentLocale === locale}
                      >
                         <Image 
  src={languageConfig[locale as keyof typeof languageConfig]?.flag} 
  alt={`${languageConfig[locale as keyof typeof languageConfig]?.name} flag`}
  className="flag-image"
  width={15}
  height={15}
/>
                        <span className="language-name">
                          {languageConfig[locale as keyof typeof languageConfig]?.name}
                        </span>
                        {currentLocale === locale && (
                          <span className="checkmark">✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Kosár gomb */}
              <div className="header-action-item ms-2">
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

              {/* Mobilmenü gomb */}
              <div className="multitech-header-menu">
                <nav className="navbar site-navbar justify-content-between">
                  <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className={`multitech-menu-toggle d-inline-block d-lg-none ${
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