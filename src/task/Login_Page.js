import React, { useState } from "react";
import './Login_Page.css';



const LoginPage = () => {

    const [formData, setFormData] = useState({

        UserName: "",
        password: ""
    });

    //Adding styles

    const Style = {
        color: 'pink'
    }

    const updateFormData = event =>
        setFormData({
            ...formData, [event.target.name]: event.target.value
        });

    //Destructing complex object into smaller parts

    const { UserName, password } = formData;

    return (
        <form>

            <div className='App'>
                <h2 style={Style}>SignUp</h2>
                <li className='form-row'>
                    <label className='UserName_label'> UserName :</label>
                    <input
                        className='UserName_input'
                        value={UserName}
                        onChange={e => updateFormData(e)}
                        placeholder="UserName"
                        type="text"
                        name="UserName"
                        required
                    />

                </li>

                <li className='form-row'>
                    <label className='UserName_label'> Password:</label>
                    <input
                        className='UserName_input'
                        value={password}
                        onChange={e => updateFormData(e)}
                        placeholder="Password"
                        type="password"
                        name="password"
                        required
                    />
                </li>
                <li className='form-row'>
                    <button className='UserName_button' type="submit">SignUp</button>
                </li>
            </div>
        </form>
    );
};

export default LoginPage;
