import React, { useRef, useState, useEffect, use } from 'react'

const Main = () => {
    // useRef
    const inputEl = useRef(null)
    const inputEl2 = useRef(null)
    const inputEl3 = useRef(null)

    // useState
    const [id, setId] = useState("")
    const [phone, setPhone] = useState("")
    const [confirmPass, setConfirmPass] = useState("")


    const [data, setData] = useState(JSON.parse(localStorage.getItem("data")) || [])

    // useEffect 
    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(data))
    }, [data])


    const onSubmit = (e) => {
        e.preventDefault()

        let user = {
            id: new Date().getTime(),
            fullName: inputEl.current.value,
            email: inputEl2.current.value,
            password: inputEl3.current.value,
            userId: id,
            phone,
            confirmPass
        }
        setData([...data, user])

        //Removing input values
        inputEl.current.value = ""
        inputEl2.current.value = ""
        inputEl3.current.value = ""
        setId("")
        setPhone("")
        setConfirmPass("")


    }

    // Asking for delete Users
    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this user?")) {
            setData(data.filter((user) => user.id !== id))
        }
    }


    return (

        <div className='flex flex-col gap-[50px] items-center justify-center pt-[100px] min-h-[100vh] font-medium container mx-auto'>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-2xl w-full max-w-4xl mx-auto p-8 text-white">
                <h1 className="text-4xl font-bold mb-6 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    Registration
                </h1>

                <form onSubmit={onSubmit} action="" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-inner">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                        <div>
                            <div className="mb-5">
                                <label className="block mb-2 font-medium text-white/90" htmlFor="fname">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-blue-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>
                                    <input
                                        ref={inputEl}
                                        className="w-full pl-10 pr-4 py-3 bg-white/20 border border-blue-300/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-blue-200/70 text-white"
                                        type="text"
                                        required
                                        id="fname"
                                        placeholder="Enter your name"
                                    />
                                </div>
                            </div>

                            <div className="mb-5">
                                <label className="block mb-2 font-medium text-white/90" htmlFor="email">
                                    Email
                                </label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-blue-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </span>
                                    <input
                                        ref={inputEl2}
                                        className="w-full pl-10 pr-4 py-3 bg-white/20 border border-blue-300/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-blue-200/70 text-white"
                                        type="email"
                                        required
                                        id="email"
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>

                            <div className="mb-5">
                                <label className="block mb-2 font-medium text-white/90" htmlFor="password">
                                    Password
                                </label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-blue-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </span>
                                    <input
                                        ref={inputEl3}
                                        className="w-full pl-10 pr-4 py-3 bg-white/20 border border-blue-300/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-blue-200/70 text-white"
                                        type="password"
                                        required
                                        id="password"
                                        placeholder="Enter your Password"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="mb-5">
                                <label className="block mb-2 font-medium text-white/90" htmlFor="id">
                                    Registered ID
                                </label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-blue-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                                        </svg>
                                    </span>
                                    <input
                                        value={id}
                                        onChange={(e) => setId(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 bg-white/20 border border-blue-300/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-blue-200/70 text-white"
                                        type="text"
                                        required
                                        id="id"
                                        placeholder="Enter your ID"
                                    />
                                </div>
                            </div>

                            <div className="mb-5">
                                <label className="block mb-2 font-medium text-white/90" htmlFor="number">
                                    Phone Number
                                </label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-blue-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </span>
                                    <input
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 bg-white/20 border border-blue-300/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-blue-200/70 text-white"
                                        type="tel"
                                        required
                                        id="number"
                                        placeholder="Enter your number"
                                    />
                                </div>
                            </div>

                            <div className="mb-5">
                                <label className="block mb-2 font-medium text-white/90" htmlFor="confirm">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-blue-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </span>
                                    <input
                                        value={confirmPass}
                                        onChange={(e) => setConfirmPass(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 bg-white/20 border border-blue-300/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-blue-200/70 text-white"
                                        type="password"
                                        required
                                        id="confirm"
                                        placeholder="Confirm your password"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <button
                            type="submit"
                            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                        >
                            Register
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>


            {/* RENDERING CARD */}
            <div className=" container w-full pb-[50px]">
                <div className="grid grid-cols-4 gap-6">
                    {data?.map((user) => (
                        <div
                            key={user.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] border border-gray-100"
                        >
                            {/* Card image with icon */}
                            <div className="w-full h-48 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-20 w-20 opacity-80"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </div>

                            {/* Card content */}
                            <div className="p-6 flex flex-col gap-3">
                                <h2 className="text-xl font-bold text-gray-800 mb-1">{user.fullname}</h2>

                                <div className="flex items-center text-gray-600">
                                    <svg className="w-5 h-5 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <p className="text-sm truncate">{user.email}</p>
                                </div>

                                <div className="flex items-center text-gray-600">
                                    <svg className="w-5 h-5 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    <p className="text-sm truncate">••••••••</p>
                                </div>

                                <div className="flex items-center text-gray-600">
                                    <svg className="w-5 h-5 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                                    </svg>
                                    <p className="text-sm">{user.userId}</p>
                                </div>

                                <div className="flex items-center text-gray-600">
                                    <svg className="w-5 h-5 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <p className="text-sm">{user.phone}</p>
                                </div>

                                <button
                                    onClick={() => handleDelete(user.id)}
                                    className="mt-4 w-full py-2 bg-gradient-to-r from-red-500 to-rose-600 text-white font-medium rounded-lg transition-all duration-300 hover:from-red-600 hover:to-rose-700 focus:ring-2 focus:ring-red-300 focus:outline-none flex items-center justify-center gap-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default React.memo(Main)