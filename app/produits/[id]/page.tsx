import styles from "./ProductDetail.module.css";
import { products } from "@/data/products";
import Image from "next/image";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetailsPage({ params }: PageProps) {
  const { id } = await params;

  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return <h1>Produit introuvable</h1>;
  }

  return (
    <main className={styles.detailPage}>
      <h1>{product.nom}</h1>

      <Image
        src={product.image}
        alt={product.nom}
        width={400}
        height={400}
      />

      <p>{product.description}</p>

      <p>{product.prix} $</p>

      <h2>Variantes disponibles</h2>
      <ul>
        {product.variantes.map((variante) => (
          <li key={variante}>{variante}</li>
        ))}
      </ul>

      <button className={styles.cartButton}>
            Ajouter au panier
      </button>
    </main>
  );
}