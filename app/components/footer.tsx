    import React from "react";
    import Image from "next/image";
    import bottom from "/public/bottom.png";
    import {
    FaTwitter,
    FaFacebook,
    FaYoutube,
    FaLinkedin,
    FaInstagram,
    } from "react-icons/fa";

    const Copy = () => {
    return (
        <div className="flex justify-center space-x-4 pt-5 pb-5">
        <FaTwitter className="text-gray-400 hover:text-primary" size={32} />
        <FaFacebook className="text-gray-400 hover:text-primary" size={32} />
        <FaYoutube className="text-gray-400 hover:text-primary" size={32} />
        <FaLinkedin className="text-gray-400 hover:text-primary" size={32} />
        <FaInstagram className="text-gray-400 hover:text-primary" size={32} />
        </div>
    );
    };

    function Footer() {
    return (
        <div>
        <div className="flex justify-evenly items-start pt-12">
            <div>
            <Image src={bottom} width={296} height={221} alt="people" />
            </div>
            <div className="flex flex-col space-y-4 pt-5 text-2xl font-semibold max-w-[394px]">         <div>Get involved in improving tech education in Africa!</div>
            <div className="h-[50px] w-32 bg-primary flex items-center justify-center mx-auto text-white">
                Support us{" "}
            </div>
            </div>
            <div className="flex flex-col space-y-2">
            <div>Links</div>
            <div className="text-secondary">Home</div>
            <div className="text-secondary">Success Stories</div>
            <div className="text-secondary">About us</div>
            <div className="text-secondary">Get Involved</div>
            </div>
            <div className="flex flex-col space-y-2">
            <div>Teams</div>
            <div className="text-secondary">Board members</div>
            <div className="text-secondary">Advisors/Mentors</div>
            <div className="text-secondary">Executives</div>
            <div className="text-secondary">Staffs</div>
            </div>
            <div className="flex flex-col space-y-2">
            <div>Blogs</div>
            <div className="text-secondary">Recent Blogs</div>
            <div className="text-secondary">New Blogs</div>
            </div>
        </div>
        <div className="border-t border-gray-300 mt-4 pt-4 flex justify-between items-center">
            <div>2020 Africa to Silicon Valley, Inc. All right reserved.</div>
            <Copy />
        </div>
        </div>
    );
    }

    export default Footer;
