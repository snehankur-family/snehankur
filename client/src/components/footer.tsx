import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "wouter";
import { useLanguage } from "../lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-orange-50 border-t border-orange-100 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connect With Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-600">
              {t("connectWithUs")}
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
              <p className="mb-1">{t("emailFooter")}: Samarpan7171@gmail.com</p>
              <p className="mb-1">
                {t("phoneFooter")}: +91 9689227171 / 8767222142
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-600">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/snehankur"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/snehankur/about"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  {t("aboutUs")}
                </Link>
              </li>
              <li>
                <Link
                  href="/snehankur/gallery"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  {t("gallery")}
                </Link>
              </li>
              <li>
                <Link
                  href="/snehankur/donate"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  {t("donate")}
                </Link>
              </li>
              <li>
                <Link
                  href="/snehankur/contact"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-600">
              {t("ourAddress")}
            </h3>
            <address className="text-gray-600 text-sm not-italic">
              <p className="mb-3">
                {t("address1")} <br></br>
                {t("address2")} <br />
                {t("address3")} <br />
                {t("address4")} <br />
                {t("address5")} <br />
                {t("address6")} <br />
                {t("address7")} <br />
              </p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-orange-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} {t("snehankurOrphanage")}.{" "}
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
