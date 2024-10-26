const SectionComponent = ()=>{
    return<section>
    <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 md:h-[500px] h-[650px] lg:px-8 ">
      <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2 ">
        <div className="relative z-10 lg:py-16 ">
          <div className="relative h-44 sm:h-80 lg:h-full ">
            <img
              alt=""
              src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202312/658e5b5ebba32-xiaomi-su7-ev-to-take-on-tesla-293837105-16x9.jpg?size=948:533"
              className="absolute inset-0 object-cover rounded"
            />
          </div>
        </div>
  
        <div className="relative flex items-center bg-gray-100 border border-solid md:h-96">
          <span
            className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
          ></span>
  
          <div className="p-8 sm:p-16 lg:p-24">
            <h2 className="text-2xl font-bold sm:text-3xl">
            <u>Carverse</u> is your gateway to the world of automobiles, where innovation meets convenience.
            </h2>
  
            <p className="mt-4 text-gray-600">
            Whether you're searching for your dream car or looking to stay ahead of the curve with the latest automotive trends, Carverse offers an unparalleled experience.
            </p>
  
            <a
              href="#"
              className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default SectionComponent