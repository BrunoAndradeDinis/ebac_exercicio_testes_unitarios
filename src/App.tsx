import Post from "./components/Post";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://cdn.awsli.com.br/2571/2571273/produto/223761759/001-p5tgvo1bzs.jpg">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
