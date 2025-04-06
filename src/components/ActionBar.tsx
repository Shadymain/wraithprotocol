"use client";
import * as React from "react";

interface ImageTileProps {
  src: string;
  hasOverlay: boolean;
  alt: string;
}

export const ImageTile: React.FC<ImageTileProps> = ({
  src,
  hasOverlay,
  alt,
}) => {
  const containerClasses = `flex overflow-hidden ${
    hasOverlay ? "relative " : ""
  }flex-col justify-center ${
    hasOverlay ? "items-start" : "items-center"
  } rounded-lg border border-solid bg-white bg-opacity-10 border-white border-opacity-10 h-[50px] min-h-[50px] w-[50px]`;

  const imageClasses = `object-contain ${
    hasOverlay
      ? "absolute right-0 bottom-0 z-0 aspect-square h-[50px] w-[50px]"
      : "aspect-square w-[50px]"
  }`;

  return (
    <div className={containerClasses}>
      <img src={src} alt={alt} className={imageClasses} />
      {hasOverlay && (
        <div
          className="flex absolute top-2/4 left-2/4 z-0 -translate-x-2/4 -translate-y-2/4 bg-black bg-opacity-40 h-[58px] min-h-[50px] w-[58px]"
          role="presentation"
        />
      )}
    </div>
  );
};

export const ImageGrid: React.FC = () => {
  const images = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1c51eac92e0d81effefcb270971197f1867a1ce3?placeholderIfAbsent=true", hasOverlay: false },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e9236585f0c3fb44bd28bc866ac1e71c6479a2e4?placeholderIfAbsent=true", hasOverlay: true },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/abd9d8c79276b395f65bbbcfcb56df5a8d2c1a9e?placeholderIfAbsent=true", hasOverlay: true },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4421c53813d6ee51685e4667e7b8213d505d2f7f?placeholderIfAbsent=true", hasOverlay: true },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e8f69eb77dc0e57f88f5ccaf33c4587747d52731?placeholderIfAbsent=true", hasOverlay: true },
  ];

  return (
    <section className="flex overflow-hidden gap-2.5 items-end p-2.5 mt-2.5 w-full rounded-lg bg-neutral-800">
      {images.map((image, index) => (
        <ImageTile
          key={index}
          src={image.src}
          hasOverlay={image.hasOverlay}
          alt={`Notification image ${index + 1}`}
        />
      ))}
    </section>
  );
};

export const MessageSection: React.FC = () => {
  return (
    <section className="overflow-hidden p-2.5 w-full text-xs font-medium text-white rounded-lg bg-neutral-800">
      <div
        className="flex rounded-lg bg-white bg-opacity-10 h-[50px] min-h-[50px] w-[50px]"
        role="presentation"
      />
      <div className="mt-2.5 w-full">
        <div className="flex justify-between items-center w-full">
          <p className="gap-1 self-stretch my-auto">
            Stealthy strike, no alert triggered.
          </p>
        </div>
      </div>
    </section>
  );
};

export const NotificationCard: React.FC = () => {
  return (
    <article className="max-w-[310px]" role="alert">
      <MessageSection />
      <ImageGrid />
    </article>
  );
};

export default NotificationCard; 