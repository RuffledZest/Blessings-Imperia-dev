import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { motion } from 'framer-motion';
import { ChevronDown, Bed, Tv, CreditCard, Palette } from 'lucide-react';
import "react-datepicker/dist/react-datepicker.css";

export default function Home() {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guests, setGuests] = useState(1);
  const [rooms, setRooms] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const handleSearch = () => {
    if (!checkIn || !checkOut) return;
    
    const searchParams = new URLSearchParams({
      checkIn: checkIn.toISOString(),
      checkOut: checkOut.toISOString(),
      guests: guests.toString(),
      rooms: rooms.toString()
    });
    
    navigate(`/rooms?${searchParams.toString()}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1736963808405-f60d284c4277?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            filter: 'brightness(0.7)'
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Welcome to Blessings Imperia
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Experience luxury living at its finest
            </p>
          </div>

          <div className="mt-10 max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Check-in</label>
                <DatePicker
                  selected={checkIn}
                  onChange={setCheckIn}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  minDate={new Date()}
                  placeholderText="Select date"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Check-out</label>
                <DatePicker
                  selected={checkOut}
                  onChange={setCheckOut}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  minDate={checkIn || new Date()}
                  placeholderText="Select date"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Guests</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Rooms</label>
                <select
                  value={rooms}
                  onChange={(e) => setRooms(Number(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                >
                  {[1, 2, 3, 4].map(num => (
                    <option key={num} value={num}>{num} Room{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={handleSearch}
                className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
              >
                Search Rooms
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Luxury Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1736963204274-49ab4dda3836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Luxury Lounge" 
                className="w-full rounded-lg hover:shadow-xl hover:scale-95 transition-all duration-300"
              />
            </div>
            <div className="bg-black text-white p-12 rounded-lg">
              <h2 className="text-4xl font-bold mb-6">Redefines luxury with world-class accommodations</h2>
              <p className="mb-8">Spread across two elegant complexes, each thoughtfully designed to cater to your every need</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border border-white rounded-sm" />
                  <span>Exquisite Experiences</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border border-white rounded-sm" />
                  <span>Sustainable Luxury</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border border-white rounded-sm" />
                  <span>Unmatched Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border border-white rounded-sm" />
                  <span>Culinary Excellence</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border border-white rounded-sm" />
                  <span>Timeless Elegance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border border-white rounded-sm" />
                  <span>Exclusive Privacy</span>
                </div>
              </div>
              <button className="mt-8 bg-white text-black px-8 py-2 rounded">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Room Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Unique stay to comfort your needs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1736963809011-75689156bce0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

                title: "Family Suite",
                description: "Spacious family-friendly suite with two bedrooms and a living area, perfect for a family vacation.",
                price: "$300"
              },
              {
                image: "https://images.unsplash.com/photo-1736963204700-19acad57c0b6?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "Deluxe King Room",
                description: "Elegant room with a king-sized bed and city views, ideal for business travelers or couples.",
                price: "$220"
              },
              {
                image: "https://images.unsplash.com/photo-1736963204243-2d2e94657064?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

                title: "Executive Suite",
                description: "Premium suite designed for business professionals, offering a blend of luxury and functionality",
                price: "$400"
              }
            ].map((room, index) => (
              <div key={index} className="space-y-4">
                <img src={room.image || "/placeholder.svg"} alt={room.title} className="w-full h-64 object-cover rounded-lg" />
                <h3 className="text-2xl font-bold">{room.title}</h3>
                <p className="text-gray-600">{room.description}</p>
                <div className="flex gap-6 my-4">
                  <Bed size={24} />
                  <Tv size={24} />
                  <CreditCard size={24} />
                  <Palette size={24} />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-serif">{room.price}</span>
                  <button className="bg-black text-white px-6 py-2 rounded">
                    BOOK NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Read our real testimonial services</h2>
              <p className="text-gray-300">
                Our guests enjoy more than just a stay—they indulge in a true escape. Here's what our distinguished guests have to say
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex gap-6">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OltqgbLl9c2fgWHar74uD0c2mSkiXw.png" alt="Bruce Mitchell" className="w-24 h-24 rounded-full object-cover" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">"A truly luxurious experience."</h3>
                  <p className="text-gray-300 mb-4">
                    "Hoteluxe exceeded all my expectations. From the moment I walked in, the service was impeccable, and the ambiance was pure elegance. The room was spacious, with breathtaking views, and every detail screamed luxury, from the fine linens to the state-of-the-art amenities. The staff went above and beyond to ensure I felt pampered throughout my stay. It's hands down the best hotel experience I've ever had, and I look forward to returning."
                  </p>
                  <p className="font-bold">Bruce Mitchell</p>
                  <div className="flex text-yellow-500">★★★★★</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">Frequently asked questions</h2>
          <div className="space-y-4">
            {[
              "Are there activities for children at the resort?",
              "What dining options are available at the resort?",
              "Can I host a wedding or event at the resort?",
              "Are there activities and excursions available at the resort?",
              "Can I request early check-in or late check-out?"
            ].map((question, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  className="w-full flex justify-between items-center py-4 text-left text-lg font-medium"
                  onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                >
                  {question}
                  <ChevronDown 
                    className={`transform transition-transform ${activeQuestion === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {activeQuestion === index && (
                  <div className="mt-2 text-gray-600">
                    Sample answer for {question}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Blessings Imperia</h3>
              <p className="text-gray-400">Luxury living at its finest</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400">123 Luxury Lane</p>
              <p className="text-gray-400">Phone: (123) 456-7890</p>
              <p className="text-gray-400">Email: info@blessingsimperia.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

