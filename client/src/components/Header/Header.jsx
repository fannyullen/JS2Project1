import e from "cors";
import { Link, NavLink, Navigate, useNavigate } from "react-router";
import SearchBar from "../Search/SearchBar";

function Header() {

    
            function toggleMenu() {
            const hamburgerBtn = document.getElementById("hamburger-btn")
            const hamburgerMenu = document.getElementById("hamburger-menu")
        
            hamburgerMenu.classList.toggle("hidden");
            }

            function toggleSearch() {

            const searchBtn = document.getElementById("search-btn")
            const inputField = document.getElementById("input-field")
            inputField.classList.toggle("hidden");
            }

    return <div>

        <div className="fixed bg-[#faa9a9] lg:bg-transparent p-4 rounded-xl z-40 header">
            <div className="flex items-center justify-between">

                <div className="flex items-center space-x-2 text-xl sm:text-2xl md:text-3xl md:space-x-3 text-[#f96c6c]">
                    <button id="hamburger-btn" onClick={toggleMenu} className="z-50"><i className="bi bi-list"></ i></button>
                    <button id="search-btn" onClick={toggleSearch}className="z-50"><i className="bi bi-search"></i></button>
                </div>

                <div className="flex flex-row text-center text-xl sm:text-2xl md:text-3xl text-[#f96c6c] z-50">
                    <NavLink to="/">
                        <h1>Studio Kyan</h1>
                    </NavLink>
                        <div class="text-[#f96c6c] text-lg">&#169;</div>
                </div>

                <div className="flex items-center space-x-2 text-xl sm:text-2xl md:text-3xl md:space-x-3 text-[#f96c6c] z-50">
                    <NavLink to="/basket">
                        <button className="cursor-pointer"><i class="bi bi-cart"></i></button>
                    </NavLink>
                    <button><i class="bi bi-heart"></i></button>
                </div>

                <nav id="hamburger-menu" className="fixed bg-[#faa9a9] top-[75px] left-4 hidden text-xl flex-col gap-4 rounded border-2 border-[#f67e7e] menu-mobile animate-sliders md:bg-transparent z-40">
                    <div className="text-[#f96c6c] z-50 m-8 hover:border-b-2 border-[#f67e7e]"><a href="#">About Us</a></div>
                    <div className="text-[#f96c6c] z-50 m-8 hover:border-b-2 border-[#f67e7e]"><a href="#">Products</a></div>
                    <div className="text-[#f96c6c] z-50 m-8 hover:border-b-2 border-[#f67e7e]"><a href="#">Contact</a></div>
                </nav>
            </div>
        </div>

        <div id="input-field" className="fixed top-28 left-2 min-[370px]:left-4 min-[390px]:left-6 min-[460px]:left-14 md:left-14 hidden border-2 border-[#f96c6c] rounded z-50 menu-mobile animate-slider">
            <SearchBar />
        </div>

        <div id="cart-message" className="fixed hidden top-24 right-14">Tillagd i varukorgen!</div>

    </div>
    
}

export default Header;