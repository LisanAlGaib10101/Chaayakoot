import ProductCard from "./ProductCard";

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
        <section className="py-24 px-6 lg:px-20 bg-[var(--canvas-bg)]">
            <div className="flex flex-col gap-12">
                <div className="flex flex-col lg:flex-row justify-between items-end border-b border-foreground/10 pb-8">
                    <h2 className="text-6xl lg:text-9xl font-bold tracking-tighter text-foreground leading-[0.8]">
                        Signature <br /> Blends
                    </h2>
                    <p className="text-lg text-muted-foreground w-full lg:w-1/3 mt-6 lg:mt-0">
                        Explore our collection of hand-crafted teas, sourced from the finest gardens and blended for the perfect cup.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div key={product.title} className={`group flex flex-col gap-4 ${index === 1 ? 'md:mt-12' : ''}`}>
                            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-muted">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-2xl font-bold tracking-tight">{product.title}</h3>
                                    <span className="text-lg font-medium font-mono">{product.price}</span>
                                </div>
                                <p className="text-muted-foreground line-clamp-2">{product.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
