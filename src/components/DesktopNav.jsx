const DesktopNav = () => {
  return (
    <nav className='w-[90%] max-w-screen-xl mx-auto sm:flex justify-between items-center hidden my-8 '>
      <div className='w-10'>
        <img className='w-full' src='/images/logo.svg' alt='icon' />
      </div>
      <ul className='sm:flex gap-10 hidden text-QDarkgrayishblue '>
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
    </nav>
  )
}

export default DesktopNav
