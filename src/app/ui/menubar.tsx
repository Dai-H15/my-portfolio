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
        res.push(<li className="nav-item" key = {Items[key]}><Link className='nav-link' href = {URLs[key]}>{Items[key]}</Link></li>)}

    return(
        <div>
        <nav className="navbar navbar-expand-md bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">MyPortfolio</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {res}
      </ul>
    </div>
  </div>
</nav>
        </div>

    )
}
export default MenuBar;