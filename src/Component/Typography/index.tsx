import { FC } from "react";
import {
  H1Typography,
  H2Typography,
  H3Typography,
  Labeltext,
  Paratext,
  TypoProps,
} from "./style";

export const H1: FC<TypoProps> = ({ text}) => {
  return <H1Typography>{text}</H1Typography>;
};

export const H2: FC<TypoProps> = ({ text, ...CssProps }) => {
  return <H2Typography {...CssProps}>{text}</H2Typography>;
};

export const H3: FC<TypoProps> = ({ text, ...CssProps }) => {
  return <H3Typography {...CssProps}>{text}</H3Typography>;
};

export const Label: FC<TypoProps> = ({ text, ...CssProps }) => {
  return <Labeltext {...CssProps}>{text}</Labeltext>;
};

export const Para: FC<TypoProps> = ({ text, ...CssProps }) => {
  return <Paratext {...CssProps}>{text}</Paratext>;
};


