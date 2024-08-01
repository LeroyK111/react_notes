/**
 * @author Leroy
 * 节流函数: 设置一个频次f
*/


import { useCallback, useEffect, useRef } from 'react';
const useThrottle = (callback, delay) => {
const lastCall = useRef(0);
return useCallback((…args) => {
const now = new Date().getTime();
if (now - lastCall.current >= delay) {
lastCall.current = now;
callback(…args);
}
}, [callback, delay]);
};




// Usage
const ScrollComponent = () => {
const handleScroll = useThrottle(() => {
console.log('Scroll event');
}, 1000);
useEffect(() => {
window.addEventListener('scroll', handleScroll);
return () => {
window.removeEventListener('scroll', handleScroll);
};
}, [handleScroll]);
return <div>Scroll to see throttling in action</div>;
};