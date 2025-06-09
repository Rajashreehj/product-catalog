import AddToCartButton from "@/app/components/AddToCartButton";
import { notFound } from 'next/navigation';
import { useCart } from '../../context/CartContext';

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    thumbnail: string;
  }

export default async function ProductPage ({params} : {params : {id: number}}) {
    const res = await fetch(`https://dummyjson.com/products/${params.id}`);

    const product: Product = await res.json();

    return (
        <div className="max-w-xl mx-auto text-center">
          <img src={product.thumbnail} alt={product.title} className="w-full h-64 object-cover" />
          <h1 className="text-2xl font-bold my-2">{product.title}</h1>
          <p>{product.description}</p>
          <p className="font-bold text-xl">₹ {product.price}</p>
          <AddToCartButton product={product} />
        </div>
      );
}