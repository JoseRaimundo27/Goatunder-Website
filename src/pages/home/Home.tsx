
import AboutUs from '../../components/AboutUs/index.tsx'
import Banner from '../../components/Banner/index.tsx'
import MainLayout from '../../layouts/MainLayout/MainLayout.tsx'


const Home : React.FC = () => {
  return (
    <MainLayout>
      <Banner/>
      <AboutUs/>
    </MainLayout>
  )
}

export default Home

