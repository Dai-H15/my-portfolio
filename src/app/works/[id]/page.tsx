import Datasets from "../datasets";
import Image from "next/image";
import Link from "next/link";

function Show({ params }: { params: { id: string } }) {
    const Title = Datasets.Title;
    const Images = Datasets.Images;
    const Desc = Datasets.Desc;
    const URLs = Datasets.URLs;
    const id = params.id
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
                <p>{Desc[id]}</p>
                <h3><Link href={URLs[id]}>GitHubはこちら</Link></h3>
                </div>
            
            
        </div>
        <Link href="./">制作物一覧へ</Link>
    </div>)
}


export default Show;