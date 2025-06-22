// import React, { useEffect, useRef, useState } from 'react';

// const SlideInUp = ({ text }) => {
//     const ref = useRef(null);
//     const [visible, setVisible] = useState(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(([entry]) => {
//             if (entry.isIntersecting) {
//                 setVisible(true);
//                 observer.unobserve(ref.current);
//             }
//         }, { threshold: 0.1 });

//         if (ref.current) observer.observe(ref.current);

//         return () => {
//             if (ref.current) observer.unobserve(ref.current);
//         };
//     }, []);

//     return (
//         <div ref={ref}>
//             {text.split(' ').map((word, index) => (
//                 <span
//                     key={index}
//                     className="word"
//                     style={{
//                         animationDelay: visible ? `${index * 0.2}s` : '0s',
//                     }}
//                 >
//                     {word}&nbsp;
//                 </span>
//             ))}
//         </div>
//     );
// };


// export default SlideInUp;
