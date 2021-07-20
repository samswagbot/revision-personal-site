import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Anchor, Paragraph, H3 } from 'Components/components';

const StyledParagraph = styled(Paragraph)`
  svg {
    fill: ${(p) => p.theme.colors.burgundy};
    position: relative;
    top: 4px;
    left: 4px;
  }
`;
const Bio = () => {
  return (
    <div>
      <section className="bg-primary px-6 md:px-10 lg:px-12 py-12 lg:py-20 text-white -mx-8 md:-mx-10 lg:-mx-12">
        <div className="lg:w-10/12 mx-auto">
          <H3>Front End Development</H3>
          <StyledParagraph>
            JavaScript is my bread and butter and I spend majority of my time
            using it. Front End Development is building out the visual
            components of a website and as an artist this is what excites me the
            most. Whether it's using React, TypeScript, HTML, CSS, or
            Javascript, I build fast, interactive websites. I'm driven to build
            sophisticated user experiences with the help of my creative problem
            solving skills as an engineer.
          </StyledParagraph>
        </div>
      </section>
      <section className="px-6 md:px-10 lg:px-12 py-12 lg:py-20 -mx-8 md:-mx-10 lg:-mx-12">
        <div className="lg:w-10/12 mx-auto">
          <H3>Diversity & Inclusion</H3>
          <StyledParagraph>
            I lead the conversation on queer inclusion in the work place, and
            always speak to my story as a trans person to better build allyship.
            Whether it's being a developer or a leader, I search to find
            effective, creative, and smart solutions. Check out my
            <Anchor href="/talksandcampaigns" as={Link}>
              {' '}
              talks and pride{' '}
            </Anchor>{' '}
            at SoulCycle!
          </StyledParagraph>
        </div>
      </section>
      <section className="bg-secondary px-6 md:px-10 lg:px-12 py-12 lg:py-20 text-white -mx-8 md:-mx-10 lg:-mx-12">
        <div className="lg:w-10/12 mx-auto">
          <H3 className="text-black">Before Coding</H3>
          <StyledParagraph>
            Before coding, most of my life was dedicated to music. Whether it
            was studing audio engineering at SUNY Purchase Conservatory of
            Music, competing as a cellist in state-wide competitons or more
            recently, falling in love with DJing music continues to find a way
            into my life.
          </StyledParagraph>
        </div>
      </section>
    </div>
  );
};

export default Bio;
