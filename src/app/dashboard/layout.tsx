import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import styles from './layout.module.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavigationBar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}