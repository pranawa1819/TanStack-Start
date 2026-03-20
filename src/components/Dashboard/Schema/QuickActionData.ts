import { LuTentTree } from "react-icons/lu";
import { LuChartColumn } from "react-icons/lu";
import { LuClock4 } from "react-icons/lu";
import { GrDocumentText } from "react-icons/gr";

export const quickAccessData=[
    {
        id:0,
        icon:LuTentTree,
        action:"Leave Request",
        description:"Request for leave"
    },
    {
        id:1,
        icon:LuChartColumn,
        action:"Leave Balance",
        description:"View Available Balance"
    },
     {
        id:2,
        icon:LuClock4,
        action:"Time Request",
        description:"Time Correction"
    },
    {
        id:3,
        icon:GrDocumentText,
        action:"OT Request",
        description:"Overtime Claim"
    },

]