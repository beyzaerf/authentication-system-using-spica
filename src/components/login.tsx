import { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import styles from "../App.module.css";

export function Login() {

    const [form, setForm] = useState<{ email: string, password: string }>({ email: "", password: "" })
    
    const navigate = useNavigate()

    async function handleSubmit(event: any) {
        const user = await login(form.email, form.password).catch(console.error)
        console.log(user)
        navigate("/")
        event.preventDefault()
    }
    const handleForm = (event: ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const login = (identifier: string, password: string) => {
        const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({
            identifier: identifier,
            password: password
          })
        }
        let res = fetch('https://master.spicaengine.com/api/fn-execute/login', requestOptions)
        return res
      };
    
      return (
        <>
          <div className={styles["formContainer"]}>
            <h2 style={{ marginBottom: "10px" }}>Log In</h2>
    
            <form>
              <div className={styles["inputContainer"]}>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className={styles["inputText"]}
                  onChange={(e) => handleForm(e)}
                />
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className={styles["inputText"]}
                  onChange={handleForm}
                />
              </div>
              <p className={styles["redirectText"]}>
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </p>
              <div className={styles["buttonContainer"]}>
                <button
                  className={styles["authButton"]}
                  type="submit"
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </>
      );
}