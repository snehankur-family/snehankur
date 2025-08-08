import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
      >
        EN
      </Button>
      <Button
        variant={language === "mr" ? "default" : "ghost"}
        size="sm"
        onClick={() => setLanguage("mr")}
      >
        मराठी
      </Button>
    </div>
  );
}
