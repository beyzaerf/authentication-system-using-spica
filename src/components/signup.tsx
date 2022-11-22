import { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import * as Identity from "@spica-devkit/identity"

export function SignUp() {

    const [form, setForm] = useState<{ email: string, password: string }>({ email: "", password: "" })

    async function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
        const user = await signup(form.email, form.password).catch(console.error)
        console.log(user)
        event.preventDefault()
    }
    const handleForm = (event: ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    const signup = (identifier: any, password: any) => {
        Identity.initialize({ apikey: "", publicUrl: "" })
        return Identity.insert({
            identifier: identifier,
            password: password,
            policies: []
        })
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
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                    <button type="submit" onClick={handleSubmit}>Sign Up</button>
                </form>
            </div>
        </>
    )
}