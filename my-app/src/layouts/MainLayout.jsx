import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import './MainLayout.css'

function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <div className="main-layout__grid" aria-hidden="true" />
      <div className="main-layout__glow main-layout__glow--top" aria-hidden="true" />
      <div className="main-layout__glow main-layout__glow--bottom-right" aria-hidden="true" />
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
