import { FiHash } from "react-icons/fi";
import { LuBuilding2 } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

export const personalData = [
    {
        id:0,
        name:'John Doe',
        position:'Senior Software Engineer',
        image:"/Image.png",
        status:"Active",

        employee:[
            {
                icon: FiHash,
                label: "Employee Id",
                subLabel:"EMP-2024-0451",
            },
             {
                icon: LuBuilding2,
                label: "Department",
                subLabel:"Engineering",
            },
             {
                icon: MdOutlineMail,
                label: "Email",
                subLabel:"john.doe@company.com",
            },
            {
                icon: FiPhone,
                label: "Phone Number",
                subLabel:"+977-9810000000",
            },

        ]
    }
]