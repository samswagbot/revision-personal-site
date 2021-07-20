import styled from 'styled-components';
import { H3, Span, Paragraph, DetailText, Anchor } from 'Components/components';
import { GithubIcon } from 'Assets/svgs/svgs';

const StyledSpan = styled(Span)`
  align-self: start;
`;

const StyledH3 = styled(H3)`
  margin-bottom: 15px;
`;

export default function CodeDetails({
  year,
  summary,
  title,
  builtWith,
  github,
}) {
  return (
    <div className="flex justify-center flex-col mt-4 md:mt-0 md:ml-4">
      <div className="flex justify-between">
        <StyledH3 className="uppercase text-tertiary mt-0">{title}</StyledH3>
        <StyledSpan className="bg-secondary text-white text-xs p-2 rounded-md">
          {year}
        </StyledSpan>
      </div>
      <Paragraph className="mb-2">{summary}</Paragraph>
      <DetailText>{builtWith}</DetailText>
      <Anchor
        className="bg-secondary rounded-md p-2 mt-4 flex justify-center"
        href={github}
        target="_blank"
      >
        <GithubIcon />
      </Anchor>
    </div>
  );
}
