
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<LoginSignup/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/home/compilerLab" element={<CompilerLab/>}/>
      <Route path="/home/softwareLab" element={<SoftwareLab/>}/>
      <Route path="/home/programmingLab" element={<ProgrammingLab/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
