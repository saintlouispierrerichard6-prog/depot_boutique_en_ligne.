
import Image from "next/image";
import { Product } from "@/data/products";
import Link from "next/link";
import styles from "./ProductCard.module.css";


type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div  className={styles.productCard}>
      <Image
        src={product.image}
        alt={product.nom}
        width={250}
        height={250}
      />

         <h2>{product.nom}</h2>

         <p>{product.description}</p>

         <p>{product.prix} $</p>

            <Link
                 href={`/produits/${product.id}`}
                 className={styles.detailsButton}
                >
                    
                Voir détails

            </Link>
    </div>
  );
}