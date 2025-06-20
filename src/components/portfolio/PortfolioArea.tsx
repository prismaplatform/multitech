"use client";
import Link from "next/link";
import React, { useState } from "react";
import portfolio_data from "@/data/portfolio-data";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// data
const categories = [
  "Toate",
  ...new Set(portfolio_data.map((item) => item.category)),
];
const perView = 4;

const PortfolioArea = () => {
  const [activeCategory, setActiveCategory] = useState("Toate");
  const [items, setItems] = useState(portfolio_data);
  const [next, setNext] = useState(perView);

  const filterItems = (cateItem: string) => {
    setActiveCategory(cateItem);
    setNext(perView);
    if (cateItem === "Toate") {
      return setItems(portfolio_data);
    } else {
      const findItems = portfolio_data.filter((findItem) => {
        return findItem.category == cateItem;
      });
      setItems(findItems);
    }
  };
  //   handleLoadMore
  const handleLoadMore = () => {
    setNext((value) => value + 2);
  };

  return (
    <>
      <div className="lonyo-section-padding2">
        <div className="container">
          <div className="lonyo-default-content mb-5 w-100">
            <h2>În ce industrie activați?</h2>
            <p >
              Fiecare domeniu de activitate se confruntă cu un ansamblu unic de provocări în ceea ce privește marcarea și codificarea, cum ar fi condiţii dificile de mediu, procese de producţie continue, reglementări stricte, linii de producție mare viteză şi o varietate de tipuri de produse şi de ambalaje.
</p> <p >
Cu ajutorul partenerilor noștri răspundem acestor provocări prin cea mai largă ofertă de tehnologie din domeniu, cu o gamă de soluţii rentabile, cu timp de funcţionare îndelungat, concepute ţinând cont de necesităţile dumneavoastră.
</p> <p >
Selectaţi un domeniu de activitate pentru a afla mai multe:


            </p>
            <p></p>
          </div>
          <div
            className="lonyo-portfolio-menu lonyo-section-title"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <ul
              id="watch-filter-gallery"
              className="option-set clear-both"
              data-option-key="filter"
            >
              {categories.map((cate, i) => (
                <li
                  key={i}
                  onClick={() => filterItems(cate)}
                  className={`wow fadeInUpX ${
                    cate === activeCategory ? "active" : ""
                  }`}
                >
                  {cate}
                </li>
              ))}
            </ul>
          </div>
          <div className="lonyo-portfolio-column" id="lonyo-portfolio-grid">
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 0: 1, 750: 2, 992: 2 }}
            >
              <Masonry>
                {items.map((item, i) => (
                  <div
                    key={i}
                    className="lonyo-p-thumb"
                    data-aos="fade-up"
                    data-aos-duration="700"
                  >
                    <img className="w100" src={item.image} alt="" />
                    <div className="lonyo-p-data-wrap">
                      <div className="lonyo-p-content">
                        <h4>{item.title}</h4>
                        <ul>
                          {item.tags.map((tag, index) => (
                            <li key={index}>
                              <Link href="/single-portfolio">{tag}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="lonyo-p-title-btn">
                        <Link className="title-btn" href="/single-portfolio">
                          Learn more
                          <svg
                            width="18"
                            height="16"
                            viewBox="0 0 18 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.7796 8.53108L11.03 15.2807C10.8893 15.4214 10.6984 15.5005 10.4994 15.5005C10.3004 15.5005 10.1095 15.4214 9.96882 15.2807C9.8281 15.14 9.74904 14.9491 9.74904 14.7501C9.74904 14.5511 9.8281 14.3602 9.96882 14.2195L15.4388 8.75045H0.749958C0.551057 8.75045 0.360302 8.67143 0.219658 8.53079C0.0790134 8.39014 0 8.19939 0 8.00049C0 7.80159 0.0790134 7.61083 0.219658 7.47019C0.360302 7.32954 0.551057 7.25053 0.749958 7.25053H15.4388L9.96882 1.78146C9.8281 1.64074 9.74904 1.44988 9.74904 1.25086C9.74904 1.05185 9.8281 0.860991 9.96882 0.720268C10.1095 0.579545 10.3004 0.500488 10.4994 0.500488C10.6984 0.500488 10.8893 0.579545 11.03 0.720268L17.7796 7.46989C17.8494 7.53954 17.9047 7.62225 17.9424 7.7133C17.9802 7.80434 17.9996 7.90193 17.9996 8.00049C17.9996 8.09904 17.9802 8.19663 17.9424 8.28768C17.9047 8.37872 17.8494 8.46143 17.7796 8.53108Z"
                              fill="#008BCD"
                            />
                            <path
                              d="M17.7796 8.53108L11.03 15.2807C10.8893 15.4214 10.6984 15.5005 10.4994 15.5005C10.3004 15.5005 10.1095 15.4214 9.96882 15.2807C9.8281 15.14 9.74904 14.9491 9.74904 14.7501C9.74904 14.5511 9.8281 14.3602 9.96882 14.2195L15.4388 8.75045H0.749958C0.551057 8.75045 0.360302 8.67143 0.219658 8.53079C0.0790134 8.39014 0 8.19939 0 8.00049C0 7.80159 0.0790134 7.61083 0.219658 7.47019C0.360302 7.32954 0.551057 7.25053 0.749958 7.25053H15.4388L9.96882 1.78146C9.8281 1.64074 9.74904 1.44988 9.74904 1.25086C9.74904 1.05185 9.8281 0.860991 9.96882 0.720268C10.1095 0.579545 10.3004 0.500488 10.4994 0.500488C10.6984 0.500488 10.8893 0.579545 11.03 0.720268L17.7796 7.46989C17.8494 7.53954 17.9047 7.62225 17.9424 7.7133C17.9802 7.80434 17.9996 7.90193 17.9996 8.00049C17.9996 8.09904 17.9802 8.19663 17.9424 8.28768C17.9047 8.37872 17.8494 8.46143 17.7796 8.53108Z"
                              fill="#008BCD"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioArea;
