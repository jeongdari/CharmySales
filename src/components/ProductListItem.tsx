import { StyleSheet, Image, Text, View, Pressable } from 'react-native';
import Colors from '@/src/constants/Colors';
import { Product } from '@/src/types';
import { Link } from 'expo-router';

export const defaultImage = 'https://stackoverflow.com/does-not-exist.png';

type ProductListItemProps = {
    product: Product;
}

function ProductListItem({ product }: ProductListItemProps) {
    return (
        <Link href={`/menu/${product.id}`} asChild>
        <Pressable style={styles.container}>
            <Image
                source={{ uri: product.image || defaultImage}}
                style={styles.image}
                resizeMode="contain" />
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        </Pressable>
        </Link>
    );
}

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    overflow: 'hidden',
    flex: 1,
    maxWidth: '50%',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    alignSelf: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
    marginTop: 'auto',
  },
});