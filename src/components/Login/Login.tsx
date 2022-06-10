import React, {FormEvent, useState} from 'react';
import '../Register/Register.styles.scss'
import {Link,useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
    const [formValue, setFormValue] = useState({
        email: "",
        password: ""
    })
    const [confirmation, setConfirmation] = useState<null | string>(null);

    const updateData = (key: string,value: any) => {
        setFormValue(form => ({
            ...form,
            [key]: value
        }))
    }

    const sumbmitData = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3003/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formValue)
            });
            const data: boolean = await res.json();
            console.log(data)
            if(data) {
                navigate('/launches')
                console.log('wow,it s working!')
            } else {
                setConfirmation(`Wrong email or password. `)
            }

        } finally {

        }

    }
    return (
        <>
            <div className="body-container">
                <div
                    className="register-container">
                    <h2>Log in to our launches site!</h2>
                    <form onSubmit={sumbmitData}>
                        <p>

                            <input onChange={(e) => updateData('email',e.target.value)} value={formValue.email} required type="text" name="email" placeholder="email"/>

                        </p>
                        <p>

                            <input onChange={(e) => updateData('password',e.target.value)}  value={formValue.password} required type="text" name="password" placeholder="password"/>

                        </p>
                        <button type="submit">login</button>
                    </form>
                    {
                        confirmation && <p className="confirmation">{confirmation}</p>
                    }
                    <Link className="link" to="/register">Register accont</Link>

                </div>
            </div>
        </>
    )
}
