/*
 * @Descripttion:
 * @version:
 * @Author: 小白
 * @Date: 2021-09-18 22:27:18
 * @LastEditors: 小白
 * @LastEditTime: 2021-09-19 19:01:51
 */
import { useState } from 'react';
import { createModel } from '../../../src/index';
export const useCounter = () => {
  const [count, setCount] = useState(0);
  const del = () => setCount(count - 1);
  const add = () => setCount(count + 1);
  console.log(count);
  return {
    count,
    add,
    del,
  };
};
export default createModel(useCounter, 'counter');
