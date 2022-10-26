import styled from 'styled-components/native';

const NormalInput = styled.View`
  border-radius: 4px;
  border-width: 1px;
  height: 40px;
  padding: 0 10px;
  border-color: ${props => (props.error ? '#f44336' : '#e5e5e5')};
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
  margin-top: 8px;
`;

export {NormalInput, Layout, TextError};
