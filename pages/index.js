
import Head from 'next/head'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Experiance from '../components/Experiance'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thomas | Full stack Developer</title>
        <meta name="description" content="I’m a frontend-heavy full-stack developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/navLogo1.png" />
      </Head>

      {/* Background wrapper for Navbar + Main */}
      <div className="relative">
        {/* Background image */}
        <div className="absolute inset-0 -z-10 h-[calc(100vh+5rem)] bg-cover bg-center bg-no-repeat"
             style={{ backgroundImage: "url('/banner-1.jpg')" }}>
        </div>

        <Navbar />
        <Main />
      </div>

      {/* Rest of the site */}
      <About />
      <Skills />
      <Projects />
      <Experiance />
      <Contact />
    </div>
  )
}
