import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-orange-50 border-t border-orange-100 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connect With Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-600">
              Connect With Us
            </h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.facebook.com/snehankura.samajika.prakalpa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/snehankur.anath_aashram_partur/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://wa.me/9689227171"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
            <div className="text-gray-600 text-sm">
              <p className="mb-1">Email: Samarpan7171@gmail.com</p>
              <p className="mb-1">Phone: +91 9689227171 / 8767222142</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-600">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/snehankur"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/snehankur/about"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/snehankur/gallery"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/snehankur/donate"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  href="/snehankur/contact"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-600">
              Our Address
            </h3>
            <address className="text-gray-600 text-sm not-italic">
              <p className="mb-3">
                स्नेहांकुर सामाजिक प्रकल्प <br></br>
                मापेगाव बु. (पुनर्वसन), <br />
                परतूर-सेलु रोड, <br />
                तालुका परतूर, जिल्हा जालना
              </p>
              <p className="mb-1">
                प्रदिप कातारे - ९६८९२२७१७१ <br />
                नीता कातारे - ८७६७२२२१४२
              </p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-orange-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} स्नेहांकुर अनाथाश्रम. सर्व हक्क राखीव.
          </p>
        </div>
      </div>
    </footer>
  );
}
