import './App.css'
import Users from './components/users';

const usersPromise = fetch("http://localhost:3000/users").then(res => res.json());

function App() {

  return (
    <>
      <h1>Users management application</h1>
      <Users usersPromise={usersPromise}></Users>
    </>
  )
}

export default App
