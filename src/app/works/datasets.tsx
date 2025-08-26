// プロジェクトデータを管理するための型定義
interface ProjectData {
    id: string;
    title: string;
    image: {type:"gif" | "video", data:[string, number, number];}
    description: string[];
    url: string;
    stack: {
        front: string[];
        back: string[];
        other: string[];
    };
}

// データセット管理クラス
class DataSet {
    private projects: Map<string, ProjectData> = new Map();

    constructor() {
        // initializeData()の呼び出しを削除
    }

    // プロジェクトの追加
    addProject(projectData: ProjectData): void {
        this.projects.set(projectData.id, projectData);
    }

    // プロジェクトの取得
    getProject(id: string): ProjectData | undefined {
        return this.projects.get(id);
    }

    // すべてのプロジェクトの取得
    getAllProjects(): ProjectData[] {
        return Array.from(this.projects.values());
    }

    // プロジェクトIDの一覧を取得
    getProjectIds(): string[] {
        return Array.from(this.projects.keys());
    }

    // プロジェクトの削除
    removeProject(id: string): boolean {
        return this.projects.delete(id);
    }

    // タイトルでプロジェクトを検索
    searchByTitle(query: string): ProjectData[] {
        return this.getAllProjects().filter(project =>
            project.title.toLowerCase().includes(query.toLowerCase())
        );
    }

    // 技術スタックでプロジェクトを検索
    searchByStack(technology: string): ProjectData[] {
        return this.getAllProjects().filter(project => {
            const allStacks = [
                ...project.stack.front,
                ...project.stack.back,
                ...project.stack.other
            ];
            return allStacks.some(stack =>
                stack.toLowerCase().includes(technology.toLowerCase())
            );
        });
    }

    // プロジェクトの数を取得
    getProjectCount(): number {
        return this.projects.size;
    }

    // 従来のフォーマットでタイトルを取得（下位互換性のため）
    getTitles(): {[key: string]: string} {
        const titles: {[key: string]: string} = {};
        this.projects.forEach((project, id) => {
            titles[id] = project.title;
        });
        return titles;
    }

    // 従来のフォーマットで画像データを取得（下位互換性のため）
    getImages(): {[key: string]: {type:"gif" | "video", data:[string, number, number]}} {
        const images: {[key: string]: {type:"gif" | "video", data:[string, number, number]}} = {};
        this.projects.forEach((project, id) => {
            images[id] = project.image;
        });
        return images;
    }

    // 従来のフォーマットで説明を取得（下位互換性のため）
    getDescriptions(): {[key: string]: string[]} {
        const descriptions: {[key: string]: string[]} = {};
        this.projects.forEach((project, id) => {
            descriptions[id] = project.description;
        });
        return descriptions;
    }

    // 従来のフォーマットでURLを取得（下位互換性のため）
    getUrls(): {[key: string]: string} {
        const urls: {[key: string]: string} = {};
        this.projects.forEach((project, id) => {
            urls[id] = project.url;
        });
        return urls;
    }

    // 従来のフォーマットで技術スタックを取得（下位互換性のため）
    getStacks(): {[key: string]: { front: string[], back: string[], other: string[] }} {
        const stacks: {[key: string]: { front: string[], back: string[], other: string[] }} = {};
        this.projects.forEach((project, id) => {
            stacks[id] = project.stack;
        });
        return stacks;
    }
}


// DataSetのインスタンスを作成
const dataSet = new DataSet();

// プロジェクト001から008まで一つずつ追加
dataSet.addProject({
    id: '001',
    title: 'Wi-Fi_Switcher',
    image: {type:"gif",data:['/my-portfolio/WiFi.png', 367*0.5, 215*0.5]},
    description: ['大学内のWi-Fiに問題があった際や特定のリソースにアクセスするとなった際に、', '設定を開いたりせず、お金をかけずにワンクリックで接続先を変えられるようにしたかったのでつくったツール'],
    url: 'https://github.com/Dai-H15/Wi-Fi_Switcher',
    stack: { front: ['tkinter'], back: ['python'], other: ['pyinstaller'] }
});

