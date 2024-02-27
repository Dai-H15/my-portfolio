import Image from "next/image"

export default function Profile() {
    return(
        <div className="main">
            <Image src = {"my-portfolio/1.jpg"} width={30} height={20} alt="プロフィール画像"/>
        </div>
    )
}