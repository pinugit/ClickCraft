// This is the main page of our app. It's a flexible layout that has three main
// sections: sidebar, editing area, and designbar. The layout is defined with CSS
// flexbox, and the widths of each section are set to 1/3 of the total width of
// the page.
export default function Home() {
  return (
    <div className="flex h-full w-screen">
      <div className="w-1/3">
        {/* Sidebar section */}
        sidebar
      </div>
      <div className="w-1/3">
        {/* Editing area section */}
        Editing Area
      </div>
      <div className="w-1/3">
        {/* Designbar section */}
        designbar
      </div>
    </div>
  );
}
