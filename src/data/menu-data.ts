// menu data
const menu_data = [
  {
    id: 1,
    title: "Produse",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      {
        link: "https://www.multitech.ro/videojet",
        title: "Videojet – Marcare",
        inner_submenu: true,
        sub_menu: [
          {
            link: "https://www.multitech.ro/videojet/inkjet-caractere-mici-cij",
            title: "Inkjet Caractere Mici – CIJ",
            inner_submenu: true,
            sub_menu: [
              { link: "https://www.multitech.ro/videojet/inkjet-caractere-mici-cij/videojet-1280", title: "Videojet 1280" },
              { link: "https://www.multitech.ro/videojet/inkjet-caractere-mici-cij/videojet-1880-plus", title: "Videojet 1880 +" },
              { link: "https://www.multitech.ro/videojet/inkjet-caractere-mici-cij/videojet-1580-plus", title: "Videojet 1580 +" },
              { link: "https://www.multitech.ro/videojet/inkjet-caractere-mici-cij/videojet-1580-c", title: "Videojet 1580 C" },
              { link: "https://www.multitech.ro/videojet/inkjet-caractere-mici-cij/videojet-1610-dh", title: "Videojet 1610 DH" },
              { link: "https://www.multitech.ro/videojet/inkjet-caractere-mici-cij/videojet-1880-uhs", title: "Videojet 1880 UHS" },
              { link: "https://www.multitech.ro/videojet/inkjet-caractere-mici-cij/videojet-1710", title: "Videojet 1710" }
            ]
          },
          {
            link: "https://www.multitech.ro/videojet/lasere",
            title: "Lasere",
            inner_submenu: true,
            sub_menu: [
              { link: "https://www.multitech.ro/videojet/lasere/videojet-3210", title: "Videojet 3210" },
              { link: "https://www.multitech.ro/videojet/lasere/videojet-3140", title: "Videojet 3140" },
              { link: "https://www.multitech.ro/videojet/lasere/videojet-3350", title: "Videojet 3350" },
              { link: "https://www.multitech.ro/videojet/lasere/videojet-3640", title: "Videojet 3640" },
              { link: "https://www.multitech.ro/videojet/lasere/videojet-7230-7330", title: "Videojet 7230 / 7330" },
              { link: "https://www.multitech.ro/videojet/lasere/videojet-7340-7440", title: "Videojet 7340 / 7440" },
              { link: "https://www.multitech.ro/videojet/lasere/videojet-7510", title: "Videojet 7510" },
              { link: "https://www.multitech.ro/videojet/lasere/videojet-7610", title: "Videojet 7610" }
            ]
          },
          {
            link: "https://www.multitech.ro/videojet/inkjet-termic-tij",
            title: "Inkjet Termic – TIJ",
            inner_submenu: true,
            sub_menu: [
              { link: "https://www.multitech.ro/videojet/inkjet-termic-tij/wolke-m610-advanced", title: "Wolke m610 Advanced" },
              { link: "https://www.multitech.ro/videojet/inkjet-termic-tij/wolke-m610-oem", title: "Wolke m610 OEM" },
              { link: "https://www.multitech.ro/videojet/inkjet-termic-tij/videojet-8520", title: "Videojet 8520" }
            ]
          },
          {
            link: "https://www.multitech.ro/videojet/transfer-termic-tto",
            title: "Transfer Termic – TTO",
            inner_submenu: true,
            sub_menu: [
              { link: "https://www.multitech.ro/videojet/transfer-termic-tto/videojet-6230", title: "Videojet 6230" },
              { link: "https://www.multitech.ro/videojet/transfer-termic-tto/videojet-dataflex-6x30", title: "Videojet DataFlex 6×30" },
              { link: "https://www.multitech.ro/videojet/transfer-termic-tto/videojet-dataflex-ip-plus", title: "Videojet DataFlex IP Plus" }
            ]
          },
          {
            link: "https://www.multitech.ro/videojet/inkjet-caractere-mari-lcm",
            title: "Inkjet Caractere Mari – LCM",
            inner_submenu: true,
            sub_menu: [
              { link: "https://www.multitech.ro/videojet/inkjet-caractere-mari-lcm/videojet-2120", title: "Videojet 2120" },
              { link: "https://www.multitech.ro/videojet/inkjet-caractere-mari-lcm/videojet-unicorn", title: "Videojet Unicorn" },
              { link: "https://www.multitech.ro/videojet/inkjet-caractere-mari-lcm/videojet-2380", title: "Videojet 2380" }
            ]
          },
          {
            link: "https://www.multitech.ro/videojet/etichetare",
            title: "Etichetare",
            inner_submenu: true,
            sub_menu: [
              { link: "https://www.multitech.ro/videojet/etichetare/videojet-9560", title: "Videojet 9560" }
            ]
          }
        ]
      },
      {
        link: "https://www.multitech.ro/foba",
        title: "Foba – Marcare Laser",
        inner_submenu: true,
        sub_menu: [
          {
            link: "https://www.multitech.ro/foba/lasere",
            title: "Lasere",
            inner_submenu: true,
            sub_menu: [
              { link: "https://www.multitech.ro/?page_id=4881", title: "Foba C.0100" },
              { link: "https://www.multitech.ro/foba/lasere/foba-c-0102-c-0302", title: "Foba C.0102 și C.0302" },
              { link: "https://www.multitech.ro/foba/lasere/foba-y-0x00", title: "Foba Seria Y.0×00" },
              { link: "https://www.multitech.ro/foba/lasere/foba-titus", title: "Foba Titus" },
              { link: "https://www.multitech.ro/foba/lasere/foba-y-0201-dn", title: "Foba Y.0201-DN" },
              { link: "https://www.multitech.ro/foba/lasere/foba-y-1000", title: "Foba Y.1000" },
              { link: "https://www.multitech.ro/foba/lasere/foba-v-0020-uv", title: "Foba V.0020-uv" }
            ]
          },
          {
            link: "https://www.multitech.ro/foba/statii-marcare",
            title: "Stații Marcare",
            inner_submenu: true,
            sub_menu: [
              { link: "https://www.multitech.ro/foba/statii-marcare/foba-m1000", title: "Foba M1000" },
              { link: "https://www.multitech.ro/foba/statii-marcare/foba-m2000", title: "Foba M2000" },
              { link: "https://www.multitech.ro/foba/statii-marcare/foba-m3000", title: "Foba M3000" }
            ]
          },
          {
            link: "https://www.multitech.ro/foba/statii-gravura",
            title: "Stații Gravură",
            inner_submenu: true,
            sub_menu: [
              { link: "https://www.multitech.ro/foba/statii-gravura/foba-m2000", title: "Foba M2000" }
            ]
          },
          {
            link: "https://www.multitech.ro/foba/sisteme-de-viziune",
            title: "Sisteme de Viziune",
            inner_submenu: true,
            sub_menu: [
              { link: "https://www.multitech.ro/foba/sisteme-de-viziune/foba-mosaic", title: "Foba Mosaic" },
              { link: "https://www.multitech.ro/foba/sisteme-de-viziune/foba-imp", title: "Foba IMP" },
              { link: "https://www.multitech.ro/foba/sisteme-de-viziune/foba-point-shoot", title: "Foba Point & Shoot" }
            ]
          }
        ]
      },
      {
        link: "https://www.multitech.ro/couth",
        title: "Couth – Micropercuție",
        inner_submenu: true,
        sub_menu: [
          {
            link: "https://www.multitech.ro/couth/superfast",
            title: "SuperFast",
            inner_submenu: true,
            sub_menu: [
              { link: "https://www.multitech.ro/couth/superfast/couth-50x25", title: "Couth 50×25" },
              { link: "https://www.multitech.ro/couth/superfast/couth-100x25", title: "Couth 100×25" },
              { link: "https://www.multitech.ro/couth/superfast/couth-160x25", title: "Couth 160×25" }
            ]
          },
          {
            link: "https://www.multitech.ro/couth/standard",
            title: "Standard",
            inner_submenu: true,
            sub_menu: [
              { link: "https://www.multitech.ro/couth/standard/couth-90x60", title: "Couth 90×60" },
              { link: "https://www.multitech.ro/couth/standard/couth-150x100", title: "Couth 150×100" }
            ]
          },
          {
            link: "https://www.multitech.ro/couth/deepmarking",
            title: "DeepMarking",
            inner_submenu: true,
            sub_menu: [
              { link: "https://www.multitech.ro/couth/deepmarking/couth-72x35", title: "Couth 72×35" },
              { link: "https://www.multitech.ro/couth/deepmarking/couth-200x35", title: "Couth 200×35" }
            ]
          }
        ]
      },
      {
        link: "https://www.multitech.ro/eidos",
        title: "Eidos – Transfer Termic",
        inner_submenu: true,
        sub_menu: [
          {
            link: "https://www.multitech.ro/eidos/coditherm",
            title: "Coditherm",
            inner_submenu: true,
            sub_menu: [
              { link: "https://www.multitech.ro/eidos/coditherm/coditherm-flat", title: "Coditherm Flat" },
              { link: "https://www.multitech.ro/eidos/coditherm/coditherm-pad", title: "Coditherm Pad" },
              { link: "https://www.multitech.ro/eidos/coditherm/coditherm-h-pad", title: "Coditherm H-Pad" },
              { link: "https://www.multitech.ro/eidos/coditherm/coditherm-round", title: "Coditherm Round" },
              { link: "https://www.multitech.ro/eidos/coditherm/coditherm-i-roller", title: "Coditherm I-Roller" }
            ]
          }
        ]
      },
      {
        link: "https://www.multitech.ro/etipack",
        title: "Etipack – Etichetare",
        inner_submenu: true,
        sub_menu: [
          {
            link: "https://www.multitech.ro/etipack/aplicatoare-etichete",
            title: "Aplicatoare Etichete",
            inner_submenu: true,
            sub_menu: [
              { link: "https://www.multitech.ro/etipack/aplicatoare-etichete/etipack-strong", title: "Etipack Strong" },
              { link: "https://www.multitech.ro/etipack/aplicatoare-etichete/etipack-energy", title: "Etipack Energy" },
              { link: "https://www.multitech.ro/etipack/aplicatoare-etichete/etipack-extreme", title: "Etipack Extreme" }
            ]
          }
        ]
      },
      {
        link: "https://www.multitech.ro/novexx",
        title: "Novexx – Etichetare",
        inner_submenu: true,
        sub_menu: [
          {
            link: "https://www.multitech.ro/novexx/aplicatoare-etichete",
            title: "Aplicatoare Etichete",
            inner_submenu: true,
            sub_menu: [
              { link: "https://www.multitech.ro/novexx/aplicatoare-etichete/novexx-xls-2xx", title: "Novexx XLS 2××" },
              { link: "https://www.multitech.ro/novexx/aplicatoare-etichete/novexx-xls-272", title: "Novexx XLS 272" }
            ]
          },
          {
            link: "https://www.multitech.ro/novexx/print-apply",
            title: "Print & Apply",
            inner_submenu: true,
            sub_menu: [
              { link: "https://www.multitech.ro/novexx/print-apply/novexx-alx-73x", title: "Novexx ALX 73×" },
              { link: "https://www.multitech.ro/novexx/print-apply/novexx-xpa-934", title: "Novexx XPA 934" },
              { link: "https://www.multitech.ro/novexx/print-apply/novexx-xpu", title: "Novexx XPU" }
            ]
          },
          {
            link: "https://www.multitech.ro/novexx/imprimante",
            title: "Imprimante Desktop",
            inner_submenu: true,
            sub_menu: [
              { link: "https://www.multitech.ro/novexx/imprimante/novexx-xlp-50x", title: "Novexx XLP 50×" },
              { link: "https://www.multitech.ro/novexx/imprimante/novexx-xtp-804", title: "Novexx XTP 804" }
            ]
          }
        ]
      },
      {
        link: "https://www.multitech.ro/bofa",
        title: "Bofa – Filtrare Fum",
        inner_submenu: true,
        sub_menu: [
          {
            link: "https://www.multitech.ro/bofa/filtrare-fum-laser",
            title: "Filtrare Fum Laser",
            inner_submenu: true,
            sub_menu: [
              { link: "https://www.multitech.ro/bofa/filtrare-fum-laser/bofa-ad-access", title: "Bofa AD Access" },
              { link: "https://www.multitech.ro/bofa/filtrare-fum-laser/bofa-ad-oracle-iq", title: "Bofa AD Oracle IQ" },
              { link: "https://www.multitech.ro/bofa/filtrare-fum-laser/bofa-ad-pvc-iq", title: "Bofa AD PVC IQ" },
              { link: "https://www.multitech.ro/bofa/filtrare-fum-laser/bofa-ad-500-1500-iq", title: "Bofa AD 500-1500 IQ" },
              { link: "https://www.multitech.ro/bofa/filtrare-fum-laser/bofa-ad-2000-iq", title: "Bofa AD 2000 IQ" }
            ]
          },
          {
            link: "https://www.multitech.ro/bofa/filtrare-vapori-imprimante",
            title: "Filtrare Vapori Imprimante",
            inner_submenu: true,
            sub_menu: [
              { link: "https://www.multitech.ro/bofa/filtrare-vapori-imprimante/bofa-printpro-universal", title: "Bofa PrintPro Universal" },
              { link: "https://www.multitech.ro/bofa/filtrare-vapori-imprimante/bofa-printpro-oracle-ds", title: "Bofa PrintPro Oracle DS" },
              { link: "https://www.multitech.ro/bofa/filtrare-vapori-imprimante/bofa-printpro-500-1500-iq", title: "Bofa PrintPro 500-1500 IQ" },
              { link: "https://www.multitech.ro/bofa/filtrare-vapori-imprimante/bofa-printpro-2000-iq", title: "Bofa PrintPro 2000 IQ" }
            ]
          }
        ]
      },
      {
        link: "https://www.multitech.ro/universal-robots",
        title: "UR – Brațe Robotizate",
        inner_submenu: true,
        sub_menu: [
          {
            link: "https://www.multitech.ro/universal-robots/brate-robotizate",
            title: "Brațe Robotizate",
            inner_submenu: true,
            sub_menu: [
              { link: "https://www.multitech.ro/universal-robots/brate-robotizate/ur3", title: "UR3" },
              { link: "https://www.multitech.ro/universal-robots/brate-robotizate/ur5", title: "UR5" },
              { link: "https://www.multitech.ro/universal-robots/brate-robotizate/ur10", title: "UR10" },
              { link: "https://www.multitech.ro/universal-robots/brate-robotizate/ur16", title: "UR16" },
              { link: "https://www.multitech.ro/universal-robots/brate-robotizate/ur20", title: "UR20" },
              { link: "https://www.multitech.ro/universal-robots/brate-robotizate/ur30", title: "UR30" }
            ]
          },
          {
            link: "https://www.multitech.ro/universal-robots/efectori-finali-onrobot",
            title: "Efectori Finali OnRobot",
            inner_submenu: true,
            sub_menu: [
              { link: "https://www.multitech.ro/universal-robots/efectori-finali-onrobot/onrobot-gripper-rg2-rg6", title: "OnRobot Gripper RG2/RG6" },
              { link: "https://www.multitech.ro/universal-robots/efectori-finali-onrobot/onrobot-gripper-rg2-ft", title: "OnRobot Gripper RG2-FT" },
              { link: "https://www.multitech.ro/universal-robots/efectori-finali-onrobot/onrobot-gripper-rfg15", title: "OnRobot Gripper RFG15" },
              { link: "https://www.multitech.ro/universal-robots/efectori-finali-onrobot/onrobot-gripper-vg10", title: "OnRobot Gripper VG10" },
              { link: "https://www.multitech.ro/universal-robots/efectori-finali-onrobot/onrobot-gripper-vgc10", title: "OnRobot Gripper VGC10" },
              { link: "https://www.multitech.ro/universal-robots/efectori-finali-onrobot/onrobot-gecko-gripper", title: "OnRobot Gecko Gripper" },
              { link: "https://www.multitech.ro/universal-robots/efectori-finali-onrobot/onrobot-gecko-single-pad", title: "OnRobot Gecko Single Pad" },
              { link: "https://www.multitech.ro/universal-robots/efectori-finali-onrobot/onrobot-soft-gripper", title: "OnRobot Soft Gripper" },
              { link: "https://www.multitech.ro/universal-robots/efectori-finali-onrobot/onrobot-eyes", title: "OnRobot Eyes" },
              { link: "https://www.multitech.ro/universal-robots/efectori-finali-onrobot/onrobot-senzor-hex", title: "OnRobot Senzor HEX" }
            ]
          },
          {
            link: "https://www.multitech.ro/universal-robots/efectori-finali-robotiq",
            title: "Efectori Finali Robotiq",
            inner_submenu: true,
            sub_menu: [
              { link: "https://www.multitech.ro/universal-robots/efectori-finali-robotiq/robotiq-gripper-hand-e", title: "Robotiq Gripper Hand-E" },
              { link: "https://www.multitech.ro/universal-robots/efectori-finali-robotiq/robotiq-gripper-2f-85-2f-140", title: "Robotiq Gripper 2F-85 / 140" },
              { link: "https://www.multitech.ro/universal-robots/efectori-finali-robotiq/robotiq-gripper-3f", title: "Robotiq Gripper 3F" },
              { link: "https://www.multitech.ro/universal-robots/efectori-finali-robotiq/robotiq-wrist-camera", title: "Robotiq Wrist Camera" },
              { link: "https://www.multitech.ro/universal-robots/efectori-finali-robotiq/robotiq-vacuum-grippers", title: "Robotiq Vacuum Grippers" }
            ]
          },
          {
            link: "https://www.multitech.ro/universal-robots/accesorii-easyrobotics",
            title: "Accesorii EasyRobotics",
            inner_submenu: true,
            sub_menu: [
              { link: "https://www.multitech.ro/universal-robots/accesorii-easyrobotics/easyrobotics-palletizer", title: "EasyRobotics Palletizer" },
              { link: "https://www.multitech.ro/universal-robots/accesorii-easyrobotics/easyrobotics-profeeder", title: "EasyRobotics ProFeeder" },
              { link: "https://www.multitech.ro/universal-robots/accesorii-easyrobotics/easyrobotics-profeeder-x", title: "EasyRobotics ProFeeder X" },
              { link: "https://www.multitech.ro/universal-robots/accesorii-easyrobotics/easyrobotics-profeeder-c", title: "EasyRobotics ProFeeder C" },
              { link: "https://www.multitech.ro/universal-robots/accesorii-easyrobotics/easyrobotics-easydesk", title: "EasyRobotics EasyDesk" },
              { link: "https://www.multitech.ro/universal-robots/accesorii-easyrobotics/easyrobotics-easypedestal", title: "EasyRobotics EasyPedestal" },
              { link: "https://www.multitech.ro/universal-robots/accesorii-easyrobotics/easyrobotics-easywork", title: "EasyRobotics EasyWork" }
            ]
          },
          {
            link: "https://www.multitech.ro/universal-robots/software-rocketfarm",
            title: "Software Rocketfarm",
            inner_submenu: true,
            sub_menu: [
              { link: "https://www.multitech.ro/universal-robots/software-rocketfarm/pally-urcaps", title: "Software Pally – URCaps" },
              { link: "https://www.multitech.ro/universal-robots/software-rocketfarm/pally-pallet-builder", title: "Pally – Pallet Builder" }
            ]
          }
        ]
      },
      {
        link: "https://www.multitech.ro/mir",
        title: "MiR – Roboți Mobili",
        inner_submenu: true,
        sub_menu: [
          {
            link: "https://www.multitech.ro/mir/roboti-industriali-mobili",
            title: "Roboți Industriali Mobili",
            inner_submenu: true,
            sub_menu: [
              { link: "https://www.multitech.ro/mir/roboti-industriali-mobili/mir250", title: "MiR250" },
              { link: "https://www.multitech.ro/mir/roboti-industriali-mobili/mir600", title: "MiR600" },
              { link: "https://www.multitech.ro/mir/roboti-industriali-mobili/mir1350", title: "MiR1350" },
              { link: "https://www.multitech.ro/mir/roboti-industriali-mobili/mir1200-pallet-jack", title: "MiR1200 Pallet Jack" }
            ]
          },
          {
            link: "https://www.multitech.ro/mir/module-si-accesorii-mir",
            title: "Module și Accesorii MiR",
            inner_submenu: true,
            sub_menu: [
              { link: "https://www.multitech.ro/mir/module-si-accesorii-mir/mir-hook-250", title: "MiR Hook 250" },
              { link: "https://www.multitech.ro/mir/module-si-accesorii-mir/mir-shelf-carrier-250", title: "MiR Shelf Carrier 250" },
              { link: "https://www.multitech.ro/mir/module-si-accesorii-mir/mir-shelf-lift", title: "MiR Shelf Lift" },
              { link: "https://www.multitech.ro/mir/module-si-accesorii-mir/mir-eu-pallet-lift", title: "MiR EU Pallet Lift" },
              { link: "https://www.multitech.ro/mir/module-si-accesorii-mir/mir-eu-pallet-rack", title: "MiR EU Pallet Rack" },
              { link: "https://www.multitech.ro/mir/module-si-accesorii-mir/mir-fleet", title: "MiR Fleet" }
            ]
          }
        ]
      },
      {
        link: "https://www.multitech.ro/consumabile",
        title: "Consumabile",
        inner_submenu: true,
        sub_menu: [
          {
            link: "https://www.multitech.ro/consumabile/cerneluri-videojet",
            title: "Cerneluri Videojet",
            inner_submenu: true,
            sub_menu: [
              { link: "https://www.multitech.ro/consumabile/cerneluri-videojet/cerneluri-cij", title: "Cerneluri CIJ" },
              { link: "https://www.multitech.ro/consumabile/cerneluri-videojet/cerneluri-tij", title: "Cerneluri TIJ" },
              { link: "https://www.multitech.ro/consumabile/cerneluri-videojet/cerneluri-lcm", title: "Cerneluri LCM" }
            ]
          },
          { link: "https://www.multitech.ro/consumabile/riboane-videojet", title: "Riboane Videojet", inner_submenu: false },
          {
            link: "https://www.multitech.ro/consumabile/filtre-bofa",
            title: "Filtre Bofa",
            inner_submenu: true,
            sub_menu: [
              { link: "https://www.multitech.ro/consumabile/filtre-bofa/prefiltre", title: "Prefiltre" },
              { link: "https://www.multitech.ro/consumabile/filtre-bofa/filtre-hepa", title: "Filtre HEPA" },
              { link: "https://www.multitech.ro/consumabile/filtre-bofa/filtre-carbon-activ", title: "Filtre Carbon Activ" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Aplicații",
    link: "https://www.multitech.ro/aplicatii",
    has_dropdown: true,
    sub_menus: [
      {
        link: "https://www.multitech.ro/aplicatii/automatizare",
        title: "Automatizare",
        inner_submenu: true,
        sub_menu: [
          { link: "https://www.multitech.ro/aplicatii/automatizare/ambalare-si-paletizare", title: "Ambalare și Paletizare" },
          { link: "https://www.multitech.ro/aplicatii/automatizare/asamblare", title: "Asamblare" },
          { link: "https://www.multitech.ro/aplicatii/automatizare/controlul-calitatii", title: "Controlul Calității" },
          { link: "https://www.multitech.ro/aplicatii/automatizare/finisare", title: "Finisare" },
          { link: "https://www.multitech.ro/aplicatii/automatizare/insurubare", title: "Înșurubare" },
          { link: "https://www.multitech.ro/aplicatii/automatizare/lipire-si-sudura", title: "Lipire și Sudură" },
          { link: "https://www.multitech.ro/aplicatii/automatizare/operare-utilaje-cnc", title: "Operare Utilaje CNC" },
          { link: "https://www.multitech.ro/aplicatii/automatizare/alte-aplicatii", title: "Alte Aplicații" }
        ]
      },
      {
        link: "https://www.multitech.ro/aplicatii/marcare-plastic",
        title: "Marcare Plastic",
        inner_submenu: true,
        sub_menu: [
          { link: "https://www.multitech.ro/aplicatii/marcare-plastic/sticle-si-recipiente-din-pet", title: "Sticle și Recipiente din PET" },
          { link: "https://www.multitech.ro/aplicatii/marcare-plastic/ambalaje-rigide-din-plastic", title: "Ambalaje Rigide din Plastic" },
          { link: "https://www.multitech.ro/aplicatii/marcare-plastic/produse-din-plastic", title: "Produse din Plastic" },
          { link: "https://www.multitech.ro/aplicatii/marcare-plastic/produse-extrudate", title: "Produse Extrudate" },
          { link: "https://www.multitech.ro/aplicatii/marcare-plastic/folii-si-ambalaje-flexibile", title: "Folii și Ambalaje Flexibile" },
          { link: "https://www.multitech.ro/aplicatii/marcare-plastic/folii-termocontractabile", title: "Folii Termocontractabile" }
        ]
      },
      {
        link: "https://www.multitech.ro/aplicatii/marcare-metal",
        title: "Marcare Metal",
        inner_submenu: true,
        sub_menu: [
          { link: "https://www.multitech.ro/aplicatii/marcare-metal/conserve-si-doze-de-aluminiu", title: "Conserve și Doze de Aluminiu" },
          { link: "https://www.multitech.ro/aplicatii/marcare-metal/produse-din-metal", title: "Produse din Metal" }
        ]
      },
      {
        link: "https://www.multitech.ro/aplicatii/marcare-sticla",
        title: "Marcare Sticlă",
        inner_submenu: true,
        sub_menu: [
          { link: "https://www.multitech.ro/aplicatii/marcare-sticla/sticle-si-recipiente-din-sticla", title: "Sticle și Recipiente din Sticlă" },
          { link: "https://www.multitech.ro/aplicatii/marcare-sticla/produse-din-sticla", title: "Produse din Sticlă" }
        ]
      },
      {
        link: "https://www.multitech.ro/aplicatii/marcare-alte-materiale",
        title: "Marcare Alte Materiale",
        inner_submenu: true,
        sub_menu: [
          { link: "https://www.multitech.ro/aplicatii/marcare-alte-materiale/produse-din-lemn", title: "Produse din Lemn" },
          { link: "https://www.multitech.ro/aplicatii/marcare-alte-materiale/ambalaje-din-hartie-si-carton", title: "Ambalaje din Hârtie și Carton" },
          { link: "https://www.multitech.ro/aplicatii/marcare-alte-materiale/ambalaje-din-carton-ondulat", title: "Ambalaje din Carton Ondulat" },
          { link: "https://www.multitech.ro/aplicatii/marcare-alte-materiale/ambalaje-tip-retail-ready", title: "Ambalaje tip Retail-Ready" },
          { link: "https://www.multitech.ro/aplicatii/marcare-alte-materiale/oua-si-cofraje-de-oua", title: "Ouă și Cofraje de Ouă" }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Industrii",
    link: "https://www.multitech.ro/industrii",
    has_dropdown: true,
    sub_menus: [
      {
        link: "https://www.multitech.ro/industrii/alimente-si-bauturi",
        title: "Alimente și Băuturi",
        inner_submenu: true,
        sub_menu: [
          { link: "https://www.multitech.ro/industrii/alimente-si-bauturi/panificatie-si-cereale", title: "Panificație și Cereale" },
          { link: "https://www.multitech.ro/industrii/alimente-si-bauturi/bauturi", title: "Băuturi" },
          { link: "https://www.multitech.ro/industrii/alimente-si-bauturi/bomboane-si-cofetarie", title: "Bomboane și Cofetărie" },
          { link: "https://www.multitech.ro/industrii/alimente-si-bauturi/lactate", title: "Lactate" },
          { link: "https://www.multitech.ro/industrii/alimente-si-bauturi/oua", title: "Ouă" },
          { link: "https://www.multitech.ro/industrii/alimente-si-bauturi/fructe-si-legume", title: "Fructe şi Legume" },
          { link: "https://www.multitech.ro/industrii/alimente-si-bauturi/carne", title: "Carne" },
          { link: "https://www.multitech.ro/industrii/alimente-si-bauturi/hrana-animale", title: "Hrană Animale" },
          { link: "https://www.multitech.ro/industrii/alimente-si-bauturi/gustari-sarate", title: "Gustări Sărate" },
          { link: "https://www.multitech.ro/industrii/alimente-si-bauturi/alte-produse-alimentare", title: "Alte Produse Alimentare" }
        ]
      },
      {
        link: "https://www.multitech.ro/industrii/industrii-prelucratoare",
        title: "Industrii Prelucrătoare",
        inner_submenu: true,
        sub_menu: [
          { link: "https://www.multitech.ro/industrii/industrii-prelucratoare/autovehicule", title: "Autovehicule" },
          { link: "https://www.multitech.ro/industrii/industrii-prelucratoare/materiale-de-constructii", title: "Materiale de Construcții" },
          { link: "https://www.multitech.ro/industrii/industrii-prelucratoare/produse-chimice", title: "Produse Chimice" },
          { link: "https://www.multitech.ro/industrii/industrii-prelucratoare/electrice-si-electronice", title: "Electrice și Electronice" },
          { link: "https://www.multitech.ro/industrii/industrii-prelucratoare/fire-cabluri-si-tevi", title: "Fire, Cabluri și Țevi" }
        ]
      },
      {
        link: "https://www.multitech.ro/industrii/farma-si-larg-consum",
        title: "Farma și Larg Consum",
        inner_submenu: true,
        sub_menu: [
          { link: "https://www.multitech.ro/industrii/farma-si-larg-consum/cosmetice-si-ingrijire", title: "Cosmetice și Îngrijire" },
          { link: "https://www.multitech.ro/industrii/farma-si-larg-consum/farmaceutice", title: "Farmaceutice" },
          { link: "https://www.multitech.ro/industrii/farma-si-larg-consum/tutun", title: "Tutun" }
        ]
      },
      {
        link: "https://www.multitech.ro/industrii/alte-industrii",
        title: "Alte Industrii",
        inner_submenu: true,
        sub_menu: [
          { link: "https://www.multitech.ro/industrii/alte-industrii/imprimare-comerciala", title: "Imprimare Comercială" },
          { link: "https://www.multitech.ro/industrii/alte-industrii/unelte-si-matrite", title: "Unelte și Matrițe" },
          { link: "https://www.multitech.ro/industrii/alte-industrii/securitate", title: "Securitate" },
          { link: "https://www.multitech.ro/industrii/alte-industrii/ceasuri-si-bijuterii", title: "Ceasuri și Bijuterii" },
          { link: "https://www.multitech.ro/industrii/alte-industrii/monetarie", title: "Monetărie" },
          { link: "https://www.multitech.ro/industrii/alte-industrii/tehnologii-medicale", title: "Tehnologii Medicale" }
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