import { toast } from "react-toastify";

export const notifyError = () =>{
    toast.error('🦄 Something went wrong!', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

} 
export const notifySuccess = ()=>{
    toast.success("🦄Thank you for your message!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
}