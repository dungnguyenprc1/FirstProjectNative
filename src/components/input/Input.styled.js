import styled from 'styled-components/native';
// import { Controller } from 'react-hook-form';

const NormalInput = styled.View`
  border-radius: 4px;
  border-width: 1px;
  height: 40px;
  padding: 0 10px;
  border-color: #e5e5e5;
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Layout = styled.View`
  background-color: #ccc;
  width: 100%;
`;
const TextError = styled.Text`
  color: red;
  margin: 2px 0;
`;
const WrongInput = styled.View`
  border-radius: 4px;
  border-width: 1px;
  height: 40px;
  padding: 0 10px;
  border-color: #f44336;
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export {NormalInput, Layout, TextError, WrongInput};
