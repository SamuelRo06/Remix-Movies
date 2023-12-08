import { Outlet } from "@remix-run/react";

export default function Hello(){
    return(
        <div>
            <h1>Hello from the dashboard</h1>
            <Outlet />
        </div>
    )
}