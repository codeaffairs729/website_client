import styles from '../styles/assisstanceModel.module.css'
const ScheduleMeetingForm = ({
  fields,
  title,
  submitFunc,
  buttonText,
  submitButton,
}) => {
  // const [name,setName]=useState('');
  // const [email,setEmail]=useState('');es
  // const [phone,setPhone]=useState('');
  return (
    <>
      <div
        className={`${styles.assistgenformcontainer} d-flex flex-column align-items-center`}
      >
        <div className={styles.assistinputfield}>
          <h2 className={styles.assistformcontainerheader}>{title}</h2>
          <div
            className={`${styles.assistformcontainerinput} d-flex flex-column justify-content-center align-items-center`}
          >
            {fields.map((e, i) => (
              <div className={styles.assistforminputdetail} key={i}>
                <span className={styles.assistinputicon}>{e.icon}</span>
                {e.render && e.render()}
              </div>
            ))}
          </div>
          {submitButton()}
        </div>
      </div>
    </>
  )
}

export default ScheduleMeetingForm
