import React, { useState } from "react";
import logo from "../../assets/logo-black.png";
import RegisterForm from "./CreateAccount.jsx";
import { signInOptions } from "../../utils/signInOptions.js";

/**
 * 
 * @returns {JSX.Element} Sign in page
 */


export default function SignIn() {
    const [createAccount, setCreateAccount] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen mt-[-100px]">
            <img src={logo} alt="logo" className="w-72 h-auto mb-6" />

            {createAccount ? (
                <RegisterForm setCreateAccount={setCreateAccount} />
            ) : (
                <div className="flex flex-col items-center justify-start w-96 h-96 bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-4xl font-bold text-gray-600 mb-6">Sign in</h2>
                    {signInOptions.map((option) => (
                        <button key={option.name} className="w-72 h-12 px-4 py-2 mb-4 border border-gray-400 hover:bg-gray-400 rounded-md flex justify-start items-center">
                            <img className={option.className} src={option.icon} alt={option.name} />
                            <span className="ml-4">Sign in with {option.name}</span>
                        </button>
                    ))}
                    <div className="mb-4 flex justify-center items-center w-full">
                        <hr className="border-t border-gray-400 flex-grow mx-2" />
                        <span>or</span>
                        <hr className="border-t border-gray-400 flex-grow mx-2" />
                    </div>

                    <button onClick={() => setCreateAccount(true)} className="w-72 h-12 mb-4 bg-zinc-600 hover:bg-gray-700 rounded-md text-white">
                        Create Account
                    </button>
                </div>
            )}
        </div>
    );
}
