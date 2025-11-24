import { Building2 } from "lucide-react";

export default function Products() {
  const products = [
    {
      title: "HPL Compact Laminate",
      desc: "High-pressure, durable laminate ideal for exterior facades.",
      features: ["Weatherproof", "Scratch resistant", "Fire rated"],
    },
    {
      title: "Thermo Pine Wood",
      desc: "Eco-friendly thermally modified pine for natural wood facades.",
      features: ["Eco friendly", "Moisture stable", "Natural look"],
    },
    {
      title: "Fibre Cement Board",
      desc: "Strong, sustainable and non-combustible façade material.",
      features: ["Fire resistant", "Termite proof", "Long lifespan"],
    },
    {
      title: "Metal Facade Panels",
      desc: "Premium metal exterior panels for modern architectural designs.",
      features: ["Corrosion resistant", "Lightweight", "Custom colors"],
    },
    {
      title: "Terracotta Panels",
      desc: "Natural clay-based premium façade solution.",
      features: ["UV stable", "Sustainable", "Elegant appearance"],
    },
    {
      title: "Aluminium Louvers",
      desc: "Modern aluminium louvers with excellent ventilation performance.",
      features: ["Ventilation control", "Weather resistant", "Lightweight"],
    },
  ];

  return (
    <section
      id="products"
      className="
        w-full 
        bg-white 
        py-16 sm:py-20 md:py-24 
        px-4 sm:px-6 lg:px-12
      "
    >
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Our Products
        </h2>
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl">
          Explore our full range of premium facade materials designed for
          superior performance.
        </p>
      </div>

      {/* Product Grid */}
      <div
        className="
          max-w-7xl mx-auto 
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-8 sm:gap-10 lg:gap-12
        "
      >
        {products.map((item, index) => (
          <div
            key={index}
            className="
              p-6 sm:p-8 
              rounded-2xl 
              shadow-sm 
              hover:shadow-xl 
              transition 
              bg-white 
              border border-gray-100
            "
          >
            {/* Icon Box */}
            <div
              className="
                w-12 h-12 
                sm:w-14 sm:h-14 
                bg-black text-white 
                flex items-center justify-center 
                rounded-xl 
                mb-6 
                shadow
              "
            >
              <Building2 size={26} className="sm:hidden" />
              <Building2 size={30} className="hidden sm:block" />
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-4">
              {item.desc}
            </p>

            {/* Features */}
            <p className="font-semibold text-sm sm:text-base">Key Features:</p>
            <ul className="text-gray-700 space-y-1 text-sm sm:text-base">
              {item.features.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
