import React from 'react'
import { MDBContainer, MDBCol, MDBRow, MDBBtn} from "mdbreact";
import { Navbar } from "../components/advanced/Navbar";
import { Footer } from "../components/advanced/Footer"

export const Home = () => (
  <React.Fragment>
    <Navbar />
    <MDBContainer>
      <MDBRow>
        <MDBCol sm="12" className="my-4">
          <div className="pt-2 text-center">
            <img src="collab.png" alt="" className="img-fluid" style={{ width: '100%', maxWidth: 500 }}/>
          </div>
          <div>
            <h1 className="black-text">linqsで<br/>今日から繋がる。</h1>
            <p className="pt-2">あなたを表現するページを作り、出会った相手とその場で交換。
                好きなことを共有して、名刺より温かいつながりを作ろう。
            </p>
          </div>
          <div className="text-center">
            <a href="/login">
              <MDBBtn
                className="px-5 py-2 my-3 text-capitalize btn-outline-default waves-effect"
                color="accent-3"
              >
                はじめる
              </MDBBtn>
            </a>
          </div>
        </MDBCol>
        <MDBCol sm="12" className="py-3" style={{ backgroundColor: 'black'}}>
          <div>
            <h4 className="white-text text-center py-3">About linqs</h4>
            <p className="white-text" style={{lineHeight: 1.7, textAlign: "justify"}}>わざわざWebサイトを作る必要なく、簡単な操作でクールなプロフィールページを作成できます。
プロフィールページには、自己紹介や他サービスのリンクのみならず、お気に入りの情報を追加できます。
友達にもサービスを使ってもらい、仲良くなるための共通点を見つけやすくします。
            </p>
            </div>
            <div className="pt-2 text-center">
              <img src="explore.png" alt="" className="img-fluid" style={{ width: '100%', maxWidth: 500 }} />
            </div>
        </MDBCol>
        <MDBCol sm="12">
        <div className="text-center py-5" style={{ backgroundColor: "white", width: '100%' }}>
          <h2 className="text-black">ここから</h2>
          <a href="/login">
            <MDBBtn
              className="px-5 py-2 my-3 text-black text-capitalize btn-outline-default waves-effect"
              color="accent-3"
            >
              はじめる
            </MDBBtn>
          </a>
        </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <Footer />
  </React.Fragment>
);