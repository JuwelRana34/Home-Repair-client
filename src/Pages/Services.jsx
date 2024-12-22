import ServiceCard from "../Components/ServiceCard"


function Services() {

  return (
    <div className="container mx-auto px-4 py-6">
    <h2 className="text-2xl text-center font-bold mb-4">Our Services</h2>
    {/* {services.map((service) => (
      <div
        key={service.id}
        className="flex flex-col md:flex-row items-start border border-gray-200 rounded-lg p-4 mb-4 shadow-md"
      >
        <img
          src={service.image}
          alt={service.name}
          className="w-full md:w-1/4 h-40 object-cover rounded-lg"
        />
        <div className="flex-grow md:ml-4 mt-4 md:mt-0">
          <h3 className="text-xl font-semibold">{service.name}</h3>
          <p className="text-gray-600 my-2">
            {service.description.length > 100
              ? `${service.description.slice(0, 100)}...`
              : service.description}
          </p>
          <p className="text-gray-800 font-medium">Area: {service.area}</p>
          <p className="text-gray-800 font-medium">Price: ${service.price}</p>
          <button
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => console.log("View Details clicked", service.id)}
          >
            View Details
          </button>
        </div>
        <div className="flex items-center mt-4 md:mt-0 md:ml-auto">
          <img
            src={service.provider.image}
            alt={service.provider.name}
            className="w-10 h-10 rounded-full"
          />
          <span className="ml-2 text-gray-800 font-medium">
            {service.provider.name}
          </span>
        </div>
      </div>
    ))} */}

<label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <kbd className="kbd kbd-sm">⌘</kbd>
  <kbd className="kbd kbd-sm">K</kbd>
</label>

    <ServiceCard/>
    <ServiceCard/>
    <ServiceCard/>
  </div>
  )
}

export default Services