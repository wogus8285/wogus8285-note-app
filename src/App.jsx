import './App.css'
import Header from './components/Header'
// db 임폴트하기
// import { db } from './firebase'
import List from './page/List'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Write from './page/Write'
import Edit from './page/Edit'

// 라우팅을 하려면 NPM I 리엑트라우터돔으로 설치하고, 임폴트 라우터 3개 하고, 브라우저 라우터로 감싸자.
export default function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<List />} />
          <Route path='/write' element={<Write />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
