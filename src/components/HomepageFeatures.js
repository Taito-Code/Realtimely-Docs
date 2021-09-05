import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate, { translate } from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate
      id="homepage.feature1_title"
    >Easy to Use</Translate>,
    Svg: require('../../static/img/undraw_Developer_activity_re_39tg.svg').default,
    description: (
      <>
        <Translate
          id="homepage.feature1"
        >
          Realtimely was designed from the ground up to be easily installed and
          used to get your website look realtime.
        </Translate>

      </>
    ),
  },
  {
    title: <Translate
      id="homepage.feature2_title"
    >No backend</Translate>,
    Svg: require('../../static/img/undraw_Code_review_re_woeb.svg').default,
    description: (
      <>
        <Translate
          id="homepage.feature2"
        >
          You can use the Realtimely backend out-of-the-box, so you don't have to build any difficult backends.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate
      id="homepage.feature3_title"
    >Not aware of websocket</Translate>,
    Svg: require('../../static/img/undraw_Coding_re_iv62.svg').default,
    description: (
      <>
        <Translate
          id="homepage.feature3"
        >
          Realtimely is based on GraphQL and Websocket, but users of Realtimely can use it without worrying about the technology behind it.
        </Translate>
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
