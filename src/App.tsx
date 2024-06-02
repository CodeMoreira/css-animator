import './App.css'
import Controls from './components/Controls'
import EditorTabs from './components/Tabs/EditorTabs'
import { useAnimation } from './hooks/useAnimation'
import Tabs from './components/Tabs/index';
import AnimateOptions from './components/Options/AnimateOptions';
import SupportOptions from './components/Options/SupportOptions';
import AddNewAttributeModal from './components/AddNewAttributeModal';
import ConfigsOptions from './components/Options/ConfigsOptions';

function App() {
  const { html, css } = useAnimation()

  return (
    <div className='wrapper'>
      <div className="animate_editor_wapper">
        <div className='player_wrapper'>
          <div className='element'></div>
        </div>
        <Controls />
        <Tabs
          height="300px"
          placement='bottom'
          tabs={{
            Animate: <AnimateOptions />,
            Configs: <ConfigsOptions />,
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
