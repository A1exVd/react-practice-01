import SliderCard from "./SliderCard"
import { useState, useEffect, useRef } from "react"
const someArr = [{color: "bg-red", value: -50}, {color: "bg-green", value: -35}, {color: "bg-yellow", value: -20}, {color: "bg-lightblue", value: -5}, {color: "bg-orange", value: 10}, {color: "bg-lightgreen", value: 25}]
export function Slider({children}) {
    const [step, setStep] = useState(0);
    const [direction, setDirection ] = useState({dir: ""});
    const container = useRef(null);
    const yValue = useRef(0);
    const deltaYValue = useRef(0);

    // from 0 to 100; each scroll positive or negative we accumulate value in deltaYValue
    // console.log(deltaYValue.current)

    // console.log('render')
    
    /* 
        problem: if we try to read step in handleWheel its value is 0; its because we don't use synthetic event;
        and attach handler directly to scroll container. So our conditions like step > 10 won't work.
        Why we can see ref value? because ref is a mutable object.
        Fixes: 
            1.Set step in dependency in useEffect
            2.Assign step to some ref

    */


    const handleWheel = (e) => {
        e.preventDefault();
        deltaYValue.current += e.deltaY;
        if(deltaYValue.current > 100) {
            deltaYValue.current = 0;
            // if (step > 20) return;
            
            setStep(prev => prev + 5);
        } else if (deltaYValue.current < -100) {
            deltaYValue.current = 0
            // if(step < -40) return;
            setStep(prev => prev - 5);
        }
        
        console.log(step)
    }

    const handleTouchStart = (e) => {
        yValue.current = e.changedTouches[0].pageX
        console.log("touch start")
        console.log(yValue.current)
    }

    const handleTouchEnd = (e) => {
        e.preventDefault();
        if(yValue.current > e.changedTouches[0].pageX) {
            // if (step > 20) return;

            setStep(prev => prev + 5)
        } else {
            // if(step < -40) return;

            setStep(prev => prev - 5)
        }
        console.log('fired')
        
    }
    const handleTouchMove = (e) => {
        e.preventDefault();
        console.log(e.changedTouches[0].clientX > yValue.current)
        if(yValue.current > e.changedTouches[0].clientX) {
            // if (step > 20) return;
            setStep(prev => prev + 10)
        } else {
            // if(step < -40) return;
            setStep(prev => prev - 10)
        }
        yValue.current = e.changedTouches[0].clientX

    }
    useEffect(() => {
        const scrollContainer = container.current;
        if(container.current) {
            scrollContainer.addEventListener("wheel", handleWheel, { passive: false })
            scrollContainer.addEventListener("touchend", handleTouchEnd, {passive: false})
            scrollContainer.addEventListener("touchstart", handleTouchStart, {passive: false})
            // scrollContainer.addEventListener("touchmove", handleTouchMove, {passive: false})
        }

        // const id = setTimeout(() => {
            // if(direction.dir === "+") {
            //     if(step > 10) return;
            //     setStep(prev => prev +=4);
            // } else if (direction.dir === "-") {
            //     if(step < -40) return
            //     setStep(prev => prev -= 4);
            // }
        // },1000)
        return () => {
            // clearTimeout(id); 
            scrollContainer.removeEventListener("wheel", handleWheel);
            // scrollContainer.addEventListener("touchmove", handleTouchMove, {passive: false})
            scrollContainer.removeEventListener("touchend", handleTouchEnd);
            scrollContainer.removeEventListener("touchstart", handleTouchStart)
        };
            
    }, [step])
    return <div ref={container} className="slider-container" >
        {someArr.map(({color, value}, index) => (
            <SliderCard key={value} classNames={color} num={index} value={step} />
        ))}
        <button onClick={() => setStep(prev => prev + 20)}>click</button>
    </div>
}











