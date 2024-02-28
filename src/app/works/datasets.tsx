const Title: {[key:string]: string} = {
    "001":"Wi-Fi_Switcher",
    "002":"gpt_x-_deepl_Chatapp",
    "003":"ranking_app",
    "004":"【非公開】カスタムユーザー",
    "005":"ux-js-animation",
};

const Images: {[key:string]: [string,number,number]}  = {
    "001":["/my-portfolio/WiFi.png",367*0.5,215*0.5],
    "002":["/my-portfolio/GPT-X.gif",989*0.3,590*0.3],
    "003":["/my-portfolio/ranking.png",1094*0.2,941*0.2],
    "004":["/my-portfolio/C_user.png",1255*.2,748*.2],
    "005":["/my-portfolio/ux-js-anime.gif",940*.2,771*.2]
};

const Desc: {[key:string]: string} = {
    "001": "大学内のWi-Fiに問題があった際や特定のリソースにアクセスするとなった際に、設定を開いたりせず、お金をかけずに接続先を変えられるようにしたかったのでつくったツール",
    "002": "大学で積極的な活用を促されているGPTを用いた簡単に記憶の半永久保存を可能にしたPythonコードです。 大学で提供されているアプリでは、1セッションが数分で終了してしまうので、jsonファイルで会話内容を出力することで続きから会話を継続できるようにしました。 また、APIでは使用できるトークン数に限りがあるため、DeepLのAPIで同時に自動翻訳させることで、会話できる量を増やせるようになっています。",
    "003": "360°評価を行う際に問題となった、「意図せず投票者(誰が何位に投票したか)を表示したまま共有してしまった」「点数計算がめんどくさい」といった問題を解決しようとして作ったアプリです。便利だと思うんだけどなぁ。特に上に挙げられることもなく没になったお蔵入りアプリです。",
    "004":"授業内制作における担当箇所。1つのDjangoアカウントから複数プロファイルの使い分けを可能にし、グループ作成や個人同士でのチャットのやり取りなどを行う事ができるよう認証の基盤を設計・実装。加えて、同授業制作におけるチャットアプリにおいてグループチャットと個人チャットのルーム機能の構想・実装を担当。載せられないけど頑張ったので褒めてほしい",
    "005": "詳細は省きますが、半分遊んでます"
};

const URLs: {[key:string]: string}= {
    "001":"https://github.com/Dai-H15/Wi-Fi_Switcher",
    "002": "https://github.com/Dai-H15/gpt_x-_deepl_Chatapp",
    "003": "https://github.com/Dai-H15/ranking_app",
    "004":"about:blank",
    "005":"https://github.com/Dai-H15/ux-js-animation",
}


const defaultExport = {Title,Images,Desc,URLs};

export default defaultExport;
