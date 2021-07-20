import React from 'react';
import styled from 'styled-components';
import headshot from 'Assets/images/headshot.jpg';
import { Bio, Contact, Anchor, Paragraph } from 'Components/components';
import { Fade, Zoom } from 'react-reveal';
import { LinkedinIcon } from 'Assets/svgs/svgs';
import { ResumeFile, CoverLetter } from 'Assets/documents/documents';

const AboutCtn = styled.div`
  display: grid;
  grid-template-columns: repeat(1, auto);
  margin: 0px 0 50px 0;
  justify-content: center;
  @media ${(p) => p.theme.device.laptop} {
    grid-template-columns: repeat(4, auto);
    grid-gap: 30px;
    margin: 30px 0 150px 0;
  }
`;

const StyledSvg = styled(LinkedinIcon)`
  fill: ${(p) => p.theme.colors.burgundy};
  display: inline;
`;

const Hero = () => {
  const linkedin = 'https://www.linkedin.com/in/sammossallam/';
  return (
    <>
      <AboutCtn>
        <h1 className="mb-4 lg:mb-0 font-bold text-primary text-6xl text-opacity-70 text-center lg:text-left">
          Hi, I'm Sam.
        </h1>
        <Zoom>
          <img
            className="lg:w-full md:max-w-2xl mx-auto h-auto rounded-md col-span-1 col-start-1 lg:col-end-2"
            src={headshot}
            alt="headshot"
          />
        </Zoom>
        <Paragraph className="text-center lg:text-left lg:max-w-md">
          <p className="my-4 md:mb-6 lg:mt-0 text-3xl">
            <strong>I design & build user interfaces.</strong>
          </p>
          I'm currently looking for a Front End role focusing on building
          ethical products. I'm focused on using my skills as a Front End
          Developer to build elegant and sophisticated software. Developing
          clean code is always at the front of my mind and upmost priority. With
          my experiance at
          <span className="font-bold text-primary">
            {' '}
            Happy Cog, SoulCycle & Goldman Sachs
          </span>
          , I've applied my passion for Front End technologies by contributing
          to large scale applications. Check out my
          <Anchor href={ResumeFile} download="Samson Mossallam's Resume.pdf">
            {' '}
            resume
          </Anchor>
          ,
          <Anchor
            href={CoverLetter}
            download="Samson Mossallam's Cover Letter.pdf"
          >
            cover letter
          </Anchor>{' '}
          or
          <Anchor href={linkedin}>
            {' '}
            <StyledSvg />
          </Anchor>
        </Paragraph>
      </AboutCtn>
      <Fade bottom>
        <Bio />
      </Fade>
      <Contact />
    </>
  );
};

export default Hero;
