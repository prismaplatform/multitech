// components/FontExample.tsx
import { univiaPro } from '../../fonts'

export default function FontExample() {
  return (
    <div className={univiaPro.className}>
      {/* Különböző font súlyok */}
      <h1 className="font-ultra text-4xl mb-4">
        Ultra Bold Cím (950)
      </h1>
      
      <h2 className="font-black text-3xl mb-4">
        Black Alcím (900)
      </h2>
      
      <h3 className="font-bold text-2xl mb-4">
        Bold Fejléc (700)
      </h3>
      
      <h4 className="font-medium text-xl mb-4">
        Medium Fejléc (500)
      </h4>
      
      <p className="font-regular text-base mb-4">
        Regular szöveg (400) - Ez a normál bekezdés szöveg.
      </p>
      
      <p className="font-book text-base mb-4">
        Book szöveg (350) - Könyv stílusú szöveg.
      </p>
      
      <p className="font-light text-base mb-4">
        Light szöveg (300) - Vékony szöveg.
      </p>
      
      <p className="font-thin text-base mb-4 italic">
        Thin Italic szöveg (100) - A legvékonyabb dőlt szöveg.
      </p>

      {/* Inline style példa */}
      <p style={{ 
        fontFamily: 'var(--font-univia-pro)', 
        fontWeight: 500, 
        fontStyle: 'italic' 
      }}>
        Medium Italic inline stílussal
      </p>
    </div>
  )
}