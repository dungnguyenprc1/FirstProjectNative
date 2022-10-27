import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  /* align-items: center; */
  padding-top: 8px;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 19px;
  padding-right: 15px;
  background-color: #fff;
`;
const Submit = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  background-color: ${props =>
    props.isValid === true ? props.theme.colors.cam : props.theme.colors.gray};
  border-radius: 8px;
  z-index: 0;
  margin-top: 77px;
  width: 83px;
  height: 40px;
`;
const Center = styled.View`
  z-index: -10;

  align-items: center;
`;
const WhiteText = styled.Text`
  color: #fff;
`;
const ContainerScroll = styled.ScrollView`
  background-color: #fff;
`;

export {Container, Submit, Center, WhiteText, ContainerScroll};
