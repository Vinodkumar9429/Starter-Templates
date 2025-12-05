import localFont from "next/font/local";

export const generalSans = localFont({
    src:[
        {path:"./private/fonts/GeneralSans-Light.otf", weight:"200", style:"normal"},
        {path:"./private/fonts/GeneralSans-Regular.otf", weight:"400", style: "normal"},
        {path:"./private/fonts/GeneralSans-Semibold.otf", weight:"700", style:"normal"}
    ],
    display:"swap",
    variable:"--font-general-sans"
})