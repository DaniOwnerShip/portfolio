
import styleNavbar from "@/styles/navbar.module.css"
import Image from "next/image";
import Link from 'next/link';


export default function Navbar() {

    return (


        <div className={styleNavbar.main} >
            <p>Contacto [no disponible]</p>

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


        </div>


    );
};


