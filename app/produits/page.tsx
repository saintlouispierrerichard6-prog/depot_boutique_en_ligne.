
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function ProduitsPage() {
  return (
    <main>
      <h1>Nos produits</h1>

      <div>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </main>
  );
}