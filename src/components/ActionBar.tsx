"use client";
import * as React from "react";

// Image data structure
interface ImageData {
  src: string;
  hasOverlay: boolean;
  alt: string;
  title: string;
  description: string;
}

// ✅ Message section (only shows when hovered or selected)
export const MessageSection: React.FC<{
  title: string;
  description: string;
}> = ({ title, description }) => {
  return (
    <section className="overflow-hidden p-2.5 w-full text-xs font-medium text-white rounded-lg bg-neutral-800 transition-opacity duration-300 opacity-100">
      <div className="w-full">
        <div className="flex justify-between items-center w-full">
          <p className="gap-1 self-stretch my-auto">{title}</p>
        </div>
      </div>
      <div className="mt-1.5 w-full">
        <div className="flex justify-between items-center w-full">
          <p className="gap-1 self-stretch my-auto opacity-50">{description}</p>
        </div>
      </div>
    </section>
  );
};

interface ImageTileProps {
  data: ImageData;
  onHover: () => void;
  onLeave: () => void;
  index: number;
}

export const ImageTile: React.FC<ImageTileProps> = ({
  data,
  onHover,
  onLeave,
  index,
}) => {
  const containerClasses = `flex overflow-hidden ${
    data.hasOverlay ? "relative " : ""
  }flex-col justify-center ${
    data.hasOverlay ? "items-start" : "items-center"
  } rounded-lg border border-solid ${
    data.hasOverlay ? "bg-white bg-opacity-10 border-white border-opacity-10" : "bg-white bg-opacity-5 border-white border-opacity-5"
  } h-[50px] min-h-[50px] w-[50px] relative transition-all duration-200 hover:bg-opacity-20 hover:border-opacity-20`;

  const imageClasses = `object-contain ${
    data.hasOverlay
      ? "absolute right-0 bottom-0 z-0 aspect-square h-[50px] w-[50px]"
      : "aspect-square w-[50px]"
  }`;

  return (
    <div
      className={containerClasses}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <img src={data.src} alt={data.alt} className={imageClasses} />
      {data.hasOverlay && (
        <>
          <div
            className="flex absolute top-2/4 left-2/4 z-0 -translate-x-2/4 -translate-y-2/4 bg-black bg-opacity-40 h-[58px] min-h-[50px] w-[58px]"
            role="presentation"
          />
          {/* 🔢 Number badge */}
          <div className="absolute top-0 left-0 m-1 px-1 text-xs font-bold text-white bg-black bg-opacity-50 rounded">
            {index + 1}
          </div>
        </>
      )}
    </div>
  );
};

// 💥 Central modal effect
const CenterModal: React.FC<{ visible: boolean; title: string }> = ({
  visible,
  title,
}) => {
  return (
    <div
      className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
      bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg 
      transition-opacity duration-300 pointer-events-none ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {title}
    </div>
  );
};

export const NotificationCard: React.FC = () => {
  const images: ImageData[] = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1c51eac92e0d81effefcb270971197f1867a1ce3?placeholderIfAbsent=true",
      hasOverlay: false,
      alt: "Silent Kill",
      title: "Silent Kill",
      description: "Stealthy strike, no alert triggered.",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e9236585f0c3fb44bd28bc866ac1e71c6479a2e4?placeholderIfAbsent=true",
      hasOverlay: true,
      alt: "Flow Like Water",
      title: "Flow Like Water",
      description: "Fluid movement, pass through enemies.",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/abd9d8c79276b395f65bbbcfcb56df5a8d2c1a9e?placeholderIfAbsent=true",
      hasOverlay: true,
      alt: "Dive & Become Fluid",
      title: "Dive & Become Fluid",
      description: "Temporarily phase and pass undetected.",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4421c53813d6ee51685e4667e7b8213d505d2f7f?placeholderIfAbsent=true",
      hasOverlay: true,
      alt: "Raging Thunder Clap",
      title: "Raging Thunder Clap",
      description: "Stuns all enemies for 2s.",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e8f69eb77dc0e57f88f5ccaf33c4587747d52731?placeholderIfAbsent=true",
      hasOverlay: true,
      alt: "Ghost/Phantom Step",
      title: "Ghost/Phantom Step",
      description: "Temporary invisibility for 3 seconds.",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalText, setModalText] = React.useState("");

  // Handle keypress for 1–5
  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const index = parseInt(e.key, 10) - 1;
      if (index >= 0 && index < images.length) {
        setHoveredIndex(index);
        setModalText(images[index].title);
        setModalVisible(true);
        setTimeout(() => setModalVisible(false), 1200);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <article className="max-w-[310px] relative" role="alert">
      {/* Central effect modal */}
      <CenterModal visible={modalVisible} title={modalText} />

      {/* 🧠 Message shows only when hovering/selected */}
      {hoveredIndex !== null && (
        <MessageSection
          title={images[hoveredIndex].title}
          description={images[hoveredIndex].description}
        />
      )}

      {/* 🎯 Grid of action tiles */}
      <section className="flex overflow-hidden gap-2.5 items-end p-2.5 mt-2.5 w-full rounded-lg bg-neutral-800">
        {images.map((image, index) => (
          <ImageTile
            key={index}
            data={image}
            index={index}
            onHover={() => setHoveredIndex(index)}
            onLeave={() => setHoveredIndex(null)}
          />
        ))}
      </section>
    </article>
  );
};

export default NotificationCard;

