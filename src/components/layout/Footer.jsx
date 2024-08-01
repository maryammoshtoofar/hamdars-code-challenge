import React, { useState } from "react";
import styled from "styled-components";
import { BsFillPersonFill } from "react-icons/bs";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { GrDocumentTime } from "react-icons/gr";
import { TbCards } from "react-icons/tb";
import { LiaDumbbellSolid } from "react-icons/lia";
import { LuBrainCog } from "react-icons/lu";

const StyledFooterItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: ${({ theme, active }) =>
    active ? theme.colors.white : theme.colors.dimBlue};
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;
const StyledFooter = styled.footer`
  display: flex;
  font-size: 0.7rem;
  position: fixed;
  justify-content: space-between;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.blue};
  width: 100%;
  padding: 0.4rem 0.6rem;
  border-top-right-radius: 0.9rem;
  border-top-left-radius: 0.9rem;
  z-index: 2;
`;

const FooterIcon = styled.span`
  font-size: 1.3rem;
`;

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
