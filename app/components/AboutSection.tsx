import Image from "next/image";
import FadeIn from "./FadeIn";

export default function AboutSection() {
    return (
        <section className="bg-[var(--canvas-bg)] py-40 px-6 lg:px-20 rounded-[2.5rem]">
            <div className="flex flex-col gap-12 max-w-4xl mx-auto text-center items-center">
                <FadeIn className="flex flex-col items-center gap-8">
                    <Image
                        src="/logo-red.png"
                        alt="Chaayakoott"
                        width={240}
                        height={64}
                        className="h-[360px] w-auto object-contain mb-4"
                        priority
                    />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-label">Selection</span>

                    <h2 className="text-4xl lg:text-7xl font-sans font-bold tracking-tighter text-foreground leading-[0.9] uppercase">
                        Tea is a <span className="text-[var(--primary)]">ritual</span>. <br />
                        A moment of pause. <br />
                        A connection to heritage.
                    </h2>
                </FadeIn>

                <div className="w-px h-24 bg-foreground/10 my-4" />

                <FadeIn delay={0.2}>
                    <div className="flex flex-col gap-6 max-w-2xl text-center">
                        <p className="text-lg lg:text-xl leading-relaxed text-muted-foreground font-light">
                            Our journey began with a simple passion: to bring the authentic flavors of
                            traditional Indian tea to your cup. Sourced from the finest gardens and
                            blended with age-old secrets.
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
