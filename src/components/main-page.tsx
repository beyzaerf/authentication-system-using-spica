import { useNavigate } from 'react-router'

export function MainPage() {

  const navigate = useNavigate()

  async function handleBack() {
    navigate("/login")
  }

  return (
    <div>
      <p>Welcome!</p>
      <button onClick={handleBack}>Back</button>
    </div>

  )
}