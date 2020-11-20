import styled from 'styled-components/native';

export const Content = styled.View`
  padding: 20px 30px;
`;

export const SettingsMenu = styled.View``;

export const SettingsItemMenu = styled.View``;

export const Title = styled.Text`
  font-family: Comfortaa-Bold;
  font-size: 18px;
  color: #C8C8C8;

  margin-bottom: 5px;
`;

export const SettingsItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 10px 0;
  border-bottom-width: 0.25px;
  border-bottom-color: #C8C8C8;
`;

export const SettingsItemLabel = styled.Text`
  font-family: Comfortaa-Regular;
  font-size: 14px;
  color: #97A6D7;
`;

export const SettingsItemValue = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SettingsItemValueLabel = styled.Text`
  color: #FFF;
  margin-right: 5px;
`;
