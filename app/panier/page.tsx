import styles from "./Panier.module.css";

export default function PanierPage() {
  return (
    <main className={styles.panierPage}>
      <h1>Mon panier</h1>

      <p className={styles.panierMessage}>
        Aucun produit dans le panier.
      </p>
    </main>
  );
}