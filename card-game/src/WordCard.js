import React from 'react';
import CharacterCard from './CharacterCard';

// หาก WordCard ต้องการทราบถึงเหตุการณ์ที่ CharacterCard ถูก Activated ในกรณีทั่วไปทั้งสองคอมโพเนนต์สามารถ
// สื่อสารกันได้ โดยให้ WordCard ส่ง Handler (function ที่จัดการกับเหตุการณ์) ไปเป็น props ให้กับ CharacterCard
// แก้ไขไฟล์ WordCard.js จ านวนสองจุด คือการนิยามเมธอดในฟังก์ชัน WordCard และการส่งผ่าน handler ไปเป็น props
export default function WordCard(props) {
    const activationHandler = c => { console.log(`${c} has been activated.`) }
    return (
        <div>
            {Array.from(props.value).map((c, i) => <CharacterCard value={c} key={i} activationHandler={activationHandler}/>)}
        </div>
    );
}