import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;

  @media (min-width: 600px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 6rem;
  }
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 20px;

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
