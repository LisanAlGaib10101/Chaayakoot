import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 left-0 w-full z-50 px-6 lg:px-20 h-[72px] flex justify-between items-center bg-[var(--canvas-bg)] border-b border-border">
            <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-foreground select-none">
                Chaayakoott
            </div>
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
