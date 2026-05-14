// Scroll fade-up animation observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  },
  { threshold: 0.1 }
)

document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))

// Mobile hamburger menu (public pages only)
const mobileMenuBtn = document.getElementById('mobile-menu-btn')
const mobileMenu = document.getElementById('mobile-menu')
const menuIcon = document.getElementById('menu-icon')

if (mobileMenuBtn && mobileMenu) {
  const openMenu = () => {
    mobileMenu.classList.remove('hidden')
    if (menuIcon) menuIcon.textContent = 'close'
    document.body.style.overflow = 'hidden'
  }
  const closeMenu = () => {
    mobileMenu.classList.add('hidden')
    if (menuIcon) menuIcon.textContent = 'menu'
    document.body.style.overflow = ''
  }

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.contains('hidden') ? openMenu() : closeMenu()
  })

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu)
  })
}
