import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="bg-black-100 rounded-lg border border-neutral-800 hover:border-neutral-600 transition-all duration-300 h-full overflow-hidden"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div className="flex flex-col h-full">
          {/* Project Image */}
          <div className="relative h-48 overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
          </div>
          
          {/* Project Content */}
          <div className="flex-1 p-6">
            <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
            <p className="text-gray-400 text-sm mb-4 line-clamp-3">{description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <span 
                  key={tag.id} 
                  className="px-2 py-1 bg-neutral-800 text-xs rounded-full text-neutral-300"
                >
                  {tag.name}
                </span>
              ))}
            </div>
            
            <button
              onClick={() => setIsHidden(true)}
              className="flex items-center gap-2 cursor-pointer text-blue-400 hover:text-blue-300 transition-colors"
            >
              Read More
              <img src="/images/arrow-right-white.svg" className="w-4" />
            </button>
          </div>
        </div>
      </div>
      
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;