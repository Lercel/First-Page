import './App.css';

const srcList = [
  'OHR.MilopotamosStairs_EN-US9131506093_UHD.jpg',
  'OHR.HanaHighway_EN-US0637770298_UHD.jpg',
  'OHR.KirkjufellAurora_EN-US0249270913_UHD.jpg',
  'OHR.LjubljanaLights_EN-US9215683814_UHD.jpg',
  'OHR.WarsawChristmas_EN-US8819312496_UHD.jpg',
  'OHR.SantaPark_EN-US8274997583_UHD.jpg',
];
const ranNum = Math.floor(Math.random() * srcList.length);

function App() {
  console.log(ranNum);
  return (
    <img
      style={{ width: '100%' }}
      src={`https://cn.bing.com/th?id=${srcList[ranNum]}`}
    ></img>
  );
}

export default App;
