import { blogPosts } from '../data/blogPosts'
import BlogPostActions from './BlogPostActions'

const BlogPost = () => {
  const nothingPost = blogPosts.find((post) => post.slug === '/nothing-phone-3a-update-b41')

  return (
    <main className="bg-white pb-16 pt-10 text-slate-900">
      <article className="mx-auto w-full max-w-3xl bg-white px-4 pt-12 text-slate-900 sm:px-6">
        <header className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Blogs</p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Nothing Phone 3a Update (Nothing OS B41) – Full Changelog &amp; Features
          </h1>
          {nothingPost?.image ? (
            <img
              src={nothingPost.image}
              alt="Nothing Phone 3a update"
              className="mt-6 w-full rounded-2xl border border-slate-200 object-cover"
            />
          ) : (
            <div className="mt-6 flex h-56 w-full items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 text-sm font-semibold text-slate-500">
              Featured image coming soon
            </div>
          )}
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Written by Ritesh</p>
          <p className="mt-2 text-base text-slate-600">Published: April 25, 2026</p>
        </header>

        <BlogPostActions />

        <section className="mb-8">
          <p className="text-lg text-slate-800">
            <strong>
              A new update just dropped for the Nothing Phone 3a series, and it brings UI refinements, fixes, and the April 2026 security patch.
            </strong>{' '}
            This post breaks down what is new, what changed, and what to expect after installing it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">What is Nothing OS B41?</h2>
          <p className="mt-3 text-slate-700">
            Nothing OS B41 (also shown as B4.1) is the latest Android 16-based update for the Nothing Phone (3a) series. It adds a
            community-designed lock screen clock, Live Updates across key screens, refined Essential Notifications settings, and the April 2026
            security patch. Rollouts are staggered, so you may see it in phases.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Full Changelog (Simplified)</h2>
          <div className="mt-4 space-y-6 text-slate-700">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Security updates</h3>
              <ul className="mt-2 list-disc space-y-2 pl-6">
                <li>April 2026 Android security patch added.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Performance improvements</h3>
              <ul className="mt-2 list-disc space-y-2 pl-6">
                <li>Overall system stability and performance improved.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Camera fixes</h3>
              <ul className="mt-2 list-disc space-y-2 pl-6">
                <li>Time-lapse shooting stability optimized.</li>
                <li>SuperRes zoom frame no longer stays on screen when switching presets.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">UI fixes and refinements</h3>
              <ul className="mt-2 list-disc space-y-2 pl-6">
                <li>New community-designed lock screen clock with a unique typeface and wake-up effect.</li>
                <li>Live Updates now show real-time app progress on lock screen, notification panel, and Glyph Interface.</li>
                <li>Essential Notifications settings redesigned for clarity.</li>
                <li>Suggestions for frequently used notifications to become Essential.</li>
                <li>Notification panel and Quick Settings display errors fixed.</li>
              </ul>
            </div>
          </div>
          <p className="mt-3 text-sm text-slate-600">Note: Live Updates depend on app support and regional availability.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">New Features &amp; Improvements Explained</h2>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">1) Community Edition Lock Screen Clock</h3>
          <p className="mt-2 text-slate-700">
            A new lock screen clock inspired by the Phone (3a) Community Edition adds a distinct visual style and a custom wake-up animation.
          </p>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">2) Live Updates at a Glance</h3>
          <p className="mt-2 text-slate-700">
            Live Updates now appear on the lock screen, notification panel, and Glyph Interface. You can track progress from apps like
            navigation or delivery without opening the app.
          </p>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">3) Essential Notifications Refresh</h3>
          <p className="mt-2 text-slate-700">
            The Essential Notifications page is cleaner with clearer labels, helping beginners configure alerts with less confusion.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Performance &amp; Battery Impact</h2>
          <p className="mt-3 text-slate-700">
            The update focuses on stability rather than big feature additions. Expect smoother UI behavior and fewer minor glitches. During the
            install process, the phone may warm up and drain faster for a short time. Once the update finishes, performance should settle back
            to normal.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Should You Update or Not?</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4">
              <h3 className="text-lg font-semibold text-emerald-900">Pros</h3>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-emerald-900">
                <li>April 2026 security patch.</li>
                <li>Live Updates across lock screen and Glyph.</li>
                <li>Cleaner Essential Notifications setup.</li>
                <li>Camera time-lapse and SuperRes stability fixes.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-4">
              <h3 className="text-lg font-semibold text-rose-900">Cons</h3>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-rose-900">
                <li>Live Updates depend on app support.</li>
                <li>Some users report app recommendation prompts after update.</li>
                <li>Not a major feature drop beyond UI and stability.</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-slate-700">
            <strong>Recommendation:</strong> Update if you want the latest security patch and stability improvements. If you are cautious about
            user-reported prompts or minor carrier quirks, wait a few days and monitor feedback.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">How to Update Nothing Phone 3a</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6 text-slate-700">
            <li>Open Settings.</li>
            <li>Go to System → System Update.</li>
            <li>Check for Nothing OS B41 (260414-1749).</li>
            <li>Download and install over Wi-Fi.</li>
            <li>Keep battery above 50%.</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Common Issues or Things to Know</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
            <li>Rollout is staggered, so it may not appear for everyone at the same time.</li>
            <li>The phone can feel warmer and drain more battery while installing.</li>
            <li>Some community users mention app recommendation prompts after update.</li>
            <li>Isolated reports of 5G switching to 4G+ in some areas.</li>
          </ul>
          <p className="mt-3 text-sm text-slate-600">These are community reports and may not affect all devices in India.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900">Final Verdict</h2>
          <p className="mt-3 text-slate-700">
            The Nothing OS B41 update is a stability-first release with light UI upgrades and an important security patch. It is worth
            installing if you want the latest protection and a smoother experience, but it is not a major feature overhaul.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900">FAQs</h2>
          <div className="mt-4 space-y-4 text-slate-700">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Is Nothing OS B41 safe?</h3>
              <p>Yes. It is an official rollout that includes the April 2026 security patch.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Does it improve battery?</h3>
              <p>No direct battery boost is listed, but stability improvements can reduce background glitches.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">How to update Nothing Phone?</h3>
              <p>Settings → System → System Update → Download and install.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">What are the main changes?</h3>
              <p>Community lock screen clock, Live Updates across key screens, Essential Notifications refresh, and camera stability fixes.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Should I update now?</h3>
              <p>Update if you want security and polish. Wait a few days if you want to monitor feedback.</p>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}

export default BlogPost
