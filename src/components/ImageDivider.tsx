interface ImageDividerProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageDivider = ({ src, alt, className = "" }: ImageDividerProps) => (
  <div className={`my-12 ${className}`.trim()}>
    <img
      src={src}
      alt={alt}
      width={1600}
      height={500}
      loading="lazy"
      decoding="async"
      className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
    />
  </div>
);

export default ImageDivider;
