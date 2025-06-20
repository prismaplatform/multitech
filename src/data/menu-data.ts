// updated menu data
const menu_data = [
  {
    id: 1,
    title: "Produse",
    link: "/shop",
    has_dropdown: true,
    sub_menus: [
      {
        link: "/shop",
        title: "Videojet – Marcare",
        inner_submenu: true,
        sub_menu: [
          {
            link: "/shop",
            title: "Inkjet Caractere Mici – CIJ",
            inner_submenu: true,
            sub_menu: [
              { link: "/shop", title: "Videojet 1280" },
              { link: "/shop", title: "Videojet 1880 +" },
              { link: "/shop", title: "Videojet 1580 +" },
              { link: "/shop", title: "Videojet 1580 C" },
              { link: "/shop", title: "Videojet 1610 DH" },
              { link: "/shop", title: "Videojet 1880 UHS" },
              { link: "/shop", title: "Videojet 1710" }
            ]
          },
          {
            link: "/shop",
            title: "Lasere",
            inner_submenu: true,
            sub_menu: [
              { link: "/shop", title: "Videojet 3210" },
              { link: "/shop", title: "Videojet 3140" },
              { link: "/shop", title: "Videojet 3350" },
              { link: "/shop", title: "Videojet 3640" },
              { link: "/shop", title: "Videojet 7230 / 7330" },
              { link: "/shop", title: "Videojet 7340 / 7440" },
              { link: "/shop", title: "Videojet 7510" },
              { link: "/shop", title: "Videojet 7610" }
            ]
          },
          {
            link: "/shop",
            title: "Inkjet Termic – TIJ",
            inner_submenu: true,
            sub_menu: [
              { link: "/shop", title: "Wolke m610 Advanced" },
              { link: "/shop", title: "Wolke m610 OEM" },
              { link: "/shop", title: "Videojet 8520" }
            ]
          },
          {
            link: "/shop",
            title: "Transfer Termic – TTO",
            inner_submenu: true,
            sub_menu: [
              { link: "/shop", title: "Videojet 6230" },
              { link: "/shop", title: "Videojet DataFlex 6×30" },
              { link: "/shop", title: "Videojet DataFlex IP Plus" }
            ]
          },
          {
            link: "/shop",
            title: "Inkjet Caractere Mari – LCM",
            inner_submenu: true,
            sub_menu: [
              { link: "/shop", title: "Videojet 2120" },
              { link: "/shop", title: "Videojet Unicorn" },
              { link: "/shop", title: "Videojet 2380" }
            ]
          },
          {
            link: "/shop",
            title: "Etichetare",
            inner_submenu: true,
            sub_menu: [
              { link: "/shop", title: "Videojet 9560" }
            ]
          }
        ]
      },
      {
        link: "/shop",
        title: "Foba – Marcare Laser",
        inner_submenu: true,
        sub_menu: [
          {
            link: "/shop",
            title: "Lasere",
            inner_submenu: true,
            sub_menu: [
              { link: "/shop", title: "Foba C.0100" },
              { link: "/shop", title: "Foba C.0102 și C.0302" },
              { link: "/shop", title: "Foba Seria Y.0×00" },
              { link: "/shop", title: "Foba Titus" },
              { link: "/shop", title: "Foba Y.0201-DN" },
              { link: "/shop", title: "Foba Y.1000" },
              { link: "/shop", title: "Foba V.0020-uv" }
            ]
          },
          {
            link: "/shop",
            title: "Stații Marcare",
            inner_submenu: true,
            sub_menu: [
              { link: "/shop", title: "Foba M1000" },
              { link: "/shop", title: "Foba M2000" },
              { link: "/shop", title: "Foba M3000" }
            ]
          },
          {
            link: "/shop",
            title: "Stații Gravură",
            inner_submenu: true,
            sub_menu: [
              { link: "/shop", title: "Foba M2000" }
            ]
          },
          {
            link: "/shop",
            title: "Sisteme de Viziune",
            inner_submenu: true,
            sub_menu: [
              { link: "/shop", title: "Foba Mosaic" },
              { link: "/shop", title: "Foba IMP" },
              { link: "/shop", title: "Foba Point & Shoot" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Aplicații",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      {
        link: "#",
        title: "Automatizare",
        inner_submenu: true,
        sub_menu: [
          { link: "#", title: "Ambalare și Paletizare" },
          { link: "#", title: "Asamblare" },
          { link: "#", title: "Controlul Calității" },
          { link: "#", title: "Finisare" },
          { link: "#", title: "Înșurubare" },
          { link: "#", title: "Lipire și Sudură" },
          { link: "#", title: "Operare Utilaje CNC" },
          { link: "#", title: "Alte Aplicații" }
        ]
      },
      {
        link: "#",
        title: "Marcare Plastic",
        inner_submenu: true,
        sub_menu: [
          { link: "#", title: "Sticle și Recipiente din PET" },
          { link: "#", title: "Ambalaje Rigide din Plastic" },
          { link: "#", title: "Produse din Plastic" },
          { link: "#", title: "Produse Extrudate" },
          { link: "#", title: "Folii și Ambalaje Flexibile" },
          { link: "#", title: "Folii Termocontractabile" }
        ]
      },
      {
        link: "#",
        title: "Marcare Metal",
        inner_submenu: true,
        sub_menu: [
          { link: "#", title: "Conserve și Doze de Aluminiu" },
          { link: "#", title: "Produse din Metal" }
        ]
      },
      {
        link: "#",
        title: "Marcare Sticlă",
        inner_submenu: true,
        sub_menu: [
          { link: "#", title: "Sticle și Recipiente din Sticlă" },
          { link: "#", title: "Produse din Sticlă" }
        ]
      },
      {
        link: "#",
        title: "Marcare Alte Materiale",
        inner_submenu: true,
        sub_menu: [
          { link: "#", title: "Produse din Lemn" },
          { link: "#", title: "Ambalaje din Hârtie și Carton" },
          { link: "#", title: "Ambalaje din Carton Ondulat" },
          { link: "#", title: "Ambalaje tip Retail-Ready" },
          { link: "#", title: "Ouă și Cofraje de Ouă" }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Industrii",
    link: "/portfolio",
    has_dropdown: true,
    sub_menus: [
      {
        link: "/portfolio",
        title: "Alimente și Băuturi",
        inner_submenu: true,
        sub_menu: [
          { link: "/portfolio", title: "Panificație și Cereale" },
          { link: "/portfolio", title: "Băuturi" },
          { link: "/portfolio", title: "Bomboane și Cofetărie" },
          { link: "/portfolio", title: "Lactate" },
          { link: "/portfolio", title: "Ouă" },
          { link: "/portfolio", title: "Fructe şi Legume" },
          { link: "/portfolio", title: "Carne" },
          { link: "/portfolio", title: "Hrană Animale" },
          { link: "/portfolio", title: "Gustări Sărate" },
          { link: "/portfolio", title: "Alte Produse Alimentare" }
        ]
      },
      {
        link: "/portfolio",
        title: "Industrii Prelucrătoare",
        inner_submenu: true,
        sub_menu: [
          { link: "/portfolio", title: "Autovehicule" },
          { link: "/portfolio", title: "Materiale de Construcții" },
          { link: "/portfolio", title: "Produse Chimice" },
          { link: "/portfolio", title: "Electrice și Electronice" },
          { link: "/portfolio", title: "Fire, Cabluri și Țevi" }
        ]
      },
      {
        link: "/portfolio",
        title: "Farma și Larg Consum",
        inner_submenu: true,
        sub_menu: [
          { link: "/portfolio", title: "Cosmetice și Îngrijire" },
          { link: "/portfolio", title: "Farmaceutice" },
          { link: "/portfolio", title: "Tutun" }
        ]
      },
      {
        link: "/portfolio",
        title: "Alte Industrii",
        inner_submenu: true,
        sub_menu: [
          { link: "/portfolio", title: "Imprimare Comercială" },
          { link: "/portfolio", title: "Unelte și Matrițe" },
          { link: "/portfolio", title: "Securitate" },
          { link: "/portfolio", title: "Ceasuri și Bijuterii" },
          { link: "/portfolio", title: "Monetărie" },
          { link: "/portfolio", title: "Tehnologii Medicale" }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Despre noi",
    link: "/about-us",
    has_dropdown: false
  },
  {
    id: 5,
    title: "Contact",
    link: "/contact",
    has_dropdown: false
  }
];

export default menu_data;
