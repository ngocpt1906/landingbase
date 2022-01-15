import '../styles/globals.css';
import StoreProvider from "../stores/context";

const MyApp = ({ Component, pageProps, store }) => {
  return <StoreProvider><Component {...pageProps} /></StoreProvider>
}

export default MyApp;