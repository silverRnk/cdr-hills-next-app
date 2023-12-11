// 'use client'
 
// import React, { useState } from 'react'
// import { useServerInsertedHTML } from 'next/navigation'
// import { StyleRegistry, createStyleRegistry } from 'styled-jsx'
 
// export default function StyledJsxRegistry({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   // Only create stylesheet once with lazy initial state
//   // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
//   const [jsxStyleRegistry] = useState(() => createStyleRegistry())
 
//   useServerInsertedHTML(() => {
//     const names = flush();
//     if (names.length === 0) {
//       return null;
//     }
//     let styles = '';
//     for (const name of names) {
//       styles += cache.inserted[name];
//     }
//     return (
//       <style
//         key={cache.key}
//         data-emotion={`${cache.key} ${names.join(' ')}`}
//         dangerouslySetInnerHTML={{
//  -        __html: styles,
//  +        __html: options.prepend ? `@layer emotion {${styles}}` : styles,
//         }}
//       />
//     );
//   });
 
 
//   return <StyleRegistry registry={jsxStyleRegistry}>{children}</StyleRegistry>
// }