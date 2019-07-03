import Winwheel from 'winwheel';

let Wheel = new Winwheel({
    'canvasId': 'myCanvas',
    'numSegments': 4,
    'segments':
        [
            { 'fillStyle': '#eae56f', 'text': 'Prize One' },
            { 'fillStyle': '#89f26e', 'text': 'Prize Two' },
            { 'fillStyle': '#7de6ef', 'text': 'Prize Three' },
            { 'fillStyle': '#e7706f', 'text': 'Prize Four' }
        ],
    'animation':
    {
        'type': 'spinToStop',
        'duration': 5,
        'spins': 8
    }
});

export default Wheel;

// import React from 'react';
// import { Winwheel } from 'winwheel';

// class Wheel extends React.Component {
//     constructor() {
//         super();
//         this.wheel = new Winwheel({
//             'numSegments': 4,
//             'segments':
//                 [
//                     { 'fillStyle': '#eae56f', 'text': 'Prize One' },
//                     { 'fillStyle': '#89f26e', 'text': 'Prize Two' },
//                     { 'fillStyle': '#7de6ef', 'text': 'Prize Three' },
//                     { 'fillStyle': '#e7706f', 'text': 'Prize Four' }
//                 ],
//             'animation':
//             {
//                 'type': 'spinToStop',
//                 'duration': 5,
//                 'spins': 8
//             }
//         });

//     }

//     render() {
//         return (
//             <div>{this.wheel}</div>
//         )
//     }


// }

// export default Wheel;