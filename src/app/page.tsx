import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

export default async function Home() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  const products: Product[] = data.products;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <Link href={`/products/${product.id}`} key={product.id} className="border p-2 text-center rounded-sm">
          <img src={product.thumbnail} alt={product.title} className="h-40 object-cover w-full" />
          <h2 className="font-bold text-lg">{product.title}</h2>
          <p>₹ {product.price}</p>
        </Link>
      ))}
    </div>
  );
}
