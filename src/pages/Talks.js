import { TransToolKit, LesbiansWhoTech } from 'Assets/documents/documents';
import speaker from 'Assets/images/speaker.jpg';
import Fade from 'react-reveal';
import { Anchor, Paragraph, H3, MainContainer } from 'Components/components';

export default function Talks() {
  return (
    <MainContainer>
      <Fade bottom>
        <a
          className="block rounded-md"
          href="https://www.instagram.com/p/Bkqcr1NAS8P/"
        >
          <section className="transition duration-500 transform -mt-14 hover:bg-gray-400 bg-secondary px-6 md:px-10 lg:px-12 py-12 lg:py-20 text-white -mx-8 md:-mx-10 lg:-mx-12">
            <H3 className="uppercase text-gray-500">
              My journey as a trans person
            </H3>
            <Paragraph>
              My mission to change the everyday life experience of transgender
              people. In 2016, I started my medical transition from female to
              male and I decided to share my story with SoulCycle to build
              strong alliances through education. I continue to any oppurtunity
              to share my experience and build trans visability in the
              workplace.
            </Paragraph>
            <Paragraph>
              "Freedom is the ability to be yourself without permission".
              <Anchor href={TransToolKit} download="Trans Tool Kit">
                {' '}
                Trans Toolkit
              </Anchor>
            </Paragraph>
          </section>
        </a>
        <H3 className="uppercase text-gray-500 mt-16 mb-10">
          Test Driven Development and Pair Programming: What You Need To Know
        </H3>
        <img
          className="md:max-w-2xl mx-auto h-auto rounded-md"
          src={speaker}
          alt="Sam speaking"
        />

        <Paragraph className="my-10">
          Invited to lead a workshop on using pair programming and test driven
          development and how it can increase productivity and team moral, a
          conference that featured keynote speaker Susan Wojcicki (CEO,
          YouTube), and Stacey Abrams (Georgia House of Resp) and many more. See
          attached
          <Anchor
            href={LesbiansWhoTech}
            download="Test Driven Development and Pair Programming: What You Need To Know"
          >
            {' '}
            slides{' '}
          </Anchor>
          from conference.
        </Paragraph>
        <a
          className="block rounded-md"
          href="https://www.instagram.com/p/ByQMiJpnUQC/"
        >
          <section className="transition duration-500 transform hover:bg-primary bg-gray-400 px-6 md:px-10 lg:px-12 py-12 lg:py-20 text-white -mx-8 md:-mx-10 lg:-mx-12">
            <H3 className="uppercase">SoulCycle's Pride Campaign</H3>
            <Paragraph>
              Leading the Queer Employee Resource Group, I worked closely with
              marketing to influence and particate a Queer and diverse pride
              campaign.
            </Paragraph>
          </section>
        </a>
        <a
          className="block rounded-md"
          href="https://www.instagram.com/p/BrDiYTrlY02/"
        >
          <section className="transition duration-500 transform ease-in-out hover:bg-primary px-6 md:px-10 lg:px-12 py-12 lg:py-20 text-black -mx-8 md:-mx-10 lg:-mx-12">
            <H3 className="uppercase">Warrior Week Campaign</H3>
            <Paragraph>
              Particapted in quartely marketing campaign for warrior week.
            </Paragraph>
          </section>
        </a>
      </Fade>
    </MainContainer>
  );
}
