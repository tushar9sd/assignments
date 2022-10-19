import styled from "styled-components";

export interface TypoProps {
  link?: any;
  title?: string;
  className?: string;
  text?: any;
  required?: boolean;
  onClick?: () => void;
  color?: string;
  textTransform?: string;
  fontweight?: number;
}



export const H1Typography = styled.h1<TypoProps>`
  font-size: 32px;
  line-height: 1.4;
`;

export const H2Typography = styled.h2<TypoProps>`
  font-size: 24px;
  line-height: 1.4;
`;

export const H3Typography = styled.h3<TypoProps>`
  font-size: 20px;
  line-height: 1.4;
`;

export const Labeltext = styled.p<TypoProps>`
  font-size: 18px;
  line-height: 1.4;
&.addlink{
    color:#0d6efd;
    text-align:right;
    cursor:pointer;
    text-decoration:underline;
}
`;

export const Paratext = styled.p<TypoProps>`
  font-size: 14px;
  line-height: 1.4;
`;








