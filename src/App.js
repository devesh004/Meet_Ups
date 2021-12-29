import {Route,Routes} from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetsup';
import FavoritesMeetupPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';
import MainNavigation from './components/layouts/MainNavigation';
import Layout from './components/layouts/Layout';
function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllMeetupsPage />} />
        <Route path='/newMeetup' element={<NewMeetupPage />} />
        <Route path='/FavoriteMeetup' element={<FavoritesMeetupPage />} />
      </Routes>
    </Layout>
  )
}

export default App;