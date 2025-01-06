import { type Metadata } from 'next'
import Image from 'next/image'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageNayemHossain from '@/images/team/nayem-hossain.jpeg'
import imageMushfiqurRahman from '@/images/team/mushfiqur-rahman.png'
import imageWakibHasan from '@/images/team/wakib-hasan.jpeg'
import imageShabrulIslam from '@/images/team/shabrul-islam.png'
import imageAmirHamza from '@/images/team/amir-hamza.jpeg'
import imageEmonAhmed from '@/images/team/emon-ahmed.png'
import imageSagorPaul from '@/images/team/sagor-paul.png'
import imageSohagChowdhury from '@/images/team/sohag-chowdhury.jpg'
import imageTanvirRahman from '@/images/team/tanvir-rahman.jpg'
import imageIshtiaqueAhmed from '@/images/team/ishtiaque-ahmed.jpeg'
import imageBidhanDas from '@/images/team/bidhan-dash.png'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'pageview',
        page: pathname,
      })
    }
  }, [pathname])
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Where Passion Meets Performance."
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Innovation" invert>
            Encourage experimentation, collaboration, and learning to foster a
            constantly evolving environment.
          </GridListItem>
          <GridListItem title="People-Centric Approach" invert>
            Prioritize employee well-being, growth, and recognition to build a
            dedicated and motivated team.
          </GridListItem>
          <GridListItem title="Agile Mindset" invert>
            Embrace flexibility, adaptation, and continuous improvement to
            navigate the fast-paced world of software development.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Tanvir Rahman',
        role: 'Co-Founder / CEO',
        image: { src: imageTanvirRahman },
      },
      {
        name: 'Sohag Chowdhury',
        role: 'Co-Founder / CTO',
        image: { src: imageSohagChowdhury },
      },
    ],
  },
  {
    title: 'Team',
    people: [
      {
        name: 'Ishtiaque Ahmed',
        role: 'SEO Consultant',
        image: { src: imageIshtiaqueAhmed },
      },
      {
        name: 'Nayem Hossain',
        role: 'Performance Marketing Specialist',
        image: { src: imageNayemHossain },
      },
      {
        name: 'Amir Hamza',
        role: 'Senior Designer',
        image: { src: imageAmirHamza },
      },
      {
        name: 'Mushfiqur Rahman',
        role: 'Product Manager',
        image: { src: imageMushfiqurRahman },
      },
      {
        name: 'Wakib Hasan',
        role: 'VP, User Experience',
        image: { src: imageWakibHasan },
      },
      {
        name: 'Shabrul Islam',
        role: 'Project Manager',
        image: { src: imageShabrulIslam },
      },
      {
        name: 'Emon Ahmed',
        role: 'VP, Human Resources',
        image: { src: imageEmonAhmed },
      },
      {
        name: 'Sagor Paul',
        role: 'Senior Developer',
        image: { src: imageSagorPaul },
      },
      {
        name: 'Bidhan Das',
        role: 'Software Quality Assurance (SQA) Engineer',
        image: { src: imageBidhanDas },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Building Success Through Client-Centric Solutions.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="Driven by Client Success">
        <p>Building Success Through Client-Centric Solutions.</p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            At HTByte, our journey began with a simple yet profound belief: that
            the key to success in the software industry lies in our clients'
            satisfaction. We set out to create a company where innovative
            solutions meet unparalleled client service.
          </p>
          <p>
            Over the years, we have grown from a small startup into a thriving
            software firm. Our portfolio boasts a diverse array of projects,
            each a testament to our ability to adapt, innovate, and succeed.
            Whether it's developing a custom application, enhancing an existing
            system, or providing ongoing support, we approach every project with
            the same level of dedication and enthusiasm.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem
            value="10+"
            label="Dedicated team of skilled experts."
          />
          <StatListItem value="50+" label="Satisfied clients" />
          <StatListItem value="$500k" label="Invoices billed" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Our team of experienced designers and developers has just one thing on their mind; working on your ideas to draw a smile on the face of your users worldwide. From conducting Brand Sprints to UX Design."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
