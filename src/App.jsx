// App.jsx

import './styles/index.css';  // 共通CSS（最初にインポート）
import './styles/Timer.css';  // レイヤー別分割：stylesフォルダからCSSをインポート
import Timer from './components/Timer';  // レイヤー別分割：componentsフォルダからインポート

function App() {
    return (
        <div className="container">
            <h1 className="text-center">React タイマーアプリ</h1>
            <Timer />
        </div>
    );
}

export default App;