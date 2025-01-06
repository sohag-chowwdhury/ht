'use client'

import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { Border } from '@/components/Border'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoAdoro from '@/images/clients/adoro/logo-light.webp'
import logoComnoco from '@/images/clients/comnoco/logo-light.svg'
import logoQproco from '@/images/clients/qproco/logo-dark.svg'
import logoApukuski from '@/images/clients/apukuski/logo-dark.png'
import logoKronologic from '@/images/clients/kronologic/logo-light.webp'
import logoFino from '@/images/clients/fino/logo-light.svg'
import logoDexecure from '@/images/clients/dexecure/logo-light.svg'
import logoFunnelflux from '@/images/clients/funnelflux/logo-light.svg'
import logoFiverr from '@/images/marketplaces/fiverr/logo.svg'
import logoUpwork from '@/images/marketplaces/upwork/logo.svg'
import logoBark from '@/images/marketplaces/bark/logo.svg'
import logoToptal from '@/images/marketplaces/toptal/logo.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Adoro', logoAdoro],
  ['Comnoco', logoComnoco],
  ['Qproco', logoQproco],
  ['Apukuski', logoApukuski],
  ['Kronologic', logoKronologic],
  ['Fino', logoFino],
  ['Dexecure', logoDexecure],
  ['Funnelflux', logoFunnelflux],
]

const marketPlaces = [
  ['UpWork', '100% Job success on UpWork', logoUpwork],
  ['Fiverr', '4.9 Rating on Fiverr', logoFiverr],
  ['Bark', '4.8 Rating on Bark', logoBark],
  ['Toptal', '4.6 Rating on Toptal', logoToptal],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function MarketPlace() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Industry Recognition and Customer Satisfaction
        </h2>
        <p>
          Renowned for industry-leading excellence, as evidenced by prestigious
          awards and exceptional job success on UpWork and Fiverr Reviews.
        </p>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        <Border as={FadeIn} />
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
        >
          {marketPlaces.map(([client, success, logo]) => (
            <li key={client} className="group">
              <FadeIn className="overflow-hidden">
                <Border className="pt-12 group-[&:nth-child(-n+2)]:-mt-px sm:group-[&:nth-child(3)]:-mt-px lg:group-[&:nth-child(4)]:-mt-px">
                  <Image src={logo} alt={client} unoptimized />
                  <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                    <span>{success}</span>
                  </p>
                </Border>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Empowering Your Digital Transformation"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          At HTByte, we view technology as the catalyst for business growth,
          transforming challenges into opportunities. Our mission is to guide
          your digital transformation, ensuring success and innovation every
          step of the way.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We Transform Digital Obstacles Into Opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Our services are designed to uncover and capitalize on digital
          opportunities, enabling your business to navigate the digital
          landscape with confidence.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web Development">
              We specialize in design stunning, high-converting solutions,
              whether it's a landing/marketing pages or a comprehensive web
              experience.
            </ListItem>
            <ListItem title="AI Powered SaaS">
              Elevate your business with our cutting-edge SaaS platform,
              enhanced by artificial intelligence. Experience unparalleled
              efficiency, smarter decision-making, and automated processes
              tailored to your unique needs.
            </ListItem>
            <ListItem title="E-Commerce Mastery with SEO & Digital Marketing">
              Amplify your online store's reach and revenue with our
              comprehensive blend of SEO and digital marketing services. Enhance
              visibility, engage customers, and achieve sustained growth through
              optimized strategies tailored to your brand.
            </ListItem>
            <ListItem title="Dedicated Team Assembly">
              raft your ideal team with our bespoke team-building service,
              designed to align perfectly with your project's unique needs.
              Experience seamless collaboration and expert support, ensuring
              your vision is brought to life with precision and passion.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a software development agency working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Innovative Solutions, Byte by Byte.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            At HTByte.com, we blend SaaS, AI, and digital marketing to

            revolutionize your business, slashing costs by up to 82%.
          </p>
        </FadeIn>
      </Container>

      <Clients />
      <MarketPlace />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'NearDeals', logo: logoQproco }}
      >
        The team at HTByte went above and beyond with our onboarding, even
        slashing our costs by 50% and fast-tracking our MVP with their tailored
        tech and marketing wizardry—truly a partner in growth.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
