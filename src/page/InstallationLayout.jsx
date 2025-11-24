export default function InstallationLayout() {
  return (
    <section
      id="installation-layout"
      className="py-16 sm:py-20 md:py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="
            text-3xl sm:text-4xl lg:text-5xl 
            font-bold text-center mb-8
          "
        >
          Installation & Layout
        </h2>

        {/* Responsive Grid */}
        <div
          className="
            grid 
            grid-cols-1 
            md:grid-cols-2 
            gap-10 sm:gap-12 lg:gap-16 
            items-center
          "
        >
          {/* Left Text Section */}
          <div>
            <h3
              className="
                text-xl sm:text-2xl lg:text-3xl 
                font-semibold 
                mb-4
              "
            >
              PROFESSIONAL INSTALLATION BY AN EXPERIENCED TEAM
            </h3>

            <p
              className="
                text-gray-700 
                text-sm sm:text-base lg:text-lg 
                leading-relaxed
                text-justify
              "
            >
              We install the facade elements we manufacture, including all
              accessories from other trades, using precisely defined processes.
              Under the supervision of an experienced team leader, our trained
              teams of qualified employees install all components quickly,
              professionally and within the specified time frame – even during
              ongoing operations.
            </p>
          </div>

          {/* Image Section */}
          <div>
            <img
              src="/in.jpg"
              className="
                w-full 
                h-60 sm:h-72 md:h-80 lg:h-[420px] 
                rounded-xl 
                shadow-lg 
                object-cover
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
