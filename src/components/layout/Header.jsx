import React from "react";
import { StyledHeader } from "src/ui/layout/StyledHeader";
import styled from "styled-components";
import { GoTrophy } from "react-icons/go";
import { MdHexagon } from "react-icons/md";
import { BsFillLightningFill } from "react-icons/bs";
import { IoFlame } from "react-icons/io5";
import { ConvertEnToFaNumbers } from "src/utils";

export const Item = styled.span`
  padding: 0.2rem;
  display: flex;
  align-items: center;
  color: ${({ theme, color }) => theme.colors[color]};
  font-size: 1.5rem;
  gap: 0.2rem;
`;

const SubItem = styled.span`
  color: ${({ theme, color }) => theme.colors[color]};
  font-size: 1rem;
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  gap: 1.4rem;
  padding-right: 0.5rem;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Box>
        <Item color="yellow">
          <IoFlame />
          <SubItem>{ConvertEnToFaNumbers(0)}</SubItem>
        </Item>
        <Item color="yellow">
          <BsFillLightningFill />
          <SubItem>{ConvertEnToFaNumbers(192)}</SubItem>
        </Item>
        <Item color="teal">
          <MdHexagon />
          <SubItem color="blue">{ConvertEnToFaNumbers(49867)}</SubItem>
        </Item>
      </Box>
      <Item color="blue">
        <SubItem>لیگ</SubItem>
        <GoTrophy />
      </Item>
    </StyledHeader>
  );
};
