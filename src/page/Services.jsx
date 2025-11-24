export default function Services() {
  return (
    <section
      id="services"
      className="
        py-16 sm:py-20 md:py-24 
        bg-gray-50
      "
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
          Our Services
        </h2>

        {/* Services Grid */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            gap-6 sm:gap-8 lg:gap-10
          "
        >
          {/* CARD 1 */}
          <div
            className="
              p-6 sm:p-8 
              bg-white 
              rounded-xl 
              shadow 
              hover:shadow-xl 
              transition 
            "
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
              Material Supply
            </h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base lg:text-lg">
              High-quality facade materials delivered.
            </p>
          </div>

          {/* CARD 2 */}
          <div
            className="
              p-6 sm:p-8 
              bg-white 
              rounded-xl 
              shadow 
              hover:shadow-xl 
              transition 
            "
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
              Consultation
            </h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base lg:text-lg">
              Expert advice on selecting facade materials.
            </p>
          </div>

          {/* CARD 3 */}
          <div
            className="
              p-6 sm:p-8 
              bg-white 
              rounded-xl 
              shadow 
              hover:shadow-xl 
              transition 
            "
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
              Project Support
            </h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base lg:text-lg">
              End-to-end technical guidance for installation.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
