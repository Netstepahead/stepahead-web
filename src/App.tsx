// 1. הוסף למעלה:
import Academy from "./pages/Academy";

// ... (בתוך ה-App)

// 2. הוסף לרשימת ה-Routes:
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/platform" element={<Platform />} />
  <Route path="/solutions" element={<Solutions />} />
  <Route path="/academy" element={<Academy />} /> {/* <--- החדש */}
</Routes>