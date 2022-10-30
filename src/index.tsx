import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hello from './components/hello'
import Name from './components/Name'
import Message from './components/Message'
import ContainerSample from './components/ContainerSample'
import ContextSample from './components/ContextSample'
import UseStateSample from './components/UseStateSample'
import UseCallback from './components/UseCallBack'
import UseResucer from "./components/UseResucer"
import {UseMemoSample} from './components/UseMemo'
import {Clock} from "./components/UseEffect"
import {Parent} from "./components/UseContext"
import {Input} from "./components/CustomHook"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Hello />
    <Name />
    <Message />
    <ContainerSample />
    <ContextSample />
    <UseStateSample initialValue={1} />
    <UseResucer initialValue={2} />
    <UseCallback />
    <UseMemoSample />
    <Clock />
    <Parent />
    <Input />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
