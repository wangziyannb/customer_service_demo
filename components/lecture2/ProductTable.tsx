import {useEffect, useState} from "react";
import {Text, View} from "react-native";
import ProductRow from "./ProductRow";

enum RequestStatus {
    IDLE = 'IDLE',
    PENDING = 'PENDING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
}

interface Product {
    name: string;
    price: string;
    id: string;
    count: number;
}

type Products = Product[]
export default function ProductTable() {
    const requestApi = 'https://635076e83e9fa1244e4707f7.mockapi.io/products'
    const [products, setProducts] = useState<Products>([])
    const [requestStatus, setRequestStatus] = useState<RequestStatus>(RequestStatus.IDLE)
    const total = products.reduce((sum, product) => {
        return sum + product.count * Number(product.price)
    }, 0)
    useEffect(() => {
        setRequestStatus(RequestStatus.PENDING)
        fetch(requestApi)
            .then(res => {
                return res.json()
            })
            .then((products: Products) => {
                setRequestStatus(RequestStatus.SUCCESS);
                console.log(products["products"])
                setProducts(products["products"]);
            })
            .catch(() => {
                setRequestStatus(RequestStatus.PENDING)
            })
    }, [])
    const getUpdatedProducts = (product: Product) => {
        const newProducts = [...products]
        for (let i = 0; i < newProducts.length; i++) {
            if (newProducts[i].id === product.id) {
                newProducts[i] = product
            }
        }
        return newProducts
    }
    const handleInc = (product: Product) => {
        const newProduct: Product = {...product, count: product.count + 1}
        const newProducts: Products = getUpdatedProducts(newProduct)
        setProducts(newProducts)
    }
    const handleDec = (product: Product) => {
        const newProduct: Product = {...product, count: product.count > 0 ? product.count - 1 : 0}
        const newProducts: Products = getUpdatedProducts(newProduct)
        setProducts(newProducts)
    }
    if (requestStatus === RequestStatus.ERROR) {
        return <Text>网络出错了</Text>;
    }
    if (requestStatus === RequestStatus.PENDING) {
        return <Text>加载中...</Text>;
    }
    return (
        <View style={{marginTop: 10}}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{flex: 1, fontWeight: 'bold'}}>名称</Text>
                <Text style={{flex: 1, fontWeight: 'bold'}}>价格</Text>
                <Text style={{alignSelf: 'flex-end', fontWeight: 'bold'}}>数量</Text>
            </View>
            <View>
                {products.map(product => (
                    <ProductRow
                        handleIncrement={handleInc}
                        handleDecrement={handleDec}
                        product={product}
                        key={product.id}
                    />
                ))}
            </View>
            <Text style={{marginTop: 30, fontWeight: 'bold'}}>总价:{total}</Text>
        </View>
    );
}
