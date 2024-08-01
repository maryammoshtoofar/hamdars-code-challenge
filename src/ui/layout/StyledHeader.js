import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 100;
  gap: 0.5rem;
  font-size: 1.25rem;
  text-align: center;
  padding: 1rem 1.2rem;
  -webkit-box-shadow: -1px 11px 8px -4px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: -1px 11px 8px -4px rgba(0, 0, 0, 0.05);
  box-shadow: -1px 11px 8px -4px rgba(0, 0, 0, 0.05);
`;

export const Item = styled.span`
  padding: 0.2rem;
  display: flex;
  align-items: center;
  color: ${({ theme, color }) => theme.colors[color]};
  font-size: 1.5rem;
  gap: 0.2rem;
`;

export const SubItem = styled.span`
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
