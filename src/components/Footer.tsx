import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
            <div className="p-5 bg-[#F3F3F3] flex flex-col gap-10 pb-10 lg:flex-row justify-evenly">
      <div className="lg:w-[400px]">
        <h2 className="font-semibold text-xl mb-3 xl:text-2xl text-blue-400">About Us</h2>
        <p className="text-md text-[#5C5C5C] xl:text-lg max-w-[700px]">
          SoleStyle is your premium destination for contemporary footwear,
          offering curated collections for every style.
        </p>
      </div>
      <div>
        <h2 className="font-semibold text-xl mb-3 xl:text-2xl text-blue-400">Customer Service</h2>
        <div className="flex flex-col gap-3">
        <p className="text-[#5C5C5C] hover:cursor-pointer xl:text-lg">Contact Us</p>
        <p className="text-[#5C5C5C] hover:cursor-pointer xl:text-lg">Shipping Policy</p>
        <p className="text-[#5C5C5C] hover:cursor-pointer xl:text-lg">Returns & Exchanges</p>
        <p className="text-[#5C5C5C] hover:cursor-pointer xl:text-lg">FAQs</p>
        </div>
      </div>
      <div>
        <h2 className="font-semibold text-xl mb-3 xl:text-2xl text-blue-400">Quick Links</h2>
        <div className="flex flex-col gap-3">
        <p className="text-[#5C5C5C] hover:cursor-pointer xl:text-lg">New Arrivals</p>
        <p className="text-[#5C5C5C] hover:cursor-pointer xl:text-lg">Best Sellers</p>
        <p className="text-[#5C5C5C] hover:cursor-pointer xl:text-lg">Sale</p>
        <p className="text-[#5C5C5C] hover:cursor-pointer xl:text-lg">Size Guide</p>
        </div>
      </div>
      <div>
        <h2 className="font-semibold text-xl mb-3 xl:text-2xl text-blue-400">Connect With Us</h2>
        <div className="flex flex-row gap-3">
        <FontAwesomeIcon icon={faFacebook} className="text-4xl hover:cursor-pointer"/>
        <FontAwesomeIcon icon={faLinkedin} className="text-4xl hover:cursor-pointer"/>
        <FontAwesomeIcon icon={faXTwitter} className="text-4xl hover:cursor-pointer"/>
        <FontAwesomeIcon icon={faInstagram} className="text-4xl hover:cursor-pointer"/>
        </div>
      </div>
    </div>
    <div className="bg-[#F3F3F3] p-5 border-t border-[#cecece] pt-5 flex flex-col gap-5 text-[#5C5C5C]">
        <p className="text-center">2025 SoleStyle. Thanks for coming.</p>
        <div className="flex flex-row items-center justify-center gap-5">
            <p className="hover:cursor-pointer">Privacy Policy</p>
            <p className="hover:cursor-pointer">Terms of Service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
