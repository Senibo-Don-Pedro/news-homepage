import { useState, useEffect, useRef } from 'react'

const MobileNav = () => {
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)

  const handleMenu = () => setOpen(!open)

  const handleOutsideClick = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setOpen(false)
    }
  }

  useEffect(() => {
    if (open) {
      window.addEventListener('click', handleOutsideClick)
    } else {
      window.removeEventListener('click', handleOutsideClick)
    }

    return () => {
      window.removeEventListener('click', handleOutsideClick)
    }
  }, [open])

  return (
    <nav
      ref={navRef}
      className={`w-[90%] max-w-screen-xl mx-auto  flex justify-between items-center sm:hidden py-6`}
    >
      <div className='w-10'>
        <img className='w-full' src='/images/logo.svg' alt='icon' />
      </div>
      <button className='w-8 sm:hidden ' onClick={handleMenu}>
        {!open ? (
          <img src='/images/icon-menu.svg' />
        ) : (
          <img src='/images/icon-menu-close.svg' />
        )}
      </button>
      {open && (
        <div className='absolute z-10 top-0 right-0 bg-white w-[30vh] h-screen sm:hidden shadow-2xl '>
          <div className='flex justify-end mr-7 mt-7'>
            <button onClick={handleMenu}>
              <img src='/images/icon-menu-close.svg' />
            </button>
          </div>
          <ul className='mt-28 ml-8 flex flex-col gap-5 text-xl text-QDarkgrayishblue font-medium'>
            <li className='cursor-pointer' onClick={handleMenu}>
              Home
            </li>
            <li onClick={handleMenu} className='cursor-pointer'>
              New
            </li>
            <li onClick={handleMenu} className='cursor-pointer'>
              Popular
            </li>
            <li onClick={handleMenu} className='cursor-pointer'>
              Trending
            </li>
            <li onClick={handleMenu} className='cursor-pointer'>
              Categories
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default MobileNav
