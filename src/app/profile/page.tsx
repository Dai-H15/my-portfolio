import Image from "next/image"
import { Inter } from "next/font/google";
import Link from "next/link";

function Base(){
    return(
        <div>
            <li><h3>基本情報</h3></li>
        <ul>
            <li><p>Name: Daichi Matsumoto</p></li>
            <li><p>Birth: 2003/07/19</p></li>
            <li><p>東洋大学 情報連携学部 情報連携学科 (INIAD) <Link href= {"https://www.iniad.org/"}>iniad.org</Link></p></li>
        </ul>
        </div>
    )
};

function WantTo(){
    return(
        <div>
            <li><h3>やりたいこと</h3></li>
                        <ul>
                            <li>FP資格を取りたい</li>
                            <li>ITパスポートの資格を取りたい</li>
                            <li>TypeScriptを徹底的に学びたい</li>
                            <li>Next.jsを徹底的に学びたい</li>
                            <li>基本情報処理技術者の資格を取りたい</li>
                            <li>弓道を再開したい</li>
                        </ul>
        </div>
    )
};

function Like(){
    return(
        <div>
            <li><h3>好きなもの・趣味</h3></li>
                        <ul>
                            <li>弓道 (弐段取得)</li>
                            <li>PythonとDjango</li>
                            <li>カラオケ</li>
                            <li>Youtubeを見ながらのんびり制作</li>
                            <li>お金の管理（上手い訳では無い）</li>
                        </ul>
        </div>
    )
}



export default function Profile() {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="prof-img col col-md-5"><Image className=" rounded" src = "my-portfolio/prof_img.jpg" width={200} height={200} alt="プロフィール画像"/></div>
                <div className="col col-md-5 m-2">
                    <ul className="list-unstyled p-3 border rounded-3">
                        <Base/>
                    </ul>
                    <ul className="list-unstyled p-3 border rounded-3">
                        <WantTo/>
                    </ul>
                    <ul className="list-unstyled p-3 border rounded-3" >
                        <Like/>
                    </ul>
                </div>
            </div>
        </div>
    )
}