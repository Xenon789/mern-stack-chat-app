import { useState } from "react"

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="bg-blue-50 h-screen flex items-center">
            <form className="w-64 mx-auto mb-12">
                <input value={username} 
                    onChange={event => setUsername(event.target.value)} 
                    className="block w-full rounded-sm p-2 mb-2 border" 
                    type="text" placeholder="username"/>
                <input value={password} 
                    onChange={event => setPassword(event.target.value)} 
                    className="block w-full rounded-sm p-2 mb-2 border" 
                    type="password" placeholder="password"/>

                <button className="bg-blue-500 text-white block w-full rounded-sm p-2">Register</button>
            </form>
        </div>
    )
}