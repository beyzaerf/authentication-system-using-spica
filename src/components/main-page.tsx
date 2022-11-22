import { useNavigate } from 'react-router'

export function MainPage() {

  const navigate= useNavigate()

  async function handleSignOut() {
      console.log("Signing out")
      navigate("/login")
    }
  
    return (
        <div>
        <p>Welcome!</p>
        <button onClick={handleSignOut}>Sign out</button>
        </div>
    )
  }