import Link from 'next/link';
import WhatsAppButton from './WhatsAppButton';
import FadeIn from './FadeIn';

export default function Hero() {
    return (
        <section className="relative w-full h-full flex flex-col justify-between px-2 lg:px-0 pt-24 lg:pt-32 pb-12 lg:pb-24 bg-[var(--canvas-bg)] rounded-[2.5rem]">

            {/* Top Headline - Left Aligned */}
            <div className="relative z-30 pl-6 lg:pl-20">
                <FadeIn delay={0.2}>
                    <span className="block text-xs font-bold tracking-[0.3em] uppercase text-label mb-4">
                        The Origin Series Vol. 01
                    </span>
                    <h1 className="text-[18vw] leading-[0.75] font-sans font-black pr-12 text-foreground tracking-tighter select-none">
                        CHAAYA
                    </h1>
                </FadeIn>
            </div>

            {/* Asymmetrical Image - Overlapping & Floating */}
            <FadeIn delay={0.4} duration={1.2} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] lg:w-[35vw] aspect-[3/4] z-10 pointer-events-none mix-blend-multiply opacity-90">
                <img
                    src="https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=1974&auto=format&fit=crop"
                    alt="Tea Ritual"
                    className="object-cover w-full h-full grayscale contrast-125 transition-all duration-1000 ease-in-out hover:grayscale-0 scale-100 hover:scale-105"
                />
            </FadeIn>

            {/* Bottom Headline - Right Aligned */}
            <div className="relative z-30 flex flex-col items-end pr-6 lg:pr-20 mt-auto">
                <FadeIn delay={0.6}>
                    <h1 className="text-[18vw] leading-[0.75] font-sans font-black text-foreground tracking-tighter text-right mix-blend-darken select-none">
                        KOOTT
                    </h1>
                </FadeIn>

                {/* Minimal Supporting Copy & CTA */}
                <FadeIn delay={0.8} className="flex flex-col items-end gap-6 mt-8 max-w-xs text-right z-30">
                    <p className="text-xl font-serif italic text-muted-foreground select-none">
                        "Taste the Moment"
                    </p>
                    <WhatsAppButton
                        message="I would like to explore the collection."
                        text="Explore Collection"
                        className=""
                        minimal={true}
                    />
                </FadeIn>
            </div>
        </section>
    );
}
