import Link from 'next/link';
import WhatsAppButton from './WhatsAppButton';

export default function Hero() {
    return (
        <section className="relative w-full min-h-[85vh] flex flex-col justify-center px-6 lg:px-12 py-12 overflow-hidden">

            {/* Main Headline Group */}
            <div className="relative z-10 flex flex-col">
                <h1 className="text-[18vw] leading-[0.8] font-black tracking-tighter text-foreground uppercase mix-blend-multiply">
                    CHAAYA
                </h1>
                <div className="flex items-center gap-4 lg:gap-12">
                    <span className="hidden lg:block h-4 w-32 bg-[var(--loud-bg)] mt-4"></span>
                    <h1 className="text-[18vw] leading-[0.8] font-black tracking-tighter text-[var(--loud-bg)] uppercase ml-auto lg:ml-0">
                        KOOTT
                    </h1>
                </div>
            </div>

            {/* Overlapping Image - Asymmetrical Placement */}
            <div className="absolute top-1/4 right-[5%] lg:right-[15%] w-[60vw] lg:w-[35vw] aspect-[3/4] z-0 pointer-events-none">
                <div className="relative w-full h-full rotate-[-6deg] overflow-hidden rounded-[2rem] shadow-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=1974&auto=format&fit=crop"
                        alt="Tea Ritual"
                        className="object-cover w-full h-full scale-110"
                    />
                    {/* Gradient Overlay for Text Readability if needed, though mix-blend usually handles it */}
                    <div className="absolute inset-0 bg-[var(--loud-bg)]/10 mix-blend-overlay" />
                </div>
            </div>

            {/* Editorial Supporting Content - Bottom Left */}
            <div className="mt-12 lg:mt-0 lg:absolute lg:bottom-12 lg:left-12 max-w-sm flex flex-col gap-6 z-20">
                <div className="space-y-2">
                    <p className="text-sm font-bold tracking-widest uppercase text-[var(--loud-bg)]">
                        Est. 2024 — Kerala, India
                    </p>
                    <p className="text-3xl font-serif italic text-foreground leading-tight">
                        "Taste the Moment"
                    </p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                    A celebration of culture, craft, and the timeless ritual of tea.
                    Bold flavors for the modern soul.
                </p>
                <div>
                    <WhatsAppButton
                        message="I want to experience Chaayakoott"
                        text="Experience The Blend"
                        className=""
                    />
                </div>
            </div>

            {/* Decorative Element - Top Right */}
            <div className="absolute top-12 right-12 hidden lg:block text-right">
                <span className="block text-xs font-mono text-muted-foreground">VOL. 01</span>
                <span className="block text-xs font-mono text-muted-foreground">THE ORIGIN SERIES</span>
            </div>
        </section>
    );
}
