import Image from "next/image"
import { Inter } from "next/font/google";
import Link from "next/link";

const Base = () =>{
    return(
        <ul className="list-unstyled p-3 border rounded-3">
        <div className="row">
            <div className="col-4">
        <Image className="img-fluid rounded" src = "/my-portfolio/prof_img.jpg" width={200} height={200} alt="プロフィール画像"/>
            </div>
            <div className="col-8">
            <li><h3 className="border-bottom border-3">基本情報</h3></li>
        <ul>
            <li><p>Name: Daichi Matsumoto</p></li>
            <li><p>Birth: 2003/07/19</p></li>
            <li><p>東洋大学 情報連携学部 情報連携学科 (INIAD) <Link href= {"https://www.iniad.org/"}>iniad.org</Link></p></li>
            <li>主な選択<p>コンピュータ・システム科目群</p><p>コンピュータ・ソフトウェア科目群</p><p>ICT社会応用科目群</p></li>
        </ul>
        </div>
        </div>
        </ul>


    )
};

const WantTo = () =>{
    return(
        <ul className="list-unstyled p-3 border rounded-3">
        <div>
            <li><h3 className="border-bottom border-3">やりたいこと</h3></li>
                        <ul>
                            <li>FP資格を取りたい</li>
                            <li>ITパスポートの資格を取りたい</li>
                            <li>TypeScriptを徹底的に学びたい</li>
                            <li>Next.jsを徹底的に学びたい</li>
                            <li>基本情報処理技術者の資格を取りたい</li>
                            <li>弓道を再開したい</li>
                        </ul>
        </div>
        </ul>
    )
};

const Like = () =>{
    return(
        <ul className="list-unstyled p-3 border rounded-3" >
        <div>
            <li><h3 className="border-bottom border-3">好きなもの・趣味</h3></li>
                        <ul>
                            <li>弓道 (弐段取得)</li>
                            <li>PythonとDjango</li>
                            <li>カラオケ</li>
                            <li>Youtubeを見ながらのんびり制作</li>
                            <li>お金の管理（上手い訳では無い）</li>
                        </ul>
        </div>
        </ul>
    )
}

const IwantTo = () => {
    return(
        <div className="border rounded-3 p-3 mb-2">
            <h3 className="border-bottom border-3">興味に関して</h3>
            <ul >
                <li>分野
                    <ul>
                        <li>業務改革</li>
                        <li>DX</li>
                        <li>バックオフィス</li>
                    </ul>
                </li>
                <li>
                    得意
                    <ul>
                        <li>要件定義</li>
                        <li>課題探求</li>
                    </ul>
                </li>
                <li>
                    身につけたいこと
                    <ul>
                        <li>デザイン</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

const Policy = () =>{
    return (
        <div className="border rounded-3 p-3 my-2">
        <h3 className="border-bottom border-3">大切にしていること</h3>
        <ul>
            <li>考え方
                <ul>
                    <li>できっこないを やらなくちゃ</li>
                    <li>思い立ったら即行動</li>
                    <li>誰かに感謝していただける役に立つ仕事</li>
                </ul>
                
            </li>
        </ul>
    </div>
    )
}

const Comment = () => {
    return(
        <div className="border rounded-3 p-3 my-2">
        <h3 className="border-bottom border-3">一言で表すと...</h3>
        <p>
            人との関わりを大切にしています
        </p>
        <p>
            アイデアが出ればすぐコードを書いてみます
        </p>
        <p>
            プロトタイプでも動かせるものを創るのは大事
        </p>
    </div>
    )
}


export default function Profile() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6">
                        <Base/>
                        <WantTo/>
                        <Like/>
                </div>
                <div className="col-sm-12 col-md-6">
                <IwantTo/>
                <Policy/>
                <Comment/>
                </div>
            </div>
            </div>
    )
}