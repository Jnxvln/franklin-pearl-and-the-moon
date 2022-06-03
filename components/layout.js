import Navbar from '../components/ui/navbar'
import Footer from '../components/ui/footer'

export default function Layout({ children }) {
  return (
    <div style={{ position: 'relative', minHeight: "100vh" }}>
      <Navbar />
      <main style={{ paddingBottom: '7em' }}>{children}</main>
      <Footer />
    </div>
  )
}