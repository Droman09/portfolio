import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Particles from "react-particles-js"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import AboutMe from "./components/AboutMe"
import Services from "./components/Services"
import Experience from "./components/Experience"
import Portfolio from "./components/Portfolio"
import Contacts from "./components/Contacts"
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <Particles
        className="particle-canvas"
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: false,
                value_area: 600
              }
            },
            color: {
              value: '#000000'
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#000000'
              }
            },
            opacity: {
              value: 0.2,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: '#000000',
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 10,
              direction: 'left',
              random: true,
              straight: true,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: false,
                mode: 'grab'
              },
              onclick: {
                enable: true,
                mode: 'repulse'
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 200,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
              },
              repulse: {
                distance: 200,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true

        }}

      />
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <Portfolio />
      <Contacts />
      <Footer />
    </>

  );
}

export default App;
