import Hero from "./Hero";
import About from "./About";
import Products from "./Products";
import Services from "./Services";
import TechnicalInfo from "./TechnicalInfo";
import InstallationLayout from "./InstallationLayout";
import GlobalPortfolio from "./GlobalPortfolio";
import ProjectPage from "./ProjectPage";
import Buildings from "./Application";

export default function Home() {
  return (
    <div className="w-full text-gray-800">

      <Hero />
      <About />
      {/* <Products /> */}
      {/* <Services /> */}
      <TechnicalInfo />
      <InstallationLayout />
      <GlobalPortfolio />
      {/* <ProjectPage/> */}
      <Buildings/>

      <footer className="py-6 text-center bg-gray-100 mt-10">
        <p>© {new Date().getFullYear()} Veeraum. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
