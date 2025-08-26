import Image from "next/image";
import Link from "next/link";
import works from "./datasets";

function Works(){
    const Title = works.dataSet.getTitles();
    const Images = works.dataSet.getImages();
    let w: JSX.Element[] = [];
    for(const key in Title){
        w.push(
            <a href= {`./works/${key}`} key={key} className="col col-md-5 p-3 m-3 border rounded-3 text-center">
        <h4 >{Title[key]}</h4>
        {Images[key].type === "video" ? (<video 
                        src={Images[key].data[0]} 
                        width={Images[key].data[1]} 
                        height={Images[key].data[2]}
                        controls
                        autoPlay
                        muted
                        loop
                    />):(<Image className="border" src={Images[key].data[0]} alt={Images[key].data[0]} width={Images[key].data[1]} height={Images[key].data[2]}/>) }
        
        </a>
        );
    }

    return(
        <div className="container-fluid">
            <div className="row">{w}</div>
        </div>
    )
}

export default Works;