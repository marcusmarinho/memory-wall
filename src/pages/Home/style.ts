import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 0px 0px 0px;
`;

export const FileUpload = styled.input`
  width: 100%;
  margin: 10px 0;
  border-radius: 8px;
  font-size: 1.5rem;
  background-color: #ffffff;
  font-family: 'PixelifySans';
  cursor: pointer;
  &:hover {
    /* background-color: #79b473;
    color: #ffffff; */
  }
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
