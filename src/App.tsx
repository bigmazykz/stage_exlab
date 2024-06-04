import { Link, Route } from 'react-router-dom'
import './App.scss'
import { Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { LoaderPage } from './components/Loader/LoaderPage'

const MainPageAsync = lazy(()=> import('./components/MainPage/MainPage'))
const AboutPageAsync = lazy(()=> import('./components/AboutPage/AboutPage'))

function App() {

  return (
    <>
      <header>
        {/* <nav>
          <Link to={'/'}>
            Главная
          </Link>
          <Link to={'/about'}>
            Вторая страница
          </Link>
        </nav> */}
      </header>
      <main>
      <MainPageAsync />
      {/*<Suspense fallback={<Loader />}>
        <Routes>
            <Route path={'/'} element={<MainPageAsync />} />
            <Route path={'/about'} element={<AboutPageAsync />} />
          </Routes>
      </Suspense> */}
      </main>
      <footer></footer>
    </>
  )
}

export default App
