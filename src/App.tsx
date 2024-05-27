import './App.css'
import Controls from './components/Controls'
import EditorTabs from './components/Tabs/EditorTabs'
import { useAnimation } from './hooks/useAnimation'

function App() {
  const { html, css } = useAnimation()

  return (
    <div className='wrapper'>
      <div className="animate_editor_wapper">
        <div className='player_wrapper'></div>
        <Controls />
      </div>
      <EditorTabs 
        width="400px"
        height="100%"
        files={{
          "style.css": {
            language: "css",
            value: css
          },
          "index.html": {
            language: "html",
            value: html
          },
        }}
      />
    </div>
  )
}

export default App
