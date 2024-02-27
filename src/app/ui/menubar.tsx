import Link from 'next/link'
function MenuBar(){
    const Items: { [key: string]: string } = {
        "top":"トップページ",
        "profile":"プロフィール",
        "skills":"スキル",
        "github": "GitHub",
        "qiita": "Qiita",
    };
    const URLs: { [key: string]: string } = {
        "top":"/",
        "profile":"/profile",
        "skills":"/skils",
        "github": "https://github.com/Dai-H15",
        "qiita": "https://qiita.com/Dai-H15",
    }
    let res=[];
    for(const key in Items){
        res.push(<li key = {Items[key]}><Link href = {URLs[key]}>{Items[key]}</Link></li>)}
    
    return(
        <ul className='list-unstyled p-3' >{res}
        </ul>
    )
}
export default MenuBar;