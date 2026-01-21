import WhatsAppButton from "./WhatsAppButton";

export default function Footer() {
    return (
        <footer className="bg-[var(--loud-bg)] text-[var(--canvas-bg)] py-20 px-6 lg:px-20 mt-auto">
            <div className="flex flex-col gap-12">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b border-white/20 pb-12">
                    <h2 className="text-[12vw] font-bold tracking-tighter leading-none opacity-90 select-none">
                        CHAAYAKOOTT
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-end gap-8">
                    <div className="flex flex-col gap-2">
                        <p className="text-lg font-medium opacity-80">Taste The Moment</p>
                        <p className="text-sm opacity-60">
                            &copy; {new Date().getFullYear()} Chaayakoott. All rights reserved.
                        </p>
                    </div>

                    <WhatsAppButton
                        text="Talk to us"
                        message="Hi, I have a query about Chaayakoott services."
                        minimal={true}
                    />
                </div>
            </div>
        </footer>
    );
}
