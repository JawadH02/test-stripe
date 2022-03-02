import { useCallback } from "react";
import { useNavigate } from "react-router-dom";



export const Success = () => {
    const navigate = useNavigate();
    const goBack = useCallback(() => {
        navigate("/")
    }, [])
  return (
    <div>Success <button onClick={goBack}>go back home</button></div>
  )
}
