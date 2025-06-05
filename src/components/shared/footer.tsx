import Image from "next/image";
import Link from "next/link";

// Assets
import yt_logo from "@/../public/assets/yt-logo.png";
import x_logo from "@/../public/assets/x-logo.png";
import logo from "@/../public/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-[var(--footer)] text-[var(--text)] pt-20 px-6 pb-10">
      <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-between items-start max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <p className="text-3xl font-bold mb-2">Minus Gaming</p>
          <Image
            src={logo}
            alt="Minus Gaming Logo"
            className="w-32 rounded-2xl"
          />
        </div>

        {/* Help Section */}
        <div className="flex flex-col text-left">
          <h2 className="text-lg font-semibold underline underline-offset-4">Help</h2>
          <a
            href="mailto:gamingsetupsishere@gmail.com"
            className="text-sm py-1 hover:underline"
          >
            gamingsetupsishere@gmail.com
          </a>
          <p className="text-sm py-1">FAQ / Contact Us</p>
          <p className="text-sm py-1">Policies</p>
        </div>

        {/* Your Setup Section */}
        <div className="flex flex-col text-left">
          <h2 className="text-lg font-semibold underline underline-offset-4">Your Setup</h2>
          <p className="text-sm py-1">Send Us an Idea</p>
          <p className="text-sm py-1">Get Started</p>
        </div>

        {/* Other Section */}
        <div className="flex flex-col text-left">
          <h2 className="text-lg font-semibold underline underline-offset-4">Other</h2>
          <p className="text-sm py-1">About Us</p>
          <p className="text-sm py-1">Blog</p>
        </div>

        {/* Social Section */}
        <div className="flex flex-col text-left">
          <h2 className="text-lg font-semibold underline underline-offset-4 mb-2">Follow Us:</h2>
          <div className="flex gap-4">
            <Link href="https://www.youtube.com/@OfficialMinusGaming" target="_blank" aria-label="YouTube">
              <Image
                src={yt_logo}
                alt="YouTube Logo"
                className="w-6 h-6 brightness-0 invert"
              />
            </Link>
            <Link href="https://x.com/properMinus" aria-label="X (Twitter) " target="_blank">
              <Image
                src={x_logo}
                alt="Twitter Logo"
                className="w-6 h-6 brightness-0 invert"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
