import { useEffect, useState } from "react";

const useAdmin = user => {
    const [admin, setAdmin] = useState(false)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://drone-manufacture-server.vercel.app/admin/${email}`, {
                method: "GET",
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            }).then(res => res.json()).then(data => {
                setAdmin(data.ADMIN)
                setLoading(false)
            })

        }
    }, [user])
    return { admin, loading, setLoading }
}
export default useAdmin;