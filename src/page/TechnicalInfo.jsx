export default function TechnicalInfo() {
  return (
    <section
      id="technical-info"
      className="py-16 sm:py-20 md:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Technical Information
          </h2>

          <p className="text-gray-600 text-base sm:text-lg lg:text-xl">
            Rear-ventilated curtain wall façades – number one worldwide
          </p>
        </div>

        {/* Content Block */}
        <div className="bg-gray-50 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 mb-12 sm:mb-14">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-gray-800">
            Rear-ventilated curtain wall façades – number one worldwide
          </h3>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg text-justify">
            Our vitreous enamel panels, aluminium and glass façades are installed
            as rear-ventilated curtain wall façades – justifiably the most
            successful façade construction in the world. Rear-ventilated curtain
            wall façades are an effective choice, thanks to their design,
            technology, cost-effectiveness and sustainability, as the specialist
            portal for rear-ventilated curtain wall façades impressively
            demonstrates.
          </p>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center mb-8 sm:mb-10">
          Mounting Systems for Rear-Ventilated Curtain Wall Facades
        </h3>

        {/* Responsive Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="w-full h-52 sm:h-60 md:h-64 lg:h-72 overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={`/ti-img${i}.jpg`}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
                alt={`Technical Image ${i}`}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
