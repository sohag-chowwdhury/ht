import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { MDXComponents } from '@/components/MDXComponents'
import { PageLinks } from '@/components/PageLinks'
import { formatDate } from '@/lib/formatDate'
import { type Job, type MDXEntry, loadJobs } from '@/lib/mdx'

export default async function CareerJobWrapper({
  job,
  children,
}: {
  job: MDXEntry<Job>
  children: React.ReactNode
}) {
  let allJobs = await loadJobs()
  let moreJobs = allJobs.filter(({ metadata }) => metadata !== job).slice(0, 2)

  return (
    <>
      <Container as="article" className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <header className="mx-auto flex max-w-5xl flex-col text-center">
            <h1 className="mt-6 font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
              {job.title}
            </h1>
            <time
              dateTime={job.date}
              className="order-first text-sm text-neutral-950"
            >
              {formatDate(job.date)}
            </time>
            <p className="mt-6 text-sm font-semibold text-neutral-950">
              by {job.author.name}, {job.author.role}
            </p>
          </header>
        </FadeIn>

        <FadeIn>
          <MDXComponents.wrapper className="mt-24 sm:mt-32 lg:mt-40">
            {children}
          </MDXComponents.wrapper>
        </FadeIn>
      </Container>

      {moreJobs.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="More articles"
          pages={moreJobs}
        />
      )}

      <ContactSection />
    </>
  )
}
