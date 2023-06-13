import { useEffect } from "react"


const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title}-Nazmul-Store`;
    },[title])
};
export default useTitle;