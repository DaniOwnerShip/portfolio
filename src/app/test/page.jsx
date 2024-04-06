import styleTest from './test.module.css'; // Importa el archivo CSS aquí
import Image from "next/image";
const Test = () => {
    return (


        <div className={styleTest.container} >


            <div className={styleTest.wrapper}>
                
                <section className={styleTest.main} >
                    <h2>Hola, soy Daniel Orcha, desarrollador de software y prototipos electrónicos</h2>

                    <div className={styleTest.circle} >
                        <Image className={styleTest.circleImage} 
                            src="/me.jpg"
                            alt="Descripción de la imagen"
                            width={150}
                            height={150}
                        />
                    </div>

                    <p>Desde pequeño me ha apasionado el mundo de la tecnología y el hacking. Con background en electrónica, en el desarrollo de prototipos electrónicos
                    , programación de microchips, diseño de drivers para sensores, etc. he evolucionado con el tiempo a lenguajes de más alto nivel, programando para empresas
                    de videojuegos. También he desarrollado aplicaciones webs, excel con macros para índices de rendimientos de equipos, pantallas de PI Osisoft y administrador
                    de base de datos.
                    </p>

                    <p>Me apasionan los retos, y de momento, ninguno se me ha resistido ¿tienes un nuevo proyecto para mí? :D</p>

                </section>
            </div>
 
        </div>


    );
};

export default Test;

