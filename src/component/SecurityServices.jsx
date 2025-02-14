export default function SecurityServices() {
    return (
      <div className="bg-white text-blue-900 py-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center hover:scale-105 cursor-pointer">Our Security Services.</h2>
        <div className="w-40 h-1 mt-4 bg-blue-900 mx-auto mb-6"></div>
  
        <div className="flex flex-col sm:flex-row justify-center gap-10 max-w-lg mx-auto text-lg">
          <div className="text-center sm:text-right font-semibold">
            <p className="hover:scale-105 cursor-pointer whitespace-nowrap">Security Guards</p>
            <p className="hover:scale-105 cursor-pointer whitespace-nowrap">Crowd Control and Events</p>
            <p className="hover:scale-105 cursor-pointer">Mobile Patrols</p>
          </div>
          <div className="text-center sm:text-left font-semibold">
            <p className="hover:scale-105 cursor-pointer">Construction, Infrastructure, and Building Environment Security</p>
            <p className="hover:scale-105 cursor-pointer sm:whitespace-nowrap">Retail Security and Loss Prevention Security Services</p>

          </div>
        </div>
      </div>
    );
  }
  