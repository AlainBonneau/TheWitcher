import { Image } from "@nextui-org/react";

export default function Images({ images }) {
  return (
    <div className="img-container pt-12 flex justify-center">
      {images.map((image) => (
        <Image
          key={image.id}
          isZoomed
          width={240}
          alt={image.name}
          src={image.image}
        />
      ))}
    </div>
  );
}
