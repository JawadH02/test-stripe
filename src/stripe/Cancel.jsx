import { useCallback } from "react"
import { useNavigate } from "react-router-dom"



export const Cancel = () => {
    const navigate = useNavigate();
    const goBack = useCallback(() => {
        navigate("/")
    }, [])
  return (
    <div>CANCEL<button onClick={goBack}>go back home</button></div>
  )
}
