import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Paragraph, DetailText, Span, H4 } from 'Components/components';

const StyledRole = styled.div`
  @media ${(p) => p.theme.device.mobileS} {
    display: flex;
    flex-direction: column;
    text-align: center;

    span {
      align-self: center;
      margin: 5px;
      font-size: ${(p) => p.theme.fontSizes.small};
    }
  }

  @media ${(p) => p.theme.device.tablet} {
    font-size: ${(p) => p.theme.fontSizes.medium};

    span {
      align-self: center;
      margin: 5px;
      font-size: ${(p) => p.theme.fontSizes.small};
    }
  }

  @media ${(p) => p.theme.device.laptop} {
    span {
      align-self: flex-start;
      font-size: ${(p) => p.theme.fontSizes.medium};
      margin-left: 0;
    }
  }
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${(p) => p.theme.fontSizes.small};
`;

export default function Job({ job }) {
  return (
    <>
      {job.map((content, index) => (
        <div className="mb-8" key={index}>
          <div className="flex flex-col items-center lg:flex-row lg:mb-2 text-2xl lg:justify-between">
            <StyledRole>
              <H4 className="font-bold text-2xl self-center lg:text-3xl">
                {content.role}
              </H4>
              <Span className="text-primary font-bold">{content.company}</Span>
            </StyledRole>
            <Span className="text-secondary font-bold flex justify-center lg:justify-end my-2">
              {content.jobTerm}
            </Span>
          </div>
          {content.jobDuties.map((duties) => (
            <StyledParagraph
              className="w-full text-center lg:text-left mt-1 text-sm max-w-4xl "
              key={duties}
            >
              {duties}
            </StyledParagraph>
          ))}
          <DetailText className="w-full text-center lg:text-left mt-2 max-w-4xl">
            {content.techStack}
          </DetailText>
        </div>
      ))}
    </>
  );
}

Job.propTypes = {
  job: PropTypes.array,
};
