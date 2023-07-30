import {FC}  from 'react'


const Wrapper: FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <div className="max-w-4xl mx-auto px-4 bg-slate-200">
        {children}
    </div>
  )
}

export default Wrapper


