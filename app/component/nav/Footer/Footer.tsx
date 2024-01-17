import Container from "../../../product/Container";
import React from "react";
import FooterList from "./FooterList";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex  md:flex-row justify-between pt-14 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Shop Categories</h3>
            <a href="#">Laptops</a>
            <a href="#">Desktop</a>
            <a href="#">Watches</a>
            <a href="#">Tvs</a>
            <a href="#">Accessories</a>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Service</h3>
            <a href="#">Contact Us</a>
            <a href="#">Shipping Policy</a>
            <a href="#">Return & Exchanges</a>

            <a href="#">FAQ</a>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Shop Categories</h3>
            <a href="#">Laptops</a>
            <a href="#">Desktop</a>
            <a href="#">Watches</a>
            <a href="#">Tvs</a>
            <a href="#">Accessories</a>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2"> informtation to be written here later....</p>
            <p>&copy; {new Date().getFullYear()} E~Shop. All rights reserved</p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Follow Us</h3>
            <div className="flex gap-2">
              <a href="#">
                <FaFacebookSquare size={24} />
              </a>
              <a href="#">
                <IoLogoTwitter size={24} />
              </a>
              <a href="#">
                <FaSquareInstagram size={26} />
              </a>

              <a href="#">
                <FaYoutube size={26} />
              </a>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
