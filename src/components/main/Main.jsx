import React, { useRef, useState } from 'react'

const Main = () => {
    // useRef
    const inputEl = useRef(null)
    const inputEl2 = useRef(null)
    const inputEl3 = useRef(null)
    
    // useState
    const [id, setId] = useState("")
    const [phone, setPhone] = useState("")
    const [confirmPass, setConfirmPass] = useState("")
    
    const onSubmit  = (e) => {
        e.preventDefault()
        
        let user = {
            fullName: inputEl.current.value,
            email: inputEl2.current.value,
            password: inputEl3.current.value,
            id,
            phone,
            confirmPass
        }
        
        const data = []
    }

    return (

        <div className='flex items-center justify-center h-[100vh] text-white font-medium '>
            <div className='bg-blue-600 h-[500px] w-[600px] px-[16px] py-4 rounded'>
                <p className='text-[36px] mb-4'>Registration</p>
                <form onSubmit={onSubmit} action="" className='px-2'>
                    <div className='flex justify-between '>
                        <div>
                            <label className=' block mb-1' htmlFor="fname">Full Name</label>
                            <input ref={inputEl} className='border rounded indent-1.5 py-1.5 mb-7 outline-0 w-full' type="text" required id='fname' placeholder='Enter your name' />
                            <label className=' block mb-1' htmlFor="email">Email</label>
                            <input ref={inputEl2} className='border rounded indent-1.5 py-1.5 mb-7 outline-0 ' type="text" required id='email' placeholder='Enter your email' />
                            <label className=' block mb-1' htmlFor="password">Password</label>
                            <input ref={inputEl3} className='border rounded indent-1.5 py-1.5 mb-7 outline-0 ' type="text" required id='password' placeholder='Enter your Password' />
                        </div>
                        <div>
                            <label className=' block mb-1' htmlFor="id">Registered ID</label>
                            <input value={id} onChange={(e) => setId(e.target.value)} className='border rounded indent-1.5 py-1.5 mb-7 outline-0 ' type="text" required id='id' placeholder='Enter your ID' />
                            <label className=' block mb-1' htmlFor="number">Phone Number</label>
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} className='border rounded indent-1.5 py-1.5 mb-7 outline-0 ' type="text" required id='number' placeholder='Enter your number' />
                            <label className=' block mb-1' htmlFor="confirm">Confirm Password</label>
                            <input value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} className='border rounded indent-1.5 py-1.5 mb-7 outline-0 ' type="text" required id='confirm' placeholder='Confirm your password' />
                        </div>
                    </div>
                    <button className='border rounded px-6 py-1.5 cursor-pointer bg-white text-blue-500 font-medium'>Register</button>
                </form>
            </div>
        </div>
    )
}

export default React.memo(Main)