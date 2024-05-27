import { Editor } from '@monaco-editor/react'

import { loader } from "@monaco-editor/react";

import * as monaco from 'monaco-editor';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'json') {
      return new jsonWorker();
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new cssWorker();
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new htmlWorker();
    }
    if (label === 'typescript' || label === 'javascript') {
      return new tsWorker();
    }
    return new editorWorker();
  },
};

loader.config({ monaco });

interface IDefaultEditorProps {
    language: string
    value: string | undefined
}

export default function DefaultEditor({ language, value }: IDefaultEditorProps) {
    return (
        <Editor
          options={{
            readOnly: true,
            domReadOnly: true
          }}
          width="100%"
          height="100%"
          theme='vs-dark'
          defaultLanguage={language}
          value={value}
        />
    )
}