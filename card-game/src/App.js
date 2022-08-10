// ปรับเปลี่ยนไฟล์ App.js ให้ทำการ render คอมโพเนนต์ WordCard แทนที่จะ render คอมโพเนนต์ CharacterCard โดยตรง
import React from 'react';
import './App.css';
import WordCard from './WordCard';
const word = "Hello";
function App() {
    return (
        <div>
            <WordCard value="hello Gaben"/>
        </div>
    );
}
//* การใส่ Props ชื่อว่า Key จะช่วยในกระบวนการอ้างอิงของ React ในกรณีวนซ ้าเพื่อสร้างคอมโพเนนต
export default App;