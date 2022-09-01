import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from './Home';
import ResumePageComponent from './ResumePage';
import LibraryComponent from './Library';

const AppRouter = () => {
    return (
        <BrowserRouter> 

            <Routes>
                <Route path="/" element={
                    <HomeComponent/>
                } />
                <Route path="/home" element={
                    <HomeComponent/>
                } />
                <Route path="/resume" element={
                    <ResumePageComponent/>
                } />
                <Route path="/my-library" element={
                    <LibraryComponent/>
                } />
                    
            </Routes>
        
        </BrowserRouter>
    );
};

export default AppRouter;