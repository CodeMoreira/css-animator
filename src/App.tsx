import './App.css'
import Controls from './components/Controls'
import EditorTabs from './components/Tabs/EditorTabs'
import { useAnimation } from './hooks/useAnimation'
import Tabs from './components/Tabs/index';
import AnimateOptions from './components/Options/AnimateOptions';
import SupportOptions from './components/Options/Support';
import AddNewAttributeModal from './components/AddNewAttributeModal';

function App() {
  const { html, css } = useAnimation()

  return (
    <div className='wrapper'>
      <div className="animate_editor_wapper">
        <div className='player_wrapper'></div>
        <Controls />
        <Tabs
          height="300px"
          placement='bottom'
          tabs={{
            Animate: <AnimateOptions />,
            "Support me": <SupportOptions />,
          }}
        />
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
      <AddNewAttributeModal />
    </div>
  )
}

export default App
