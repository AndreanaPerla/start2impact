import React, { useState, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [data, setData] = useState([
    {
      image: require("../assets/bastione-saint-remy.jpg"),
      title: "Bastione Saint Remy",
      route: "Bastione",
      gallery: [
        require("../assets/img_schede/bastione-facciata.jpg"),
        require("../assets/img_schede/bastione-passeggiata-coperta.jpg"),
        require("../assets/img_schede/bastione-rampe.jpg"),
      ],
      id: "bast_01",
    },
    {
      image: require("../assets/castello-san-michele.jpg"),
      title: "Castello San Michele",
      route: "SanMichele",
      gallery: [
        require("../assets/img_schede/castello-ingresso.jpg"),
        require("../assets/img_schede/castello-vista.jpg"),
      ],
      id: "mich_02",
    },
    {
      image: require("../assets/chiesa-bonaria.jpg"),
      title: "Chiesa Bonaria",
      route: "Bonaria",
      gallery: [
        require("../assets/img_schede/bonaria-torre.jpg"),
        require("../assets/img_schede/bonaria-cimitero.jpg"),
        require("../assets/img_schede/bonaria-interno.jpg"),
      ],
      id: "bon_03",
    },
    {
      image: require("../assets/chiesa-santa-maria.jpg"),
      title: "Chiesa Santa Maria",
      route: "Maria",
      gallery: [
        require("../assets/img_schede/maria-interno.jpg"),
        require("../assets/img_schede/maria-dettaglio.jpg"),
      ],
      id: "chm_04",
    },
    {
      image: require("../assets/spiaggia-poetto.jpg"),
      title: "Spiaggia del Poetto",
      description:
        "Docici chilometri di spiaggia, mare cristallino, sport e relax",
      route: "Poetto",
      gallery: [
        require("../assets/img_schede/poetto-lungomare.jpg"),
        require("../assets/img_schede/poetto-sella-diavolo.jpg"),
        require("../assets/img_schede/poetto-torre.jpg"),
      ],
      id: "spo_05",
    },
    {
      image: require("../assets/basilica-san-saturnino.jpg"),
      title: "Basilica di San Saturnino",
      description:
        "La chiesa più antica di Cagliari, dedicata al patrono della città",
      route: "SanSaturnino",
      gallery: [
        require("../assets/img_schede/saturnino-dettaglio.jpg"),
        require("../assets/img_schede/saturnino-parco.jpg"),
      ],
      id: "ssa_06",
    },
    {
      image: require("../assets/palazzo-civico.jpg"),
      title: "Palazzo Civico",
      description:
        "Noto anche come palazzo Bacaredda, è la sede comunale di Cagliari",
      route: "Civico",
      gallery: [
        require("../assets/img_schede/civico-interno.jpg"),
        require("../assets/img_schede/civico-dettaglio.jpg"),
      ],
      id: "pci_07",
    },
    {
      image: require("../assets/anfiteatro-romano.jpg"),
      title: "Anfiteatro Romano",
      description: "La più importante testimonianza della Sardegna romana",
      route: "Anfiteatro",
      gallery: [
        require("../assets/img_schede/anfiteatro-gallerie.jpg"),
        require("../assets/img_schede/anfiteatro-vista.jpg"),
      ],
      id: "aro_08",
    },
    {
      image: require("../assets/parco-molentargius.jpg"),
      title: "Parco del Molentargius",
      description: "Oasi naturalistica protetta a due passi dal centro città",
      route: "Parco",
      gallery: [
        require("../assets/img_schede/parco-fenicotteri.jpg"),
        require("../assets/img_schede/parco-stagno.jpg"),
      ],
      id: "pmo_09",
    },
    {
      image: require("../assets/spiaggia-costa-rei.jpg"),
      title: "Spiaggia di Costa Rei",
      description:
        "Spiaggia immensa e ancora selvaggia, mare limpido e sabbia fine",
      route: "CostaRei",
      gallery: [
        require("../assets/img_schede/costarei-lungomare.jpg"),
        require("../assets/img_schede/costarei-spiaggia.jpg"),
      ],
      id: "sco_10",
    },
    {
      image: require("../assets/cittadella-dei-musei.jpg"),
      title: "Cittadella dei Musei",
      description:
        "Polo museale della città, comprende tra gli altri il Museo Archeologico Nazionale",
      route: "Musei",
      gallery: [
        require("../assets/img_schede/musei-ingresso.jpg"),
        require("../assets/img_schede/musei-archeologia.jpg"),
        require("../assets/img_schede/musei-parco.jpg"),
      ],
      id: "cmu_11",
    },
    {
      image: require("../assets/ex-palazzo-di-città.jpg"),
      title: "Ex Palazzo di Città",
      description: "Sede municipale dal Medioevo fino agli inizi del XX sec.",
      route: "Palazzo",
      gallery: [
        require("../assets/img_schede/palazzo-dettaglio.jpg"),
        require("../assets/img_schede/palazzo-interno.jpg"),
      ],
      id: "epc_12",
    },
    {
      image: require("../assets/mercato-san-benedetto.jpeg"),
      title: "Mercato di San Benedetto",
      description:
        "Il più grande mercato alimentare coperto d'Italia e uno dei maggiori d'Europa",
      route: "Mercato",
      gallery: [
        require("../assets/img_schede/mercato-ingresso.jpg"),
        require("../assets/img_schede/mercato-vista.jpg"),
        require("../assets/img_schede/mercato-pesce.jpg"),
      ],
      id: "msb_13",
    },
    {
      image: require("../assets/necropoli-tuvixeddu.jpg"),
      title: "Necropoli di Tuvixeddu",
      description:
        "La più grande necropoli punica ancora esistente, si estende nel mezzo della città",
      route: "Necropoli",
      gallery: [
        require("../assets/img_schede/necropoli-vista.jpg"),
        require("../assets/img_schede/necropoli-corredo.jpg"),
      ],
      id: "ntu_14",
    },
  ]);

  return (
    <DataContext.Provider value={[data, setData]}>
      {props.children}
    </DataContext.Provider>
  );
};
