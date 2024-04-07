const Skils: { [key: string]: {period:string, level: number} } = {
    "Python": {period: "~3年", level: 3},
    "Django": {period: "~3年", level: 3},
    "JavaScript": {period: "~3年", level: 3},
    "React": {period: "~2年", level:3},
    "Next.js": {period: "~1年", level:3},
    "HTML/CSS": {period: "~3年", level: 3},
    "SQL": {period: "~2年", level: 2},
    "C言語": {period: "~2年", level:2},
};
const levels: { [key: number]: string } = {
    1: "授業内で取り扱いあり",
    2: "課題の作成などで利用",
    3: "製作で利用",
};

const defaultExport = {Skils, levels};

export default defaultExport;