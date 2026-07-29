import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


function Navbar() {


    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);


    const location = useLocation();


    const isHome = location.pathname === "/";




    useEffect(() => {


        function handleScroll(){

            setScrolled(window.scrollY > 60);

        }


        window.addEventListener(
            "scroll",
            handleScroll
        );


        handleScroll();


        return () => {

            window.removeEventListener(
                "scroll",
                handleScroll
            );

        };


    }, []);






    const links = [


        {
            name:"Destinations",
            path:"#destinations",
            type:"scroll"
        },


        {
            name:"Experiences",
            path:"/experiences",
            type:"page"
        },


        {
            name:"Sustainability",
            path:"#sustainability",
            type:"scroll"
        },


        {
            name:"Impact",
            path:"#impact",
            type:"scroll"
        }


    ];






    return (



        <nav

        className={`

        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-500


        ${
            isHome && !scrolled

            ?

            "bg-transparent"

            :

            "bg-[#FAF6EE]/95 backdrop-blur shadow-md"

        }


        `}

        >







            <div

            className="
            max-w-7xl
            mx-auto
            px-6
            py-6
            flex
            items-center
            justify-between
            "

            >







                {/* LOGO */}


                <Link

                to="/"

                className={`

                text-4xl
                font-serif
                font-bold
                transition-colors
                duration-300


                ${
                    isHome && !scrolled

                    ?

                    "text-white"

                    :

                    "text-[#2C1810]"

                }

                `}

                >


                    Joven


                    <span className="text-[#C4873A]">

                        Safaris

                    </span>


                </Link>













                {/* DESKTOP MENU */}



                <div

                className="
                hidden
                md:flex
                items-center
                gap-8
                "

                >





                {


                links.map((link)=>(



                    link.type === "scroll"


                    ?




                    <a

                    key={link.name}

                    href={link.path}

                    className="

                    group
                    relative
                    text-base
                    font-medium
                    transition
                    text-[#2C1810]
                    hover:text-[#C4873A]

                    "

                    >


                        {link.name}



                        <span

                        className="

                        absolute
                        left-0
                        -bottom-2
                        h-[2px]
                        w-0
                        bg-[#C4873A]
                        transition-all
                        duration-300
                        group-hover:w-full

                        "

                        ></span>



                    </a>





                    :





                    <Link

                    key={link.name}

                    to={link.path}

                    className="

                    group
                    relative
                    text-base
                    font-medium
                    transition
                    text-[#2C1810]
                    hover:text-[#C4873A]

                    "

                    >


                        {link.name}



                        <span

                        className="

                        absolute
                        left-0
                        -bottom-2
                        h-[2px]
                        w-0
                        bg-[#C4873A]
                        transition-all
                        duration-300
                        group-hover:w-full

                        "

                        ></span>



                    </Link>




                ))

                }









                    {/* BOOK BUTTON */}



                    <Link

                    to="/book-now"


                    className={`


                    ml-4
                    w-36
                    h-11
                    rounded-md
                    font-semibold
                    text-sm
                    uppercase
                    tracking-[0.15em]
                    flex
                    items-center
                    justify-center
                    shadow-md
                    transition-all
                    duration-300



                    ${


                    isHome && !scrolled


                    ?


                    "bg-[#D4A940] text-[#2C1810] hover:bg-white"


                    :


                    "bg-[#2C1810] text-white hover:bg-[#C4873A]"


                    }


                    `}


                    >


                        Book Now


                    </Link>




                </div>














                {/* MOBILE BUTTON */}



                <button


                onClick={()=>setMenuOpen(!menuOpen)}


                className={`


                md:hidden
                text-2xl
                transition-colors
                duration-300



                ${


                isHome && !scrolled


                ?


                "text-white"


                :


                "text-[#2C1810]"


                }


                `}


                >



                    {

                    menuOpen

                    ?

                    "✕"

                    :

                    "☰"

                    }



                </button>







            </div>












            {/* MOBILE MENU */}



            <div


            className={`


            absolute
            top-full
            left-0
            w-full
            md:hidden
            bg-[#FAF6EE]
            shadow-lg
            px-6
            py-8
            space-y-6
            transition-all
            duration-300



            ${


            menuOpen


            ?


            "opacity-100 translate-y-0"


            :


            "opacity-0 -translate-y-5 pointer-events-none"


            }


            `}


            >






            {


            links.map((link)=>(


                link.type === "scroll"



                ?



                <a

                key={link.name}

                href={link.path}

                onClick={()=>setMenuOpen(false)}

                className="

                block
                text-[#2C1810]
                font-medium
                hover:text-[#C4873A]

                "

                >

                    {link.name}


                </a>




                :





                <Link

                key={link.name}

                to={link.path}

                onClick={()=>setMenuOpen(false)}

                className="

                block
                text-[#2C1810]
                font-medium
                hover:text-[#C4873A]

                "

                >

                    {link.name}


                </Link>



            ))

            }







                {/* MOBILE BOOK BUTTON */}



                <Link

                to="/book-now"

                onClick={()=>setMenuOpen(false)}

                className="

                block
                w-full
                text-center
                bg-[#C4873A]
                text-white
                py-4
                rounded-md
                font-semibold
                text-sm
                uppercase
                tracking-[0.15em]
                shadow-md
                hover:bg-[#2C1810]
                transition-all
                duration-300

                "

                >

                    Book Now


                </Link>






            </div>






        </nav>



    );


}



export default Navbar;