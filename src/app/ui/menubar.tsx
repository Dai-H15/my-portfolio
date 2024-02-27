import Link from 'next/link'
function MenuBar(){
    const Items: { [key: string]: string } = {
        "top":"トップページ",
        "profile":"プロフィール",
        "skills":"スキル",
        "works": "制作物",
        "github": "GitHub",
        "qiita": "Qiita",
        "wantedly": "Wantedly",
        "lapras": "Lapras",
    };
    const URLs: { [key: string]: string } = {
        "top":"/",
        "profile":"/profile",
        "skills":"/skils",
        "works": "/works",
        "github": "https://github.com/Dai-H15",
        "qiita": "https://qiita.com/Dai-H15",
        "wantedly": "https://www.wantedly.com/id/Dai_h15",
        "lapras":"https://lapras.com/public/Dai_H15",
    }
    let res: JSX.Element[] =[];
    for(const key in Items){
        res.push(<li key = {Items[key]}><Link className='link-underline link-underline-opacity-0' href = {URLs[key]}>{Items[key]}</Link></li>)}
    
    return(
        <ul className='list-unstyled p-3' >{res}</ul>
    )
}
export default MenuBar;