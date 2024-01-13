import MobileNav from './components/MobileNav'
import DesktopNav from './components/DesktopNav'
import Main from './components/Main'
const App = () => {
  return (
    <div className=' min-h-screen w-full text-[15px]'>
      <MobileNav />
      <DesktopNav />
      <Main />
    </div>
  )
}

export default App
