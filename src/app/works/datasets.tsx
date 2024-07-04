import { List } from "postcss/lib/list";

const Title: {[key:string]: string} = {
    "001":"Wi-Fi_Switcher",
    "002":"gpt_x-_deepl_Chatapp",
    "003":"ranking_app",
    "004":"【チーム演習】ポータルサイト",
    "005":"【非公開】js-animation",
    "006":" CRAIMAS  [旧 Biz Intelli Scan]",
};

const Images: {[key:string]: [string,number,number]}  = {
    "001":["/my-portfolio/WiFi.png",367*0.5,215*0.5],
    "002":["/my-portfolio/GPT-X.gif",989*0.2,590*0.2],
    "003":["/my-portfolio/ranking.png",1094*0.2,941*0.2],
    "004":["/my-portfolio/C_user.png",1255*.15,748*.15],
    "005":["/my-portfolio/ux-js-anime.gif",940*.2,771*.2],
    "006":["/my-portfolio/BizIntelliScan.gif",1913*.17,940*.17],
};

const Desc: {[key:string]: string[]} = {
    "001": ["大学内のWi-Fiに問題があった際や特定のリソースにアクセスするとなった際に、", "設定を開いたりせず、お金をかけずにワンクリックで接続先を変えられるようにしたかったのでつくったツール"],
    "002": ["大学で積極的な活用を促されているGPTを用いた簡単に記憶の半永久保存を可能にしたプログラム"," 大学で提供されているアプリでは、1セッションが数分で終了してしまうので、jsonファイルで会話内容を出力することで続きから会話を継続できるようにしました。"," また、APIでは使用できるトークン数に限りがあるため、DeepLのAPIで同時に自動翻訳させることで、会話できる量を増やせるようになっています。"],
    "003": ["360°評価を行う際に問題となった、", "「意図せず投票者(誰が何位に投票したか)を表示したまま共有してしまった」「点数計算がめんどくさい」", "といった問題を解決しようとして作ったアプリです。採用されることなく没になったお蔵入りアプリです。", "※写真だと名前出てますが、設定で非表示にできるようにしてあります"],
    "004": ["授業内制作（チーム演習）における担当箇所の画像。1つのDjangoアカウントから複数プロファイルの使い分けを可能にし、", "グループ作成や個人同士でのチャットのやり取りなどを行う事ができるよう認証の基盤を設計・実装。", "加えて、同授業制作におけるチャットアプリにおいてグループチャットと個人チャットのルーム機能の構想・実装を担当。", "載せられないけれど、とてもとても頑張ったプロジェクトでした。", "追記(2024/05/07): チームと教授の許可が降りたので、公開できるようになりました"],
    "005": ["詳細は省きますが、半分遊んでます。", "追記: 最初はGitHubにて公開していましたが、一度授業課題として扱われたものなので非公開に変更します。", "使用例くらいは公開しても問題ないと思うのでそのままにしておきます"],
    "006": ["大学から頂いた 'PDFの企業研究シート' を用いる際に、管理での不便や情報の利活用が行いづらい点を解消したいと思い作ったアプリケーション", "APIからの情報の取得に加え、JSON形式での出力によるバックアップ、面談録の管理など、就活に関して網羅できるようにしたいと", "思って作成しました。今後も継続して開発し、もしかしたら学生向けに提供するかも...?と考えています。真心を込めて開発中です", "更新(2024/05/14): ChatGPTにつけてもらった名前から変更しました。", "最新バージョンでは変更済みですが、上の画像は Biz Intelli Scan となっています。", "現在、U22プロコンの応募に向けて開発環境をお借りし、無償で利用者を募っているところです", "https://craimas.com"],
};

const URLs: {[key:string]: string}= {
    "001":"https://github.com/Dai-H15/Wi-Fi_Switcher",
    "002": "https://github.com/Dai-H15/gpt_x-_deepl_Chatapp",
    "003": "https://github.com/Dai-H15/ranking_app",
    "004":"https://github.com/Dai-H15/CS-ensyu-4-082",
    "005":"about:blank",
    "006": "https://github.com/Dai-H15/CRAIMAS",
}

const Stacks: {[key: string]: { front: string[], back: string[], other: string[] }} = {
    "001":{
        "front":["tkinter"],
        "back":["python"],
        "other":["pyinstaller"]
    },
    "002":{
        "front":["(CLIのため特に無し)"],
        "back":["Python"],
        "other":["DeepLAPI", "OpenAI API"]
    },
    "003":{
        "front":["HTML"],
        "back":["Django", "Python"],
        "other":["(デプロイなし)"]
    },
    "004":{
        "front":["HTML", "Bootstrap", "CSS", "JS"],
        "back":["Django", "Python"],
        "other":["(デプロイなし)"]
    },
    "005":{
        "front":["HTML", "JS", "JQuery", "CSS"],
        "back":["無し"],
        "other":["無し"]
    },
    "006":
    {
        "front": ["Bootstrap", "HTML", "JS", "Webpack", "CSS"],
        "back": ["Django", "nginx",  "Docker"],
        "other": ["LetsEncript", "さくらのクラウド", "gBizINFO"]
    }
}

const defaultExport = {Title,Images,Desc,URLs, Stacks};

export default defaultExport;
