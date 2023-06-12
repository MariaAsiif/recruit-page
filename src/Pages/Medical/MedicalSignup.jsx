import { FaApple, FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { HiLockClosed } from "react-icons/hi";

const MedicalSignUp = () => {
    return (
        <>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Create New Account
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email-address">
                                    First Name
                                </label>
                                <input
                                    id="first_name"
                                    name="first_name"
                                    type="text"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"

                                />
                            </div>
                            <div>
                                <label htmlFor="last_name">
                                    Last Name
                                </label>

                                <input
                                    id="last_name"
                                    name="last_name"
                                    type="text"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"

                                />
                            </div>

                            <div>
                                <label htmlFor="user_name">
                                    User Name
                                </label>
                                <input
                                    id="user_name"
                                    name="user_name"
                                    type="text"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"

                                />
                            </div>

                            <div>
                                <label htmlFor="email-address">
                                    Email
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"

                                />
                            </div>

                            <div>
                                <label htmlFor="password">
                                    Password
                                </label>

                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"

                                />
                            </div>
                            <div>
                                <label htmlFor="confirm-passwor">
                                    Confirm Passwrod
                                </label>
                                <input
                                    id="confirm_password"
                                    name="confirm_password"
                                    type="password"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"

                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <HiLockClosed className="h-5 w-5 text-red-500 group-hover:text-red-400" aria-hidden="true" />
                                </span>
                                Signup
                            </button>
                        </div>
                        <br />
                        <div
                            className="group relative flex w-full justify-center rounded-md py-2 px-4 text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                        >
                            --OR sign up via--
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "5px" }}>
                            <FaGoogle size="25px" style={{ margin: "5px" }} />
                            <FaApple size="25px" style={{ margin: "5px" }} />
                            <FaFacebook size="25px" style={{ margin: "5px" }} />
                            <FaLinkedin size="25px" style={{ margin: "5px" }} />
                        </div>

                    </form>

                </div>
            </div>
        </>
    )
}

export default MedicalSignUp;