
import AboutUs from '../../components/AboutUs/index.tsx'
import Banner from '../../components/Banner/index.tsx'
import Contact from '../../components/Contact/index.tsx'
import MainLayout from '../../layouts/MainLayout/MainLayout.tsx'


const Home : React.FC = () => {
  return (
    <MainLayout>
      <Banner/>
      <AboutUs/>
      <Contact/>
    </MainLayout>
  )
}

export default Home

