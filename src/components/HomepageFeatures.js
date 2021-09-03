import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Realtimely was designed from the ground up to be easily installed and
        used to get your website look realtime.
      </>
    ),
  },
  {
    title: 'No backend',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        You can use the Realtimely backend out-of-the-box, so you don't have to build any difficult backends.
      </>
    ),
  },
  {
    title: 'Not aware of websocket',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Realtimely is based on GraphQL and Websocket, but users of Realtimely can use it without worrying about the technology behind it.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
