
import { Star } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Denis Castro",
    initials: "DS",
    rating: 5,
    review:
      "SWC is an outstanding security company! I've had a positive experience working with them. The staff is highly professional and attentive to security needs. Their commitment to excellence is evident in every aspect of their service.",
    recommendation: "I highly recommend SWC for anyone seeking top-notch security solutions",
  },
  {
    id: 2,
    name: "Katie Barry",
    initials: "KB",
    rating: 5,
    review:
      "My event was a great success. All thanks to the qualified and skilled team of N-Force Security Service. They were very supportive & tactful enough to detect and solve any issues if raised. Commendable service.",
  },
  {
    id: 3,
    name: "Elizabeth",
    initials: "EL",
    rating: 5,
    review:
      "They where very professional and great with the teenagers in keeping everyone on track and having a wonderful party. Even the guest commented regarding how well the security where there.",
    recommendation: "I am happy to recommend this company for there services and will be using them again real soon.",
  },
]

const GoogleReviews=()=> {
  return (
    <section className="bg-[#02278a] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Google Reviews</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-[#fff] hover:bg-blue-50 common-shadow rounded-2xl p-6 flex flex-col h-full hover:scale-105 transition delay-150 cursor-pointer">
              <div className="flex flex-col justify-center items-center gap-4 mb-4">
                {review.initials ? (
                  <div className="w-24 h-24 rounded-full bg-[#02278a] text-white flex items-center justify-center text-2xl font-bold">
                    {review.initials}
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
                    <img
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex flex-col">
                  <div className="flex gap-2 mb-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <h3 className="font-bold text-blue-900 text-center text-lg">{review.name}</h3>
                </div>
              </div>

              <p className="text-blue-900 mb-4 p-4">{review.review}</p>
              {review.recommendation && <p className="p-4 mt-auto font-medium text-blue-900">{review.recommendation}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GoogleReviews