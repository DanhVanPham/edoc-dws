import { useRoutes } from "react-router";
import DashboardLayout from "../layout/dashboard";
import CountersInArea from "../pages/counters-area";

export default function Router() {
    return useRoutes([
        {
            path: '',
            element: <DashboardLayout />,
            children: [
                {
                    path: '',
                    element: <CountersInArea />
                }
            ]

        },
    ])
}