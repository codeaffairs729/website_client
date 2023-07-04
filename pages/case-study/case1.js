import React from 'react'
import Head from 'next/head'
import styles from '../../styles/caseanalysis.module.css'

const CaseAnalysisPage1 = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Case Analysis</title>
      </Head>
      <h1 className={styles.title}>Case Analysis</h1>
      <div className={styles.content}>
        <h3 className={styles['section-title']}>
          DIVEROID presents the beauty of the underwater to the world.
        </h3>
        <p className={styles['section-description']}>
          <strong>Introduction</strong>
          <br />
          Diveroid is a renowned company in the sea diving industry that offers
          a range of diving appliances and an accompanying mobile application.
        </p>
        <h2 className={styles['section-title']}>Case Description</h2>
        <p className={styles['section-description']}>
          The objective was to develop version 3 of the Diveroid application,
          leveraging technologies such as Node.js, Express, and MySQL. The
          challenge arose when Diveroid desired to rebuild the application from
          scratch while ensuring seamless migration of existing user data.
          Additionally, our team was tasked with optimizing the deployment
          infrastructure to reduce costs.
        </p>
        <h2 className={styles['section-title']}>Our Approach/Solution</h2>
        <p className={styles['section-description']}>
          When we first started the project, we faced many challenges but after
          careful planning, our team devised an effective solution to overcome
          the challenges. The approaches followed by us are given below:
        </p>
        <ul className={styles['approach-list']}>
          <li>
            <p className={styles['approach-list1']}> Used AWS, EC2, and RDS </p>
            <p>
              To host the application, we utilized Amazon Web Services (AWS) EC2
              instances, which provided scalable computing resources. By
              carefully analyzing Diveroid's requirements and usage patterns, we
              optimized the instance sizes, ensuring efficient resource
              utilization without sacrificing performance. Furthermore, we
              migrated the application's database to AWS RDS (Relational
              Database Service), which offered managed database solutions. This
              move eliminated the need for maintaining and managing database
              servers, thereby streamlining operations.
            </p>
          </li>
          <li>
            <p className={styles['approach-list1']}> Leveraged GCP Buckets </p>
            <p>
              To address Diveroid's storage requirements, we leveraged Google
              Cloud Platform (GCP) buckets. GCP buckets are scalable and
              cost-effective storage solutions, allowing Diveroid to securely
              store and manage user-related media files and other data.
            </p>
          </li>
          <li>
            <p className={styles['approach-list1']}> Cost Optimization </p>
            <p>
              To reduce expenses, we implemented various cost optimization
              techniques. This included utilizing auto-scaling features to
              dynamically adjust compute resources based on demand, enabling
              Diveroid to scale up during peak usage periods and scale down
              during periods of low activity.
            </p>
          </li>
        </ul>
        <h2 className={styles['section-title']}>Results</h2>
        <p className={styles['section-description']}>
          Our modernized approach helped our client to maximize the business
          value and reduce operating costs. Their whole system is now
          centralized and their app is running smoothly without any lag.
        </p>
      </div>
    </div>
  )
}

export default CaseAnalysisPage1
