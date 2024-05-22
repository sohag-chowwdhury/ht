import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          At HTByte, we immerse ourselves in your business to uncover its core
          strengths and challenges. By collaborating closely with your team, we
          identify opportunities for innovation and improvement in areas such as{' '}
          <strong className="font-semibold text-neutral-950">
            web development, AI tools, and SaaS platforms
          </strong>{' '}
          . Our goal is to understand your unique{' '}
          <strong className="font-semibold text-neutral-950">
            needs and tailor
          </strong>{' '}
          our solutions to drive your business forward.
        </p>
        <p>
          Our approach includes detailed consultations and assessments, where we
          conduct extensive research to gather critical data about your
          operations. Our team of{' '}
          <strong className="font-semibold text-neutral-950">
            experts analyzes
          </strong>{' '}
          this information to develop a strategic plan that aligns with your
          business objectives.
        </p>

        <p>
          In this phase, we also focus on understanding your target audience and
          market trends. This allows us to create solutions that resonate with
          your customers and give you a competitive edge in{' '}
          <strong className="font-semibold text-neutral-950">
            digital marketing and SEO.
          </strong>{' '}
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Detailed consultations</TagListItem>
        <TagListItem>Competitive analysis</TagListItem>
        <TagListItem>Customer insights</TagListItem>
        <TagListItem>Strategic planning</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          With a clear understanding of your business needs, HTByte creates a
          tailored roadmap to guide the development process. Our team of skilled
          developers and designers works diligently to transform ideas into
          tangible products, ensuring each project meets the highest standards
          of quality and performance.
        </p>
        <p>
          During the build phase, we maintain transparent communication,
          providing regular updates on progress. We leverage the latest
          technologies and methodologies, including AI tools, to ensure
          efficient and effective development. Whether it’s a comprehensive web
          development project or a sophisticated SaaS platform, we deliver
          solutions that are both innovative and reliable.
        </p>
        <p>
          Our focus on collaboration ensures that your input is valued and
          integrated at every stage. We strive to deliver solutions that not
          only meet but exceed your expectations.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Customized development roadmap</TagListItem>
        <TagListItem>Regular progress updates</TagListItem>
        <TagListItem>Cutting-edge technology implementation</TagListItem>
        <TagListItem>Quality assurance testing</TagListItem>
        <TagListItem>Collaborative feedback loops</TagListItem>
      </TagList>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          When it’s time to deliver, HTByte ensures your project is ready to
          shine. We make certain every detail is perfect before launch, so your
          transition is smooth and successful. Our delivery phase covers all
          aspects, from deployment to ongoing support.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Testing">
          Our projects boast 100% test coverage, ensuring every feature works
          flawlessly. Though our tests are as thorough as they can be, we still
          strive for continuous improvement.
        </ListItem>
        <ListItem title="Infrastructure">
          For maximum reliability, HTByte uses top-tier Digital Ocean droplets,
          providing robust performance at an affordable price. This ensures your
          platform runs smoothly and efficiently, whether it’s a web development
          project or a SaaS platform.
        </ListItem>
        <ListItem title="Support">
          TByte holds the keys to all essential services your business relies
          on. You can count on us for lifetime support, and of course, the
          occasional invoice. Our dedicated team is always ready to assist,
          ensuring your operations never miss a beat, whether you need help with
          digital marketing strategies or SEO optimizations.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          At HTByte, we strive to stay at the forefront of emerging trends and
          technologies, while completely ignoring them and forking that old
          Rails project we feel comfortable using. We stand by our core values
          to justify that decision.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            The first step in any partnership is ensuring your logo looks
            perfect in our pre-designed template. The second step is matching
            the colors just right.
          </GridListItem>
          <GridListItem title="Efficient">
            We pride ourselves on never missing a deadline which is easy because
            most of the work was done years ago.
          </GridListItem>
          <GridListItem title="Adaptable">
            Every business has unique needs and our greatest challenge is
            shoe-horning those needs into something we already built.
          </GridListItem>
          <GridListItem title="Honest">
            We are transparent about all of our processes, banking on the simple
            fact our clients never actually read anything.
          </GridListItem>
          <GridListItem title="Loyal">
            We foster long-term relationships with our clients that go beyond
            just delivering a product, allowing us to invoice them for decades.
          </GridListItem>
          <GridListItem title="Innovative">
            The technological landscape is always evolving and so are we. We are
            constantly on the lookout for new open source projects to clone.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients. Our mission is to guide your digital
          transformation, ensuring success and innovation every step of the way.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
