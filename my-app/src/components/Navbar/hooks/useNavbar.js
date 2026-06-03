import { useState, useCallback, useEffect } from 'react'

function useNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeHash, setActiveHash] = useState(() => window.location.hash || '')

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

      if (href === '#home') {
        const homeSection = document.getElementById('home')
        if (homeSection) {
          homeSection.scrollIntoView({ behavior: 'smooth' })
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
        window.history.replaceState(null, '', href)
      }
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
    if (!isMenuOpen) return

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
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

  return { isMenuOpen, activeHash, toggleMenu, closeMenu, handleNavClick }
}

export default useNavbar
