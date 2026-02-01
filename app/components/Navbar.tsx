import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="sticky top-0 left-0 w-full z-50 px-6 lg:px-20 h-[72px] flex justify-between items-center bg-[var(--canvas-bg)] border-b border-border">
            <Link href="/" className="hover:opacity-80 transition-opacity flex items-center">
                <Image
                    src="/logo-white.png"
                    alt="Chaayakoott"
                    width={120}
                    height={32}
                    className="h-8 lg:h-10 w-auto object-contain"
                    priority
                />
            </Link>
            <div className="hidden lg:flex gap-10 text-[11px] font-medium uppercase tracking-[0.25em]">
                <Link href="#" className="text-foreground/60 hover:text-foreground/90 transition-colors duration-500">Shop</Link>
                <Link href="#" className="text-foreground/60 hover:text-foreground/90 transition-colors duration-500">Philosophy</Link>
                <Link href="#" className="text-foreground/60 hover:text-foreground/90 transition-colors duration-500">Contact</Link>
            </div>
            <div className="lg:hidden text-[11px] font-medium uppercase tracking-[0.25em] text-foreground">
                Menu
            </div>
        </nav>
    );
}
