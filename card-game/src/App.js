// ไฟล์ App.js
import React from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
const word = "Hello";
function App() {
 return (
 <div className = {`card`}>
 {
 Array.from(word).map((c, i) => <CharacterCard value={c} key={i}/>)
 }
 </div>
 );
}
//* การใส่ Props ชื่อว่า Key จะช่วยในกระบวนการอ้างอิงของ React ในกรณีวนซ ้าเพื่อสร้างคอมโพเนนต
export default App;