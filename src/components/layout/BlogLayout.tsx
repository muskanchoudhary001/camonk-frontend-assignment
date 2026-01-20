import BlogHero from "./Hero"

export default function BlogLayout({
  content,
  sidebar,
}: {
  content: React.ReactNode
  sidebar: React.ReactNode
}) {
  return (
    <main
      className="
        min-h-screen 
        bg-muted/30 
        pt-20   /* space for navbar (64px + gap) */
        pb-20   /* space for footer (56px + gap) */
      "
    >
      <div className="max-w-7xl mx-auto px-4 py-10">

        <BlogHero />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <section className="lg:col-span-2">
            {content}
          </section>

          <aside className="space-y-4">
            {sidebar}
          </aside>
        </div>

      </div>
    </main>
  )
}
