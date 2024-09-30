
import Emergency from "@/components/Emergency"
import Footer from "@/components/Footer"
import { Initiatives } from "@/components/Initiatives"
import Main from "@/components/Main"
import { Statistic } from "@/components/Statistic"


const Home = () => {

  return (
    <>
      <Main />
      <Emergency />
      <Statistic />
      <Initiatives />
      <Footer />
    </>
  )
}

export default Home