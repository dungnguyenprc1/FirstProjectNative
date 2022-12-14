import styled from 'styled-components/native';

const NormalInput = styled.View`
  border-radius: 4px;
  border-width: 1px;
  height: 40px;
  padding: 0 10px;
  border-color: ${props =>
    props.error ? props.theme.colors.error : props.theme.colors.borderInput};
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Layout = styled.View`
  background-color: #ccc;
  width: 100%;
`;

const TextInputFlex = styled.TextInput`
  flex: 1;
`;
const TextError = styled.Text`
  color: red;
  margin-top: 8px;
`;
const OuterRadio = styled.TouchableOpacity`
  width: 14px;
  height: 14px;
  border-width: 1px;
  border-radius: 10px;
  /* background-color: #f4a31e; */
  background-color: ${props => (props.active ? '#f4a31e' : '#fff')};

  justify-content: center;
  align-items: center;
`;
const InnerRadio = styled.View`
  width: 7px;
  height: 7px;
  border-width: 1px;
  border-radius: 3px;
  background-color: ${props => (props.active ? '#fff' : null)}; ;
`;
const RowText = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 44px;
`;
const TextGentle = styled.Text`
  padding-left: 6px;
`;

export {
  TextGentle,
  NormalInput,
  Layout,
  TextError,
  OuterRadio,
  InnerRadio,
  RowText,
  TextInputFlex,
};
