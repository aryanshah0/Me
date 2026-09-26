import AnimatedText from '../components/AnimatedText'
import Certifications from '../components/Certifications'
import Seo from '../components/Seo'
import Skills from '../components/Skills'
import Timeline from '../components/Timeline'
import TransitionEffect from '../components/TransitionEffect'
import aryan from '../assets/images/aryan.webp'
import { EDUCATION, EXPERIENCE } from '../data/profile'

const About = () => (
  <>
    <Seo
      title="About"
      path="/about"
      description="Aryan Shah, software engineer at E2E Cloud in Delhi. Schooled in Jamnagar, B.Tech from LNMIIT Jaipur, interned in Mumbai. Skills, experience and certifications."
    />
    <TransitionEffect />

    <main id="main" className="flex flex-col items-center justify-center w-full">
      <div className="w-full h-full inline-block z-0 text-dark dark:text-light p-32 pt-0 xl:p-24 xl:pt-0 lg:p-16 lg:pt-0 md:p-12 md:pt-0 sm:p-8 sm:pt-0">
        <AnimatedText text="Building the cloud, one console at a time" className="mb-14 lg:!text-7xl sm:!text-5xl xs:!text-4xl sm:mb-8" />

        <div className="w-full grid grid-cols-8 gap-16 items-center sm:gap-8">
          <div className="col-span-5 xl:col-span-4 md:order-2 md:col-span-8 flex flex-col items-start justify-start">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">About me</h2>
            <p className="font-medium">
              I’m a software engineer at E2E Cloud in Delhi, where I build the consoles people use to rent and run GPU and cloud
              infrastructure. My work spans VM auto scaling, machine images, compute provisioning, load balancers, and the sign-up and
              billing flows in front of them.
            </p>
            <p className="font-medium mt-4">
              I work across the stack: typed React and Angular frontends, Node.js services in my own projects, and the testing and CI that
              let a small team ship to production with confidence.
            </p>
            <p className="font-medium mt-4">
              I went to school in Jamnagar, earned my B.Tech in Computer Science from LNMIIT, Jaipur, where I was also a lab TA for data
              structures and algorithms, and interned in Mumbai before moving to Delhi.
            </p>
          </div>

          <div className="col-span-3 xl:col-span-4 md:order-1 md:col-span-8 md:max-w-md md:mx-auto h-max">
            <img src={aryan} width={417} height={468} alt="Portrait of Aryan Shah" className="w-full h-auto rounded-lg" />
          </div>
        </div>

        <Skills />
        <Timeline title="Experience" items={EXPERIENCE} />
        <Timeline title="Education" items={EDUCATION} />
        <Certifications />
      </div>
    </main>
  </>
)

export default About
