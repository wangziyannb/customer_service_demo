import {View, StyleSheet, Text, Button} from "react-native";

export default function ProductRow({product, handleIncrement, handleDecrement, key}) {
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
                borderBottomWidth: StyleSheet.hairlineWidth,
            }}>
            <Text style={{flex: 1}}>{product.name}</Text>
            <Text style={{flex: 1}}>{product.price}</Text>
            <View
                style={{
                    alignSelf: 'flex-end',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Button hitSlop={10} onPress={()=>handleDecrement(product)} title="-">

                </Button>
                <Text>{product.count}</Text>
                <Button hitSlop={10} onPress={()=>handleIncrement(product)} title="+">

                </Button>

            </View>
        </View>
    )
}
