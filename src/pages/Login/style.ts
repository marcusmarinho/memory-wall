import styled from 'styled-components';

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
  border: 4px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #fafafa;

  &:focus {
    border-color: #70a37f;
    outline: none;
  }
`;

export const Button = styled.button`
  width: 50%;
  padding: 12px 0 12px 0;
  background-color: #70a37f;
  color: white;
  font-size: 1.1rem;
  border: 4px solid #70a37f;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #79b473;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  text-align: center;
`;
