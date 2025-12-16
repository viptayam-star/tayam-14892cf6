import React from 'react';

interface ImageWithWatermarkProps {
  src: string;
  alt: string;
  watermarkText?: string;
  className?: string;
}

const ImageWithWatermark: React.FC<ImageWithWatermarkProps> = ({
  src,
  alt,
  watermarkText = 'Design Pulse',
  className = '',
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
      />
      
      {/* Watermark Pattern */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Diagonal watermarks */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: 'rotate(-30deg) scale(1.5)',
          }}
        >
          <div className="grid grid-cols-3 gap-16 opacity-20">
            {Array.from({ length: 9 }).map((_, i) => (
              <span
                key={i}
                className="text-white text-2xl font-bold whitespace-nowrap drop-shadow-lg"
                style={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                }}
              >
                {watermarkText}
              </span>
            ))}
          </div>
        </div>
        
        {/* Center watermark */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-white/30 text-4xl font-bold tracking-wider"
            style={{
              textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
            }}
          >
            © {watermarkText}
          </span>
        </div>
      </div>
      
      {/* Invisible overlay to prevent easy inspection */}
      <div 
        className="absolute inset-0 bg-transparent"
        style={{ 
          backgroundImage: 'url("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")',
          backgroundRepeat: 'repeat',
        }}
      />
    </div>
  );
};

export default ImageWithWatermark;
