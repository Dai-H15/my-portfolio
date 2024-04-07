import Datasets from "./datasets";
import React from "react";

export default function Skils(){
    let tables = "";
    for (let index = 0; index < Object.keys(Datasets.Skils).length; index++) {
        tables += `<tr>
        <td>${Object.keys(Datasets.Skils)[index]}</td>
        <td>${Object.values(Datasets.Skils)[index].period}</td>
        <td>${Datasets.levels[Object.values(Datasets.Skils)[index].level]}</td>
        </tr>`
    };

return(
<div className="row">
    <div className = "col">
    <h4>スキル・経験一覧</h4>
    <table className = "table caption-top border rounded">
    <caption>経験言語/フレームワーク</caption>
        <thead>
            <tr>
                <th>言語/フレームワーク</th>
                <th>経験期間</th>
                <th>詳細</th>
            </tr>
        </thead>
        <tbody dangerouslySetInnerHTML={{ __html: tables }} />
    </table>
    </div>
</div>
)
}