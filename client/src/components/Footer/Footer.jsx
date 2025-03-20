import { Link } from "react-router";
import { use, useState } from "react";
import AccordionGroup from "./Accordion";

function Footer({ title, content }) {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
        <footer className="bg-[#faa9a9] flex flex-col justify-center text-center mt-8 p-8">
            <div className="flex flex-row mb-6 justify-center text-center">
            <Link><h1 className="text-3xl text-[#f96c6c] z-50">Studio Kyan</h1></Link>
            <div className="text-[#f96c6c]">&#169;</div>
            </div>

            <nav className="hidden md:block gap-2 mt-6 mb-6 text-[#f96c6c] text-2xl font-sans">
            <Link>Mitt konto</Link>
            <div><i class="bi bi-dot"></i></div>
            <Link>Hållbarhet</Link>
            <div><i class="bi bi-dot"></i></div>
            <Link>Jobba med oss</Link>
            <div><i class="bi bi-dot"></i></div>
            <Link>FAQ</Link>
            </nav>

            <nav class="hidden flex-row md:block justify-between items-center mt-8 text-[#f96c6c]">
            <Link className="px-6">Returer</Link>
            
            <Link className="px-6">Leverans</Link>
            
            <Link className="px-6">Villkor</Link>
            
            <Link className="px-6">Integritetspolicy</Link>
            
            <Link className="px-6">Cookies</Link>
            </nav>

            <div class="md:hidden">
                <AccordionGroup />
            </div>

            <p className="mt-8 pt-4 text-[#f96c6c] font-sans">&#169; 2025 Studio Kyan GmbH</p>
        </footer>
        </>
    )
}

export default Footer;