import { useParams } from "@remix-run/react"

export default function DashboardId(){
    const { id } = useParams();
    return <h1>Hello from the ID page {id}</h1> 
}