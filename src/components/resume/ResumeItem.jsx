
const ResumeItem = ({ career, anios, University, text}) => {
  return (
    <div className='resume-item'>
        <h4>{career}</h4>
        <h5>{anios}</h5>
        <p><em>{University}</em></p>
        <p>
          {text}
        </p>
    </div>
  )
}

export default ResumeItem