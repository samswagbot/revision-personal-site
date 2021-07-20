import { CodeSandBox, CodeDetails } from 'Components/components';
import { Fade } from 'react-reveal';

export default function Code() {
  const codeDetails = [
    {
      title: 'Dog Carousel',
      year: '2020',
      summary: 'A photo carousel of dog pictures',
      builtWith: 'Built With: HTML, CSS, JavaScript',
      github: 'https://github.com/samswagbot/dog-photo-carousel',
      codeSandBox:
        'https://codesandbox.io/embed/dog-photo-carousel-xlfbg?fontsize=14&hidenavigation=1&theme=dark',
    },
    {
      title: 'Landing Page',
      year: '2020',
      summary: ' A simple landing page',
      builtWith: 'Built With: HTML5, CSS3',
      github: 'https://github.com/samswagbot/landing-page',
      codeSandBox:
        'https://codesandbox.io/embed/landing-page-de0ob?fontsize=14&hidenavigation=1&theme=dark',
    },
  ];

  return (
    <Fade bottom>
      {codeDetails.map((code) => (
        <div
          className="flex w-full justify-evenly border-b border-tertiary pb-12 md:py-28 flex-col md:flex-row"
          key={code.title}
        >
          <CodeSandBox src={code.codeSandBox} title={code.title} />
          <CodeDetails
            year={code.year}
            summary={code.summary}
            title={code.title}
            builtWith={code.builtWith}
            github={code.github}
          />
        </div>
      ))}
    </Fade>
  );
}
