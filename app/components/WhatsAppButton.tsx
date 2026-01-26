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
                className={`group inline-flex items-center gap-2 text-[10px] lg:text-xs font-bold tracking-[0.25em] uppercase text-label hover:text-[var(--primary)] transition-colors duration-500 ${className}`}
            >
                {text}
                <span className="block h-[0.5px] w-4 bg-current opacity-30 group-hover:w-8 group-hover:opacity-100 transition-all duration-700 ease-in-out" />
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
        border border-[var(--primary)]/20 bg-transparent px-8 py-3 text-[10px] lg:text-xs uppercase tracking-[0.2em] font-bold text-foreground
        transition-all duration-500
        hover:border-[var(--primary)] hover:text-[var(--primary)]
        ${className}
      `}
        >
            {text}
        </Link>
    );
}
