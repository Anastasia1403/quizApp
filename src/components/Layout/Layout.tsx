import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import { MainBlock } from './styled'
// interface PropsType {
//     children: React.ReactElement
// }

function Layout() {
  const isPalindrom = (str: string) => {
    // debugger
    const string = str.toLowerCase();
    const middle = Math.floor(string.length/2);
    let res;
    for (let i = 0; i < middle; i++) {
        res = string[i] === string[string.length - 1 - i];
        if (!res) break;
    };
    return res;
};

console.log(isPalindrom("asbcba"));
  return (
    <>
      <Header/>
      <MainBlock>
        <Outlet/>
      </MainBlock>
    </>
  )
}

export default Layout