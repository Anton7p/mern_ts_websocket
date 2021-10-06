import React, {useState} from 'react'
import {FormSubmit, InputChange} from "../../utils/types";
import {useDispatch} from "react-redux";
import { register} from "../../redux/actions/authAction";


const RegisterForm = () => {


    const initialState = {
        account: '',
        password: '',
        name:'',
        cf_password:''}
    const [userRegister, setUserRegister] = useState(initialState)
    const {account, password,name,cf_password} = userRegister

    const [typePass, setTypePass] = useState(false)
    const [typeCfPass, setTypeCfPass] = useState(false)
    const dispatch = useDispatch()

    const handleChangeInput = (e: InputChange) => {
        const {value, name} = e.target
        setUserRegister({...userRegister, [name]: value})
    }

    const handleSubmit = (e: FormSubmit) => {
        e.preventDefault()
        dispatch(register(userRegister))
    }

    return (
        <form onSubmit={handleSubmit}>

            <div className="form-group mb-3">
                <label htmlFor="name" className="form-label">Name</label>

                <input type="text" className="form-control" id="name"
                       name="name"
                       placeholder='Your name is up to 20 chars.'
                       value={name} onChange={handleChangeInput}/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="account" className="form-label">
                    Email / Phone number
                </label>

                <input type="text" className="form-control" id="account"
                       placeholder='Example@gmail.com'
                       name="account" value={account} onChange={handleChangeInput}/>
            </div>

            <div className="form-group mb-3">
                <label htmlFor="password" className="form-label">Password</label>

                <div className="pass">
                    <input type={typePass ? "text" : "password"}
                           className="form-control"
                           id="password"
                           placeholder='Password must be at least 6 chars.'
                           name="password" value={password}
                           onChange={handleChangeInput}
                    />

                    <small onClick={() => setTypePass(!typePass)}>
                        {typePass ? 'Hide' : 'Show'}
                    </small>
                </div>
            </div>

            <div className="form-group mb-3">
                <label htmlFor="password" className="form-label"> Confirm Password</label>

                <div className="pass">
                    <input type={typeCfPass ? "text" : "password"}
                           className="form-control"
                           id="cf_password"
                           placeholder='Your confirm password.'
                           name="cf_password" value={cf_password}
                           onChange={handleChangeInput}
                    />

                    <small onClick={() => setTypeCfPass(!typeCfPass)}>
                        {typeCfPass ? 'Hide' : 'Show'}
                    </small>
                </div>
            </div>
            <button type="submit" className="btn btn-dark w-100 my-1">
                Register
            </button>
        </form>
    )
}

export default RegisterForm