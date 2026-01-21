import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="absolute top-0 left-0 w-full z-50 px-6 lg:px-20 py-8 flex justify-between items-center text-foreground">
            <div className="text-lg font-bold tracking-tighter uppercase">
                Chaayakoott
            </div>
            <div className="hidden lg:flex gap-8 text-sm font-medium uppercase tracking-wide">
                <Link href="#" className="hover:text-[var(--loud-bg)] transition-colors">Shop</Link>
                <Link href="#" className="hover:text-[var(--loud-bg)] transition-colors">Our Story</Link>
                <Link href="#" className="hover:text-[var(--loud-bg)] transition-colors">Contact</Link>
            </div>
            <div className="lg:hidden text-sm font-medium uppercase tracking-wide">
                Menu
            </div>
        </nav>
    );
}
