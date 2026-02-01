import Image from 'next/image';
import WhatsAppButton from './WhatsAppButton';
import FadeIn from './FadeIn';

export default function Hero() {
    return (
        <section className="w-full min-h-[calc(100vh-72px)] flex flex-col justify-between px-6 lg:px-20 py-16 lg:py-24 bg-[var(--canvas-bg)] rounded-[2.5rem]">
            {/* Top Headline */}
            <div className="flex flex-col gap-4">
                <FadeIn delay={0.2}>
                    <span className="block text-xs font-bold tracking-[0.3em] uppercase text-label mb-4">
                        The Origin Series Vol. 01
                    </span>
                    <h1 className="text-[15vw] lg:text-[12vw] leading-[0.85] font-sans font-black text-foreground tracking-tighter select-none">
                        CHAAYAKOOTT
                    </h1>
                </FadeIn>
            </div>

            {/* Hero Image - Normal Flow */}
            <FadeIn delay={0.4} duration={1.2} className="w-full max-w-2xl mx-auto my-12">
                <Image
                    src="https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=1974&auto=format&fit=crop"
                    alt="Tea Ritual"
                    width={800}
                    height={1000}
                    className="w-full h-auto object-cover rounded-2xl"
                    priority
                />
            </FadeIn>

            {/* Bottom Content */}
            <div className="flex flex-col items-end gap-6 text-right">
                <FadeIn delay={0.6}>
                    <p className="text-xl lg:text-2xl font-serif italic text-muted-foreground select-none">
                        "Taste the Moment"
                    </p>
                </FadeIn>
                <FadeIn delay={0.8}>
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
