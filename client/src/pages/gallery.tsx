import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useLanguage } from "@/lib/LanguageContext";

interface GitHubFile {
  name: string;
  download_url: string;
}

interface ImageItem {
  src: string;
  alt: string;
  category: string;
}

// Videos with specific YouTube ID
const videos = [
  {
    id: "mGjrqsbeT0Q",
    titleKey: "volunteerExperiences",
    descriptionKey: "volunteerExperiencesDesc",
  },
  {
    id: "jPL3U8TZTA0",
    titleKey: "annualDayCelebration",
    descriptionKey: "annualDayCelebrationDesc",
  },
  {
    id: "WhW0h3pOtv4",
    titleKey: "ourMission",
    descriptionKey: "ourMissionDesc",
  },
  {
    id: "O_O1iFgTgeA",
    titleKey: "annualDayCelebration",
    descriptionKey: "annualDayCelebrationDesc",
  },
  {
    id: "jPL3U8TZTA0",
    titleKey: "annualDayCelebration",
    descriptionKey: "annualDayCelebrationDesc",
  },
  {
    id: "9G3AezByQzY",
    titleKey: "annualDayCelebration",
    descriptionKey: "annualDayCelebrationDesc",
  },
  {
    id: "kStsxFPGGlg",
    titleKey: "annualDayCelebration",
    descriptionKey: "annualDayCelebrationDesc",
  },
  {
    id: "TDR_BUwrf4Y",
    titleKey: "annualDayCelebration",
    descriptionKey: "annualDayCelebrationDesc",
  },
  {
    id: "skiyE1pI06o",
    titleKey: "celebration",
    descriptionKey: "celebrationDesc",
  },
  {
    id: "LgjT8Es4wJA",
    titleKey: "celebration",
    descriptionKey: "celebrationDesc",
  },
  {
    id: "0JrtY9esY1M",
    titleKey: "celebration",
    descriptionKey: "celebrationDesc",
  },
  {
    id: "y1G9VTSlRL0",
    titleKey: "celebration",
    descriptionKey: "celebrationDesc",
  },
  {
    id: "RGujSDQrPuU",
    titleKey: "annualDayCelebration",
    descriptionKey: "annualDayCelebrationDesc",
  },
  {
    id: "NDaHbeBQsDU",
    titleKey: "annualDayCelebration",
    descriptionKey: "annualDayCelebrationDesc",
  },
  {
    id: "kcMNW_yrIHk",
    titleKey: "annualDayCelebration",
    descriptionKey: "annualDayCelebrationDesc",
  },
  {
    id: "8QZ9kvEmm_c",
    titleKey: "annualDayCelebration",
    descriptionKey: "annualDayCelebrationDesc",
  },
  {
    id: "UN2amGHacYo",
    titleKey: "annualDayCelebration",
    descriptionKey: "annualDayCelebrationDesc",
  },
  {
    id: "lqKfyKB_ngM",
    titleKey: "annualDayCelebration",
    descriptionKey: "annualDayCelebrationDesc",
  },
  {
    id: "AC-nztuwXew",
    titleKey: "annualDayCelebration",
    descriptionKey: "annualDayCelebrationDesc",
  },
  {
    id: "nQiyOsFXxJM",
    titleKey: "annualDayCelebration",
    descriptionKey: "annualDayCelebrationDesc",
  },
  {
    id: "mp0ul_M-Hss",
    titleKey: "annualDayCelebration",
    descriptionKey: "annualDayCelebrationDesc",
  },
  {
    id: "HdeBH_6Y-QU",
    titleKey: "annualDayCelebration",
    descriptionKey: "annualDayCelebrationDesc",
  },
  {
    id: "rAd2kdq5Ggk",
    titleKey: "celebration",
    descriptionKey: "celebrationDesc",
  },
  {
    id: "_VQpIxDymMw",
    titleKey: "celebration",
    descriptionKey: "celebrationDesc",
  },
];

