import Image from "next/image";

export default function Home() {
  return (
    <div className="Home">
      <div className = "row p-3 m-3 rounded-3"  style={{backgroundColor: "#f5f5f5"}}>
      <h4 className="border-bottom border-3 p-2" style={{ color: "#333", fontSize: "24px" }}>説明</h4>
      <p style={{ color: "#666", fontSize: "18px", lineHeight: "1.6" }}>トップページ: このページに戻ります</p>
      <p style={{ color: "#666", fontSize: "18px", lineHeight: "1.6" }}>プロフィール: 基本情報が載せてあります</p>
      <p style={{ color: "#666", fontSize: "18px", lineHeight: "1.6" }}>スキル: 今まで扱ってきた言語やフレームワーク、その詳細などが載っています</p>
      <p style={{ color: "#666", fontSize: "18px", lineHeight: "1.6" }}>制作物: 今まで制作したサイトやコードに関する内容が載せてあります</p>
      <p style={{ color: "#666", fontSize: "18px", lineHeight: "1.6" }}>外部リンク: WantedlyやGitHubなど、その他登録している自身に関係するサイトのリンクがあります</p>

      </div>
      <p>このサイトは、Next.jsで開発し、GitHubPagesにデプロイしています</p>

    </div>
  );
}
