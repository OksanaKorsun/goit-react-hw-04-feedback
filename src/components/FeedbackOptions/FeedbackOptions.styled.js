import styled from 'styled-components';
export const ButtonSection = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  margin-bottom: 40px;
`;
export const Button = styled.button`
  width: 120px;
  height: 50px;
  font-size: 18px;
  color: #fff; 
  background-color: #f79dcf;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #f76cb9;
  }
`;
