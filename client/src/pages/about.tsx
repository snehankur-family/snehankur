import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
const years_of_service = new Date().getFullYear() - 2017;

export default function About() {
  const [, setLocation] = useLocation();
  type BoardMember = { name: string; photo: string; post: string };
  type AdvisorMember = { name: string; photo: string };

  const boardMembers: BoardMember[] = [
    {
      name: "नीता कातारे",
      photo:
        "https://github.com/snehankur-family/website-photos/blob/main/members/68d714c7-1a9f-4804-9565-fa7a82ad024f.jpeg?raw=true",
      post: "अध्यक्ष",
    },
    {
      name: "संतोष कातारे",
      photo:
        "https://github.com/snehankur-family/website-photos/blob/main/members/b559bbd3-7d83-422b-8229-2da641bb8aa2.jpeg?raw=true",
      post: "उपाध्यक्ष",
    },
    {
      name: "सविता काकडे",
      photo:
        "https://github.com/snehankur-family/website-photos/blob/main/members/5966e0c3-7bab-4a5a-aa86-5a5448f17c83%20(1).jpeg?raw=true",
      post: "सचिव",
    },
    {
      name: "अमोल लाळे",
      photo:
        "https://github.com/snehankur-family/website-photos/blob/main/members/0583076a-3321-4cdd-98cf-d23e7877241f.jpeg?raw=true",
      post: "सहसचिव",
    },
    {
      name: "प्रशांत राऊत",
      photo:
        "https://github.com/snehankur-family/website-photos/blob/main/members/a061c208-a674-43e9-bb9a-6f77bb6096c9.jpeg?raw=true",
      post: "कोषाध्यक्ष",
    },
    {
      name: "निवृत्ती कातारे",
      photo:
        "https://github.com/snehankur-family/website-photos/blob/main/members/e59cd991-9b27-4c48-a675-cc51439cd56a.jpeg?raw=true",
      post: "सदस्य",
    },
    {
      name: "भाग्यश्री कातारे",
      photo:
        "https://github.com/snehankur-family/website-photos/blob/main/members/547aa066-3cca-4331-b134-634bfde6997e.jpeg?raw=true",
      post: "सदस्य",
    },
  ];

  const advisorMembers: AdvisorMember[] = [
    {
      name: "प्रदीप कातारे",
      photo:
        "https://github.com/snehankur-family/website-photos/blob/main/members/d270d1b4-fd7f-40de-afda-3545190a9dfc.jpeg?raw=true",
    },
    {
      name: "विकास टेकुळे",
      photo:
        "https://github.com/snehankur-family/website-photos/blob/main/members/f97a8321-1228-4d99-93dc-3eb8e87d1d18.jpeg?raw=true",
    },

    {
      name: "कौशल्या कातारे",
      photo:
        "https://github.com/snehankur-family/website-photos/blob/main/members/bef88691-d1cb-475b-99c7-324bf2f86cac.jpeg?raw=true",
    },
    {
      name: "दिपक सवने",
      photo:
        "https://github.com/snehankur-family/website-photos/blob/main/members/19949a3b-dadb-46f1-9798-630cb5c5d875.jpeg?raw=true",
    },
    {
      name: "आशिष खरात",
      photo:
        "https://github.com/snehankur-family/website-photos/blob/main/members/new01.jpeg?raw=true",
    },
    {
      name: "विजय गवळी",
      photo:
        "https://github.com/snehankur-family/website-photos/blob/main/members/new02.jpeg?raw=true",
    },
  ];
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Snehankur
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            🏡 आमचा प्रवास, ध्येय आणि मुलांच्या जीवनात आम्ही करत असलेल्या
            प्रभावाबद्दल जाणून घ्या.
          </p>
        </div>

        {/* Achievements Section - Highlighted at the top */}
        <div className="mb-24">
          <motion.h2
            className="text-3xl font-bold text-gray-900 text-center mb-12 relative inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="after:content-[''] after:absolute after:w-full after:h-1 after:bg-orange-400 after:bottom-0 after:left-0">
              Our Achievements
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Achievement 1 - Children Supported */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{
                y: -15,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                scale: 1.02,
              }}
            >
              <div className="h-2 bg-orange-500"></div>
              <div className="p-8">
                <div className="h-20 w-20 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white text-2xl font-bold">15+</span>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">
                  मुलांना आधार
                </h3>
                <p className="text-gray-600 text-center">
                  आमच्या स्थापनेपासून आजपर्यंत आम्ही १५ हून अधिक मुलांना शिक्षण,
                  निवारा आणि प्रेमळ संगोपन दिला आहे. त्यांच्या वाढीव विकासासाठी
                  आम्ही आवश्यक ती संपूर्ण मदत आणि मार्गदर्शन पुरवले आहे,
                  ज्यामुळे त्यांच्यात आत्मविश्वास व स्वावलंबन निर्माण झाले आहे.
                </p>
              </div>
            </motion.div>

            {/* Achievement 2 - Years of Service */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{
                y: -15,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                scale: 1.02,
              }}
            >
              <div className="h-2 bg-orange-500"></div>
              <div className="p-8">
                <div className="h-20 w-20 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white text-2xl font-bold">
                    {years_of_service}+
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">
                  सेवेची वर्षे
                </h3>
                <p className="text-gray-600 text-center">
                  आम्ही {years_of_service} हून अधिक वर्षांपासून गरजू आणि वंचित
                  मुलांची सेवा करण्यास समर्पित आहोत. त्यांच्या कल्याणासाठी आमची
                  सेवा नि:स्वार्थ आणि सातत्यपूर्ण असून, त्यांना उज्वल भविष्याची
                  दिशा देणे हेच आमचे ध्येय आहे.
                </p>
              </div>
            </motion.div>

            {/* Achievement 3 - Awards */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{
                y: -15,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                scale: 1.02,
              }}
            >
              <div className="h-2 bg-orange-500"></div>
              <div className="p-8">
                <div className="h-20 w-20 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-white text-2xl font-bold">5+</span>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">
                  पुरस्कार
                </h3>
                <p className="text-gray-600 text-center">
                  बालकल्याण आणि शिक्षण क्षेत्रातील उल्लेखनीय योगदानासाठी ५ हून
                  अधिक प्रतिष्ठित पुरस्कारांनी आम्हाला गौरविण्यात आले आहे. हे
                  पुरस्कार आमच्या निरंतर सेवाभावनेचे व गुणवत्तापूर्ण कार्याचे
                  प्रमाण आहेत.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="mb-24">
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-12 relative inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="after:content-[''] after:absolute after:w-full after:h-1 after:bg-orange-400 after:bottom-0 after:left-0">
              Our Story
            </span>
          </motion.h2>

          {/* About Us */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-orange-600">
                About Us
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                २०१७ मध्ये स्थापन झालेले स्नेहांकुर हे एक लहान उपक्रम म्हणून
                सुरू झाले जे करुणा आणि दूरदृष्टीने प्रेरित होते - ज्या मुलांना
                स्वतःचे म्हणवणारे कोणी नव्हते त्यांना प्रेम, काळजी आणि संधी
                प्रदान करणे. मर्यादित संसाधनांसह एका नम्र प्रयत्नातून सुरू
                झालेले हे आज अनाथ आणि वंचित मुलांसाठी एक समृद्ध आधार
                प्रणालीमध्ये विकसित झाले आहे.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                स्नेहांकुर येथे, आमचा असा विश्वास आहे की प्रत्येक मुलाला घर,
                शिक्षण आणि स्वप्न पाहण्याची संधी मिळायला हवी. आमचे ध्येय मूलभूत
                गरजा पुरवण्यापलीकडे जाते - आम्ही दर्जेदार शिक्षण आणि जीवन
                कौशल्यांद्वारे समग्र विकास, भावनिक कल्याण आणि भविष्यातील
                सक्षमीकरणावर लक्ष केंद्रित करतो.
              </p>
              <h4 className="text-xl font-semibold text-orange-600 mb-3 mt-5">
                आमचा उद्देश आणि मूल्ये 🌟
              </h4>
              <ul className="list-none pl-0 mb-4 text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>
                    शिक्षण, आरोग्यसेवा आणि भावनिक आधाराद्वारे मुलांचे संगोपन आणि
                    सक्षमीकरण करणे.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>
                    एक प्रेमळ, कुटुंबासारखे वातावरण प्रदान करणे जिथे प्रत्येक
                    मुलाला सुरक्षित आणि मूल्यवान वाटेल.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>
                    जीवन उन्नत करणे आणि परिवर्तन करणे, परिस्थितीमुळे कोणतेही मूल
                    मागे राहणार नाही याची खात्री करणे.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✅</span>
                  <span>
                    देणगीदार, हितचिंतक आणि स्वयंसेवकांचा एक मजबूत समुदाय तयार
                    करणे जे फरक घडवण्यात विश्वास ठेवतात.
                  </span>
                </li>
              </ul>
              <p className="text-gray-700 mb-4 leading-relaxed">
                दयाळू देणगीदार, समर्पित स्वयंसेवक आणि उत्साही टीमच्या अढळ
                पाठिंब्यामुळे, स्नेहांकुर वाढतच आहे, दरवर्षी अधिकाधिक जीवनांना
                स्पर्श करत आहे. आमचा प्रवास आव्हाने, चिकाटी आणि अंतहीन आशेचा
                राहिला आहे आणि आम्ही मदत केलेल्या प्रत्येक मुलाला, आम्ही एका
                उज्ज्वल, दयाळू जगाच्या जवळ एक पाऊल टाकतो.
              </p>
              <p className="text-gray-700 leading-relaxed">
                स्नेहांकुर ही केवळ एक संस्था नाही - ती प्रेम, काळजी आणि दुसऱ्या
                संधीची चळवळ आहे. 💖✨
              </p>
            </div>
            <motion.div
              className="flex justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1509163245925-f4255dea7727?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Children playing together"
                className="rounded-lg shadow-xl object-cover w-full max-w-md h-64"
              />
            </motion.div>
          </motion.div>

          {/* The Beginning */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-orange-600">
                About Founder
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                प्रदीप कातारे हे एक दूरदर्शी समाजसुधारक आहेत ज्यांनी अनाथ आणि
                वंचित मुलांच्या उन्नतीसाठी आपले जीवन समर्पित केले आहे. एक
                सुशिक्षित आणि दयाळू व्यक्ती म्हणून, त्यांनी पारंपारिक करिअर
                मार्गांपासून दूर जाऊन गरजू मुलांना एक प्रेमळ घर आणि उज्ज्वल
                भविष्य प्रदान करण्याचा एक मोठा उद्देश साध्य करण्याचा निर्णय
                घेतला.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                त्यांच्या पत्नी नीता कातारे यांच्यासोबत, ते पूर्णवेळ
                वचनबद्धतेनुसार अनाथाश्रम चालवतात, जेणेकरून प्रत्येक मुलाला केवळ
                अन्न आणि निवाराच नाही तर दर्जेदार शिक्षण, भावनिक आधार आणि
                सन्माननीय जीवन जगण्याची संधी देखील मिळेल याची खात्री करतात.
                त्यांचा प्रवास प्रत्येक मुलाला प्रेम, काळजी आणि भरभराटीसाठी
                योग्य वातावरण मिळवे या अढळ विश्वासाने चालवला जातो.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                प्रदीप आणि नीता यांना वेगळे करणारी गोष्ट म्हणजे त्यांचा
                प्रत्यक्ष दृष्टिकोन - ते केवळ प्रशासक नाहीत तर सक्रिय काळजीवाहक,
                मार्गदर्शक आणि मुलांचे पालक आहेत. वाढदिवस साजरा करण्यापासून ते
                अभ्यास आणि जीवनातील आव्हानांमधून त्यांना मार्गदर्शन
                करण्यापर्यंत, त्यांनी अनाथाश्रमात एक खरे कुटुंब निर्माण केले
                आहे.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                त्यांचे काम केवळ या मुलांच्या डोक्यावर छप्पर प्रदान करण्याबद्दल
                नाही; हे भविष्य घडवण्याबद्दल, स्वप्नांना घडवण्याबद्दल आणि
                आत्मविश्वास निर्माण करण्याबद्दल आहे. त्यांच्या मार्गदर्शनाखाली,
                अनाथाश्रम आशेचे एक अभयारण्य बनले आहे, जिथे प्रत्येक मुलाला
                कष्टाच्या चक्रातून मुक्त होण्यासाठी आणि शक्यतांनी भरलेल्या
                भविष्याला स्वीकारण्यास सक्षम केले जाते.
              </p>
              <p className="text-gray-700 leading-relaxed">
                त्यांचे निःस्वार्थ समर्पण अनेकांना प्रेरणा देत आहे, हे सिद्ध
                करून की उत्कटतेने आणि वचनबद्धतेने प्रेरित होऊन दयाळूपणाचे एक
                कृत्य असंख्य जीवन बदलू शकते.
              </p>
            </div>
            <motion.div
              className="flex justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://github.com/snehankur-family/website-photos/blob/main/home-page/IMG-20250316-WA0002.jpg?raw=true"
                alt="The Beginning"
                className="rounded-lg shadow-xl object-cover w-full max-w-md h-64"
              />
            </motion.div>
          </motion.div>

          {/* The Journey */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="flex justify-center md:order-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1489641024260-20e5cb3ee4aa?q=80&w=3133&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="The Journey"
                className="rounded-lg shadow-xl object-cover w-full max-w-md h-64"
              />
            </motion.div>
            <div className="md:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-orange-600">
                The Journey
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                स्नेहांकुरचा प्रवास हा केवळ अनाथाश्रम बांधण्याची कहाणी नाही तर
                संघर्षांवर मात करण्याची, आव्हानांमध्ये आशा शोधण्याची आणि
                दयाळूपणाची शक्ती पाहण्याची कहाणी आहे. ❤️
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                हे सर्व एका साध्या इच्छेने सुरू झाले - गरजू मुलांना मदत करणे. पण
                या स्वप्नाचे वास्तवात रूपांतर करणे सोपे नव्हते. हा मार्ग
                अनिश्चितता, आर्थिक अडचणी आणि आत्म-शंकेच्या क्षणांनी भरलेला होता.
                संसाधने शोधणे, सुरक्षित जागा मिळवणे आणि मुलांची सतत काळजी घेणे
                हे आम्हाला दररोज लढावे लागत होते. असे काही वेळा होते जेव्हा
                आम्हाला वाटायचे की आपण ते टिकवू शकू का, परंतु आमच्या ध्येयावरील
                विश्वासाने आम्हाला पुढे जाण्यास मदत केली. 💪🌿
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                या प्रवासात, आम्ही कधीही एकटे नव्हतो. आमचे देणगीदार, हितचिंतक
                आणि समर्थक आमची शक्ती बनले. छोटेसे योगदान असो, प्रोत्साहनाचे
                शब्द असो किंवा दयाळूपणाचे कृत्य असो, प्रत्येक कृती स्नेहांकुरला
                आज जे आहे ते बनवण्यासाठी एक पाऊल ठरली. 🏡💖
              </p>
              <ul className="list-disc pl-5 mb-4 text-gray-700">
                <li className="mb-2">
                  जेव्हा निधी कमी होता, तेव्हा कोणीतरी मदतीसाठी पुढे आले.
                </li>
                <li className="mb-2">
                  जेव्हा आम्हाला मार्गदर्शनाची आवश्यकता होती, तेव्हा अनुभवी
                  मार्गदर्शकांनी आम्हाला मार्ग दाखवला. 🛤️
                </li>
                <li className="mb-2">
                  जेव्हा शंका निर्माण झाल्या, तेव्हा मुलांच्या यशाने आम्हाला
                  आठवण करून दिली की आम्ही का सुरुवात केली. 🌟
                </li>
              </ul>
              <p className="text-gray-700 mb-4 leading-relaxed">
                या निःस्वार्थ हृदयांशिवाय, हा प्रवास शक्य झाला नसता. दिले जाणारे
                प्रत्येक जेवण, दिले जाणारे प्रत्येक पुस्तक आणि निर्माण केलेली
                प्रत्येक संधी असंख्य हातांच्या एकत्र येण्याचे परिणाम आहे. 🙌📚
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                रस्ता नेहमीच गुळगुळीत नव्हता. भाडे देण्यासाठी संघर्ष करण्यापासून
                ते प्रत्येक मुलाचे शिक्षण सुनिश्चित करण्यापर्यंत, प्रत्येक दिवस
                एक नवीन आव्हान घेऊन येत असे. परंतु विश्वास, चिकाटी आणि आमच्या
                समर्थकांच्या प्रेमाने आम्ही पुढे सरकलो. ज्या अडथळ्यांना आम्ही
                तोंड दिले त्यांनी आमचा निर्धारच बळकट केला.
              </p>
              <p className="text-gray-700 leading-relaxed">
                लहान पावलाने सुरू झालेले हे आता करुणा आणि बदलाची चळवळ बनली आहे.
                प्रत्येक दिवस जात असताना, आपण वाढतो, शिकतो आणि अधिकाधिक जीवनांवर
                परिणाम करतो. आणि आमच्या देणगीदारांच्या आणि हितचिंतकांच्या अढळ
                पाठिंब्यामुळे, आपल्याला माहित आहे की भविष्यात आणखी शक्यता आहेत.
                💞 कारण स्नेहांकुरच्या हृदयात, फक्त एक संस्था नाही - अशा लोकांचा
                समुदाय आहे ज्यांचा असा विश्वास आहे की कोणत्याही मुलाला कधीही
                एकटे वाटू नये. ❤️🤗
              </p>
            </div>
          </motion.div>
        </div>

        {/* Our Team Section */}
        <div className="mb-24">
          <motion.h2
            className="text-3xl font-bold text-gray-900 text-center mb-12 relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="after:content-[''] after:absolute after:w-full after:h-1 after:bg-orange-400 after:bottom-0 after:left-0">
              Our Team
            </span>
          </motion.h2>

          {/* Advisory Committee Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8 text-orange-600">
              ADVISORY COMMITTEE OF SNEHANKUR
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {advisorMembers.map((member, idx) => (
                <motion.div
                  key={`advisor-${idx}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <Card className="overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                    <div className="aspect-square w-full overflow-hidden">
                      <img
                        src={member.photo}
                        alt={`${member.name}`}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="text-center p-4">
                      <motion.p
                        className="text-sm font-semibold text-black"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                      >
                        {member.name}
                      </motion.p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Board of Directors Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8 text-orange-600">
              BOARD OF DIRECTOR-SNEHANKUR
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {boardMembers.map((member, idx) => (
                <motion.div
                  key={`board-${idx}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <Card className="overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                    <div className="aspect-square w-full overflow-hidden">
                      <img
                        src={member.photo}
                        alt={`${member.name}`}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="text-center p-4">
                      <motion.p
                        className="text-sm font-semibold text-black"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                      >
                        {member.name}
                      </motion.p>
                      <motion.p
                        className="text-xs text-black mt-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                      >
                        {member.post}
                      </motion.p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl p-10 text-white text-center shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            आमच्या ध्येयामध्ये सहभागी व्हा{" "}
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            स्वयंसेवा, आर्थिक मदत किंवा जनजागृती यांपैकी कोणत्याही मार्गाने
            तुम्ही एका मुलाच्या आयुष्यात सकारात्मक बदल घडवू शकता. तुमचा छोटासा
            सहभागही त्यांच्या उज्ज्वल भविष्याकडे एक मोठे पाऊल ठरू शकतो.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="/snehankur/donate"
              className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                setLocation("/snehankur/donate");
              }}
            >
              Donate
            </motion.a>
            <motion.a
              href="/snehankur/contact"
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                setLocation("/snehankur/contact");
              }}
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
