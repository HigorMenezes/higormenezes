import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  max-width: 40rem;
  padding: 1.5rem 1rem 0.5rem 1rem;
  margin-top: calc(var(--headerHeight) + var(--navbarHeight));
  margin-bottom: var(--footerHeight);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
