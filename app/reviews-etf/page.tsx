import style from "./page.module.css"
import './globals.css'
import { SearchPanel } from "./components/SearchPanel/SearchPanel";
import Link from "next/link";

export default async function Home() {

  return (
    <div className={style.page}>
      <SearchPanel with_text={true} />
      <Link href="/reviews-etf/bachelor-courses">Elettronica triennale</Link>
      <Link href="/reviews-etf/master-courses">Elettronica magistrale</Link>
    </div>
  );
}
