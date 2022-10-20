import {View, StyleSheet, Text, Button, Image} from "react-native";
import {useEffect} from "react";

export default function ProductRow({product, handleIncrement, handleDecrement, key}) {

    useEffect(() => {
        console.log(product.src)
    })
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
                borderBottomWidth: StyleSheet.hairlineWidth,
            }}>
            <Image onError={(e) => console.log(e.nativeEvent.error)} style={{width: 100, height: 100}}
                   source={{uri: product.src}}/>
            <Text style={{flex: 1}}>{product.name}</Text>
            <Text style={{flex: 1}}>{product.price}</Text>
            <View
                style={{
                    // alignSelf: 'flex-end',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Button hitSlop={10} onPress={() => handleDecrement(product)} title="-">

                </Button>
                <Text>{product.count}</Text>
                <Button hitSlop={10} onPress={() => handleIncrement(product)} title="+">

                </Button>

            </View>
        </View>
    )
}
