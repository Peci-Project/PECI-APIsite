import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  image: React.ComponentType<React.ComponentProps<'svg'>> | string;
  description: ReactNode;
};

/* Mudar as imagens */
const FeatureList: FeatureItem[] = [
  {
    title: 'Edifícios',
    image: require('@site/static/img/edificios-icon.png').default,
    description: (
      <>
        Fornece dados sobre as unidades e os edifícios da Universidade de Aveiro.
      </>
    ),
  },
  {
    title: 'Parques de Estacionamento',
    image: require('@site/static/img/parques-icon.svg').default,
    description: (
      <>
        Fornece dados sobre os parques de estacionamento da Universidade de Aveiro.
      </>
    ),
  },
  {
    title: 'Senhas dos Serviços Académicos',
    image: require('@site/static/img/senhas-icon.svg').default,
    description: (
      <>
        Permite obter informação sobre o estado das senhas dos Serviços Académicos da Universidade de Aveiro.
      </>
    ),
  },
  {
    title: 'Ementas',
    image: require('@site/static/img/ementas-icon.png').default, 
    description: (
      <>
        Permite obter informação sobre as ementas das diversas cantinas e snack-bar da Universidade de Aveiro.
      </>
    ),
  },
  {
    title: 'Rss2json',
    image: require('@site/static/img/senhas-icon.svg').default,
    description: (
      <>
        Converte um feed RSS para JSON.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  const apiLink = `/api/${title.split(' ')[0].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;

  return (
    <div className={clsx('col col--4 margin-bottom--lg')}>
      <div className={styles.feature}>
        <div className="text--center">
          {typeof image === 'string' ? (
            <img src={image} className={styles.featureSvg} role="img" alt={title} />
          ) : (
            (() => { const Svg = image; return <Svg className={styles.featureSvg} role="img" />; })()
          )}
        </div>
        
        <div className={styles.featureContent}>
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>

        <div className={styles.featureButtonWrapper}>
          <Link className="button button--primary" to={apiLink}>
            Saber mais →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
