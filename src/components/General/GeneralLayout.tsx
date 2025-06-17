
type Props = {
  children: React.ReactNode
  style?: string
}

const GeneralLayout = ({ children, style }: Props) => {
  return (
    <div className={style}>
      {children}
    </div>
  )
}

export default GeneralLayout;