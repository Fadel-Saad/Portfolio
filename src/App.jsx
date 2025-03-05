import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div className="bg-base-200 flex flex-col justify-center items-center">
      <Navbar />
      <div className="p-10">
        <Sidebar />
        <Hero />
        <About />
        <div id="Work" className="w-full mt-50 scroll-mt-30">
          <h2 className="text-center text-primary text-3xl xl:text-4xl 2xl:text-5xl underline underline-offset-12 mt-18 mb-30 mx-auto">
            My Work
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto w-[75%]">
            <ProjectCard
              img="/RecipeApp.png"
              title="Recipe Haven"
              link="https://recipe-app-alpha-lilac-60.vercel.app/"
            />
            <ProjectCard
              img="/MoviesApp.png"
              title="Film Hunt"
              link="https://film-hunt-five.vercel.app/"
            />
            <ProjectCard
              img="/BMIApp.png"
              title="BMI Calculator"
              link="https://fadel-saad.github.io/BMI-Calculator/"
            />
            <ProjectCard
              img="/FAQAccordion.png"
              title="FAQ Accordion"
              link="https://fadel-saad.github.io/FAQ-Accordion/"
            />
          </div>
        </div>
        <Skills />
        <ContactMe />
      </div>
      <Footer />
    </div>
  );
}

export default App;
