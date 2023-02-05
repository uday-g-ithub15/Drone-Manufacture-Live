import { useState, useEffect } from 'react'
const useToken = user => {
    const [token, settoken] = useState('')
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email }
        if (email) {
            fetch(`https://drone-manufacture-server.vercel.app/users/${email}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(currentUser)
            }).then(res => res.json()).then(data => {
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken)
                settoken(accessToken)
            })
        }
    }, [user])
    return { token }
}

export default useToken;