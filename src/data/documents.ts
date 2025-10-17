export interface DocumentData {
  id: string;
  title: string;
  filename: string;
  category: string;
  date?: string;
  size?: string;
}

export const documents: DocumentData[] = [
  {
    id: "grundbuch-auszug-2025",
    title: "Grundbuch Auszug Adalbertstr 2025",
    filename: "Grundbuch Auszug Adalbertstr 2025 GBA_Mitte_Mitte_6444N_20250612.pdf",
    category: "Grundbuch",
    date: "2025-06-12"
  },
  {
    id: "wirtschaftsplan-2024",
    title: "Wirtschaftsplan 2024",
    filename: "Wirtschaftsplan 2024_5430_14 III.OG mi_re (3.2)_Klaas_Krüger.pdf",
    category: "Wirtschaftsplan",
    date: "2024"
  },
  {
    id: "etv-protokoll-2024-05",
    title: "ETV Protokoll 31.05.2024",
    filename: "ETV 31.05.2024 Protokoll.pdf",
    category: "ETV Protokolle",
    date: "2024-05-31"
  },
  {
    id: "etv-protokoll-2023-11",
    title: "ETV Protokoll 27.11.2023",
    filename: "Protokoll a. o. ETV 27.11.2023.pdf",
    category: "ETV Protokolle",
    date: "2023-11-27"
  },
  {
    id: "etv-protokoll-2022-04",
    title: "ETV Protokoll 29.04.2022",
    filename: "Protokoll ETV 29.04.2022.pdf",
    category: "ETV Protokolle",
    date: "2022-04-29"
  },
  {
    id: "etv-protokoll-2021",
    title: "ETV Protokoll 2021",
    filename: "Protokoll ETV 2021.pdf",
    category: "ETV Protokolle",
    date: "2021"
  },
  {
    id: "weg-aufteilungplan",
    title: "WEG Adalbertstr 36 - Aufteilungplan",
    filename: "WEG Adalbertstr 36 - Aufteilungplan.pdf",
    category: "WEG Dokumente"
  },
  {
    id: "umlaufbeschluss",
    title: "Umlaufbeschluss",
    filename: "Umlaufbeschluss.pdf",
    category: "WEG Dokumente"
  },
  {
    id: "ka-instandsetzung",
    title: "KA Instandsetzung Terrassen Seitenflügel",
    filename: "KA Instandsetzung Terrassen Seitenflügel.pdf",
    category: "Instandsetzung"
  },
  {
    id: "energieausweis",
    title: "Energieausweis",
    filename: "Energieausweis.pdf",
    category: "Energieausweis"
  },
  {
    id: "flurkarte",
    title: "Flurkarte Adalbertstr. 36",
    filename: "Flurkarte Adalbertstr. 36.pdf",
    category: "Grundstück"
  },
  {
    id: "mietvertrag-2024-2025",
    title: "Mietvertrag Krüger Nesterenko June 2024 - June 2025",
    filename: "Mietvertrag Krüger Nesterenko June 2024 -June 2025 signed.pdf",
    category: "Mietvertrag",
    date: "2024-2025"
  },
  {
    id: "energieausweis-2008",
    title: "Energieausweis 2008",
    filename: "2008-06-17 hemo Energieausweis Adalbertstr.pdf",
    category: "Energieausweis",
    date: "2008-06-17"
  },
  {
    id: "grundriss-bemasst",
    title: "Grundriss bemasst aus Teilungserklärung",
    filename: "Grundriss bemasst aus Teilungserklärung.pdf",
    category: "Grundriss"
  },
  {
    id: "gebaeudeversicherung",
    title: "Gebäudeversicherung",
    filename: "Gebäudeversicherung.pdf",
    category: "Versicherung"
  },
  {
    id: "ada36-teilungserklaerung",
    title: "ADA36 Teilungserklärung",
    filename: "ADA36 Teilungserklärung.pdf",
    category: "Teilungserklärung"
  },
  {
    id: "erklaerung-grundbuch",
    title: "Erklärung Grundbuch",
    filename: "Erklärung Grundbuch.pdf",
    category: "Grundbuch"
  },
  {
    id: "nachtrag-teilungserklaerung",
    title: "Nachtrag Teilungserklärung",
    filename: "Nachtrag Teilungserklärung.pdf",
    category: "Teilungserklärung"
  },
  {
    id: "teilungserklaerung-3-2",
    title: "Teilungserklärung Adalbertr.36.Nr3.2",
    filename: "Teilungserklärung Adalbertr.36.Nr3.2.pdf",
    category: "Teilungserklärung"
  }
];

export const documentCategories = [
  "Alle",
  "Grundbuch",
  "Wirtschaftsplan", 
  "ETV Protokolle",
  "WEG Dokumente",
  "Instandsetzung",
  "Energieausweis",
  "Grundstück",
  "Mietvertrag",
  "Grundriss",
  "Versicherung",
  "Teilungserklärung"
];
