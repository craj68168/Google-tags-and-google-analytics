import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className={styles.wrapper}>
      <Image src="/img/logo.png" width={40} height={40} alt="rupee" />
      <ul className={styles.list}>
        <li>
          <Link
            href="/"
            style={{ color: "#000", textDecoration: "none", fontSize: "22px" }}
            className={router.pathname === '/' ? styles.activeLink : ''}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            style={{ color: "#000", textDecoration: "none", fontSize: "22px" }}
            className={router.pathname === '/contact' ? styles.activeLink : ''}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            style={{ color: "#000", textDecoration: "none", fontSize: "22px" }}
            className={router.pathname === '/about' ? styles.activeLink : ''}
          >
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
