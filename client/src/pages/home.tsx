import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Welcome to <span style={{ color: "#ff9933" }}>स्नेहांकुर</span>
            </h1>
            <p className="text-2xl text-primary mb-6 font-semibold">
              सेवा समर्पण सामर्थ्य
            </p>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              शृंखला पायी असू दे, मी गतीचे गीत गाई दुःख उधळायास आता, आसवांना वेळ
              नाही...!
              <br />- बाबा आमटे
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/snehankur/donate">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  Donate
                </Button>
              </Link>
              <Link href="/snehankur/contact">
                <Button variant="outline" size="lg">
                  Contact Us
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">आमचे ध्येय</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            समाजातील वंचित, दुर्बल, अनाथ आणि आत्महत्याग्रस्त कुटुंबातील मुलांना
            शिक्षणाच्या प्रवाहात आणण्यासाठी त्यांना आर्थिक मदत, योग्य मार्गदर्शन
            आणि विकासासाठी आवश्यक संधी उपलब्ध करून देणे, हीच स्नेहांकुर
            प्रकल्पाची मुख्य तळमळ आहे.
            <br />
            <br />
            स्वर्गीय श्री. बाबा आमटे आणि शांतिवन सामाजिक प्रकल्पाचे संचालक श्री.
            दिपक (काका) नागरगोजे यांच्या प्रेरणेतून, २०१७ पासून आम्ही गरजू आणि
            होतकरू विद्यार्थ्यांसाठी शैक्षणिक मदतीस सुरुवात केली. त्यांच्या
            विकासाचा प्रवाह अबाधित राहावा आणि ते सक्षम नागरिक म्हणून घडावेत,
            यासाठी आम्ही सातत्याने कार्यरत आहोत.
            <br />
            <br />
            "दुसऱ्यांची वाट पाहण्यापेक्षा आपणच पुढे येऊन काहीतरी करावं" या
            भावनेतून प्रेरित होत, समाजातील वंचित घटकांसाठी शिक्षण आणि विकासाच्या
            संधी निर्माण करणे, हेच आमचे ध्येय आहे.
          </p>
        </div>
      </section>
    </div>
  );
}
