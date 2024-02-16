import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Breamcums from "../components/Breamcums";
import Content from "../components/Content";

const Dashboard = () => {
    const [inactive, setInactive] = useState(true);
    return (
        <div className="flex item-center">
            <Sidebar inactive={inactive} setInactive={setInactive}/>
            <div className="flex flex-col item-center w-full">
                <Header inactive={inactive} setInactive={setInactive}/>
                <Breamcums title="Dashboard">
                    <Link className="flex items-center">Home <span><ChevronRightIcon className="w-4 h-4" /></span></Link>
                    <Link>Dashboard </Link>
                </Breamcums>
                <Content />
            </div>
        </div>
    )
}

export default Dashboard;