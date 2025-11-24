import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const buildingsData = [
  {
    id: 1,
    title: "Buildings",
    paragraphs: [
      "The unique properties of our products provide architects and designers with a variety of possibilities as the project develops. Simple processing and quick installation enable projects to be reliably implemented. Cladding panels can be used for both internal and external façades, roofs, entrances and niches.",
      "Cladding panels can be used for internal & external façades, roofs, entrances and niches. They give each building individual character and demonstrate longevity. The consolidated end-to-end manufacturing process is an invaluable advantage to any building contractor.",
    ],
    subtitle: "As a material, enamel’s outstanding properties are impressive:",
    features: [
      "Highly versatile in colour, shape & graphic/silkscreen printing",
      "Dirt-repellent & easy to clean",
      "Graffiti-proof",
      "UV, climate & corrosion resistant",
      "Extremely high mechanical & thermal resistance",
    ],
    images: [
      "Buildings-img1.jpg",
      "Buildings-img2.jpg",
      "Buildings-img3.jpg",
      "Buildings-img4.jpg",
    ],
  },
  {
    id: 2,
    title: "Museums and theatres",
    paragraphs: [
      "The outstanding properties of enamelled steel panels mean they are particularly highly recommended for wall cladding in museums and theatres, where creative and artistic features are frequently desired.",
    ],
    subtitle: "",
    features: [],
    images: ["Museums-img1.jpg"],
  },
  {
    id: 3,
    title: "Railway stations",
    paragraphs: [
      "These materials are increasingly used in transport construction due to their purpose- designed practicality and beauty, the versa- tility they offer to architects, and indeed to their robustness, abrasion resistance and non-flammable nature (Fire Classification A1).",
    ],
    subtitle: "",
    features: [],
    images: ["Railway-img3.jpeg", "Railway-img2.jpg", "images.jpeg"],
  },
  {
    id: 4,
    title: "Underground stations",
    paragraphs: [
      "Our panels are particularly widely used in un- derground stations, as they do not increase the fire load, their high abrasion resistance is particularly well suited to the busy pe- destrian thoroughfares, and they are easy to clean.",
      "The success of these properties is evidenced by projects implemented in a total of 135 stations in 30 cities.",
    ],
    subtitle: "",
    features: [],
    images: ["Underground-stations-img1.png", "Underground-stations-img2.jpeg"],
  },
  {
    id: 5,
    title: "Underpasses",
    paragraphs: [
      "Enamel surfaces are particularly suitable for use in pedestrian underpasses due to their robust nature, and the variety of possib- le designs allows for a bright and friendly appearance. Artistic motifs are also often used. What used to be grey, dark holes are now transformed with attractive wall cladding, enticing passers-by to contemp- late and daydream. A novel benefit is that graffiti artists are deterred from dabbling at their creations or, alternatively, graffiti can be removed easily using cleaning agents.",
    ],
    subtitle: "",
    features: [],
    images: ["Underpasses-img-2.jpg"],
  },
  {
    id: 6,
    title: "Tunnel cladding",
    paragraphs: [
      "The outstanding properties of enamel clad- ding make it ideally suited for use in road tunnels. The chief priority in tunnel construc- tion lies firmly in the domain of safety technology.",
      "In this domain, the material properties of enamel provide the best starting point; when combining high resistance, a long lifespan and low maintenance costs, the unique selling point of enamel panels is clear.",
    ],
    subtitle: "Advantages",
    features: [
      "No fire load; protects the tunnel wall from fire and impact",
      "Bright, reflective surfaces reduce tunnel phobia and save energy",
      "Extremely easy to clean, thereby saving on water, cleaning agents and person- nel",
      "Long lifespan at least 30 years",
      "Enamelled information signs provide guidance throughout the entire lifespan of the panels",
      "Protection for tunnel infrastructure (conduits, cables, pipes)",
      "Panels can be immediately and quickly replaced while the tunnel is in use",
    ],
    images: ["Tunnel-img1.jpg", "Tunnel-img2.jpeg"],
  },
  ,
  {
    id: 7,
    title: "Entrances",
    paragraphs: [
      "The entrance area of a company building is of particular stylistic importance. Enamel panels offer an extraordinarily wide variety of shapes, colours and artistic design. Com- bined with its light-fastness, lifespan and other positive properties, enamel as a ma- terial is clearly the ideal choice for styling a building.",
    ],
    subtitle: "",
    features: [],
    images: ["Entrances-img2.jpg"],
  },

  {
    id: 8,
    title: "Operating theatres, laboratories and clean rooms",
    paragraphs: [
      "Enamel, characterised by its glassy surfaces which are nonporous, easy to clean and, mo- reover, pose no physiological hazards, effec- tively meets all the hygiene requirements of these special facilities.",
    ],
    subtitle: "",
    features: [],
    images: ["Operating-img1.webp"],
  },
  {
    id: 9,
    title: "Toilets",
    paragraphs: [
      "In city toilet facilities, where inner surfaces and basins are automatically cleaned with hot water, enamel has won out against all other materials.",
      "The crucial advantage: its chemically resis- tant, glassy surface.",
    ],
    subtitle: "",
    features: [],
    images: ["Toilets-img1.jpg"],
  },
  {
    id: 10,
    title: "Columns",
    paragraphs: [
      "Graffiti-resistance, scratch resistance and longevity are key properties of panelling for metro, underground and bus stations. Above all, cleaning can be carried out with no hassle",
      "Graffiti-resistance, scratch resistance and longevity are key properties of panelling for metro, underground and bus stations. Above all, cleaning can be carried out with no hassle",
      "The range of shapes, from round to oval, square to polygonal, and their suitability for use at any height, only serves to reinforce the value of these claddings.",
    ],
    subtitle: "",
    features: [],
    images: ["Columns-img1.JPG"],
  },
  {
    id: 11,
    title: "Tabletops",
    paragraphs: [
      "The ideal item of furniture is characterised by its versatility, variety and, specifically, its design. The winning features of enamel tab- letops  their colours, images and the varie- ty of possible shapes make them just such an item. Moreover, they enable both indoor and outdoor use, due to their mechanically robust nature and weather resistance.",
      "Each situation makes use of both the bene- fit of a glass-smooth, easy-to-clean surface, and the decorative options, whether func- tion-led or even for advertising.",
    ],
    subtitle: "",
    features: [],
    images: ["Columns-img1.JPG"],
  },
  {
    id: 12,
    title: "Stairs / escalators / lifts / doors",
    paragraphs: [
      "Primarily due to its high abrasion resistance, enamel is used in areas with high levels of pedestrian traffic which are frequented dai- ly and thus exposed to a variety of environ- mental factors. It also offers the customer or planner a wide spectrum of possible options in terms of colours and product shapes.",
    ],
    subtitle: "",
    features: [],
    images: ["Stairs-img1.png", "Stairs-img2.jpeg"],
  },
  {
    id: 12,
    title: "Screen printing",
    paragraphs: [
      "A significant advantage of using enamel is being able to print on it. Images can be pre- served for a long period, and colour effects retain their original brilliance even after se- veral years. You can print information signs and route maps as well as images using the 4-colour process. More than 10 colours can be printed, up to a maximum size of 1250 x 2500 mm.",
    ],
    subtitle: "",
    features: [],
    images: ["Stairs-img1.png", "Stairs-img2.jpeg"],
  },
];

