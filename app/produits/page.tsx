
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import styles from "./Produits.module.css";

export default function ProduitsPage() {
  return (
    <main className={styles.pageProduits}>
      <h1>Nos produits</h1>

      <div className={styles.productsGrid}>
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