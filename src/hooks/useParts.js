import { useQuery } from "react-query"

const useParts = (url) => {
    const { data, isLoading, refetch } = useQuery(['parts'], () => fetch(url).then(res => res.json()))
    return { data, isLoading, refetch }
}
export default useParts;