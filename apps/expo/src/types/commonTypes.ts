export type keyword = {
  type: number;
  meaning: string | null;
  keyword: string;
  hasLocution: boolean;
  plural: string | null;
};

export type Pictogram = {
  schematic: boolean;
  sex: boolean;
  violence: boolean;
  aac: boolean;
  aacColor: boolean;
  skin: boolean;
  hair: boolean;
  downloads: number;
  categories: string[];
  synsets: string;
  tags: string[];
  _id: number;
  created: Date;
  lastUpdated: Date;
  keywords: keyword[];
};

export type Board = {
  id: string;
  pictograms: Pictogram[];
};
