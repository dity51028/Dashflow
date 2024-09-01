import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";
import { MdOutlineManageAccounts } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";


export   const SIDEBAR_LINKS =[
    {id:1, path:"/", name:"Dashboard", icon:MdOutlineSpaceDashboard},
    {id:2, path:"/members", name:"Members", icon:IoPeopleOutline},
    {id:1, path:"/message", name:"Message", icon:FaRegMessage},
    {id:1, path:"/projects", name:"Dashboard", icon:GoProjectSymlink},
    {id:1, path:"/clients", name:"Clients", icon:MdOutlineManageAccounts},
    {id:1, path:"/work", name:"Work Plan", icon:CiCalendar},


]