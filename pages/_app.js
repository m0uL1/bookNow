import '../styles/globals.css'
import dynamic from 'next/dynamic'
import '@solana/wallet-adapter-react-ui/styles.css'

function MyApp({ Component, pageProps }) {
  const WalletConnectProvider = dynamic(
    () => import('../walletConnection/Provider'),
    { ssr: false },
  )

  return (
    <WalletConnectProvider>
      <Component {...pageProps} />
    </WalletConnectProvider>
  )
}

export default MyApp
