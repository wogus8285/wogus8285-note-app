import './App.css'
import Header from './components/Header'
// db 임폴트하기
// import { db } from './firebase'
import List from './page/List'

export default function App() {
  // console.log(db)
  return (
    <div className='App'>
      <Header />
      <List />
    </div>
  )
}
