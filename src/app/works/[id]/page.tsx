import Datasets from "../datasets";
import Image from "next/image";
import Link from "next/link";

export function generateStaticParams() {
    const Titles = Datasets.Title;
    let ids :{ id: string }[]= []
    for(const key in Titles){
        ids.push({id: key})
    }
    return ids
  }

function Show({ params }: { params: { id: string } }) {

    const Title = Datasets.Title;
    const Images = Datasets.Images;
    const Desc = Datasets.Desc;
    const URLs = Datasets.URLs;
    const id = params.id
    const Stack = Datasets.Stacks;
    return (
    <div className="container-fluid">
        <h3>{Title[id]}</h3>
        <div className="d-flex justify-content-center align-items-center">
            <div className="">
                <Image src={Images[id][0]} alt={Images[id][0]} width={Images[id][1]*2} height={Images[id][2]*2}/>
            </div>
        </div>
        <div className="row">

            <div className=" text-center p-5 ">
                <h3 className="text-start border-bottom border-2">説明</h3>
                <div style={{ whiteSpace: 'pre-line' }}>
                    {Desc[id].map((desc, index) => 
                         <p key={index}>{desc}</p>
                    )
                    }
                    </div>
                    <div className="row">
                <div className="my-3 p-2">
                    <h3 className="text-start border-bottom border-2">使用している技術・言語・フレームワーク</h3>
                    <div className="table-responsive">
                        
                        <table className="table table-primary">
                            <thead>
                                <tr>
                                    <th scope="col">フロントエンド</th>
                                    <th scope="col">バックエンド</th>
                                    <th scope="col">その他</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                <tr className="">
                                    <td scope="row">{Stack[id].front.map((item, index) => (<p key={index}>{item}</p>))}</td>
                                    <td>{Stack[id].back.map((item, index) => (<p key={index}>{item}</p>))}</td>
                                    <td>{Stack[id].other.map((item, index) => (<p key={index}>{item}</p>))}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
                <h3><Link href={URLs[id]}>GitHubはこちら</Link></h3>
                </div>
        </div>
        <Link href="./">制作物一覧へ</Link>
    </div>)
}


export default Show;