import styled from 'styled-components';
import { Job, Anchor, H2 } from 'Components/components';
import { DownloadIcon } from 'Assets/svgs/svgs';
import data from '../../data/data.json';
import { ResumeFile } from '../../assets/documents/documents';
import { Fade } from 'react-reveal';

const StyledResumeSectionTitles = styled(H2)`
  @media ${(p) => p.theme.device.mobileS} {
    margin: 30px 0 15px 0;
    justify-content: center;
    font-size: 24px;
  }

  @media ${(p) => p.theme.device.tablet} {
    font-size: ${(p) => p.theme.fontSizes.large};
  }
`;

const StyledAnchor = styled(Anchor)`
  color: white;
`;

export default function Resume() {
  return (
    <Fade bottom>
      <div className="-mt-8 relative">
        <StyledAnchor
          className="bg-secondary inline-block rounded-md text-lg p-2 lg:p-3 absolute right-0"
          href={ResumeFile}
          download="Samson Mossallam's Resume"
        >
          <DownloadIcon className="inline-block" />
        </StyledAnchor>
        {Object.entries(data).map((resumeTitles) => (
          <div key={resumeTitles}>
            <StyledResumeSectionTitles className="uppercase flex lg:text-left">
              {resumeTitles[0]}
            </StyledResumeSectionTitles>
            <Job job={resumeTitles[1]} />
          </div>
        ))}
      </div>
    </Fade>
  );
}
