/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View} from 'react-native';
import Product from './Product';
import ProductTable from './ProductTable';

const PRODUCTS = [
  {category: '水果', price: '￥1', name: 'PingGuo'},
  {category: '水果', price: '￥1', name: 'HuoLongGuo'},
  {category: '水果', price: '￥2', name: 'BaiXiangGuo'},
  {category: '蔬菜', price: '￥2', name: 'BoCai'},
  {category: '蔬菜', price: '￥4', name: 'NanGua'},
  {category: '蔬菜', price: '￥1', name: 'WanDou'},
];
const App: () => Node = () => {
  return (
    <View>
      <ProductTable products={PRODUCTS} />
    </View>
  );
};

export default App;
