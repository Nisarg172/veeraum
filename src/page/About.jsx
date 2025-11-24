export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          About Us
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600 text-base sm:text-lg lg:text-xl">
          Founded with a vision to revolutionize facade solutions, Veeraum is
          led by industry experts committed to excellence and innovation.
        </p>

        <div className="mt-12 flex">
          <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl shadow hover:shadow-lg transition w-full">

            <img
              src="founder.jpeg"
              className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 mx-auto rounded-full object-cover"
            />

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-4">
              Sanjay Dankhara
            </h3>

            <p className="text-gray-600 text-sm sm:text-base">
              Founder
            </p>

            <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              My objective is to help business owners find the right fit for their needs so they can focus on growing their business while I handle the rest. 
              With extensive experience from various companies, I have gained deep expertise in providing the right solutions. 
              My mission is to offer value-driven products and services that enhance customer experience and business growth.
            </p>

            <div className="mt-6 text-left sm:text-center space-y-2">
              <p className="text-gray-700 text-sm sm:text-base flex justify-center items-center gap-2">
                <span className="font-semibold">📞 Mobile:</span>
                <a href="tel:+918980746245" className="text-blue-600 underline">
                  +91 9737003153
                </a>
              </p>

              <p className="text-gray-700 text-sm sm:text-base flex justify-center items-center gap-2">
                <span className="font-semibold">📧 Email:</span>
                <a
                  href="mailto:sanjaydankhara322@gmail.com"
                  className="text-blue-600 underline"
                >
                  sanjay@veeraum.com
                </a>
              </p>
            </div>

            <a
              href="https://www.linkedin.com/in/sanjay-dankhara-273b818b/"
              target="_blank"
              className="text-blue-600 underline mt-5 inline-block text-sm sm:text-base"
            >
              LinkedIn Profile
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
