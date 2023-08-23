import React from 'react';
import { styled } from '@mui/system';

const FooterContainer = styled('div')({
  backgroundColor: '#333', // より濃い黒色の背景色
  padding: '1rem',
  textAlign: 'center',
});

const AppFooter = styled('footer')({
  borderTop: '1px solid #555', // 濃い色のボーダー
  marginTop: '1rem',
  padding: '1rem 0',
  color: '#999', // 淡い灰色のテキスト色
});

const App_footer = () => {
  return (
    <FooterContainer>
      <AppFooter>
         {new Date().getFullYear()} BodyUp
      </AppFooter>
    </FooterContainer>
  );
}

export default App_footer;
