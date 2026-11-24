import Hero from "../componentes/Hero"
import HomeCards from "../componentes/HomeCards"
import JobListings from "../componentes/JobListings"
import ViewAllJobs from "../componentes/ViewAllJobs"
const HomePage = () => {
  return (
    <>
    <Hero/>
    <HomeCards/>
    <JobListings isHome={true}/>
    <ViewAllJobs/>
    </>
    
  )
}

export default HomePage
