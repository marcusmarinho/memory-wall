import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 0px 0px 0px;
`;

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

export const HeartIcon = styled.button`
  width: 100%;
  padding: 12px 0 12px 0;
  font-size: 1.1rem;
  border: 4px solid #cdb4db;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;
  font-family: 'PixelifySans';
  font-size: 1.5rem;
  transition: 0.5s;

  &:hover {
    border-color: #ffafcc;
    background-color: #cdb4db;
  }
`;

export const SaveButton = styled.button`
  padding: 12px 6px 12px 6px;
  font-size: 1.1rem;
  border: 4px solid #cdb4db;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;
  font-family: 'PixelifySans';
  font-size: 1.5rem;
  transition: 0.5s;

  &:hover {
    border-color: #ffafcc;
    background-color: #cdb4db;
  }
`;
