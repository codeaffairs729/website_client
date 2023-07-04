import React from 'react'
import Head from 'next/head'
import styles from '../../styles/caseanalysis1.module.css'

const CaseAnalysisPage2 = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Case Analysis</title>
      </Head>
      <h1 className={styles.title}>Case Analysis</h1>
      <div className={styles.content}>
        <h2 className={styles['section-title']}>
          Dtechtive - Performance Optimization
        </h2>
        <p className={styles['section-description']}>
          Introduction: Dtechtive - A website that discovers the datasets other
          search engines cannot reach, by connecting Data Users and Data
          Providers in a unique ecosystem
        </p>
        <h2 className={styles['section-title']}>Case Description:</h2>
        <p className={styles['section-description']}>
          While we were working on Dtechtive, we encountered a problem with the
          server. Specifically, the issue was having two databases from which
          data was being fetched. There were a few APIs that were accessing data
          from both databases, and the data was associated in such a way that
          the ID of a table in the first database was the primary key for a
          table in the second database.
        </p>
        <h3 className={styles['section-subtitle']}>Our Approach/Solution:</h3>
        <ul className={styles['section-list']}>
          <li>
            Merged Databases Manually and Removed One Extra Database Connection
            for better accessibility
          </li>
          <li>
            Used Associations and Joins to Remove Sub-queries to retrieve data
            faster
          </li>
          <li>Merged and Updated Migrations to eliminate prior errors</li>
          <li>
            Added numerous test cases to ensure that the functionality performs
            optimally
          </li>
        </ul>
        <h3 className={styles['section-subtitle']}>Results:</h3>
        <ul className={styles['section-list']}>
          <li>
            It was cost-effective for our client as it eliminated the need for
            an extra database
          </li>
          <li>
            Because of one SQL request per Application Programming Interface
            (API), the time taken to process the result was minimized
          </li>
          <li>
            For us, it became easier to fetch the data from the server as the
            models were associated, and we were able to get the associated data
            using models without further logical code
          </li>
        </ul>
        <h3 className={styles['section-subtitle']}>Conclusion:</h3>
        <p className={styles['section-description']}>
          This approach helped us in simplifying the process for future use. By
          merging the two databases, we were able to minimize processing time
          and improve the efficiency of our developer's workflow.
        </p>
      </div>
    </div>
  )
}

export default CaseAnalysisPage2
