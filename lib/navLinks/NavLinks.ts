import React from "react";
import { IconType } from "react-icons";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { RiNotification4Fill } from "react-icons/ri";

export interface Navlink {
    id: number;
    title: string;
    link: string;
    icon: IconType;
}

export const NavLinks: Navlink[] = [
    { id: 1, title: 'DashBoard', link: '/', icon: MdDashboard  },
    { id: 2, title: 'Students', link: '/students', icon: PiStudentFill  },
    { id: 3, title: 'Teachers', link: '/teachers', icon:FaChalkboardTeacher   },
    { id: 4, title: 'Notice', link: '/notice', icon: RiNotification4Fill   },
];
