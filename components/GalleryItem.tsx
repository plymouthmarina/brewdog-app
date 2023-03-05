import imageLoader from "@/imageLoader";
import { Beer } from "@/types/Beer";
import Image from "next/image";

type GalleryItemProps = {
    beer: Beer;
};

const GalleryItem = ({ beer }: GalleryItemProps) => {
    const { image_url, name, tagline, abv } = beer;

    return (
        <div className="flex flex-col border-2 border-tertiary-light">
            <div className="relative my-6 aspect-[4/3]">
                <Image
                    loader={imageLoader}
                    alt={name}
                    src={image_url}
                    unoptimized
                    fill
                    style={{ objectFit: "contain" }}
                />
            </div>
            <div className="flex-1 bg-tertiary-light p-4 text-base text-tertiary-dark lg:text-lg">
                <h2 className="font-bold">{name}</h2>
                <p>
                    <span className="font-semibold text-secondary">ABV: </span>
                    {abv}
                </p>
                <p>{tagline}</p>
            </div>
        </div>
    );
};

export default GalleryItem;
