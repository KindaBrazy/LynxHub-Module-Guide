import {AUTOMATIC1111_ID, NEROGAR_ID, OOBABOOGA_ID} from './Constants';
import automatic1111Arguments from './Container/Automatic1111/Arguments';
import a1RendererMethods from './Container/Automatic1111/RendererMethods';
import nerogarRendererMethods from './Container/Nerogar/RendererMethods';
import oobaboogaArguments from './Container/Oobabooga/Arguments';
import oobaRendererMethods from './Container/Oobabooga/RendererMethods';
import {CardModules} from './types';

const data: CardModules = [
  {
    routePath: '/imageGenerationPage',
    cards: [
      {
        id: AUTOMATIC1111_ID,
        title: 'Stable Diffusion web UI',
        description: 'A web interface for Stable Diffusion, implemented using Gradio library.',
        repoUrl: 'https://github.com/AUTOMATIC1111/stable-diffusion-webui',
        extensionsDir: '/extensions',
        type: 'image',
        bgUrl:
          'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/9608d0fa-6010-4ff8-b149-86e440ff9254/width=300/00000-3587005815.jpeg',
        arguments: automatic1111Arguments,
        methods: a1RendererMethods,
      },
    ],
  },
  {
    routePath: '/textGenerationPage',
    cards: [
      {
        id: OOBABOOGA_ID,
        title: 'Text generation web UI',
        description: 'A Gradio web UI for Large Language Models.',
        repoUrl: 'https://github.com/oobabooga/text-generation-webui',
        type: 'text',
        extensionsDir: '/extensions',
        bgUrl:
          'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/71c60a56-df44-4185-8227-c285e58a3cf1/width=300/00000-3546450635.jpeg',
        arguments: oobaboogaArguments,
        methods: oobaRendererMethods,
      },
    ],
  },
];

export function setCurrentBuild(build: number) {
  if (build > 11) {
    data.forEach(page => {
      if (page.routePath === '/imageGenerationPage') {
        page.cards.push({
          id: NEROGAR_ID,
          title: 'OneTrainer',
          description: 'OneTrainer is a one-stop solution for all your stable diffusion training needs.',
          repoUrl: 'https://github.com/Nerogar/OneTrainer',
          type: 'image',
          bgUrl:
            'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/4f810fe1-775b-44c4-83f0-f1ad07c8fb09' +
            '/width=300/00005-1318253062.jpeg',
          methods: nerogarRendererMethods,
        });
      }
    });
  }
}

export default data;
