import React, {FormEvent,useState} from 'react';
import './Register.styles.scss'
import {UserRegisterType} from 'types';
import {Spinner} from "../../common/spinner/Spinner";
import {Link} from "react-router-dom";


const x: UserRegisterType = {
    email: '',
    password: '',
}

export const Register = () => {
    const [formValue, setFormValue] = useState<UserRegisterType>({
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
            const res = await fetch('http://localhost:3003/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formValue)
            })
            const data: boolean = await res.json();
            console.log(data)
            if(data) {
                setConfirmation(`You have been registered, now log in.`)
            } else {
                setConfirmation(`Someting went wrong.`)
            }

        } finally {

        }

    }
    return (
        <>
            <div className="body-container">
            <div
             className="register-container">
                <h2>Register account to check last launches.</h2>
                <form onSubmit={sumbmitData}>
                    <p>

                            <input onChange={(e) => updateData('email',e.target.value)} value={formValue.email} required type="text" name="email" placeholder="email"/>

                    </p>
                    <p>

                            <input onChange={(e) => updateData('password',e.target.value)}  value={formValue.password} required type="text" name="password" placeholder="password"/>

                    </p>
                    <button type="submit">register</button>
                </form>
                {
                    confirmation && <p className="confirmation">{confirmation}</p>
                }
                <Link className="link" to="/login">Log in</Link>
            </div>
            </div>
        </>
    )
}