// import SliderCard from "./SliderCard"
// import { useState, useEffect, useRef } from "react"
// const someArr = [{color: "bg-red", value: -50}, {color: "bg-green", value: -35}, {color: "bg-yellow", value: -20}, {color: "bg-lightblue", value: -5}, {color: "bg-orange", value: 10}, {color: "bg-lightgreen", value: 25}, {color: "bg-coral", value: 40}]
// export function Slider({children}) {
//     const [step, setStep] = useState(0);
//     const [direction, setDirection ] = useState({dir: ""});
//     const container = useRef(null);
//     const yValue = useRef(0);
//     const deltaYValue = useRef(0);

//     // from 0 to 100; each scroll positive or negative we accumulate value in deltaYValue
//     // console.log(deltaYValue.current)

//     // console.log('render')
    
//     /* 
//         problem: if we try to read step in handleWheel its value is 0; its because we don't use synthetic event;
//         and attach handler directly to scroll container. So our conditions like step > 10 won't work.
//         Why we can see ref value? because ref is a mutable object.
//         Fixes: 
//             1.Set step in dependency in useEffect
//             2.Assign step to some ref

//     */


//     const handleWheel = (e) => {
//         e.preventDefault();
//         deltaYValue.current += e.deltaY;
//         if(deltaYValue.current > 100) {
//             deltaYValue.current = 0;
//             if (step > 20) return;
            
//             setStep(prev => prev + 3);
//         } else if (deltaYValue.current < -100) {
//             deltaYValue.current = 0
//             if(step < -40) return;
//             setStep(prev => prev - 3);
//         }
        
//         console.log(step)
//     }

//     const handleTouchStart = (e) => {
//         yValue.current = e.changedTouches[0].pageX
//         console.log("touch start")
//         console.log(yValue.current)
//     }

//     const handleTouchEnd = (e) => {
//         e.preventDefault();
//         if(yValue.current > e.changedTouches[0].pageX) {
//             if (step > 20) return;

//             setStep(prev => prev + 10)
//         } else {
//             if(step < -40) return;

//             setStep(prev => prev - 10)
//         }
//         console.log('fired')
        
//     }
//     const handleTouchMove = (e) => {
//         e.preventDefault();
//         console.log(e.changedTouches[0].clientX > yValue.current)
//         if(yValue.current > e.changedTouches[0].clientX) {
//             // if (step > 20) return;
//             setStep(prev => prev + 10)
//         } else {
//             // if(step < -40) return;
//             setStep(prev => prev - 10)
//         }
//         yValue.current = e.changedTouches[0].clientX

//     }
//     useEffect(() => {
//         const scrollContainer = container.current;
//         if(container.current) {
//             scrollContainer.addEventListener("wheel", handleWheel, { passive: false })
//             scrollContainer.addEventListener("touchend", handleTouchEnd, {passive: false})
//             scrollContainer.addEventListener("touchstart", handleTouchStart, {passive: false})
//             // scrollContainer.addEventListener("touchmove", handleTouchMove, {passive: false})
//         }

//         // const id = setTimeout(() => {
//             // if(direction.dir === "+") {
//             //     if(step > 10) return;
//             //     setStep(prev => prev +=4);
//             // } else if (direction.dir === "-") {
//             //     if(step < -40) return
//             //     setStep(prev => prev -= 4);
//             // }
//         // },1000)
//         return () => {
//             // clearTimeout(id); 
//             scrollContainer.removeEventListener("wheel", handleWheel);
//             // scrollContainer.addEventListener("touchmove", handleTouchMove, {passive: false})
//             scrollContainer.removeEventListener("touchend", handleTouchEnd);
//             scrollContainer.removeEventListener("touchstart", handleTouchStart)
//         };
            
//     }, [step])
//     return <div ref={container} className="slider-container" >
//         {someArr.map(({color, value}) => (
//             <SliderCard key={value} classNames={color} value={step === 0 ? "none" : (value + step)} />
//         ))}
//         <button onClick={() => setStep(prev => prev + 20)}>click</button>
//     </div>
// }