export default function Gallery() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("photos");
  const [photoSectionImages, setPhotoSectionImages] = useState<ImageItem[]>([]);
  const [mediaPhotos, setMediaPhotos] = useState<ImageItem[]>([]);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");
  const [videoDialogOpen, setVideoDialogOpen] = useState(false);
  const [mediaPhotoIndex, setMediaPhotoIndex] = useState(0);
  const [mediaLightboxOpen, setMediaLightboxOpen] = useState(false);

  // Fetch GitHub photos
  useEffect(() => {
    const fetchGitHubPhotos = async () => {
      try {
        // Fetch repository content - specifically the photos folder for the photos tab
        const photosFolderResponse = await fetch(
          "https://api.github.com/repos/snehankur-family/website-photos/contents/photos"
        );

        // Fetch repository content - specifically the news folder for the media tab
        const newsFolderResponse = await fetch(
          "https://api.github.com/repos/snehankur-family/website-photos/contents/news"
        );

        if (!photosFolderResponse.ok || !newsFolderResponse.ok) {
          throw new Error("Failed to fetch GitHub repository");
        }

        const photosFolderContents = await photosFolderResponse.json();
        const newsFolderContents = await newsFolderResponse.json();

        // Filter for image files in photos folder
        const photoFiles = photosFolderContents.filter(
          (file: GitHubFile) =>
            file.name.toLowerCase().endsWith(".jpg") ||
            file.name.toLowerCase().endsWith(".jpeg") ||
            file.name.toLowerCase().endsWith(".png")
        );

        // Filter for image files in news folder
        const newsPhotoFiles = newsFolderContents.filter(
          (file: GitHubFile) =>
            file.name.toLowerCase().endsWith(".jpg") ||
            file.name.toLowerCase().endsWith(".jpeg") ||
            file.name.toLowerCase().endsWith(".png")
        );

        // Create image objects for each photo
        const photosFromGithub = photoFiles.map(
          (file: GitHubFile, index: number) => ({
            src: file.download_url,
            alt: `Snehankur Photo ${index + 1}`,
            category: t("activities"),
          })
        );

        // Create image objects for media section
        const mediaFromGithub = newsPhotoFiles.map(
          (file: GitHubFile, index: number) => ({
            src: file.download_url,
            alt: `Snehankur Media Item ${index + 1}`,
            category: t("news"),
          })
        );

        // Update photos for the Photos tab - only use GitHub photos
        setPhotoSectionImages(photosFromGithub);

        // Update media content for the Media tab - only use GitHub news photos
        setMediaPhotos(mediaFromGithub);
      } catch (error) {
        console.error("Error fetching GitHub photos:", error);
      }
    };

    fetchGitHubPhotos();
  }, []);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const openVideoDialog = (videoId: string) => {
    setSelectedVideoUrl(`https://www.youtube.com/embed/${videoId}?autoplay=1`);
    setVideoDialogOpen(true);
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
          {t("galleryTitle")}
        </h1>
        <p className="text-lg max-w-xl mx-auto text-gray-600">
          {t("galleryDescription")}
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <Tabs
          defaultValue="photos"
          className="w-full mb-8"
          onValueChange={setActiveTab}
        >
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 p-1 rounded-xl shadow-sm">
              <TabsTrigger
                value="photos"
                className="px-6 py-2 rounded-lg text-sm font-medium transition-all data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                {t("photos")}
              </TabsTrigger>
              <TabsTrigger
                value="videos"
                className="px-6 py-2 rounded-lg text-sm font-medium transition-all data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                {t("videos")}
              </TabsTrigger>
              <TabsTrigger
                value="media"
                className="px-6 py-2 rounded-lg text-sm font-medium transition-all data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                {t("media")}
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="photos" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photoSectionImages.map((image, index) => (
                <Card
                  key={index}
                  className="overflow-hidden cursor-pointer transform hover:scale-[1.02] transition-transform duration-200 border-orange-100 hover:border-orange-300"
                  onClick={() => openLightbox(index)}
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full aspect-video object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4">
                        <p className="text-xs opacity-75">{image.alt}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((video, index) => (
                <Card
                  key={index}
                  className="overflow-hidden cursor-pointer gallery-video-card border-orange-100 hover:shadow-lg transition-all duration-300"
                  onClick={() => openVideoDialog(video.id)}
                >
                  <CardContent className="p-0">
                    <div className="aspect-video relative">
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                        alt={t(video.titleKey as any)}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                      </div>
                      {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4">
                        <h3 className="font-bold text-lg">{video.title}</h3>
                        <p className="text-sm opacity-90">
                          {video.description}
                        </p>
                      </div> */}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="media" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaPhotos.map((item, index) => (
                <Card
                  key={index}
                  className="overflow-hidden cursor-pointer transform hover:scale-[1.02] transition-transform duration-200 border-orange-100 hover:border-orange-300"
                  onClick={() => {
                    setMediaPhotoIndex(index);
                    setMediaLightboxOpen(true);
                  }}
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full aspect-video object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4">
                        <p className="text-xs opacity-75">{item.alt}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Lightbox for Photos tab */}
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={photoSectionImages.map((img) => ({
            src: img.src,
            alt: img.alt,
          }))}
          render={{
            slide: ({ slide }) => (
              <img
                src={slide.src}
                alt={slide.alt}
                style={{ maxHeight: "85vh", margin: "auto" }}
              />
            ),
          }}
        />

        {/* Lightbox for Media tab */}
        <Lightbox
          open={mediaLightboxOpen}
          close={() => setMediaLightboxOpen(false)}
          index={mediaPhotoIndex}
          slides={mediaPhotos.map((img) => ({ src: img.src, alt: img.alt }))}
          render={{
            slide: ({ slide }) => (
              <img
                src={slide.src}
                alt={slide.alt}
                style={{ maxHeight: "85vh", margin: "auto" }}
              />
            ),
          }}
        />
      </div>

      <Dialog open={videoDialogOpen} onOpenChange={setVideoDialogOpen}>
        <DialogContent className="sm:max-w-3xl">
          <DialogTitle>
            <VisuallyHidden>{t("videoPlayer")}</VisuallyHidden>
          </DialogTitle>
          <div className="aspect-video">
            <iframe
              src={selectedVideoUrl}
              className="w-full h-full"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
