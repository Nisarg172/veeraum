export default function GlobalPortfolio() {
  const items = [
    { src: "/dp-img1.jpg", title: "U-Bahn-Station Hamburg Harburg" },
    { src: "/gp-img2.jpg", title: "UBA Schweden" },
    { src: "/gp-img3.jpg", title: "Station Bayrischer Platz Berlin" },
    { src: "/gp-img4.jpg", title: "Ladentheke Eberle" },
    { src: "/gp-img5.jpg", title: "Zeitstrahl Mittweida" },
    { src: "/gp-img6.jpg", title: "Beschilderung Oelsnitz" },
    { src: "/gp-img7.jpg", title: "Waschbecken Sir Robert" },
    { src: "/gp-img8.jpg", title: "Kübler & Essig" },
    { src: "/gp-img9.jpg", title: "Bankstation London" },
    {
      src: "/gp-img10.jpg",
      title: "Wandbekleidung CIGL Zentrum Gießen Gießen",
    },
    {
      src: "/gp-img11.jpg",
      title: "Wandbekleidung im Freilichtmuseum Molfsee",
    },
    {
      src: "/gp-img12.jpg",
      title:
        "Wandbekleidung Überbetriebliches Bildungszentrum IHK Ostwürtemberg, Aalen",
    },
    {
      src: "/gp-img13.jpg",
      title:
        "Attikaverkleidung Ludwig-Weber-Schule Frankfurt a. M., Deutschland",
    },
    {
      src: "/gp-img14.jpg",
      title: "Wandbekleidung im Max-Planck-Institut Hamburg, Deutschland",
    },
    {
      src: "/gp-img15.jpg",
      title: "Tunnelwandbekleidung Bergisel, Österreich",
    },
    { src: "/gp-img16.jpg", title: "Anhalter Bahnhof, Berlin" },
    { src: "/gp-img17.jpg", title: "Eurotheum Frankfurt a.M." },
    { src: "/gp-img18.jpg", title: "Neubau der Feuerwache in Rheine" },
    { src: "/gp-img19.jpg", title: "Elbtunnel Hamburg" },
    {
      src: "/gp-img20.jpg",
      title: "The Music Box Union Street London, England",
    },
  ];

  return (
    <section id="installation" className="py-16 md:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            GLOBAL PORTFOLIO
          </h2>

          <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-4">
            Our portfolio spans the globe and includes hundreds of projects —
            underground stations, façade designs for shopping malls, museums,
            commercial buildings, tunnels, subways and medical applications.
          </p>

          <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
            Our architectural cladding is used worldwide across different
            climates — from extreme heat to salty coastal air — ensuring
            durability and long-term performance.
          </p>
        </div>

        {/* Responsive Grid */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-6
            sm:gap-8
          "
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="
                relative 
                rounded-xl 
                overflow-hidden 
                shadow-md 
                hover:shadow-xl 
                transition 
                group
              "
            >
              {/* Image */}
              <img
                src={item.src}
                className="
                  w-full 
                  h-48 
                  sm:h-56 
                  md:h-60 
                  lg:h-64 
                  object-cover 
                  group-hover:scale-105 
                  transition 
                  duration-500
                "
              />

              {/* Caption */}
              <div
                className="absolute bottom-0 w-full py-2.5 px-3 sm:py-3 sm:px-4"
                style={{ backgroundColor: "#F6C553" }}
              >
                <p className="text-black text-xs sm:text-sm md:text-base font-semibold">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
