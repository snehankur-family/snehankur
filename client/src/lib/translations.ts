export type Language = 'en' | 'mr';

export const translations = {
  en: {
    welcome: "Welcome to",
    motto: "Service, Dedication, Capability",
    mission: "Providing love, care, and support to children in need. Join us in making a difference in their lives.",
    donate: "Donate Now",
    contact: "Contact Us",
    aboutUs: "About Us",
    gallery: "Gallery",
    home: "Home",
    upiPayment: "UPI Payment",
    scanQR: "Scan the QR code or use our UPI ID for instant transfer",
    upiId: "UPI ID",
    showQR: "Show QR Code",
    copied: "Copied to clipboard!",
  },
  mr: {
    welcome: "स्वागत आहे",
    motto: "सेवा समर्पण सामर्थ्य",
    mission: "गरजू मुलांना प्रेम, काळजी आणि सहाय्य देणे. त्यांच्या जीवनात बदल घडवून आणण्यासाठी आमच्यासोबत सहभागी व्हा.",
    donate: "दान करा",
    contact: "संपर्क करा",
    aboutUs: "आमच्याबद्दल",
    gallery: "गॅलरी",
    home: "मुख्यपृष्ठ",
    upiPayment: "यूपीआय पेमेंट",
    scanQR: "क्यूआर कोड स्कॅन करा किंवा त्वरित हस्तांतरणासाठी आमचा यूपीआय आयडी वापरा",
    upiId: "यूपीआय आयडी",
    showQR: "क्यूआर कोड दाखवा",
    copied: "क्लिपबोर्डवर कॉपी केले!",
  },
};

export type TranslationKey = keyof typeof translations.en;
