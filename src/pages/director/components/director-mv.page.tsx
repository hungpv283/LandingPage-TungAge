import { videoDirection } from "@/constants/directions/video.direction"
import { useYoutubeViews } from "@/hooks/useYoutubeViews"
import { useMemo } from "react"
import MotionInView from "@/components/ui/motion-in-view"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"

const cancelTalkVideoUrl = "https://www.youtube.com/watch?v=bzDgZuRPxZA";

const DirectorMV = () => {
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY || "";
  const urls = useMemo(() => [...videoDirection.map(v => v.videoDirection), cancelTalkVideoUrl], []);
  const { getViewsForUrl } = useYoutubeViews(urls, API_KEY);
  const formatViews = (num: number) => {
    if (num >= 1_000_000) {
      const val = (num / 1_000_000).toFixed(1);
      return `${val.endsWith('.0') ? val.slice(0, -2) : val}M Views`;
    }
    if (num >= 1_000) {
      const val = (num / 1_000).toFixed(1);
      return `${val.endsWith('.0') ? val.slice(0, -2) : val}K Views`;
    }
    return `${num} Views`;
  }
  const getViewLabel = (url: string) => {
    const dynamic = getViewsForUrl(url);
    if (typeof dynamic === "number") return formatViews(dynamic);
    return null;
  }
  return (
    <>
      <section className="flex flex-row w-full justify-between pt-12 mx-auto">
        <MotionInView direction="left" className=" w-1/2 flex flex-col px-6 space-y-6 text-white text-left">
          <MotionInView as="p" direction="up" className="lg:text-6xl md:text-5xl text-3xl font-extrabold tracking-wider">
            DIRECTOR
          </MotionInView>
          <MotionInView as="p" direction="up" delay={0.1} className="text-white lg:mt-4 lg:text-2xl md:text-xl text-sm">
            With 15 years' expertise in the film industry. Tungage is the director of huge brand advertisements and million-view MVs, such as: Em Iu, Choi Nhu Tui My, BIGTEAM, CONG TY 4...
          </MotionInView>
          <div className="md:w-full w-64 flex flex-col items-start space-y-8 pt-10 md:mt-10 md:flex-col">
            {videoDirection.map((video, index) => {
              const isEmbeddable = video.embed !== false;
              const embedUrl = video.videoDirection.replace('watch?v=', 'embed/');
              return (
                <MotionInView key={index} className="w-full">
                  <div className="relative w-full overflow-hidden rounded-md shadow-lg">
                    {isEmbeddable ? (
                      <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                        <iframe
                          src={embedUrl}
                          title={'YouTube video player'}
                          className="absolute top-0 left-0 w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <a
                        href={video.videoDirection}
                        target="_blank"
                        rel="noreferrer"
                        className="group block"
                      >
                        <img
                          src={video.introductionImg}
                          alt={''}
                          className="w-full h-auto block"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                          <span className="px-4 py-2 bg-white text-black rounded-md font-semibold">Watch on YouTube</span>
                        </div>
                      </a>
                    )}
                  </div>
                  {(() => {
                    const viewLabel = getViewLabel(video.videoDirection);
                    if (!viewLabel) return null;
                    return (
                      <p className="mt-2 text-left text-red-500 font-bold text-base md:text-lg">
                        {viewLabel}
                      </p>
                    );
                  })()}
                </MotionInView>
              );
            })}
          </div>
        </MotionInView>
        <MotionInView direction="right" className="justify-center items-start flex md:w-1/2 md:justify-center md:items-end ">
          <MotionInView as="img" direction="none" src="/images/Dic1.jpg" alt="" className="w-full md:w-[92%] h-[70vh] md:h-[90vh] object-cover items-center rounded-none shadow-none" />
        </MotionInView>
      </section>

    /* Secondary DIRECTOR section */
      <section className="w-full py-20">
        <div className="w-full flex flex-col md:flex-row gap-10 md:gap-16">
          <MotionInView direction="up" className="md:w-1/2 px-6 flex flex-col items-center">
            <MotionInView as="p" direction="up" className="text-white text-center lg:text-7xl md:text-6xl text-4xl font-extrabold tracking-wider">
              DIRECTOR
            </MotionInView>
            <MotionInView as="p" direction="up" delay={0.1} className="mt-5 text-center text-white lg:text-xl md:text-lg text-sm max-w-3xl leading-relaxed">
              Tungage continues to be the director trusted by Vietnamese artists in 2025, with a succession of successful MVs placed Top 1 on YouTube trending Vietnam.
            </MotionInView>
            <div className="relative mt-10 w-full">
              <div className="absolute -right-6 bottom-0 w-56 h-56 bg-neutral-900/60 rotate-45 hidden md:block" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full relative">
                <MotionInView direction="up">
                  <p className="text-red-500 font-extrabold uppercase tracking-wide text-xs md:text-sm mb-3">TOP #1 YOUTUBE VIDEO TRENDING</p>
                  <MotionInView as="img" direction="none" src="/images/Dec6.jpg" alt="" className="w-full h-auto rounded-md shadow-lg" />
                </MotionInView>
                <MotionInView direction="up" delay={0.05}>
                  <p className="text-red-500 font-extrabold uppercase tracking-wide text-xs md:text-sm mb-3">TOP #1 YOUTUBE VIDEO TRENDING</p>
                  <MotionInView as="img" direction="none" src="/images/Dec5.jpg" alt="" className="w-full h-auto rounded-md shadow-lg" />
                </MotionInView>
              </div>
            </div>
          </MotionInView>
          <MotionInView direction="right" className="md:w-1/2 relative flex items-center justify-center px-6 md:px-0">
            <MotionInView as="img" direction="none" src="/images/Dec4.jpg" alt="" className="w-full md:w-[92%] h-[60vh] md:h-[80vh] object-cover" />
          </MotionInView>
        </div>
      </section>

      <section className="w-full py-20">
        <div className="w-full flex flex-col md:flex-row gap-10 md:gap-16">
          <MotionInView direction="up" className="md:w-1/2 px-6 flex flex-col justify-center text-white">
            <MotionInView as="p" direction="up" className="lg:text-7xl md:text-6xl text-4xl font-extrabold tracking-wider">
              DIRECTOR
            </MotionInView>
            <MotionInView as="p" direction="up" delay={0.1} className="mt-8 text-red-500 lg:text-4xl md:text-3xl text-2xl font-extrabold uppercase leading-tight">
              CANCEL TALK - TOULIVER FT. LIL WUYN
            </MotionInView>
            <MotionInView as="p" direction="up" delay={0.15} className="mt-4 text-white lg:text-2xl md:text-xl text-base">
              Official Music Video
            </MotionInView>
            <MotionInView
              as="a"
              direction="up"
              delay={0.2}
              href={cancelTalkVideoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-3 border border-red-500 px-5 py-3 text-base md:text-lg font-bold text-white transition-colors hover:bg-red-500"
            >
              <FontAwesomeIcon icon={faYoutube} className="h-7 w-7" />
              {getViewLabel(cancelTalkVideoUrl) ?? "Watch on YouTube"}
            </MotionInView>
          </MotionInView>

          <MotionInView direction="right" className="md:w-1/2 flex items-center justify-center px-6 md:px-0">
            <a
              href={cancelTalkVideoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full md:w-[92%] overflow-hidden"
            >
              <img
                src="/images/CancelTalk.jpg"
                alt="Cancel Talk official music video"
                className="w-full h-[60vh] md:h-[80vh] object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <span className="px-4 py-2 bg-white text-black rounded-md font-semibold">Watch on YouTube</span>
              </div>
            </a>
          </MotionInView>
        </div>
      </section>
    </>

  )
}

export default DirectorMV
