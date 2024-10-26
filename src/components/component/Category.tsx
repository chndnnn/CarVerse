import '@fortawesome/fontawesome-free/css/all.min.css';

const carTypes = {
    sedan: {
      name: "Sedan",
      icon: "fa-car-side"  // Font Awesome icon
    },
    suv: {
      name: "SUV",
      icon: "fa-car"  // Font Awesome icon
    },
    coupe: {
      name: "Coupe",
      icon: "fa-car-alt"  // Font Awesome icon
    },
    truck: {
      name: "Truck",
      icon: "fa-truck"  // Font Awesome icon
    },
    van: {
      name: "Van",
      icon: "fa-shuttle-van"  // Font Awesome icon
    },
    hatchback: {
      name: "Hatchback",
      icon: "fa-car-rear"  // Font Awesome icon
    },
    sportsCar: {
      name: "Sports",
      icon: "fa-flag-checkered"  // Font Awesome icon
    },
    electric: {
      name: "Electric",
      icon: "fa-bolt"  // Font Awesome icon
    },
    hybrid: {
      name: "Hybrid",
      icon: "fa-leaf"  // Font Awesome icon
    }
  };
const Category = ()=>{
    return (
        <div>
          <ul className='grid md:grid-cols-9 grid-cols-3 md:gap-2 gap-1 md:p-4'>
            {Object.entries(carTypes).map(([key, car]) => (
              <li key={key} className='border border-solid flex flex-col justify-center items-center p-5 gap-3 text-lg rounded hover:text-sm cursor-pointer'>
                <i className={`fas ${car.icon}`}></i>
                <span>{car.name}</span>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default Category