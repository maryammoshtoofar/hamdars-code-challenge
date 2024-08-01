import styled from "styled-components";

export const StyledFooterItem = styled.div`
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
export const StyledFooter = styled.footer`
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

export const FooterIcon = styled.span`
  font-size: 1.3rem;
`;
