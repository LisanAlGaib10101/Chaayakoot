import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";

export default function Footer() {
    return (
        <footer className="bg-[var(--primary)] text-[var(--canvas-bg)] py-10 px-6 lg:px-20 mt-auto">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b border-[var(--canvas-bg)]/10 pb-8">
                    <Image
                        src="/logo-red.png"
                        alt="Chaayakoott"
                        width={180}
                        height={36}
                        className="h-14 lg:h-[72px] w-auto object-contain mb-6 lg:mb-0"
                    />
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
                    <div className="flex flex-col gap-2">
                        <p className="text-lg font-medium opacity-90">Taste The Moment</p>
                        <p className="text-sm text-label">
                            &copy; {new Date().getFullYear()} Chaayakoott. All rights reserved.
                        </p>
                    </div>

                    <WhatsAppButton
                        text="Talk to us"
                        message="Hi, I have a query about Chaayakoott services."
                        minimal={true}
                        className="text-[var(--canvas-bg)] hover:text-white"
                    />
                </div>
            </div>
        </footer>
    );
}
