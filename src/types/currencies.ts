// This file is not named correctly, I would instead consider renaming it to apiTypes or responses
// since these are type interfaces of the API responses

export type Currency = {
  code: string;
  decimal_mark: string;
  id: number;
  name: string;
  precision: number;
  short_code: string;
  subunit: number;
  symbol: string;
  symbol_first: boolean;
  thousands_separator: string;
};

export type Conversion = {
  amount: number;
  date: string;
  from: string;
  meta: {
    code: number;
    disclaimer: string;
  };
  timestamp: number;
  to: string;
  value: number;
};
