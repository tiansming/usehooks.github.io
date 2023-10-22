/*
 * @Author: tianshuangming123 tianshuangming@swifthealth.cn
 * @Date: 2023-10-22 14:50:57
 * @LastEditors: tianshuangming123 tianshuangming@swifthealth.cn
 * @LastEditTime: 2023-10-22 15:35:49
 * @FilePath: \useHooks\src\useUpdate\demo\demo1.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * title: 基础用法
 * desc: 强制组件重新渲染。
 */

import { useUpdate } from 'encode-hooks';
import React from 'react';

export default () => {
  const update = useUpdate();

  return (
    <>
      <div>Time: {Date.now()}</div>
      <button type="button" onClick={update} style={{ marginTop: 8 }}>
        update重新
      </button>
    </>
  );
};
