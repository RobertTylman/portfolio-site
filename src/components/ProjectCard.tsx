import { useState, useEffect } from "react";
import { ExternalLink, ChevronLeft, ChevronRight, Film, FileText } from "lucide-react";

const WebsiteIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="-1 -1 26 26"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
  >
    <g id="roll_brush" data-name="roll brush">
      <rect x="1.46" y="1.5" width="21.1" height="21.1" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.92px" />
      <polygon points="22.56 7.25 16.28 7.25 14.37 7.25 1.46 7.25 1.46 1.5 22.56 1.5 22.56 7.25" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.92px" />
      <line x1="4.34" y1="4.38" x2="6.25" y2="4.38" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.92px" />
      <line x1="8.17" y1="4.38" x2="10.09" y2="4.38" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.92px" />
      <line x1="12.01" y1="4.38" x2="13.93" y2="4.38" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.92px" />
    </g>
  </svg>
);

const GithubSquareIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="-1 -1 22 22"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMinYMin"
    className={className}
    fill="currentColor"
  >
    <path d="M18.88 1.099C18.147.366 17.265 0 16.233 0H3.746C2.714 0 1.832.366 1.099 1.099.366 1.832 0 2.714 0 3.746v12.487c0 1.032.366 1.914 1.099 2.647.733.733 1.615 1.099 2.647 1.099H6.66c.19 0 .333-.007.429-.02a.504.504 0 0 0 .286-.169c.095-.1.143-.245.143-.435l-.007-.885c-.004-.564-.006-1.01-.006-1.34l-.3.052c-.19.035-.43.05-.721.046a5.555 5.555 0 0 1-.904-.091 2.026 2.026 0 0 1-.872-.39 1.651 1.651 0 0 1-.572-.8l-.13-.3a3.25 3.25 0 0 0-.41-.663c-.186-.243-.375-.407-.566-.494l-.09-.065a.956.956 0 0 1-.17-.156.723.723 0 0 1-.117-.182c-.026-.061-.004-.111.065-.15.07-.04.195-.059.378-.059l.26.04c.173.034.388.138.643.311a2.1 2.1 0 0 1 .631.677c.2.355.44.626.722.813.282.186.566.28.852.28.286 0 .533-.022.742-.065a2.59 2.59 0 0 0 .585-.196c.078-.58.29-1.028.637-1.34a8.907 8.907 0 0 1-1.333-.234 5.314 5.314 0 0 1-1.223-.507 3.5 3.5 0 0 1-1.047-.872c-.277-.347-.505-.802-.683-1.365-.177-.564-.266-1.215-.266-1.952 0-1.049.342-1.942 1.027-2.68-.32-.788-.29-1.673.091-2.652.252-.079.625-.02 1.119.175.494.195.856.362 1.086.5.23.14.414.257.553.352a9.233 9.233 0 0 1 2.497-.338c.859 0 1.691.113 2.498.338l.494-.312a6.997 6.997 0 0 1 1.197-.572c.46-.174.81-.221 1.054-.143.39.98.424 1.864.103 2.653.685.737 1.028 1.63 1.028 2.68 0 .737-.089 1.39-.267 1.957-.177.568-.407 1.023-.689 1.366-.282.343-.633.63-1.053.865-.42.234-.828.403-1.223.507a8.9 8.9 0 0 1-1.333.235c.45.39.676 1.005.676 1.846v3.11c0 .147.021.266.065.357a.36.36 0 0 0 .208.189c.096.034.18.056.254.064.074.01.18.013.318.013h2.914c1.032 0 1.914-.366 2.647-1.099.732-.732 1.099-1.615 1.099-2.647V3.746c0-1.032-.367-1.914-1.1-2.647z" />
  </svg>
);

interface ProjectCardProps {
  title: string;
  description: React.ReactNode;
  tags: string[];
  images: string[];
  link?: string;
  github?: string;
  imageFit?: "cover" | "contain";
  logo?: string;
  webstoreLink?: string;
  webstoreLinkLabel?: string;
  videoLink?: string;
  videoLinkLabel?: string;
  paperLink?: string;
  paperLinkLabel?: string;
  titleClassName?: string;
  titleSuffix?: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  images,
  link,
  github,
  imageFit = "contain",
  logo,
  webstoreLink,
  webstoreLinkLabel,
  videoLink,
  videoLinkLabel,
  paperLink,
  paperLinkLabel,
  titleClassName,
  titleSuffix,
}: ProjectCardProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-play the carousel if there are multiple images
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation(); // Prevent card click
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation(); // Prevent card click
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <article className="group pixel-border text-border hover:text-primary transition-all duration-300 h-full flex flex-col">
      {/* Image Carousel */}
      {images.length > 0 && (
        <div className="relative aspect-video bg-black/5 overflow-hidden border-b-2 border-border group-hover:border-primary/50 transition-colors">
          <div className="w-full h-full relative">
            {images.map((img, index) => (
              <img
                key={img}
                src={img}
                alt={`${title} screenshot ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full ${imageFit === "cover" ? "object-cover" : "object-contain"} transition-opacity duration-1000 ease-in-out ${index === currentImage ? "opacity-100" : "opacity-0"
                  }`}
              />
            ))}
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 rounded-full text-foreground/70 hover:text-primary flex items-center justify-center transition-colors z-10 opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 rounded-full text-foreground/70 hover:text-primary flex items-center justify-center transition-colors z-10 opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4" />
              </button>


              {/* Lines indicator */}
              <div className="absolute bottom-0 left-0 w-full flex gap-1 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImage(index);
                    }}
                    className={`h-1 rounded-full transition-all duration-300 flex-1 ${index === currentImage
                      ? "bg-primary"
                      : "bg-white/40 hover:bg-white/60"
                      }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      <div className="p-6 bg-card flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            {logo && <img src={logo} alt={`${title} logo`} className="w-10 h-10 object-contain" />}
            <div className="flex flex-wrap items-baseline gap-2">
              <h3
                className={`font-bold text-foreground group-hover:text-primary transition-colors ${
                  titleClassName ??
                  (title === "Twist!"
                    ? "font-fredoka text-3xl"
                    : title === "TuneBoy"
                      ? "font-gameboy text-xl"
                      : "text-lg")
                }`}
              >
                {title}
              </h3>
              {titleSuffix && (
                <span className="font-standard text-sm font-normal text-muted-foreground">
                  {titleSuffix}
                </span>
              )}
            </div>
          </div>
          <div className="flex gap-3">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="View on GitHub"
              >
                <GithubSquareIcon className="w-6 h-6" />
              </a>
            )}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="View project"
              >
                <ExternalLink className="w-6 h-6" />
              </a>
            )}
            {webstoreLink && (
              <a
                href={webstoreLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                aria-label={webstoreLinkLabel ?? "View external link"}
              >
                <WebsiteIcon className="w-6 h-6" />
              </a>
            )}
            {videoLink && (
              <a
                href={videoLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                aria-label={videoLinkLabel ?? "Watch video"}
              >
                <Film className="w-6 h-6" />
              </a>
            )}
            {paperLink && (
              <a
                href={paperLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                aria-label={paperLinkLabel ?? "Read paper"}
              >
                <FileText className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>

        <div className="text-[15px] text-muted-foreground mb-6 leading-relaxed font-standard flex-1">
          {description}
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-sans text-xs border border-border/50 rounded-full px-3 py-1 text-muted-foreground bg-secondary/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
