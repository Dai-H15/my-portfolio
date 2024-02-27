import Image from "next/image";
import Link from "next/link";
import Datasets from "./datasets";

function Works(){
    const Title = Datasets.Title;
    const Images = Datasets.Images;
    let works: JSX.Element[] = [];
    for(const key in Title){
        works.push(
            <a href= {`./works/${key}`} key={key} className="col col-md-5 p-3 m-3 border rounded-3 text-center">
        <h4 >{Title[key]}</h4>
        <Image className="border" src={Images[key][0]} alt={Images[key][0]} width={Images[key][1]} height={Images[key][2]}/>
        </a>
        );
    }

    return(
        <div className="container-fluid">
            <div className="row">{works}</div>
            
            
        </div>
    )
}

export default Works;