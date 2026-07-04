import Link from "next/link";
import styles from "./page.module.css";

const projects = [
  {
    title: "Polito Appunti",
    description: "Trova, condividi e scarica appunti in modo semplice.",
    href: "https://polito-appunti.vercel.app",
    accentClass: styles.accentBlue,
  },
  {
    title: "Reviews ETF",
    description: "Leggi e lascia recensioni sui corsi e sui docenti.",
    href: "/reviews-etf",
    accentClass: styles.accentPurple,
  },
  {
    title: "Orientamento ETF",
    description: "Scopri il percorso universitario con strumenti pratici.",
    href: "/orient-etf",
    accentClass: styles.accentTeal,
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <div className={styles.hero}>
          <p className={styles.eyebrow}>Area ETF</p>
          <h1 className={styles.title}>Tutti i tuoi strumenti universitari in un solo posto.</h1>
          <p className={styles.description}>
            Scegli il progetto che ti interessa e accedi rapidamente ai contenuti più utili per lo studio e l’orientamento.
          </p>
        </div>

        <div className={styles.cards}>
          {projects.map((project) => (
            <Link key={project.title} href={project.href} className={styles.card}>
              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>{project.title}</h2>
                <p className={styles.cardText}>{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
