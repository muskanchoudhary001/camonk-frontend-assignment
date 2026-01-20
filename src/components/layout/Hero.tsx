type BlogHeroProps = {
  title?: string
  subtitle?: string
}

export default function BlogHero({
  title = "CA Monk Blog",
  subtitle = "Stay updated with the latest trends in finance, accounting, and career growth",
}: BlogHeroProps) {
  return (
    <section className="text-center mb-14">
      <h1 className="text-4xl font-bold text-gray-900">
        {title}
      </h1>
      <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </section>
  )
}
