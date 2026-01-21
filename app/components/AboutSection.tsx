export default function AboutSection() {
    return (
        <section className="bg-[var(--canvas-bg)] py-32 px-6 lg:px-20 border-t border-foreground/5">
            <div className="flex flex-col gap-16 max-w-6xl mx-auto">
                <div className="flex flex-col gap-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">The Philosophy</span>
                    <h2 className="text-5xl lg:text-[6rem] font-bold tracking-tighter text-foreground leading-[0.9]">
                        We believe tea is not just a beverage. <br className="hidden lg:block" />
                        It is a <span className="text-[var(--loud-bg)]">ritual</span>, a moment of pause, <br className="hidden lg:block" />
                        and a connection to heritage.
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start border-t border-foreground/10 pt-12">
                    <p className="flex-1 text-xl leading-relaxed text-muted-foreground font-medium">
                        Our journey began with a simple passion: to bring the authentic flavors of
                        traditional Indian tea to your cup. Sourced from the finest gardens and
                        blended with age-old secrets, every sip tells a story of quality, warmth, and culture.
                    </p>
                    <p className="flex-1 text-xl leading-relaxed text-muted-foreground font-medium">
                        Whether it's the spicy kick of our ginger blends or the soothing comfort of
                        classic milk tea, we invite you to experience the essence of true flavor.
                    </p>
                </div>
            </div>
        </section>
    );
}
