import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1px;
  padding-left: 15px;
  background-color: #fff;
`;
export const Section = styled.View`
  background-color: #fff;
  flex: 1px;
  padding: 0 19px 0 15px;
`;

export const CoverInput = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-width: 1px;
  border-color: ${props => props.theme.colors.borderInput};
  border-radius: 4px;
  padding: 0 14px 0 8px;
`;
export const Touch = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 40px;
`;

export const SubmitText = styled.Text`
  border-color: ${props => props.theme.colors.borderInput};
  border-width: 1px;
  height: 40px;
  line-height: 40px;
  border-radius: 8px;
  padding: 0 8px;
`;
export const Input = styled.TextInput`
  height: 40px;
  flex: 1;
`;
export const WeekPassword = styled.Text`
  margin-top: 6px;
  color: red;
`;
export const MediumPassword = styled.Text`
  color: #feb466;
  margin-top: 6px;
`;
export const StrongPassword = styled.Text`
  color: green;
  margin-top: 6px;
`;
