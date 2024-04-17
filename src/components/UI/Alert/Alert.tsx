import m from './Alert.module.scss';

const Alert = ({ text }: any) => {
  return (
    <div className={m.container}>
      <h1 className={m.title}>Упс.</h1>
      <h3 className={m.text}>{text}</h3>
    </div>
  )
}

export default Alert;