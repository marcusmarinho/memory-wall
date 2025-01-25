import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 1);
  width: 80%;
  max-width: 400px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 0 12px 0;
  margin: 10px 0;
  border: 4px solid #cdb4db;
  font-family: 'PixelifySans';
  font-size: 1.5rem;
  border-radius: 8px;
  background-color: #fafafa;
  text-align: center;
  transition: 0.5s;
  &:hover {
    border-color: #ffafcc;
    outline: none;
  }
`;

export const Button = styled.button`
  width: 50%;
  padding: 12px 0 12px 0;
  font-size: 1.1rem;
  border: 4px solid #cdb4db;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;
  font-family: 'PixelifySans';
  font-size: 1.5rem;
  transition: 0.5s;
  background-color: #fafafa;
  &:hover {
    border-color: #ffafcc;
    background-color: #cdb4db;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  text-align: center;
`;
