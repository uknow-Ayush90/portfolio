import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import LoadingScreen from "@/components/layout/loading-screen";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Internship from "@/components/sections/internship";
import Hobbies from "@/components/sections/hobbies";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";

export default function Page() {
  return (
    <>
      <LoadingScreen />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Internship />
        <Hobbies />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
