const Main = () => {
  return (
    <main className='w-[90%] max-w-screen-xl mx-auto '>
      <div className='sm:flex justify-between  '>
        <div className='sm:w-[65%] sm:flex flex-col '>
          <div>
            <img className='sm:hidden' src='/images/image-web-3-mobile.jpg' />
            <img
              className=' hidden sm:block'
              src='/images/image-web-3-desktop.jpg'
            />
          </div>
          <div className='mt-5 sm:flex justify-between'>
            <div className='font-extrabold text-5xl'>
              <p>The Bright Future of Web 3.0?</p>
            </div>
            <div className=' flex flex-col justify-between '>
              <p className='text-QDarkgrayishblue sm:my-0 my-5'>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <div>
                <button className='bg-QSoftred text-QOffwhite font-semibold px-7 py-3 tracking-[5px] mb-12 sm:mb-0'>
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-QVerydarkblue text-QOffwhite p-6 sm:w-[33%]'>
          <h1 className='font-bold text-4xl text-QSoftorange mb-8'>New</h1>
          <h2 className='font-bold text-2xl'>Hydrogen VS Electric Cars</h2>
          <p className='mt-1 mb-6'>
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
          <hr />
          <h2 className='font-bold text-2xl mt-8'>
            The Downsides of AI Artistry
          </h2>
          <p className='mt-1 mb-6'>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
          <hr />
          <h2 className='font-bold text-2xl mt-8'>Is VC Funding Drying Up?</h2>
          <p className='mt-1 '>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
      <div className='mt-10 flex flex-col sm:flex-row gap-6'>
        <div className='flex justify-between items-center gap-4'>
          <div className=''>
            <img src='/images/image-retro-pcs.jpg' />
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='font-bold text-5xl text-QGrayishblue'>01</h1>
            <h2 className='font-extrabold text-2xl'>Reviving Retro PCs</h2>
            <p className='text-QDarkgrayishblue'>
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className='flex justify-between items-center gap-4'>
          <div>
            <img src='/images/image-top-laptops.jpg' />
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='font-bold text-5xl text-QGrayishblue'>02</h1>
            <h2 className='font-extrabold text-2xl'>Top 10 Laptops of 2022</h2>
            <p className='text-QDarkgrayishblue'>
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div className='flex justify-between items-center gap-4'>
          <div>
            <img src='/images/image-gaming-growth.jpg' />
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='font-bold text-5xl text-QGrayishblue'>03</h1>
            <h2 className='font-extrabold text-2xl'>The Growth of Gaming</h2>
            <p className='text-QDarkgrayishblue'>
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
