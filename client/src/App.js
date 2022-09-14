import Login from './pages/Login';
import React, {useState, useEffect} from "react"

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me")
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])

  if (!user) return (<Login onLogin={setUser} />)
  return (
    <div className="App">
      <div>Hello</div>
      <Login />
    </div>
  );
}

export default App;
