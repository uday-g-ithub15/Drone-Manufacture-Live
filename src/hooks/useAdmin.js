import { useEffect, useState } from "react";

const useAdmin = user => {
    const [admin, setAdmin] = useState(false)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://secret-everglades-45349.herokuapp.com//admin/${email}`, {
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