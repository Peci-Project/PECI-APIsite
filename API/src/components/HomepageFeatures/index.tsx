import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { useKeycloak } from '@react-keycloak/web';
import BrowserOnly from '@docusaurus/BrowserOnly';

type FeatureItem = {
  title: string;
  image: React.ComponentType<React.ComponentProps<'svg'>> | string;
  description: ReactNode;
  allowedRoles?: string[];
};

/* Mudar as imagens */
const FeatureList: FeatureItem[] = [
  /*
  {
    title: 'Edifícios',
    image: require('@site/static/img/logo-api.png').default,
    description: (
      <>
        Fornece dados sobre as unidades e os edifícios da Universidade de Aveiro.
      </>
    ),
  },
  */
  {
    title: 'Parques de Estacionamento',
    image: require('@site/static/img/logo-api.png').default,
    description: (
      <>
        Fornece dados sobre os parques de estacionamento da Universidade de Aveiro.
      </>
    ),
  },
  /*
  {
    title: 'Senhas dos Serviços Académicos',
    image: require('@site/static/img/logo-api.png').default,
    description: (
      <>
        Permite obter informação sobre o estado das senhas dos Serviços Académicos da Universidade de Aveiro.
      </>
    ),
  },
  */
  {
    title: 'Ementas',
    image: require('@site/static/img/logo-api.png').default, 
    description: (
      <>
        Permite obter informação sobre as ementas das diversas cantinas e snack-bar da Universidade de Aveiro.
      </>
    ),
  },
  {
    title: 'Rss2json',
    image: require('@site/static/img/logo-api.png').default,
    description: (
      <>
        Converte um feed RSS para JSON.
      </>
    ),
    allowedRoles: ['admin_role', 'publisher_role']
  },
  {    
    title: 'Access Point',
    image: require('@site/static/img/logo-api.png').default,
    description: (
      <>
        Permite obter informação dos Acess Points da Universidade de Aveiro.
      </>
    ),
    allowedRoles: ['admin_role', 'publisher_role', 'subscriber_role']
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

function HomepageFeaturesInternal(): ReactNode {
  const { keycloak, initialized } = useKeycloak();

  const userRoles = (initialized && keycloak.authenticated)
    ? keycloak.tokenParsed?.realm_access?.roles || [] 
    : [];

  const filteredFeatures = FeatureList.filter((feature) => {
    if (!feature.allowedRoles || feature.allowedRoles.length === 0) return true;
    
    return feature.allowedRoles.some(role => userRoles.includes(role));
  });

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {filteredFeatures.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <BrowserOnly fallback={<div className="text--center">A carregar serviços...</div>}>
      {() => <HomepageFeaturesInternal />}
    </BrowserOnly>
  );
}
