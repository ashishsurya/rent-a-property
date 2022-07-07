import '../styles/globals.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

function MyApp({ Component, pageProps }) {
  return (
    <div className=''>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
