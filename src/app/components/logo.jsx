
import styleLogo from "@/styles/logo.module.css"
import Image from "next/image";



export default function Logo() {

    return ( 

        <Image
            className={styleLogo.logoImage}
            src='/resources/logomarca.png'
            alt="logo"
            width={100}
            height={30}
        />  

    );
};


