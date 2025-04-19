export default function Header() {
    return (
      <header className="bg-[#F3F8F7] border-b border-[#E1EFE9] shadow-sm w-full">
        <div className="w-full flex justify-between items-center px-6 py-4">
          <div className="flex items-baseline gap-3">
            <h1 className="text-2xl font-semibold text-[#1D2B2A] tracking-tight">
              Pulse
            </h1>
            <span className="text-sm text-[#2F6E63] mt-[2px]">
              Gentle habit guidance
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            {/* Future right-side content (nav, auth, etc.) */}
          </div>
        </div>
      </header>
    );
  }
  
  
  