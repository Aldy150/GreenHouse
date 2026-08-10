import { useState } from "react";
import { cn } from "@/lib/utils";

export function PropertyGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0);
  const main = images[active] ?? images[0];

  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-border">
        <img
          src={main}
          alt={`Photo principale — ${title}`}
          width={1024}
          height={768}
          className="aspect-[16/10] w-full object-cover"
        />
      </div>
      {images.length > 1 ? (
        <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-4">
          {images.map((image, index) => (
            <button
              key={image + index}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Voir la photo ${index + 1} de ${title}`}
              className={cn(
                "overflow-hidden rounded-xl border-2 transition-colors",
                index === active ? "border-primary" : "border-transparent hover:border-border",
              )}
            >
              <img
                src={image}
                alt={`Miniature ${index + 1} — ${title}`}
                loading="lazy"
                width={400}
                height={300}
                className="aspect-[4/3] w-full object-cover"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}