import {Text, View} from 'react-native';

export default function Category({category = {category: 'default'}}) {
  return (
    <Text
      style={{
        marginTop: 20,
        flexDirection: 'row',
        width: 100,
        fontWeight: 'bold',
      }}>
      {category}
    </Text>
  );
}
