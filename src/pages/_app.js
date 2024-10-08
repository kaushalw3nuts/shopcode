import "@/styles/globals.css";
import 'remixicon/fonts/remixicon.css';

export default function App({ Component, pageProps }) {

  return (
    <main className="main_wrap">
      <Component {...pageProps} />
    </main>
  )
}
