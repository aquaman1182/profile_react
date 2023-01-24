import "./App.css";
import awa from "./assets/img/cul_kouenjiawaodori_2019_1.jpg";
import sudachi from "./assets/img/images.jpg";
import ramen from "./assets/img/tokushimaramen.jpg";
import fishing from "./assets/img/S__11272234.jpg";
import rara from "./assets/img/S__10248194.jpg";
function App() {
  return (
    <div>
      <div className="shutter" />
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-success fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">Mypage</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={rara}
              alt="..."
            />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#experience">
                Hometown
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#education">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#interests">
                Idea
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Page Content*/}
      <div className="container-fluid p-0">
        {/* About*/}
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0">
              Welcome
              <span className="text-success">to my page</span>
            </h1>
            <div className="subheading mb-5">
              530-0001 大阪府大阪市北区梅田3-3-1
              <a href="mailto:hal.bandotakumi@gmail.com">
                hal.bandotakumi@gmail.com
              </a>
            </div>
            <h2>My profile</h2>
            <ul>
              <li>Name: 坂東　拓実</li>
              <li>Age: 19</li>
              <li>Hometown: 徳島</li>
              <li>
                hobie: 音楽を聴く(主にhip hop), バイクに乗る,
                格闘技をしたり、観賞したり
              </li>
            </ul>
            <p className="lead mb-5" />
            <div className="social-icons">
              <a className="social-icon" href="https://github.com/aquaman1182">
                <i className="fab fa-github" />
              </a>
              <a className="social-icon" href="https://twitter.com/hal0075173">
                <i className="fab fa-twitter" />
              </a>
              <a
                className="social-icon"
                href="https://www.instagram.com/hal_takumi/"
              >
                <i className="fa-brands fa-instagram" />
              </a>
            </div>
          </div>
        </section>
        <hr className="m-0" />
      

        
       
        {/* Interests*/}
        <section className="resume-section" id="interests">
          <div className="resume-section-content">
            <h2 className="mb-5">Portfolio</h2>
            <ol>
              <li>位置情報共有アプリ(現在作業休止中)</li>
              <p>
                （詳細）
                ゼンリーのようにマップで居場所を表示させるのではなく、あくまで今何しているかだけを表示させる。
                半径500mぐらいに友達が居れば通知が行く。チャットアプリもつける。
              </p>
              <li>(仮想idea) 個人業者の引っ越しマッチングアプリ</li>
              <p>
                業者に頼むと高くなりがちだが、個人の業者に頼むことで安く抑えることができる。
                ですがこのサービスを作るにはケガや家具家電の故障したときどうするかなど様々な問題点があるので手が付けれていません
              </p>



              <li>チャットアプリ</li>
              <p>Udemyの講座を参考にしてチャットアプリを作成しました。react javascript firebase muiを用いて開発しました。</p>
              <img src="" alt="" className="w-50 p-3"></img>
              <link rel=""></link>



              <li>技育博</li>
              <img src="/IMG_4865.jpg" className="w-50 p-3" alt=""></img>
              <p>
                サークルで技育博に参加しました。制作中の作品をプレゼンし多くの方からのフィードバックを得ていい経験になりました。
              </p>
            </ol>
          </div>
        </section>
        

        {/* Education*/}
        <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">徳島県立阿波高等学校</h3>
                <div className="subheading mb-3">普通科</div>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">Aprile 2018 - March 2021</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">hal大阪</h3>
                <div className="subheading mb-3">IT学科高度情報学部</div>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">Aprile 2022 - March 2026</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
        {/* Awards*/}
          {/* Experience*/}
          <section className="resume-section" id="experience">
          <div className="resume-section-content">
            <h2 className="mb-5">Hometown</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">徳島紹介</h3>
                <div className="subheading mb-3">阿波踊り</div>
                <img className="w-50 p-3" src={awa} alt="" />
                <p>
                  徳島市の阿波踊りは毎年8月12日から15日まで4日間の開催となり、
                  人出は約130万人、踊り子は約10万人が繰り出します。
                  期間中は、徳島市中心街一円が踊りの渦に巻き込まれ、興奮のるつぼと化します。
                  ちなみに、徳島の小学生は低学年の時に阿波踊りを踊らされます。
                </p>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <div className="subheading mb-3">スダチ</div>
                <img className="w-50 p-3" src={sudachi} alt=""/>
                <p>
                  香りがよく上品な味がするそうです。魚などにかけて使うことが多いです。
                  僕はゆず派です。
                </p>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <div className="subheading mb-3">徳島ラーメン</div>
                <img className="w-50 p-3" src={ramen} alt=""/>
                <p>
                  味は豚骨醤油ですが、地域によって変わったり店によって変わったりするので
                  県民は自分好みの店を見つけています。
                </p>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <div className="subheading mb-3">旧吉野川</div>
                <img className="w-50 p-3" src={fishing} alt=""/>
                <p>
                  これは、旧吉野川で釣った時の写真です。
                  日本のメジャーなバス釣りスポットで全国から有名なバスプロが来たり取材や大きい大会が開かれています。
                  ぜひ徳島に来るときは釣り竿を持ってきてください^^
                </p>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
         {/* Skills*/}
         <section className="resume-section" id="skills">
          <div className="resume-section-content">
            <h2 className="mb-5">Skills</h2>
            <div className="subheading mb-3">
              Programming Languages &amp; Tools
            </div>
            <ul className="list-inline dev-icons">
              <li className="list-inline-item">
                <i className="fab fa-html5" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-css3-alt" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-js-square" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-react" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-node-js" />
              </li>
              <li className="list-inline-item">
                <i className="fab fa-npm" />
              </li>
            </ul>
          </div>
        </section>
        <hr className="m-0" />
      </div>
    </div>
  );
}

export default App;
