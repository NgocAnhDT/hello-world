import './App.css';
import './responsive.css';
import Button from '@atlaskit/button'
import SimpleSlider from './sampleBanner';
import TutorialInfo from './tutorialGuide';
import imgAbout from './img/about/Background.jpg';
import imgMake from './img/make/Background2.jpg';

function App() {
  return (
    <>
      <div className="videoMain">
        <div className="videonly-logo">videonly</div>
        <div className="button-box">
          <Button className="btnLogin">LOGIN</Button>
          <Button className="btnJoin">JOIN</Button>
        </div>

        <div className="text-content">
          <div className="text-heading">
            <p>비디온리는</p>
            <p>오직 당신의 브랜드만를 위해</p>
            <p>템플릿을 만듭니다</p>
          </div>
          <div className="text-description">나만의 브랜드를 위한 영상 템플릿을 직접 경험해보세요</div>
          <Button className="btn3">시작하기</Button>
        </div>
      </div>
      
      <div className="sampleTemplate">  
        <SimpleSlider/>
      </div>

      <div className="tutorialGuide">
        <TutorialInfo/>
      </div>

      <div className="mainBanner">
        <div className="text-about-banner">
            <div className="text-sub-1">
              <p>퀄리티있는 브랜딩 비디온리 하세요</p></div>
            <div className="text-sub-2">
              <p>나에게 맞는 템플릿 망설이지 말고 지금 직접 체험해보세요</p>
              <Button className="btn4">시작하기</Button>
            </div>
        </div>
      </div>

      <div className="aboutVideonly column-layout">
        <div className="column-item">
          <img src={imgAbout} style={{height:'100%', width:'320px'}}></img>
        </div>
        
        <div className="column-item">
          <div className="title">WHAT IS THE VIDEONLY</div>
          <div className="about-heading">비디온리는 무엇인가요</div>
          <div className="item-info">
            <p>세상에는 수많은 회사들이 존재합니다. 비디온리에서는 그 중에서도 오직 단 하나의 영상 템플릿을 만듭니다. 우리는 특정 회서에 원하는 템플릿잋 만고, 해당 템플릿을 사용해서 직집 더 나은 비디오를 만들 구 있도록 컨설팅을 해줄 수 있숩니다. 세계에서 하나 뿐인 템플릿  직접 경험해보세요. </p>
            <Button className="btn5">시작하기</Button>
          </div>
        </div>
      </div>

      <div className="makeVideo column-layout">
        <div className="column-item">
          <div className="title2">HOW DO MAKE A VIDEO</div>
          <div className="make-heading">비디온리는 무엇인가요</div>
          <div className="make-info">
            <p>세상에는 수많은 회사들이 존재합니다. 비디온리에서는 그 중에서도 오직 단 하나의 영상 템플릿을 만듭니다. 우리는 특정 회서에 원하는 템플릿잋 만고, 해당 템플릿을 사용해서 직집 더 나은 비디오를 만들 구 있도록 컨설팅을 해줄 수 있숩니다. 세계에서 하나 뿐인 템플릿  직접 경험해보세요. </p>
            <Button className="btn6">시작하기</Button>
          </div>
        </div>
        <div className="column-item">
          <img src={imgMake} style={{height:'210px', width:'320px'}}></img>
        </div>
      </div>

      <div className="체험_가능한_템플릿">
          <p>체험 가능한 템플릿</p>
          <div className="체험-sub">
            <div className="체험-sub-about">
              <></>
              <p>사용중인 기업</p>
              <p className="sub-number">41</p>
            </div>

            <div className="체험-sub-about">
              <></>
              <p>완료한 템플릿</p>
              <p className="sub-number">164</p>
            </div>
            <div className="체험-sub-about">
              <></>
              <p>체험가능한  템플릿</p>
              <p className="sub-number">82</p>
            </div>
          </div>
          <p>나에게 맞는 템플릿, 망설이지 말고 지금 직접 체험해보세요!</p>

          <Button className="btn7">시작하기</Button>
        </div>

        <div className="banner-03">
          <p className="banner-title">한 눈에 보는 템플릿 절차</p>
          <p>비디온리가 아직 고민되시나요? 비디온리는 오직 당신만을 위한 템플릿을 통해 기다리고 있습니다. </p>
        </div>
        
        <div className="footer">
          <div className="footer-sub-1">
            <p>이용약관</p>          
            <p>개인정보처리방침</p>         
            <p>고객센터</p>
          </div>
          <div className="footer-sub-2">
            <p>비디온리 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000</p>
            <p>이메일 : test0101@vidio</p>
          </div>

          <div className="footer-sub-3">
          Copyright© VIDIONLY All rights reserved.
          </div>
        </div>
    </>
  );
}

export default App;
