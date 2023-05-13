"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  IoIosCall,
  IoIosMenu,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
} from "react-icons/io";

const Header = () => {
  return (
    <header className="header">
      <div className="overleay" />

      <div className="header_top">
        <div className="container">
          <Link href="#" className="help_box">
            <div className="icon_box">
              <IoIosCall className="ion_icon" />
            </div>

            <div className="wrapper">
              <p className="help_title">
                Vous pouvez nous joindre sur ce numéro :
              </p>

              <p className="help_number">+237 690 139 627</p>
            </div>
          </Link>

          <Link href="#" className="logo">
            <Image
              className="img"
              src="/assets/logo/logo.png"
              width={100}
              height={30}
              alt="Fondatation FIDEPE"
            />
          </Link>

          <div className="header_btn_group">
            <button
              className="nav_open_btn"
              aria-label="Ouvrir le menu"
              data-nav-open-btn
            >
              <IoIosMenu />
            </button>
          </div>
        </div>
      </div>

      <div className="header_bottom">
        <div className="container">
          <ul className="social_list">
            <li>
              <Link href="#" className="social_link">
                <IoLogoFacebook />
              </Link>
            </li>
            <li>
              <Link href="#" className="social_link">
                <IoLogoTwitter />
              </Link>
            </li>
            <li>
              <Link href="#" className="social_link">
                <IoLogoInstagram />
              </Link>
            </li>
          </ul>

          <nav className="navbar" data-navbar>
            <div className="navbar_top">
              <Link className="logo" href="#">
                <Image
                  alt="Fondation FIDEPE"
                  src="/assets/logo/logo.png"
                  width={100}
                  height={30}
                />
              </Link>

              <button className="nav_close_btn" aria-label="Fermer le Menu">
                <IoIosMenu />
              </button>
            </div>

            <ul className="navbar_list">
              <li>
                <Link href="#" className="navbar_link">
                  acceuil
                </Link>
              </li>

              <li>
                <Link href="#about" className="navbar_link">
                  a propos de nous
                </Link>
              </li>

              <li>
                <Link href="#" className="navbar_link">
                  gallerie
                </Link>
              </li>

              <li>
                <Link href="#" className="navbar_link">
                  Boutiques
                </Link>
              </li>

              <li>
                <Link href="#" className="navbar_link">
                  blogs
                </Link>
              </li>
            </ul>
          </nav>
          <button className="btn btn-primary">Faire un Don</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
