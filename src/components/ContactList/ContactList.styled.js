import styled from 'styled-components';

export const List = styled.ul`
  display: block;
  height: 180px;
  overflow: auto;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  max-width: 260px;
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
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    color: #fff;
    background-color: red;
  }
`;
