import styled from 'styled-components';

export const List = styled.ul``;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border: black solid 1px;
  border-radius: 4px;
  padding: 6px;
`;

export const Contact = styled.p`
  font-size: 16px;
`;

export const Button = styled.button`
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;

  :hover {
    color: #fff;
    background-color: red;
  }
`;