export default function Application() {
  return (
    <>
      {buildingsData.map((section, secIndex) => (
        <SectionBlock
          key={secIndex}
          section={section}
          isReverce={secIndex % 2}
        />
      ))}
    </>
  );
}

function SectionBlock({ section, isReverce }) {
  const { title, paragraphs, subtitle, features, images } = section;

  const [slide, setSlide] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(
      () => setSlide((prev) => (prev + 1) % images.length),
      2000
    );
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="min-h-screen w-full py-14 px-4 sm:px-6 lg:px-20">
      <div
        className={`
    flex flex-col gap-8 max-w-7xl mx-auto px-4 
    lg:flex-row 
    ${isReverce ? "lg:flex-row-reverse" : ""}
  `}
      >
        <div className="lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-[#F6C553]/80 px-3 py-4 mb-6">
            {title}
          </h1>

          {paragraphs.map((para, i) => (
            <p
              key={i}
              className="mt-2 text-justify text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed"
            >
              {para}
            </p>
          ))}

          {subtitle && (
            <p className="font-bold pt-6 text-[#F6C553] text-xl sm:text-2xl">
              {subtitle}
            </p>
          )}

          {features.length > 0 && (
            <ul className="leading-8 pl-6 mt-2 text-gray-700 text-sm sm:text-base lg:text-lg">
              {features.map((f, i) => (
                <li key={i} className="list-disc">
                  {f}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* RIGHT SLIDER */}
        <div className="lg:w-1/2">
          <div className="max-w-3xl mx-auto relative">
            <img
              src={images[slide]}
              className="
          w-full 
          h-52 sm:h-64 md:h-80 lg:h-[450px] 
          object-cover rounded-xl shadow-xl 
          transition-all duration-500
        "
            />

            <button
              onClick={() =>
                setSlide((slide - 1 + images.length) % images.length)
              }
              className="
          absolute left-3 sm:left-4 
          top-1/2 -translate-y-1/2 
          p-2 sm:p-3 
          bg-white/80 rounded-full shadow hover:bg-white
        "
            >
              <FiChevronLeft size={24} />
            </button>

            <button
              onClick={() => setSlide((slide + 1) % images.length)}
              className="
          absolute right-3 sm:right-4 
          top-1/2 -translate-y-1/2 
          p-2 sm:p-3 
          bg-white/80 rounded-full shadow hover:bg-white
        "
            >
              <FiChevronRight size={24} />
            </button>
          </div>

          <div className="max-w-3xl mx-auto mt-4 flex gap-2 sm:gap-3 justify-center">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`
            w-2.5 h-2.5 sm:w-3 sm:h-3 
            rounded-full cursor-pointer 
            transition-all duration-300 
            ${slide === idx ? "bg-yellow-400" : "bg-gray-300"}
          `}
                onClick={() => setSlide(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
