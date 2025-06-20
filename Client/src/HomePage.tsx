import Navbar from "@/components/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center flex-1 py-10">
        <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-4xl">
          {/* Graduation Image Placeholder */}
          <div className="w-64 h-64 bg-gray-800 rounded-full flex items-center justify-center mb-6 md:mb-0">
            <span className="text-4xl">🎓</span>
          </div>
          {/* Main Text & Actions */}
          <div className="flex-1 flex flex-col items-center md:items-start gap-6">
            <h1 className="text-2xl md:text-3xl font-bold text-center md:text-right leading-relaxed">
              اكتب تحت العبارات الجذابة بتاعك<br />
              لزوارك بشكل فوري<br />
              مع جامعة بلا بلا
            </h1>
            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
              <Button onClick={() => navigate("/login")}>log in</Button>
              <Button variant="outline" onClick={() => navigate("/signup")}>sign up</Button>
              <Button variant="secondary" onClick={() => navigate("/students")}>explore courses</Button>
            </div>
          </div>
        </div>
        {/* Subscription Plans Section */}
        <div className="mt-12 w-full max-w-2xl flex flex-col md:flex-row gap-6 items-center justify-center">
          <div className="bg-gray-900 rounded-xl p-6 flex-1 flex flex-col items-center">
            <span className="mb-2 font-semibold">log in tany</span>
            <Button variant="outline" className="w-full">start now</Button>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 flex-1 flex flex-col items-center">
            <span className="mb-2 font-semibold">el baqat</span>
            <Button variant="outline" className="w-full">subscription plans</Button>
          </div>
        </div>
      </div>
      {/* Footer/Watermark */}
      <footer className="w-full py-6 bg-gray-950 text-center text-xs opacity-70 mt-auto">
        watermark bt3tna | &copy; {new Date().getFullYear()} your team name
      </footer>
    </div>
  );
};

export default HomePage; 