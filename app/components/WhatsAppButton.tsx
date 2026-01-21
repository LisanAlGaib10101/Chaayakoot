import Link from "next/link";


interface WhatsAppButtonProps {
    message?: string;
    phoneNumber?: string;
    text?: string;
    className?: string;
    minimal?: boolean;
}

export default function WhatsAppButton({
    message = "Hello, I would like to know more about Chaayakoott.",
    phoneNumber = "919876543210",
    text = "Order on WhatsApp",
    className = "",
    minimal = false,
}: WhatsAppButtonProps) {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    if (minimal) {
        return (
            <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase hover:text-[var(--loud-bg)] transition-colors ${className}`}
            >
                {text}
                <span className="block h-[1px] w-8 bg-current group-hover:w-12 transition-all" />
            </Link>
        )
    }

    return (
        <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`
        inline-flex items-center justify-center rounded-full 
        border border-foreground/20 bg-transparent px-8 py-3 text-sm uppercase tracking-widest font-bold text-foreground
        transition-all 
        hover:bg-[var(--loud-bg)] hover:text-[var(--canvas-bg)] hover:border-transparent
        ${className}
      `}
        >
            {text}
        </Link>
    );
}
