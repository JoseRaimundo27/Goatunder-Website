import AdminDashboard from '../../components/AdminDashboard'
import { useRedirectIfNotAuthenticated } from '../../hooks/useRedirectIfNotAuthenticated'
import MainLayout from '../../layouts/MainLayout/MainLayout'

const Admin = () => {
  useRedirectIfNotAuthenticated('/login')
  return (
    <MainLayout>
      <h1 style={{'color': 'white', 'marginTop' : '6rem', "textAlign" : 'center', 'fontSize' : '5rem'}}> <AdminDashboard/></h1>
    </MainLayout>
  )
}

export default Admin