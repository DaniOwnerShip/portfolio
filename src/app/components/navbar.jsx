"use client"
import styleNavbar from "@/styles/navbar.module.css"
import Image from "next/image";
import Link from 'next/link';

import { useRef } from 'react';


export default function Navbar({ data }) {
 
    const mydataRef = useRef(data);

    const clickData = () => {
        const email = mydataRef.current.email;
        const phone = mydataRef.current.phone;
        window.alert(`📧 correo: ${email}\n📞 teléfono: ${phone}`);
    }

    return (


        <div className={styleNavbar.main} >

            <Link href="https://github.com/DaniOwnerShip/portfolio.git">
                <Image
                    className={styleNavbar.github}
                    src='/resources/GitHub.svg'
                    alt="logo"
                    width={35}
                    height={35}
                />
            </Link>
            <button className={styleNavbar.contactBtn}
                type="button"
                onClick={clickData}
            >
                <p>Contacto ☎️</p>
            </button>

        </div>


    );
};


