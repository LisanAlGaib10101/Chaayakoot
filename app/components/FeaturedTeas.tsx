import ProductCard from "./ProductCard";
import FadeIn from "./FadeIn";

export default function FeaturedTeas() {
    const products = [
        {
            title: "Classic Milk Tea",
            description: "The perfect balance of strong tea and creamy richness. A timeless favorite that comforts the soul.",
            price: "₹250",
            image: "https://images.unsplash.com/photo-1571934811356-5cc55449d0f1?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Ginger Tea",
            description: "Freshly crushed ginger roots brewed with premium tea leaves. Zesty, spicy, and incredibly soothing.",
            price: "₹280",
            image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Premium Black Tea",
            description: "Hand-rolled orthodox tea leaves with deep, malty notes. Best enjoyed without milk to savor the purity.",
            price: "₹350",
            image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <section className="py-16 lg:py-24 px-6 lg:px-20 bg-[var(--canvas-bg)] rounded-[2.5rem]">
            <div className="flex flex-col gap-24">
                <FadeIn>
                    <div className="flex flex-col items-center text-center gap-6">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-label">Selection</span>
                        <h2 className="text-5xl lg:text-7xl font-sans font-black tracking-tighter text-foreground uppercase">
                            Signature <span className="text-[var(--primary)]">Collection</span>
                        </h2>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                    {/* Hero Product - Left / Top */}
                    <div className="lg:col-span-7 flex flex-col gap-8">
                        <FadeIn>
                            <div className="group cursor-pointer">
                                <div className="relative aspect-[3/4] lg:aspect-[4/5] w-full overflow-hidden rounded-[2rem]">
                                    <img
                                        src={products[0].image}
                                        alt={products[0].title}
                                        className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                                    />
                                </div>
                                <div className="mt-8 flex flex-col gap-4">
                                    <div className="flex justify-between items-baseline border-b border-foreground/10 pb-4">
                                        <h3 className="text-4xl lg:text-5xl font-sans font-medium tracking-tighter">{products[0].title}</h3>
                                        <span className="text-xl lg:text-2xl font-medium">{products[0].price}</span>
                                    </div>
                                    <p className="text-lg text-muted-foreground leading-relaxed max-w-md">{products[0].description}</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Secondary Products - Right / Column */}
                    <div className="lg:col-span-5 flex flex-col gap-16 lg:pt-24">
                        {products.slice(1).map((product, index) => (
                            <FadeIn key={product.title} delay={0.2 + (index * 0.1)}>
                                <ProductCard
                                    {...product}
                                    className="bg-transparent"
                                />
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
