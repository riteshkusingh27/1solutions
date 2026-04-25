import { blogPosts } from '../data/blogPosts'
import BlogPostActions from './BlogPostActions'

const BlogWebsite = () => {
  const websitePost = blogPosts.find((post) => post.slug === '/why-business-needs-website')

  const renderHeaderImage = () => {
    if (websitePost?.image) {
      return (
        <img
          src={websitePost.image}
          alt="Modern business website concept"
          className="mt-6 w-full rounded-2xl border border-slate-200 bg-slate-50 object-contain"
        />
      )
    }

    return (
      <div className="mt-6 flex h-56 w-full items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 text-sm font-semibold text-slate-500">
        Featured image coming soon
      </div>
    )
  }

  return (
    <main className="bg-white pb-16 pt-10 text-slate-900">
      <article className="mx-auto w-full max-w-3xl bg-white px-4 pt-12 text-slate-900 sm:px-6">
        <header className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Blogs</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Why Every Business Needs a Website in 2026 (Not Just Instagram)
          </h1>
          {renderHeaderImage()}
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Written by Ritesh</p>
          <p className="mt-2 text-base text-slate-600">Published: April 25, 2026</p>
        </header>

        <BlogPostActions />

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Meta Title, Description, and URL</h2>
          <div className="mt-4 space-y-2 text-slate-700">
            <p><strong>Meta Title:</strong> Business Website Importance in 2026 | One Solutions</p>
            <p>
              <strong>Meta Description:</strong> Learn business website importance in 2026: why businesses need a website, website vs Instagram,
              and benefits for small business in India.
            </p>
            <p><strong>URL Slug:</strong> /why-business-needs-website</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Hook</h2>
          <p className="mt-3 text-slate-700">
            You post every day, yet customers still say, “I could not find your details.” That gap is where most small businesses lose money.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">The Problem with Only Instagram</h2>
          <p className="mt-3 text-slate-700">
            Social platforms are great for attention, but they are not built to close deals. Relying only on Instagram or WhatsApp limits reach,
            hides your full story, and puts your business at the mercy of algorithms.
          </p>
          <p className="mt-3 text-slate-700">
            This is why businesses need a website in 2026. A website is the one channel you own end-to-end.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">What a Website Actually Does</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
            <li><strong>Trust:</strong> A real domain makes your business look established and reliable.</li>
            <li><strong>Visibility:</strong> Search engines can find you for local and service keywords.</li>
            <li><strong>Conversion:</strong> Clear pages and CTAs turn visitors into inquiries.</li>
            <li><strong>Professionalism:</strong> Your story, reviews, and pricing look organized.</li>
          </ul>
          <p className="mt-3 text-slate-700">This is the core business website importance most owners miss.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Website vs Instagram Business</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2">Website</th>
                  <th className="border border-slate-200 px-3 py-2">Instagram</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">Owned asset with full control</td>
                  <td className="border border-slate-200 px-3 py-2">Rented space, rules can change anytime</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">Search traffic from Google</td>
                  <td className="border border-slate-200 px-3 py-2">Discovery depends on algorithm</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">Clear pages for services and pricing</td>
                  <td className="border border-slate-200 px-3 py-2">Short posts and limited info</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">Better lead capture with forms</td>
                  <td className="border border-slate-200 px-3 py-2">DMs can be slow and untracked</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">How a Website Brings Customers</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
            <li><strong>SEO traffic:</strong> Rank for “website for business India” and service searches.</li>
            <li><strong>24/7 availability:</strong> Your business answers questions while you sleep.</li>
            <li><strong>Better conversion:</strong> A focused page drives calls, forms, and WhatsApp clicks.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Common Myths</h2>
          <div className="mt-4 space-y-4 text-slate-700">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">“Websites are expensive.”</h3>
              <p>Modern sites can be lean and affordable. The right plan scales with your budget.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">“Social media is enough.”</h3>
              <p>Social is a channel, not a home. A website keeps your business safe from platform shifts.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Signs You Need a Website</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
            <li>People ask for prices or services in DMs every day.</li>
            <li>You get inquiries but lose them before they convert.</li>
            <li>You want to appear on Google Maps and local search.</li>
            <li>Your competitors show up first in search results.</li>
            <li>You want a brand that feels bigger than a page.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">What Makes a Good Website</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
            <li><strong>Fast:</strong> Loads in seconds on mobile networks.</li>
            <li><strong>Mobile-friendly:</strong> Designed for phones first.</li>
            <li><strong>Clean design:</strong> Easy to scan, easy to trust.</li>
            <li><strong>Clear CTA:</strong> One strong action like “Call now” or “Get a quote.”</li>
          </ul>
          <p className="mt-3 text-slate-700">These are the benefits of website for small business owners who want steady leads.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Final Verdict</h2>
          <p className="mt-3 text-slate-700">
            The business website importance in 2026 is simple: it builds trust, brings search traffic, and converts visitors into customers.
            Social platforms help you get attention. A website helps you get paid.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">FAQs</h2>
          <div className="mt-4 space-y-4 text-slate-700">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Do small businesses need a website?</h3>
              <p>Yes. It is the easiest way to look credible and appear on Google.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Is Instagram enough?</h3>
              <p>No. Instagram is discovery, but a website is where decisions happen.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">How much does a website cost in India?</h3>
              <p>It depends on pages and features, but simple sites are affordable and scalable.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Can a website bring customers?</h3>
              <p>Yes. With SEO and clear CTAs, a website converts visitors into leads.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">How long does it take to build?</h3>
              <p>Most small business sites can be built in 1–3 weeks depending on scope.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Featured Image Idea</h2>
          <p className="mt-3 text-slate-700">
            A small business owner at a desk with a laptop open to a clean website homepage, phone showing Instagram in the background.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900">Internal Links to Add</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
            <li>
              <a href="/#services" className="font-semibold text-cyan-700 hover:text-cyan-600">Website design services</a>
            </li>
            <li>
              <a href="/#contact" className="font-semibold text-cyan-700 hover:text-cyan-600">Contact One Solutions</a>
            </li>
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-lg font-semibold">Still relying only on Instagram?</p>
          <p className="mt-2 text-base">
            Build your digital presence with One Solutions. Contact:{' '}
            <a href="mailto:contact@onesolutions.tech" className="font-semibold text-cyan-700 hover:text-cyan-600">
              contact@onesolutions.tech
            </a>
          </p>
        </section>
      </article>
    </main>
  )
}

export default BlogWebsite
