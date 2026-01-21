import BlogHero from "./Hero"

export default function BlogLayout({
  content,
  sidebar,
}: {
  content: React.ReactNode
  sidebar: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-muted/30 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-10">

        <BlogHero />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* SIDEBAR */}
          <aside
            className="
              lg:col-span-1
              space-y-4
              sticky
              top-24
              max-h-[calc(100vh-6rem)]
              overflow-y-auto
              pr-2
            "
          >
            {sidebar}
          </aside>

          {/* CONTENT */}
          <section className="lg:col-span-2">
            {content}
          </section>

        </div>
      </div>
    </main>
  )
}
