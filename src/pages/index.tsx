import styles from './index.less';
import { useEffect } from 'react';
import { login, scanCodeLogin } from 'whale-user-center-sdk';

export default function IndexPage() {
  let ele: HTMLElement | null = null;
  useEffect(() => {
    createQrcode();
    login({
      accessKey: '105afdbd67f5644558ab76fb0b4498eaaf',
      secretKey: '10a007a8ecf06941d6bea4a50e4ebb071a',
      env: 'dev',
      email: '511521249@qq.com',
      pwd: 'Gqs1234',
    }).then((res) => console.log(res));
  });
  const createQrcode = async () => {
    const { data } = await scanCodeLogin({
      accessKey: '105afdbd67f5644558ab76fb0b4498eaaf',
      secretKey: '10a007a8ecf06941d6bea4a50e4ebb071a',
      env: 'dev',
      appId: '530086156579643907',
      getLoginInfo: (info) => console.log(info),
    });
    console.log(data);
  };

  return (
    <div>
      <div ref={(e) => (ele = e)}></div>
    </div>
  );
}
