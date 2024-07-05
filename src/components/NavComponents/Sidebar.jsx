'use client'
import { IoClose, IoNewspaper } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { BiSolidMessageSquare } from "react-icons/bi";
import { FaUserAlt, FaBriefcase } from "react-icons/fa";
import Link from "next/link";
import { useStateContext } from "@/utils/ContextProvider";

const Sidebar = () => {
    const {showMenu, setShowMenu} = useStateContext()
    const handleCloseMenu = () => {
        setShowMenu(prev => !prev)
    }
    const links = [
        {
            name: 'home',
            route: '/',
            icon: <IoMdHome/>,
        },
        {
            name: 'news/blog',
            route: '/news',
            icon: <IoNewspaper/>,
        },
        {
            name: 'market place',
            route: '/market',
            icon: <FaBriefcase/>,
        },
        {
            name: 'messages',
            route: '/messages',
            icon: <BiSolidMessageSquare/>,
        },
        {
            name: 'profile',
            route: '/profile',
            icon: <FaUserAlt/>,
        }
    ]
  return (
    <aside className={`absolute top-0 ${showMenu ? 'left-0' : '-left-full'} w-60 h-screen bg-dark border-r border-r-primary z-10 transition-all duration-1000`}>
        <div className="flex items-center justify-between p-2">
        <h1 className="text-xl font-bold italic text-white">Mage</h1>
        <IoClose onClick={() => handleCloseMenu} className="text-light cursor-pointer" size={30}/>
        </div>
        <div className="flex flex-col gap-5 my-3 p-3">
            {
                links.map((link, i) => (
                    <Link onClick={() => handleCloseMenu} className="no-underline flex items-center gap-2 text-light cursor-pointer" href={link.route} key={i}>
                        <span>{link.icon}</span>
                        <p className="capitalize font-semibold">{link.name}</p>
                    </Link>
                ))
            }
        </div>
    </aside>
  )
}

export default Sidebar