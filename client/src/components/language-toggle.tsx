import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "mr" ? "en" : "mr");
  };

  return (
    <div className="absolute top-full right-4 mt-2 z-40">
      <Button
        onClick={toggleLanguage}
        variant="outline"
        size="sm"
        className="bg-white/95 backdrop-blur-sm border-orange-200 hover:bg-orange-50 hover:border-orange-300 shadow-lg transition-all duration-200 hover:scale-105 text-xs font-medium min-w-[60px] h-8 sm:h-9 sm:text-sm sm:min-w-[80px]"
      >
        {language === "mr" ? "ENGLISH" : "मराठी"}
      </Button>
    </div>
  );
}
