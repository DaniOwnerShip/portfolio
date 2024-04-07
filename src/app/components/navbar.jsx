
import styleNavbar from "@/styles/navbar.module.css"
import Image from "next/image";
import Link from 'next/link';


export default function Navbar() {

    return (


        <div className={styleNavbar.main} >

            <Link href="https://github.com/DaniOwnerShip/portfolio.git">
                <div style={{ cursor: 'pointer' }}>
                    <Image
                        src='/resources/GitHub.svg'
                        alt="logo"
                        width={35}
                        height={35}
                    />
                </div>
            </Link>

            <p>Contacto [próximamente]</p> 

        </div>


    );
};


