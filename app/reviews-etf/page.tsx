import style from "./page.module.css"
import './globals.css'
import { SearchPanel } from "./components/SearchPanel/SearchPanel";
import Link from "next/link";

export default async function Home() {

  return (
    <div className={style.page}>
      <SearchPanel with_text={true} />
      <div className={style.links}>
        <Link href="/reviews-etf/bachelor-courses" className={style.link}>
          Elettronica Triennale
      </Link>
        
      <Link href="/reviews-etf/master-courses" className={style.link}>
          Elettronica Magistrale
      </Link>
      </div>
    </div>
  );
}
