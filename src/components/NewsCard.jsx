import { FaShareAlt, FaRegEye, FaRegBookmark } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router";

const NewsCard = ({news}) => {
  const {
    title,
    author,
    rating,
    total_view,
    image_url,
    details,
  } = news;

  return (
    <div className=" p-4 bg-white rounded-lg shadow-md">
      {/* Author Information */}
      <div className="flex items-center mb-4">
        <img
          src={author.img}
          alt={author.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="font-semibold">{author.name}</p>
          <p className="text-xs text-gray-500">
            {new Date(author.published_date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>
        <div className="ml-auto text-gray-600 flex gap-3">
            <FaRegBookmark />
          <FaShareAlt />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold mb-2">{title}</h2>

      {/* Thumbnail Image */}
      <img
        src={image_url}
        alt="Thumbnail"
        className="w-full  object-cover rounded-lg mb-4"
      />

      {/* Details */}
      <div className="px-4 text-accent">
            {
                details.length > 200 ? (
                    <>
                    {details.slice(0,200)}...
                    <Link to={`/news-details/${news.id}`} className="text-primary font-semibold cursor-pointer hover:underline">
                        Read More
                    </Link>
                    </>
                ) : (
                    news.details
                )
            }
      </div>

      {/* Ratings and Views */}
      <div className="flex items-center justify-between text-gray-600 text-sm">
        {/* Rating */}
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <AiFillStar
              key={i}
              className={`text-yellow-500 ${
                i < Math.round(rating.number) ? "" : "opacity-50"
              }`}
            />
          ))}
          <span className="ml-2 font-semibold">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center">
          <FaRegEye className="mr-1" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;

// Sample news

//