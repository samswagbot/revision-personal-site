import { GithubIcon, LinkedinIcon, CodeSandBoxIcon } from 'Assets/svgs/svgs';

export default function SocialLinks() {
  const github = 'https://github.com/samswagbot';
  const linkedin = 'https://www.linkedin.com/in/sammossallam/';
  const codeSandBox = 'https://codesandbox.io/u/samswagbot';
  return (
    <div className="flex justify-center self-end lg:justify-between">
      <a
        className="p-3 md:p-2 border-none flex self-center hover:text-opacity-80"
        href={github}
        target="_blank"
        rel="noreferrer"
      >
        <GithubIcon />
      </a>
      <a
        className="p-3 md:p-2 border-none flex self-center hover:text-opacity-80"
        href={linkedin}
        target="_blank"
        rel="noreferrer"
      >
        <LinkedinIcon />
      </a>
      <a
        className="p-3 md:p-2 border-none flex self-center hover:text-opacity-80"
        href={codeSandBox}
        target="_blank"
        rel="noreferrer"
      >
        <CodeSandBoxIcon padding="0" />
      </a>
    </div>
  );
}