dataSet.addProject({
    id: '002',
    title: 'gpt_x-_deepl_Chatapp',
    image: {type:"gif",data:['/my-portfolio/GPT-X.gif', 989*0.2, 590*0.2]},
    description: ['大学で積極的な活用を促されているGPTを用いた簡単に記憶の半永久保存を可能にしたプログラム', ' 大学で提供されているアプリでは、1セッションが数分で終了してしまうので、jsonファイルで会話内容を出力することで続きから会話を継続できるようにしました。', ' また、APIでは使用できるトークン数に限りがあるため、DeepLのAPIで同時に自動翻訳させることで、会話できる量を増やせるようになっています。'],
    url: 'https://github.com/Dai-H15/gpt_x-_deepl_Chatapp',
    stack: { front: ['(CLIのため特に無し)'], back: ['Python'], other: ['DeepLAPI', 'OpenAI API'] }
});

dataSet.addProject({
    id: '003',
    title: 'ranking_app',
    image: {type:"gif",data:['/my-portfolio/ranking.png', 1094*0.2, 941*0.2]},
    description: ['360°評価を行う際に問題となった、', '「意図せず投票者(誰が何位に投票したか)を表示したまま共有してしまった」「点数計算がめんどくさい」', 'といった問題を解決しようとして作ったアプリです。採用されることなく没になったお蔵入りアプリです。', '※写真だと名前出てますが、設定で非表示にできるようにしてあります'],
    url: 'https://github.com/Dai-H15/ranking_app',
    stack: { front: ['HTML'], back: ['Django', 'Python'], other: ['(デプロイなし)'] }
});

dataSet.addProject({
    id: '004',
    title: '【チーム演習】ポータルサイト',
image: {type:"gif",data:['/my-portfolio/C_user.png', 1255*.15, 748*.15]},
    description: ['授業内制作（チーム演習）における担当箇所の画像。1つのDjangoアカウントから複数プロファイルの使い分けを可能にし、', 'グループ作成や個人同士でのチャットのやり取りなどを行う事ができるよう認証の基盤を設計・実装。', '加えて、同授業制作におけるチャットアプリにおいてグループチャットと個人チャットのルーム機能の構想・実装を担当。', '載せられないけれど、とてもとても頑張ったプロジェクトでした。', '追記(2024/05/07): チームと教授の許可が降りたので、公開できるようになりました'],
    url: 'https://github.com/Dai-H15/CS-ensyu-4-082',
    stack: { front: ['HTML', 'Bootstrap', 'CSS', 'JS'], back: ['Django', 'Python'], other: ['(デプロイなし)'] }
});

dataSet.addProject({
    id: '005',
    title: '【非公開】js-animation',
    image: {type:"gif",data:['/my-portfolio/ux-js-anime.gif', 940*.2, 771*.2]},
    description: ['詳細は省きますが、半分遊んでます。', '追記: 最初はGitHubにて公開していましたが、一度授業課題として扱われたものなので非公開に変更します。', '使用例くらいは公開しても問題ないと思うのでそのままにしておきます'],
    url: 'about:blank',
    stack: { front: ['HTML', 'JS', 'JQuery', 'CSS'], back: ['無し'], other: ['無し'] }
});

dataSet.addProject({
    id: '006',
    title: ' CRAIMAS',
    image: {type:"gif",data:['/my-portfolio/craimas.png', 1900*.2, 1002*.2]},
    description: ['自分の中で最大の個人制作', '大学から頂いた \'PDFの企業研究シート\' を用いる際に、管理での不便や情報の利活用が行いづらい点を解消したいと思い作ったアプリケーション', '複数の<ムダ>を削り、<妥協>をすることないプロダクト制作', '企業研究シートのデジタル化から、面談録、名刺情報の登録、企業ごとの比較機能などを盛り込み、現在もアップデート中', 'こちらのURLで公開中→ <a href =\'https://craimas.com\' target=\'_blank\' rel=\'noopener noreferrer\'> https://craimas.com</a>', 'プロダクトのさらなる情報や背景はこちらから→  <a href =\'https://protopedia.net/prototype/5388\' target=\'_blank\' rel=\'noopener noreferrer\'>https://protopedia.net/prototype/5388</a>'],
    url: 'https://github.com/Dai-H15/CRAIMAS',
    stack: { front: ['Bootstrap', 'HTML', 'JS', 'Webpack', 'CSS'], back: ['Python(Django)', 'nginx', 'Docker'], other: ['ZeroSSL', 'ConohaVPS', 'gBizINFO API', 'お名前ドットコム'] }
});

