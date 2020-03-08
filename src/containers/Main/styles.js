import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  max-width: 820px;
  padding: 1.5rem 1.3125rem 2rem;
  margin-top: calc(var(--headerHeight) + var(--navbarHeight));
  margin-bottom: var(--footerHeight);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
