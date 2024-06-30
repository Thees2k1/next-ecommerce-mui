import Image from "next/image";
import styles from "./page.module.css";
import Counter from "@/components/counter";

export default function Home() {
  return (
    <main className={styles.main}>

      <section className={styles.center}>
       <Counter/>
      </section>

    </main>
  );
}
