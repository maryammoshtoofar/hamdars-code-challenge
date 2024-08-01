import React from "react";
import { StyledHeader, Box, Item, SubItem } from "src/ui/layout";
import { GoTrophy } from "react-icons/go";
import { MdHexagon } from "react-icons/md";
import { BsFillLightningFill } from "react-icons/bs";
import { IoFlame } from "react-icons/io5";
import { ConvertToPersianNumbers } from "src/utils";

export const Header = () => {
  return (
    <StyledHeader>
      <Box>
        <Item color="yellow">
          <IoFlame />
          <SubItem>{ConvertToPersianNumbers(0)}</SubItem>
        </Item>
        <Item color="yellow">
          <BsFillLightningFill />
          <SubItem>{ConvertToPersianNumbers(192)}</SubItem>
        </Item>
        <Item color="teal">
          <MdHexagon />
          <SubItem color="blue">{ConvertToPersianNumbers(49867)}</SubItem>
        </Item>
      </Box>
      <Item color="blue">
        <SubItem>لیگ</SubItem>
        <GoTrophy />
      </Item>
    </StyledHeader>
  );
};
