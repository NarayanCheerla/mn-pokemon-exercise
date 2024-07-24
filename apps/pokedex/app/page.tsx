import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import {add} from "utils";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Button appName="Pokedex" className={styles.secondary}>
          Open alert {add(5,8)}
        </Button>
      </main>
    </div>
  );
}
