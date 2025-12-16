import { products } from "@/data/products";

export default function HomePage() {
  return (
    <>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <img
            src="/logo.png"
            alt="Digital Store App"
            style={styles.logo}
          />
          <span style={styles.appName}>Digital Store App</span>
        </div>
      </header>
      {/* Content */}
      <main style={styles.container}>
        <h2 style={styles.subtitle}>متجر المنتجات الرقمية</h2>
        <div style={styles.grid}>
          {products.map((product) => (
            <div key={product.id} style={styles.card}>
              <h2 style={styles.productTitle}>{product.title}</h2>
              <p style={styles.description}>{product.description}</p>

              <div style={styles.footer}>
                  {product.price} {product.currency === "EGP" ? "جنيه" : ""}

                <a
                  href={`https://wa.me/201021732703?text=${encodeURIComponent(
                 product.whatsappText
                   )}`}
               target="_blank"
                   rel="noopener noreferrer"
              style={styles.button}
                >
              اطلب عبر واتساب
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
const styles: any = {
  header: {
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    height: "64px",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
  },
  headerContent: {
    maxWidth: "1200px",
    width: "100%",
    margin: "0 auto",
    padding: "0 16px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    direction: "rtl",
  },
  logo: {
    width: "36px",
    height: "36px",
    borderRadius: "8px",
  },
  appName: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  container: {
    padding: "96px 16px 24px", // مهم عشان الهيدر الثابت
    maxWidth: "1200px",
    margin: "auto",
    fontFamily: "system-ui, -apple-system",
  },
  subtitle: {
    textAlign: "right",
    color: "#6b7280",
    marginBottom: "20px",
    fontSize: "14px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "16px",
  },
  card: {
    borderRadius: "14px",
    padding: "16px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
  },
  productTitle: {
    fontSize: "18px",
    marginBottom: "8px",
    textAlign: "right",
  },
  description: {
    fontSize: "14px",
    color: "#4b5563",
    lineHeight: "1.6",
    textAlign: "right",
  },
  footer: {
    marginTop: "14px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    direction: "rtl",
    gap: "10px",
  },
  price: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#2563eb",
    color: "#ffffff",
    padding: "10px 16px",
    borderRadius: "10px",
    textDecoration: "none",
    fontSize: "14px",
    textAlign: "center",
  },
};
