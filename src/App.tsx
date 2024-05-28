import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import './index.css'
import BookPage from './pages/bookPage'
import HomePage from './pages/home'
import Register from './pages/register'
import Login from './pages/login'
import UpdateBook from './pages/updateBook'
import EditBook from './pages/editBook'
import Profile from './pages/profile'
import PrivateRoutes from './components/privateRoutes'


function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path='/bookPage' element={<BookPage />} />
          <Route path='/update' element={<UpdateBook />} />
          <Route path='/edit' element={<EditBook />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
