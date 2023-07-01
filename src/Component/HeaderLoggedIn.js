import Axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'


function HeaderLoggedIn() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await Axios.post('http://localhost:8080/login', { username, password })
            if (response.data) {
                console.log(response.data)

            } else {
                console.log("error password and username")
            }
        }
        catch {
            console.log("there was error")
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="mb-0 pt-2 pt-md-0">
                <div className="row align-items-center">
                    <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
                        <input onChange={e => setUsername(e.target.value)} name="username" className="form-control form-control-sm input-dark" type="text" placeholder="Username" autocomplete="off" />
                    </div>
                    <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
                        <input onChange={e => setPassword(e.target.value)} name="password" className="form-control form-control-sm input-dark" type="password" placeholder="Password" />
                    </div>
                    <div className="col-md-auto">
                        <button className="btn btn-success btn-sm">Sign In</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default HeaderLoggedIn