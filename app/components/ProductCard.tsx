import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";

interface ProductCardProps {
    title: string;
    description: string;
    price: string;
    image?: string; // URL to image
    className?: string;
}

export default function ProductCard({
    title,
    description,
    price,
    image,
    className = "",
}: ProductCardProps) {
    return (
        <div className={`group relative flex flex-col overflow-hidden transition-all duration-500 ${className}`}>
            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden">
                {image ? (
                    // Using standard img for simplicity in this demo, usually next/image
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center text-label">
                        <span className="text-sm font-medium">Image Placeholder</span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors">
                        {title}
                    </h3>
                </div>

                <p className="mb-6 flex-1 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {description}
                </p>

                <div className="mt-auto flex items-center justify-between gap-4">
                    <div className="flex flex-col">
                        <span className="text-xs text-label uppercase tracking-wider font-semibold">Price</span>
                        <span className="text-2xl font-bold text-foreground">{price}</span>
                    </div>

                    {/* 
              Using the reusable WhatsAppButton. 
              We'll override padding/text size to fit the card better.
            */}
                    <WhatsAppButton
                        text="Order"
                        message={`Hi, I would like to order ${title} (${price})`}
                        className="px-6 py-2 text-base w-auto shadow-none"
                    />
                </div>
            </div>
        </div>
    );
}
