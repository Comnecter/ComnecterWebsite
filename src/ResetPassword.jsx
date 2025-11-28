import React from "react";
import { useState } from 'react'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { verifyPasswordResetCode, confirmPasswordReset } from "firebase/auth";

function ResetPassword() {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [resettingPwd, setResettingPwd] = useState(false)
    const [resetSuccess, setResetSuccess] = useState(false)

    const handleSubmit = () => {
        if (password == "") {
            return setErrorMsg('Please enter your password')
        }
        if (password !== confirmPassword) {
            return setErrorMsg('Passwords do not match')
        } else {
            setErrorMsg('')
        }
        resetPassword()
    }

    const getParameterByName = (name) => {
        name = name.replace(/\[/g, "\\").replace(/\]/g, "");
        const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
        const results = regex.exec(window.location.href);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    const resetPassword = async () => {
        try {
            setResettingPwd(true)
            const mode = getParameterByName('mode');
            const apiKey = getParameterByName('apiKey');
            const actionCode = getParameterByName('oobCode');
            const continueUrl = getParameterByName('continueUrl');
            const lang = getParameterByName('lang') || 'en';

            const config = {
                'apiKey': apiKey // Copy this key from the web initialization
            };
            const app = initializeApp(config);
            const auth = getAuth(app);

            await verifyPasswordResetCode(auth, actionCode).then((email) => {
                const accountEmail = email;
                const newPassword = password;

                confirmPasswordReset(auth, actionCode, newPassword).then((resp) => {
                    console.log(resp);
                    setResetSuccess(true)
                }).catch((error) => {
                    setErrorMsg(error.message);
                });
            }).catch((error) => {
                setErrorMsg(error.message);
            });
            setResettingPwd(false)
        } catch (error) {
            setResettingPwd(false)
        }


    }

    const checkPasswordRequirements = () => {
        const requirements = [
            { requirement: 'At least 8 characters long', valid: password.length >= 8 },
            { requirement: 'Include uppercase and lowercase letters', valid: /(?=.*[a-z])(?=.*[A-Z])/.test(password) },
            { requirement: 'Include at least one number', valid: /(?=.*\d)/.test(password) },
            { requirement: 'Include at least one special character (!@#$%^&*)', valid: /(?=.*[!@#$%^&*])/.test(password) },
        ]
        return requirements
    }

    return (
        <div className='flex items-center justify-center h-screen'>
            {resetSuccess ? (
                <div className='flex flex-col items-center justify-center space-y-4 md:w-3/4 lg:w-1/2'>
                    <h1 className='text-4xl text-green-500 font-bold text-center'>Password Reset Success</h1>
                    <p className='text-sm'>Your password has been reset successfully</p>
                </div>
            ) : (
                <div className='flex flex-col items-center justify-center space-y-4 md:w-3/4 lg:w-1/2'>
                    <h1 className='text-4xl font-bold text-center'>Comnecter Password Reset</h1>
                    <p className='text-sm'>Enter your password to reset it</p>
                    <label className="input w-full">
                        <input type="password" name='password' placeholder="Password" className='w-full' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <label className="confirm-password input w-full">
                        <input type="password" name='confirm-password' placeholder="Confirm Password" className='w-full' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </label>
                    <div className='flex flex-col items-center justify-center space-y-2 md:w-3/4 lg:w-1/2 text-xs'>
                        <p>Password Requirements:</p>
                        {checkPasswordRequirements().map((requirement, index) => (
                            <p key={index} className={requirement.valid ? 'text-green-500' : 'text-red-500'}>{requirement.requirement}</p>
                        ))}
                    </div>
                    <button className="btn btn-primary w-full" onClick={handleSubmit} disabled={resettingPwd || password.length == 0}>
                        {resettingPwd ? 'Resetting...' : 'Reset'}
                    </button>
                    <div className="text-xs text-red-500">{errorMsg}</div>
                </div>
            )}
        </div>
    )
}

export default ResetPassword
