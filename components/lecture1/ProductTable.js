import Category from './Category';
import Product from './Product';
import {Text, View} from 'react-native';

export default function ProductTable({products}) {
  const rows = [];
  let lastCat = null;
  products.forEach(product => {
    if (product.category !== lastCat) {
      rows.push(
        <Category category={product.category} key={product.category} />,
      );
    }
    rows.push(<Product product={product} key={product.name} />);
    lastCat = product.category;
  });
  return (
    <View style={{marginTop: 10}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{flex: 1, fontWeight: 'bold'}}>名称</Text>
        <Text style={{width: 50, fontWeight: 'bold'}}>价格</Text>
      </View>
      <View>{rows}</View>
    </View>
  );
}
