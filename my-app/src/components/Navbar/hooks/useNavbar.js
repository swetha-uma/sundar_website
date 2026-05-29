import { useState, useCallback, useEffect } from 'react'

const SCROLL_THRESHOLD = 50

function useNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeHash, setActiveHash] = useState(() => window.location.hash || '')
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  const handleNavClick = useCallback(
    (href) => {
      setActiveHash(href)
      closeMenu()
    },
    [closeMenu]
  )

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash || '')
    }

    window.addEventListener('hashchange', updateHash)
    return () => window.removeEventListener('hashchange', updateHash)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return

    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMenuOpen])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return { isMenuOpen, activeHash, isScrolled, toggleMenu, closeMenu, handleNavClick }
}

export default useNavbar
