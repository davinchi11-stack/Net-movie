import { easeInOut } from "framer-motion"

export const useHeaderAnimation = () => {
    const headVar = {
        from : {} ,
        to : {
          transition : {
            type : "spring",
            when : "beforeChildren",
            staggerChildren : 0.5,
            mass : 0.5,
            damping : 8,
          }
        },
       
      }
      
      const logoVar = {
        from : {opacity : 0 , scale : 0.4} ,
        to : {
          opacity : 1 , scale : 1 ,
          transition : {
            type : "spring",
            mass : 0.5,
            damping : 8,
            stiffness : 500
          }
        }
       
      }
      
      const profileVar = {
        from : {y : 100} ,
        to : {
           y : 0 ,
          transition : {
            type : "spring",
            mass : 0.8,
            damping : 6,
            stiffness : 150
          }
        }
       
      }
      
      const listOne = {
        from : {y : -100} ,
        to : {
          y : 0 ,
          transition : {
            type : "spring",
            mass : 0.8,
            damping : 6,
            stiffness : 150
          }
        }
       
      }
      
      const listTwo = {
        from : {y : 100 } ,
        to : {
          y : 0 ,
          zIndex : 0
          ,
          transition : {
            type : "spring",
            mass : 0.8,
            damping : 6,
            stiffness : 150
          }
        }
       
      }
      
      const drawer = {
        from : {
          background : "transparent" ,
        backdropFilter : "blur(0px)"
        } ,
        to : {
          background : "rgba(0, 0, 0, 0.18)" ,
           backdropFilter : "blur(8px)"
          ,
          transition : {
            ease : easeInOut,
            delay : 1
          }
        }
       
      }
    return {drawer , listOne , listTwo , headVar , logoVar , profileVar }
}