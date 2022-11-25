import { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import * as Identity from "@spica-devkit/identity"
import { useNavigate } from 'react-router'

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

    const login = (identifier: any, password: any) => {
        Identity.initialize({ apikey: "", publicUrl: "" })
        return Identity.login(identifier, password)
    }

    return (
        <>
            <div>
                <form >
                    <label htmlFor="input-email">Email
                        <input name='email' type="email" onChange={(e) => handleForm(e)} />
                    </label>
                    <label htmlFor='input-password'>Password
                        <input name='password' type="password" onChange={handleForm} />
                    </label>
                    <br />
                    <p>
                        Don't have an account? <Link to="/signup">Sign Up</Link>
                    </p>
                    <button type="submit" onClick={handleSubmit}>Login</button>
                </form>
            </div>
        </>
    )
}