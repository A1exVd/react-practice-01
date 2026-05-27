
export default function SliderCard({classNames, value, num}) {
    return (
        <div 
            className={`slider-card ${classNames} `}
            style={{transform: `translateX(${-50 - 100 * num}%) translateZ(${value - (num + 1) * 5}vw)`}}
        >   
            <h1>New videocard</h1>
            <p>some new videocard was introudec on the market its cheaper and better</p>

        </div>
    )
}





// export default function SliderCard({classNames, value}) {
//     return (
//         <div 
//             className={`slider-card ${classNames} `}
//             style={{transform: `translateZ(${value}rem)`}}
//         >

//         </div>
//     )
// }