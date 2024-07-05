import useSWR from "swr";

const fetcher = async () => {
    const response = await fetch('https://newsdata.io/api/1/news?apikey=pub_43173dc8326317d4ee688c2fd69ebc5ccd3d0&q=art')
    const data = await response.json()
    return data
}

export const useGetAllNews = () => {
    const {data, isLoading, error} = useSWR('news', fetcher)
    return {data, isLoading, error}
}