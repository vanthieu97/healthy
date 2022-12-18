import Footer from 'components/Footer'
import Header from 'components/Header'
import { FC, lazy, ReactNode, Suspense as ReactSuspense } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const MyRecord = lazy(() => import('./pages/MyRecord'))
const ColumnPage = lazy(() => import('./pages/ColumnPage'))
const NotFound = lazy(() => import('./pages/NotFound'))

interface SuspenseProps {
  component: ReactNode
}

const Suspense: FC<SuspenseProps> = ({ component }) => (
  <ReactSuspense fallback={<span>Loading...</span>}>{component}</ReactSuspense>
)

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Suspense component={<Home />} />} />
        <Route
          path='/my-record'
          element={<Suspense component={<MyRecord />} />}
        />
        <Route
          path='/column'
          element={<Suspense component={<ColumnPage />} />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
