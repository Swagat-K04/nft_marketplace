import Script from 'next/script';
import { ThemeProvider } from 'next-themes';

import '../styles/globals.css';
import { Footer, Navbar } from '../components';

const App = ({ Component, pageProps }) => (

  <ThemeProvider attribute="class" defaultTheme="light">
    <div className="dark:bg-nft-dark bg-white min-h-screen">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
    <Script src="https://kit.fontawesome.com/a59328838e.js" crossorigin="anonymous" />
  </ThemeProvider>
);

export default App;