dataSet.addProject({
    id: '007',
    title: 'instanceSlackBot',
    image: {type:"gif",data:['/my-portfolio/instanceSlackBot.gif', 1912*.2, 1026*.2]},
    description: ['SlackBotの操作を統一して大学のチーム実習のメンバー全員が使いやすいように整えたライブラリ。', '学内でもっと使用していただくために、PyPlに登録して使用までも簡単にできるようにしました。', 'ポイントは、Botの操作をインスタンスを通すことで、チャンネルがごっちゃにならないことなどはわかりやすいかもです'],
    url: 'https://github.com/Dai-H15/InstanceSlackBot',
    stack: { front: ['なし'], back: ['Python'], other: ['Slack_sdk', 'datetime'] }
});

dataSet.addProject({
    id: '008',
    title: 'おまかせTodoリスト',
    image: {type:"gif",data:['/my-portfolio/omakaseTodo.gif', 1916*.2, 938*.2]},
    description: ['やりたいことは決まっているけど、できるようになるまでの道筋がわからない', 'そんな悩みをAIが解決してくれるアプリ', '目標達成の道筋から、その具体的な内容まで情報提供し、サポートしてくれます', '次世代のTodoリストです'],
    url: 'https://github.com/Dai-H15/omakasetodo',
    stack: { front: ['Bootstrap', 'HTML', 'JS'], back: ['Python(Django)'], other: ['OpenAI API', 'Google Custom Search'] }
});

/* 動画準備中
dataSet.addProject({
    id: '009',
    title: 'AIエージェント体験サイト',
    image: {type:"video",data:['/my-portfolio/container_builder.mp4', 400, 300]},
    description: ['航空券の予約サイトに模したAIエージェントの体験サイトです', "架空の航空券や宿泊施設の予約を、エージェントと相談しながら行うことができます", "また、比較としてAIアシスタントやBotも作成しており、エージェントになると便利が増えるよね。を気軽に体験してもらえます"],
    url: 'https://github.com/Dai-H15/bookiniad.com',
    stack: { front: ['HTML' ,"CSS", "JS"], back: ['Django', "SQLite"], other: ['Docker', "OpenAI API"] }
});
*/


dataSet.addProject({
    id: '010',
    title: 'Container Builder',
    image: {type:"video",data:['/my-portfolio/container_builder.mp4', 400, 300]},
    description: ['Dockerfileと必要なファイルを圧縮して投げると、展開後に自動でビルドしてポート解放を行い、', "該当のポートにブラウザからアクセスできるシステム", "手元に使っていないConohaの環境が余っていたため、nginxやポートの細かい設定不要で簡単に制作物をお試し公開できるシステムが欲しかったため作成しました", ".zipを投げるだけで簡単デプロイ!が売りです。既存のサービスより安く済ませられます。"],
    url: 'https://github.com/Dai-H15/container_builder',
    stack: { front: ['Next.js', "HTML", "CSS", "JS"], back: ['FastAPI', "PostgreSQL", "nginx"], other: ['Docker', "Cloudflare", "Conoha"] }
});


// 従来の形式でのエクスポート（下位互換性のため）
const Title = dataSet.getTitles();
const Images = dataSet.getImages();
const Desc = dataSet.getDescriptions();
const URLs = dataSet.getUrls();
const Stacks = dataSet.getStacks();

// 従来のエクスポート形式を維持
const works = {DataSet, dataSet};

export default works;
