import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { GrDocumentTime } from "react-icons/gr";
import { TbCards } from "react-icons/tb";
import { LiaDumbbellSolid } from "react-icons/lia";
import { LuBrainCog } from "react-icons/lu";
import { StyledFooter, StyledFooterItem, FooterIcon } from "src/ui/layout";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterItem>
        <FooterIcon>
          <BsFillPersonFill />
        </FooterIcon>
        پروفایل
      </StyledFooterItem>
      <StyledFooterItem>
        <FooterIcon>
          <HiOutlineDocumentReport />
        </FooterIcon>
        گزارش ها
      </StyledFooterItem>
      <StyledFooterItem>
        <FooterIcon>
          <GrDocumentTime />
        </FooterIcon>
        مطالعه
      </StyledFooterItem>
      <StyledFooterItem>
        <FooterIcon>
          <TbCards />
        </FooterIcon>
        فلش کارت
      </StyledFooterItem>
      <StyledFooterItem>
        <FooterIcon>
          <LiaDumbbellSolid />
        </FooterIcon>
        رقابت
      </StyledFooterItem>
      <StyledFooterItem>
        <FooterIcon>
          <LuBrainCog />
        </FooterIcon>
        یادگیری
      </StyledFooterItem>
    </StyledFooter>
  );
};
