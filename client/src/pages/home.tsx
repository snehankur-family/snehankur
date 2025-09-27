import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/lib/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              {t("welcome")}{" "}
              <span style={{ color: "#ff9933" }}>{t("snehankur")}</span>
            </h1>
            <p className="text-2xl text-primary mb-6 font-semibold">
              {t("motto")}
            </p>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t("quote")}
              <br />
              {t("quoteAuthor")}
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/snehankur/donate">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  {t("donate")}
                </Button>
              </Link>
              <Link href="/snehankur/contact">
                <Button variant="outline" size="lg">
                  {t("contact")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Images */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <img
              // src="https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2"
              src="https://github.com/snehankur-family/website-photos/blob/main/home-page/IMG-20250316-WA0002.jpg?raw=true"
              alt="Happy children"
              className="rounded-lg shadow-md aspect-video object-cover"
            />
            <img
              // src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5"
              src="https://github.com/snehankur-family/website-photos/blob/main/home-page/IMG-20250316-WA0003.jpg?raw=true"
              alt="Children activities"
              className="rounded-lg shadow-md aspect-video object-cover"
            />
            <img
              // src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368"
              src="https://github.com/snehankur-family/website-photos/blob/main/home-page/IMG-20250316-WA0018.jpg?raw=true"
              alt="Our facility"
              className="rounded-lg shadow-md aspect-video object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {t("ourGoal")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("goalDescription")}
          </p>
        </div>
      </section>
    </div>
  );
}
