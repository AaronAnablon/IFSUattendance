import Head from "next/head";
import styles from '../styles/elements.module.css';
import { Link } from "react-router-dom";
import { IoIosPeople } from "react-icons/io";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Human</title>
        <meta name="description" content="Human: Demo with TypeScript/ReactJS/NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-4">
        <div className="col-span-1 grid h-screen justify-center">
          <div className="h-16 bg-white">
            <p className="py-4">Admin</p>
          </div>
          <div className="py-4">
            <Link href={"/"} className="flex px-4 gap-2 items-center justify-center"><IoIosPeople />MEMBERS</Link>
            <Link href={"/"} className="flex px-4 gap-2 items-center justify-center"><IoIosPeople />EVENTS</Link>
            <Link href={"/"} className="flex px-4 gap-2 items-center justify-center"><IoIosPeople />REPORTS</Link>
            <Link href={"/"} className="flex px-4 gap-2 items-center justify-center"><IoIosPeople />SETTINGS</Link>
          </div>
        </div>
        <div className="col-span-3">
          {children}
        </div>
      </div>
      <div className="fixed bottom-0">
        <footer className={styles.footer}>
          IFSU CCS DEPARTMENT
        </footer>
      </div>

    </div>
  );
};

export default Layout;
