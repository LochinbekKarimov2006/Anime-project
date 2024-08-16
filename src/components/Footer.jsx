import React from "react";
import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footerr">
      <div className="containerr flex justify-between p-[64px]">
        <div className="">
          <img className="images " src={logo} alt="" />
          <p className="footer-desc mt-[24px]">
            Create amazing digital experiences that <br /> make the world a
            happier place.
          </p>
        </div>
        <div className="flex text-white gap-[32px] footer-menu">
          <div className="flex flex-col uh">
            <Link className="hover:text-orange-400 transition">Resurslar</Link>
            <Link className="hover:text-orange-400 transition">Blog</Link>
            <Link className="hover:text-orange-400 transition">Yangiliklar</Link>
            <Link className="hover:text-orange-400 transition">Tadbirlar</Link>
            <Link className="hover:text-orange-400 transition">Yordam</Link>
            <Link className="hover:text-orange-400 transition">FAQ</Link>
          </div>
          <div className="flex flex-col">
            <Link className="hover:text-orange-400 transition">Kompaniya</Link>
            <Link className="hover:text-orange-400 transition">Biz haqimizda</Link>
            <Link className="hover:text-orange-400 transition">Karyera</Link>
            <Link className="hover:text-orange-400 transition">Yangiliklar</Link>
            <Link className="hover:text-orange-400 transition">Galereya</Link>
            <Link className="hover:text-orange-400 transition">Kontaktlar</Link>
          </div>
          <div className="flex flex-col">
            <Link className="hover:text-orange-400 transition">Qonun-qoidalar</Link>
            <Link className="hover:text-orange-400 transition">Qoidalar</Link>
            <Link className="hover:text-orange-400 transition">Maxfiylik</Link>
            <Link className="hover:text-orange-400 transition">Cookies</Link>
            <Link className="hover:text-orange-400 transition">Litsenziyalar</Link>
            <Link className="hover:text-orange-400 transition">Sozlamalar</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
